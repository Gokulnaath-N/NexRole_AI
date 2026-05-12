import json
import logging
from typing import Dict

import google.generativeai as genai

from ..config import config


genai.configure(api_key=config.GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")
logger = logging.getLogger(__name__)


def calculate_dropout_risk(user_data: Dict) -> Dict:
    """Calculate dropout risk score (0-100)."""
    score = 0
    reasons = []

    last_active = user_data.get("last_active_days_ago", 0)
    streak = user_data.get("streak", 0)
    completion_rate = user_data.get("completion_rate", 0)
    enrolled_domains = user_data.get("enrolled_domains", 0)
    modules_completed = user_data.get("modules_completed", 0)

    if last_active >= 7:
        score += 40
        reasons.append(f"No activity for {last_active} days")
    elif last_active >= 3:
        score += 20
        reasons.append(f"No activity for {last_active} days")

    if streak == 0:
        score += 20
        reasons.append("Streak has been broken")

    if completion_rate < 20 and modules_completed > 0:
        score += 20
        reasons.append("Low module completion rate")

    if enrolled_domains > 0 and modules_completed == 0:
        score += 20
        reasons.append("Enrolled but never started learning")

    level = "HIGH" if score >= 60 else "MEDIUM" if score >= 30 else "LOW"

    return {
        "risk_score": min(score, 100),
        "risk_level": level,
        "reasons": reasons,
        "should_engage": score >= 30,
    }


def generate_reengagement_message(user_name: str, user_data: Dict, risk_data: Dict) -> Dict:
    """Generate personalized re-engagement message."""
    prompt = f"""You are a supportive learning coach at NexRole AI.
Generate a warm, motivating re-engagement message for a learner.

Learner: {user_name}
Target Role: {user_data.get('target_role', 'AI Engineer')}
Last active: {user_data.get('last_active_days_ago', 3)} days ago
Current streak: {user_data.get('streak', 0)} days
Risk reasons: {', '.join(risk_data['reasons'])}
Modules completed: {user_data.get('modules_completed', 0)}
Domain enrolled: {user_data.get('current_domain', 'Generative AI Engineering')}

Create a message that:
1. Acknowledges their absence warmly (not accusatory)
2. Reminds them of their goal (becoming a {user_data.get('target_role', 'AI Engineer')})
3. Suggests ONE specific small action (10-15 min module)
4. Is encouraging, not guilt-tripping

Return JSON:
{{
  "subject": "Email subject line",
  "message": "150-word re-engagement message",
  "cta_text": "Button text (short, action-oriented)",
  "cta_url": "/dashboard",
  "suggested_module": "Specific module to suggest"
}}"""

    try:
        response = model.generate_content(prompt)
        return json.loads(response.text)
    except Exception as exc:
        logger.error("Message generation failed: %s", exc)
        return {
            "subject": f"{user_name}, your AI career path is waiting",
            "message": (
                f"Hey {user_name}! We noticed you haven't been on NexRole AI recently. "
                "Your goal is still within reach. Come back for just 10 minutes today."
            ),
            "cta_text": "Resume Learning",
            "cta_url": "/dashboard",
            "suggested_module": "Continue from where you left off",
        }
