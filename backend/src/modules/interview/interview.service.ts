import axios from 'axios';
import prisma from '../../config/db';
import redis from '../../config/redis';
import { env } from '../../config/env';
import crypto from 'crypto';
import { AppError } from '../../middlewares/errorHandler';
import { Category, Difficulty } from '@prisma/client';

export const getInterviewQuestions = async (
  role: string,
  category?: Category,
  difficulty?: Difficulty
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = { role };
  if (category) where.category = category;
  if (difficulty) where.difficulty = difficulty;

  const questions = await prisma.interviewQuestion.findMany({
    where,
    take: 20,
  });

  // Hide the model answer initially
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return questions.map(({ modelAnswer, ...q }) => q);
};

export const evaluateInterviewAnswer = async (
  userId: string,
  question: string,
  userAnswer: string,
  role: string
) => {
  if (userAnswer.length < 30) {
    throw new AppError('Answer must be at least 30 characters long', 400);
  }

  // Cache check for identical answers
  const hashStr = `${role}:${question}:${userAnswer}`;
  const cacheKey = `interview_eval:${crypto.createHash('sha256').update(hashStr).digest('hex')}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    // Award XP even for cached results to encourage practice
    await prisma.user.update({
      where: { id: userId },
      data: { xp: { increment: 10 } }
    });
    return { ...JSON.parse(cached), xpEarned: 10 };
  }

  const prompt = `
You are a senior technical interviewer at a top tech company.
Evaluate this interview answer strictly but fairly.

Role being interviewed for: ${role}
Interview Question: ${question}
Candidate's Answer: ${userAnswer}

Score each dimension from 0-10:
- technicalAccuracy: Is the content factually correct and deep?
- clarity: Is the answer well-structured and easy to follow?
- completeness: Does it cover all aspects of the question?
- starFormat: (For behavioral only) Does it follow Situation-Task-Action-Result?

Return ONLY this JSON, no other text:
{
  "verdict": "STRONG|GOOD|NEEDS_WORK|POOR",
  "overallScore": 7.5,
  "scores": {
    "technicalAccuracy": 8,
    "clarity": 7,
    "completeness": 6,
    "starFormat": 5
  },
  "strengths": [
    "Clear explanation of the core difference",
    "Good use of a practical example",
    "Mentioned trade-offs correctly"
  ],
  "improvements": [
    "Could have mentioned when NOT to use RAG",
    "Missing discussion of cost implications",
    "Example could be more specific to production"
  ],
  "modelAnswer": "A 150-word model answer for this specific question."
}
`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 1024,
        responseMimeType: 'application/json',
      },
    }
  );

  const text = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new AppError('Gemini API returned an empty response', 500);

  let evaluation;
  try {
    evaluation = JSON.parse(text);
  } catch (error) {
    throw new AppError('Failed to parse AI evaluation from Gemini', 500);
  }

  // Award XP
  await prisma.user.update({
    where: { id: userId },
    data: { xp: { increment: 10 } }
  });

  await redis.set(cacheKey, JSON.stringify(evaluation), 'EX', 3600); // Cache for 1 hour
  return { ...evaluation, xpEarned: 10 };
};
