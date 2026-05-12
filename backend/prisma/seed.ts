import { 
  PrismaClient, UserRole, ExperienceLevel, ContentType, 
  Difficulty, PublishStatus, Category, JobStatus, NotificationType 
} from '../generated/prisma';

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting Database Seeding...');

  // Clean up existing data to prevent unique constraint errors on re-seed
  await prisma.quizAttempt.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.progress.deleteMany();
  await prisma.module.deleteMany();
  await prisma.learningPath.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.bookmarkedJob.deleteMany();
  await prisma.jobPosting.deleteMany();
  await prisma.interviewQuestion.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.domain.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.user.deleteMany();

  // ---------------------------------------------------------
  // SECTION E: ADMIN USER
  // ---------------------------------------------------------
  const admin = await prisma.user.create({
    data: {
      id: "ADMIN_PLACEHOLDER_REPLACE_WITH_FIREBASE_UID",
      name: "Admin",
      email: "admin@nexroleai.com",
      role: UserRole.ADMIN,
      xp: 9999,
      streak: 100,
      onboardingComplete: true
    }
  });
  console.log('✅ Created Admin User');

  // ---------------------------------------------------------
  // SECTION A & B: DOMAINS, MODULES, QUIZZES
  // ---------------------------------------------------------
  
  const domainsData = [
    {
      slug: "generative-ai-engineering", name: "Generative AI Engineering", icon: "⚡", color: "#7c3aed", demandScore: 98, tags: ["LLMs", "RAG", "Fine-tuning", "LangChain"], status: PublishStatus.PUBLISHED,
      modules: [
        { title: "Introduction to Large Language Models", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.EASY, content: "Large Language Models (LLMs) are deep learning algorithms that can recognize, summarize, translate, predict and generate text and other content based on knowledge gained from massive datasets. They rely on transformer architecture..." },
        { title: "Prompt Engineering Fundamentals", type: ContentType.READING, durationMinutes: 12, xpReward: 50, difficulty: Difficulty.EASY, content: "Prompt engineering is the practice of designing inputs for AI models to produce optimal outputs. We will cover zero-shot, few-shot, and chain of thought prompting techniques." },
        { title: "Building RAG Applications with LangChain", type: ContentType.READING, durationMinutes: 20, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Retrieval-Augmented Generation (RAG) improves LLM responses by retrieving facts from an external knowledge base. LangChain is a framework designed to simplify the creation of applications using LLMs." },
        { title: "Fine-tuning Open Source LLMs", type: ContentType.READING, durationMinutes: 18, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Fine-tuning allows you to adapt a pre-trained model to specific tasks. We cover Low-Rank Adaptation (LoRA), QLoRA, and utilizing the HuggingFace PEFT library for efficient training." },
        { title: "Build a Production RAG Chatbot", type: ContentType.PROJECT, durationMinutes: 60, xpReward: 200, difficulty: Difficulty.HARD, content: "Project Brief: Build a domain-specific customer service chatbot using FastAPI, LangChain, ChromaDB, and OpenAI. Must include citation tracking and fallback mechanisms." }
      ],
      quizzes: [
        { q: "What does RAG stand for?", opts: ["Retrieval Augmented Generation", "Random Access Graph", "Recursive AI Generation", "Rapid Action Gateway"], ans: 0, exp: "RAG combines retrieval with generation for accurate answers", diff: Difficulty.EASY },
        { q: "Which technique reduces LLM hallucinations in RAG?", opts: ["Using larger models", "Grounding responses in retrieved context", "Increasing temperature", "Using fewer tokens"], ans: 1, exp: "Providing context directly reduces hallucinations.", diff: Difficulty.EASY },
        { q: "What is LoRA used for?", opts: ["Data augmentation", "Efficient model fine-tuning", "Prompt caching", "Vector search"], ans: 1, exp: "Low-Rank Adaptation is used for efficient fine-tuning.", diff: Difficulty.MEDIUM },
        { q: "Which library is commonly used for RAG pipelines?", opts: ["TensorFlow", "PyTorch", "LangChain", "Scikit-learn"], ans: 2, exp: "LangChain specializes in LLM composition.", diff: Difficulty.EASY },
        { q: "What is the attention mechanism in transformers?", opts: ["A memory management system", "A mechanism to weigh token relationships", "A data preprocessing step", "A regularization technique"], ans: 1, exp: "Attention weighs the contextual relevance of words.", diff: Difficulty.HARD }
      ]
    },
    {
      slug: "ai-agentic-systems", name: "AI Agentic Systems", icon: "🤖", color: "#0369a1", demandScore: 95, tags: ["LangGraph", "AutoGen", "Multi-agent", "Tools"], status: PublishStatus.PUBLISHED,
      modules: [
        { title: "What are AI Agents?", type: ContentType.READING, durationMinutes: 10, xpReward: 50, difficulty: Difficulty.EASY, content: "AI agents are autonomous systems powered by LLMs that can use tools, make decisions, and interact with environments." },
        { title: "LangGraph Fundamentals", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.EASY, content: "LangGraph allows you to create stateful, multi-actor applications with LLMs using cyclical graphs." },
        { title: "Building Multi-Agent Systems", type: ContentType.READING, durationMinutes: 20, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Multi-agent systems split complex tasks into highly specialized roles. We cover AutoGen and CrewAI frameworks." },
        { title: "Agent Memory and Tool Use", type: ContentType.READING, durationMinutes: 18, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Agents need memory to maintain context and tools (like APIs or calculators) to interact with the world." },
        { title: "Build an Autonomous Research Agent", type: ContentType.PROJECT, durationMinutes: 60, xpReward: 200, difficulty: Difficulty.HARD, content: "Project Brief: Build a LangGraph agent that can autonomously browse the web, aggregate research papers, and write a summary report." }
      ],
      quizzes: [
        { q: "What is the primary function of an AI agent?", opts: ["To store data", "To autonomously reason and use tools", "To render UIs", "To train other models"], ans: 1, exp: "Agents combine reasoning with tool execution.", diff: Difficulty.EASY },
        { q: "Which framework specializes in cyclical agent state?", opts: ["Pandas", "LangGraph", "React", "Express"], ans: 1, exp: "LangGraph builds stateful, cyclic graphs.", diff: Difficulty.MEDIUM },
        { q: "What enables an agent to browse the web?", opts: ["More parameters", "Tool Use/Function Calling", "Vector DBs", "Fine-tuning"], ans: 1, exp: "Function calling allows models to trigger external scripts.", diff: Difficulty.MEDIUM },
        { q: "In multi-agent systems, what is a 'Manager' agent?", opts: ["An agent that orchestrates other agents", "An agent that manages memory", "An agent that stores API keys", "An agent that trains models"], ans: 0, exp: "A manager orchestrates worker agents.", diff: Difficulty.EASY },
        { q: "Why is persistent memory important for agents?", opts: ["It saves battery", "It allows long-term task continuity", "It makes the model smaller", "It bypasses rate limits"], ans: 1, exp: "Memory provides context over long interactions.", diff: Difficulty.EASY }
      ]
    },
    {
      slug: "mlops-llmops", name: "MLOps / LLMOps", icon: "⚙️", color: "#0f766e", demandScore: 90, tags: ["MLflow", "Kubeflow", "CI/CD", "Monitoring"], status: PublishStatus.PUBLISHED,
      modules: [
        { title: "ML System Design Fundamentals", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.EASY, content: "Designing ML systems involves understanding data pipelines, model serving, and latency constraints." },
        { title: "MLflow Experiment Tracking", type: ContentType.READING, durationMinutes: 12, xpReward: 50, difficulty: Difficulty.EASY, content: "MLflow helps log parameters, code versions, metrics, and output files from ML runs." },
        { title: "Docker and Kubernetes for ML", type: ContentType.READING, durationMinutes: 20, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Containerizing models ensures consistency. Kubernetes orchestrates these containers at scale." },
        { title: "LLM Monitoring and Observability", type: ContentType.READING, durationMinutes: 18, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Monitoring LLMs requires tracking drift, bias, toxicity, and token costs in real-time." },
        { title: "Build an ML CI/CD Pipeline", type: ContentType.PROJECT, durationMinutes: 60, xpReward: 200, difficulty: Difficulty.HARD, content: "Project Brief: Use GitHub Actions and MLflow to automate model training, evaluation, and deployment upon PR merge." }
      ],
      quizzes: [
        { q: "What is the primary goal of MLOps?", opts: ["Writing better Python code", "Automating and scaling ML lifecycles", "Designing deep neural networks", "Cleaning datasets manually"], ans: 1, exp: "MLOps operationalizes ML workflows.", diff: Difficulty.EASY },
        { q: "Which tool is commonly used for experiment tracking?", opts: ["Docker", "Kubernetes", "MLflow", "PostgreSQL"], ans: 2, exp: "MLflow logs metrics and parameters.", diff: Difficulty.EASY },
        { q: "What is model drift?", opts: ["When a model physically moves servers", "When model performance degrades as real-world data changes", "When a model learns too fast", "When training time increases"], ans: 1, exp: "Drift occurs when data distributions change over time.", diff: Difficulty.MEDIUM },
        { q: "Why use Kubernetes in MLOps?", opts: ["For container orchestration and auto-scaling", "To write neural networks", "To track experiments", "To label data"], ans: 0, exp: "Kubernetes manages scalable microservices.", diff: Difficulty.MEDIUM },
        { q: "LLMOps differs from MLOps primarily due to:", opts: ["The need to manage prompts and token costs", "The programming language used", "The lack of need for CI/CD", "The inability to monitor them"], ans: 0, exp: "LLMOps includes prompt management and cost tracking.", diff: Difficulty.HARD }
      ]
    },
    {
      slug: "ai-cybersecurity", name: "AI-Powered Cybersecurity", icon: "🛡️", color: "#dc2626", demandScore: 92, tags: ["Threat Detection", "Anomaly ML", "AI Red-Team"], status: PublishStatus.PUBLISHED,
      modules: [
        { title: "Cybersecurity Fundamentals for AI", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.EASY, content: "Understanding the CIA triad, encryption, and basic network security protocols." },
        { title: "Anomaly Detection with ML", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.MEDIUM, content: "Using unsupervised learning (Isolation Forests, Autoencoders) to detect unusual network traffic." },
        { title: "AI-Powered Threat Intelligence", type: ContentType.READING, durationMinutes: 20, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Leveraging LLMs to parse security logs and generate threat reports." },
        { title: "AI Red Teaming and Adversarial ML", type: ContentType.READING, durationMinutes: 18, xpReward: 75, difficulty: Difficulty.HARD, content: "Attacking AI models via prompt injection, data poisoning, and evasion attacks." },
        { title: "Build a Network Intrusion Detector", type: ContentType.PROJECT, durationMinutes: 60, xpReward: 200, difficulty: Difficulty.HARD, content: "Project Brief: Train an XGBoost model on the NSL-KDD dataset to classify network anomalies in real-time." }
      ],
      quizzes: [
        { q: "What is the CIA triad?", opts: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Compute, Inference, AI", "Code, Infrastructure, Application"], ans: 1, exp: "CIA is the foundational security model.", diff: Difficulty.EASY },
        { q: "Which ML algorithm is best suited for zero-day anomaly detection?", opts: ["Linear Regression", "Isolation Forest", "Decision Trees", "K-Nearest Neighbors"], ans: 1, exp: "Isolation Forests efficiently isolate anomalies.", diff: Difficulty.MEDIUM },
        { q: "What is adversarial data poisoning?", opts: ["Deleting the database", "Injecting malicious data into training sets to corrupt the model", "Using bad variable names", "Overfitting the model"], ans: 1, exp: "Poisoning manipulates the training phase.", diff: Difficulty.HARD },
        { q: "Prompt injection is a vulnerability specifically for:", opts: ["Relational Databases", "LLMs", "Firewalls", "Routers"], ans: 1, exp: "Prompt injection manipulates LLM behavior.", diff: Difficulty.EASY },
        { q: "AI Red Teaming involves:", opts: ["Writing documentation", "Actively attempting to hack or bypass AI safeguards", "Monitoring server CPU", "Designing UI components"], ans: 1, exp: "Red teaming simulates adversarial attacks.", diff: Difficulty.MEDIUM }
      ]
    },
    {
      slug: "ai-cloud-architecture", name: "AI Cloud Architecture", icon: "☁️", color: "#0284c7", demandScore: 88, tags: ["AWS Bedrock", "Azure AI", "GCP Vertex", "Serverless"], status: PublishStatus.PUBLISHED,
      modules: [
        { title: "Cloud AI Infrastructure Basics", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.EASY, content: "Overview of GPUs, TPUs, and AI accelerators in the cloud." },
        { title: "AWS Bedrock & SageMaker", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.MEDIUM, content: "Deploying foundational models using managed AWS services." },
        { title: "Azure OpenAI & Cognitive Services", type: ContentType.READING, durationMinutes: 20, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Integrating enterprise-grade GPT models securely on Azure." },
        { title: "GCP Vertex AI", type: ContentType.READING, durationMinutes: 18, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "End-to-end ML platform on Google Cloud for training and deploying models." },
        { title: "Deploy a Multi-Cloud LLM Gateway", type: ContentType.PROJECT, durationMinutes: 60, xpReward: 200, difficulty: Difficulty.HARD, content: "Project Brief: Build a serverless API gateway that dynamically routes requests to AWS, Azure, or GCP based on model availability." }
      ],
      quizzes: [
        { q: "What is AWS Bedrock?", opts: ["A database service", "A managed service for Foundation Models", "A storage solution", "A frontend framework"], ans: 1, exp: "Bedrock provides API access to top FMs.", diff: Difficulty.EASY },
        { q: "Which cloud provider offers TPUs natively?", opts: ["AWS", "Azure", "GCP", "DigitalOcean"], ans: 2, exp: "Google Cloud Platform invented and hosts TPUs.", diff: Difficulty.MEDIUM },
        { q: "What is the benefit of a serverless AI inference architecture?", opts: ["It is always slower", "You pay only for compute used per request", "It requires manual server patching", "It cannot scale"], ans: 1, exp: "Serverless offers cost-efficiency and auto-scaling.", diff: Difficulty.EASY },
        { q: "Azure OpenAI guarantees:", opts: ["Free access", "That customer data is not used to train OpenAI base models", "Unlimited rate limits", "Open-source weights"], ans: 1, exp: "Azure provides enterprise data privacy.", diff: Difficulty.MEDIUM },
        { q: "GCP Vertex AI is primarily used for:", opts: ["Web hosting", "End-to-end ML lifecycle management", "Sending emails", "Domain registration"], ans: 1, exp: "Vertex AI is a comprehensive MLOps platform.", diff: Difficulty.EASY }
      ]
    },
    {
      slug: "data-engineering-ai", name: "Data Engineering for AI", icon: "📊", color: "#16a34a", demandScore: 85, tags: ["Feature Stores", "Vector DBs", "Pipelines", "dbt"], status: PublishStatus.PUBLISHED,
      modules: [
        { title: "Modern Data Stack Overview", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.EASY, content: "Introduction to ETL/ELT, data warehouses (Snowflake), and data lakes." },
        { title: "Vector Databases Deep Dive", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.MEDIUM, content: "How Pinecone, Milvus, and pgvector store and retrieve high-dimensional embeddings." },
        { title: "Building Data Pipelines with Airflow", type: ContentType.READING, durationMinutes: 20, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Orchestrating complex data ingestion workflows using Apache Airflow." },
        { title: "Feature Stores for ML", type: ContentType.READING, durationMinutes: 18, xpReward: 75, difficulty: Difficulty.HARD, content: "Using Feast or Hopsworks to manage and serve ML features consistently." },
        { title: "Build an Unstructured Data Pipeline", type: ContentType.PROJECT, durationMinutes: 60, xpReward: 200, difficulty: Difficulty.HARD, content: "Project Brief: Extract text from 1000 PDFs, generate embeddings, and load them into a Vector DB." }
      ],
      quizzes: [
        { q: "What does a Vector Database store?", opts: ["Relational tables", "High-dimensional embeddings", "HTML files", "Session tokens"], ans: 1, exp: "Vector DBs store and search AI embeddings.", diff: Difficulty.EASY },
        { q: "What is the purpose of a Feature Store?", opts: ["Selling ML models", "Consistent feature serving for training and production", "Storing user passwords", "Hosting frontend assets"], ans: 1, exp: "Feature stores prevent train-serve skew.", diff: Difficulty.MEDIUM },
        { q: "Apache Airflow is primarily used for:", opts: ["Training deep learning models", "Data pipeline orchestration", "Creating UI dashboards", "Vector search"], ans: 1, exp: "Airflow orchestrates DAG workflows.", diff: Difficulty.EASY },
        { q: "In the ELT paradigm, what does 'T' stand for?", opts: ["Transfer", "Translate", "Transform", "Transmit"], ans: 2, exp: "Extract, Load, Transform.", diff: Difficulty.EASY },
        { q: "Which metric is commonly used to find similar vectors?", opts: ["Cosine Similarity", "Mean Squared Error", "Cross Entropy", "Accuracy"], ans: 0, exp: "Cosine similarity measures vector angles.", diff: Difficulty.MEDIUM }
      ]
    },
    {
      slug: "ai-product-management", name: "AI Product Management", icon: "📋", color: "#d97706", demandScore: 80, tags: ["AI Strategy", "Ethics", "Evaluation", "Roadmapping"], status: PublishStatus.PUBLISHED,
      modules: [
        { title: "Introduction to AI Product Management", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.EASY, content: "How managing AI products differs from traditional SaaS." },
        { title: "Evaluating AI Models for Production", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.MEDIUM, content: "Understanding precision, recall, F1 score, and human-in-the-loop evaluations." },
        { title: "AI Ethics and Compliance", type: ContentType.READING, durationMinutes: 20, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Navigating AI bias, fairness, GDPR, and the EU AI Act." },
        { title: "User Experience (UX) for AI", type: ContentType.READING, durationMinutes: 18, xpReward: 75, difficulty: Difficulty.MEDIUM, content: "Designing interfaces that handle non-deterministic outputs gracefully." },
        { title: "Draft an AI Product Requirements Doc", type: ContentType.PROJECT, durationMinutes: 60, xpReward: 200, difficulty: Difficulty.HARD, content: "Project Brief: Write a comprehensive PRD for an AI-powered resume screening tool, including ethical safeguards." }
      ],
      quizzes: [
        { q: "What makes AI product management unique?", opts: ["It requires no coding", "Dealing with probabilistic, non-deterministic outputs", "It is cheaper to build", "It doesn't require user feedback"], ans: 1, exp: "AI outputs are probabilistic, unlike standard code.", diff: Difficulty.MEDIUM },
        { q: "What is Human-in-the-Loop (HITL)?", opts: ["A looping code structure", "Having human reviewers validate AI outputs", "A metric for AI speed", "A type of neural network"], ans: 1, exp: "HITL ensures quality control for AI.", diff: Difficulty.EASY },
        { q: "Which regulation heavily impacts AI data privacy in Europe?", opts: ["HIPAA", "GDPR", "CCPA", "DMCA"], ans: 1, exp: "GDPR enforces strict data privacy rules.", diff: Difficulty.EASY },
        { q: "What is the F1 Score?", opts: ["A racing metric", "The harmonic mean of precision and recall", "Model training speed", "Database query time"], ans: 1, exp: "F1 balances precision and recall.", diff: Difficulty.HARD },
        { q: "How should a UI handle AI hallucinations?", opts: ["Hide them completely", "Provide clear confidence scores and feedback mechanisms", "Crash the app", "Make the text red"], ans: 1, exp: "Transparency builds trust in AI products.", diff: Difficulty.MEDIUM }
      ]
    },
    {
      slug: "robotics-ai-automation", name: "Robotics & AI Automation", icon: "🦾", color: "#9333ea", demandScore: 75, tags: ["ROS2", "Computer Vision", "Edge AI", "Automation"], status: PublishStatus.PUBLISHED,
      modules: [
        { title: "Introduction to Edge AI", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.EASY, content: "Running ML models directly on IoT devices and robots for low latency." },
        { title: "Computer Vision Fundamentals", type: ContentType.READING, durationMinutes: 15, xpReward: 50, difficulty: Difficulty.MEDIUM, content: "Object detection, segmentation, and tracking using YOLO and OpenCV." },
        { title: "Robot Operating System (ROS2)", type: ContentType.READING, durationMinutes: 20, xpReward: 75, difficulty: Difficulty.HARD, content: "Understanding nodes, topics, and publishers in the ROS2 ecosystem." },
        { title: "Reinforcement Learning for Control", type: ContentType.READING, durationMinutes: 18, xpReward: 75, difficulty: Difficulty.HARD, content: "Training robots using simulated environments (Isaac Sim, Mujoco) with RL." },
        { title: "Build an Object Tracking Pipeline", type: ContentType.PROJECT, durationMinutes: 60, xpReward: 200, difficulty: Difficulty.HARD, content: "Project Brief: Deploy a YOLO model on a simulated edge device to track objects in a video stream." }
      ],
      quizzes: [
        { q: "What is Edge AI?", opts: ["Running AI in massive data centers", "Running AI locally on devices to reduce latency", "AI for graphic design", "A new programming language"], ans: 1, exp: "Edge AI processes data on the device.", diff: Difficulty.EASY },
        { q: "What is YOLO in computer vision?", opts: ["You Only Look Once (Object Detection)", "A data labeling tool", "A cloud provider", "A type of sensor"], ans: 0, exp: "YOLO is a fast object detection model.", diff: Difficulty.MEDIUM },
        { q: "In ROS2, what facilitates communication between nodes?", opts: ["Email", "Topics and Messages", "REST APIs", "GraphQL"], ans: 1, exp: "ROS2 uses a pub/sub model with Topics.", diff: Difficulty.HARD },
        { q: "What is Reinforcement Learning (RL) commonly used for in robotics?", opts: ["Parsing JSON", "Learning complex control policies via trial and error", "Rendering HTML", "Database management"], ans: 1, exp: "RL is excellent for teaching physical control.", diff: Difficulty.MEDIUM },
        { q: "Why use simulation for training robots?", opts: ["It is more dangerous", "It is cheaper, faster, and safer than real-world training", "It requires no compute power", "Robots cannot learn in reality"], ans: 1, exp: "Simulations allow safe, accelerated learning.", diff: Difficulty.EASY }
      ]
    }
  ];

  let totalModules = 0;
  let totalQuizzes = 0;

  for (const domainData of domainsData) {
    const domain = await prisma.domain.create({
      data: {
        slug: domainData.slug,
        name: domainData.name,
        icon: domainData.icon,
        color: domainData.color,
        description: `Master ${domainData.name} and become industry-ready.`,
        demandScore: domainData.demandScore,
        tags: domainData.tags,
        status: domainData.status,
      }
    });

    // Create Learning Path
    await prisma.learningPath.create({
      data: {
        domainId: domain.id,
        companyTarget: "Top Tech Tier",
        roleTarget: domainData.name.replace(" Engineering", " Engineer").replace(" Architecture", " Architect").replace(" Management", " Manager"),
        durationDays: 90,
        moduleOrder: [1, 2, 3, 4, 5] // Representing sequence
      }
    });

    let order = 1;
    for (const modData of domainData.modules) {
      const module = await prisma.module.create({
        data: {
          domainId: domain.id,
          title: modData.title,
          description: `Learn the core concepts of ${modData.title}`,
          content: modData.content,
          order: order++,
          durationMinutes: modData.durationMinutes,
          type: modData.type,
          difficulty: modData.difficulty,
          xpReward: modData.xpReward,
          status: PublishStatus.PUBLISHED,
        }
      });
      totalModules++;

      // Attach all quizzes for the domain to the first module for simplicity, 
      // or distribute them if preferred. Let's attach 1 per module to distribute evenly.
      const quizIndex = order - 2; // order was incremented
      if (domainData.quizzes[quizIndex]) {
        const qData = domainData.quizzes[quizIndex];
        await prisma.quiz.create({
          data: {
            moduleId: module.id,
            question: qData.q,
            options: qData.opts,
            correctAnswer: qData.ans,
            explanation: qData.exp,
            difficulty: qData.diff,
          }
        });
        totalQuizzes++;
      }
    }
  }
  console.log(`✅ Created ${domainsData.length} Domains, ${totalModules} Modules, and ${totalQuizzes} Quizzes`);


  // ---------------------------------------------------------
  // SECTION C: 20 JOB POSTINGS
  // ---------------------------------------------------------
  const companies = ["Google India", "Microsoft India", "Flipkart", "Swiggy", "Zepto", "PhonePe", "Razorpay", "Meesho", "NVIDIA India", "IBM India", "TCS", "Infosys", "Wipro", "Accenture India", "HCL Tech", "Juspay", "Groww", "CRED", "Paytm", "Nykaa"];
  const roles = ["ML Engineer", "GenAI Engineer", "MLOps Engineer", "AI Product Manager", "Data Engineer", "LLM Engineer", "AI Security Analyst", "AI Cloud Architect"];
  const locations = ["Bengaluru", "Mumbai", "Hyderabad", "Chennai", "Remote"];
  
  const jobPostingsData = [];
  for (let i = 0; i < 20; i++) {
    const isFresher = i % 3 === 0;
    const isMid = i % 3 === 1;
    const salaryMin = isFresher ? 8 : (isMid ? 18 : 35);
    const salaryMax = isFresher ? 18 : (isMid ? 35 : 70);
    
    jobPostingsData.push({
      title: roles[i % roles.length],
      company: companies[i % companies.length],
      location: locations[i % locations.length],
      salaryMin,
      salaryMax,
      skills: ["Python", "TensorFlow", "PyTorch", "SQL", "AWS", "Docker", "Kubernetes", "LangChain"].sort(() => 0.5 - Math.random()).slice(0, 5),
      domain: domainsData[i % domainsData.length].name,
      url: "https://careers.example.com",
      status: JobStatus.ACTIVE
    });
  }

  await prisma.jobPosting.createMany({ data: jobPostingsData });
  console.log(`✅ Created 20 Job Postings`);


  // ---------------------------------------------------------
  // SECTION D: 30 INTERVIEW QUESTIONS (6 Roles x 5 Qs)
  // ---------------------------------------------------------
  const interviewQuestionsData = [
    // GenAI Engineer
    { role: "genai-engineer", category: Category.TECHNICAL, difficulty: Difficulty.MEDIUM, question: "Explain the difference between RAG and fine-tuning. When would you use each?", modelAnswer: "RAG retrieves external data to inject into context, great for dynamic/private data. Fine-tuning alters model weights, best for teaching new formats or behaviors." },
    { role: "genai-engineer", category: Category.TECHNICAL, difficulty: Difficulty.HARD, question: "How would you reduce hallucinations in a production LLM app?", modelAnswer: "By lowering temperature, using strict prompt grounding, implementing self-reflection chains, and fact-checking via external APIs." },
    { role: "genai-engineer", category: Category.SYSTEM_DESIGN, difficulty: Difficulty.HARD, question: "Design a RAG system for a 10M document enterprise knowledge base", modelAnswer: "Use a hybrid search approach (BM25 + vector search like Milvus). Implement chunking strategies, embedding caching, and semantic routing." },
    { role: "genai-engineer", category: Category.BEHAVIORAL, difficulty: Difficulty.MEDIUM, question: "Tell me about a time you built an AI product from scratch", modelAnswer: "Discussed identifying a user problem, selecting the right LLM API, handling rate limits, and shipping MVP." },
    { role: "genai-engineer", category: Category.DOMAIN_SPECIFIC, difficulty: Difficulty.MEDIUM, question: "What metrics would you use to evaluate an LLM application?", modelAnswer: "I would use RAGAS metrics (Faithfulness, Answer Relevance) and human-in-the-loop feedback loops." },

    // MLOps Engineer
    { role: "mlops-engineer", category: Category.TECHNICAL, difficulty: Difficulty.MEDIUM, question: "How do you detect model drift in production?", modelAnswer: "By monitoring feature distributions (Kolmogorov-Smirnov test) and tracking degradation in business metrics." },
    { role: "mlops-engineer", category: Category.SYSTEM_DESIGN, difficulty: Difficulty.HARD, question: "Design a CI/CD pipeline for a deep learning model.", modelAnswer: "Code push triggers unit tests. Merge triggers model retraining via Airflow. Model is registered in MLflow. CD pipeline deploys to Kubernetes via shadow deployment." },
    { role: "mlops-engineer", category: Category.TECHNICAL, difficulty: Difficulty.HARD, question: "Explain Kubernetes node affinity and tolerations for GPU workloads.", modelAnswer: "Tolerations allow pods to schedule on tainted GPU nodes. Node affinity ensures ML workloads only land on specific GPU architectures." },
    { role: "mlops-engineer", category: Category.BEHAVIORAL, difficulty: Difficulty.MEDIUM, question: "Describe a time a model failed in production and how you fixed it.", modelAnswer: "Identified a data pipeline schema change that caused null features. Implemented data contracts to prevent future occurrences." },
    { role: "mlops-engineer", category: Category.DOMAIN_SPECIFIC, difficulty: Difficulty.MEDIUM, question: "What is the difference between model registry and feature store?", modelAnswer: "Model registry versions trained artifacts. Feature store manages consistent data features for training and serving." },

    // Data Engineer
    { role: "data-engineer", category: Category.TECHNICAL, difficulty: Difficulty.MEDIUM, question: "Explain the difference between Snowflake and a traditional data warehouse.", modelAnswer: "Snowflake separates compute and storage, allowing independent scaling and concurrent workloads without resource contention." },
    { role: "data-engineer", category: Category.SYSTEM_DESIGN, difficulty: Difficulty.HARD, question: "Design a real-time streaming pipeline processing 100k events/second.", modelAnswer: "Use Apache Kafka for ingestion, Apache Flink for real-time stream processing, and sink to a data lakehouse like Delta Lake." },
    { role: "data-engineer", category: Category.TECHNICAL, difficulty: Difficulty.MEDIUM, question: "What are the common strategies to handle late-arriving data?", modelAnswer: "Using watermarks in stream processing to allow a grace period, or utilizing UPSERT operations in delta tables." },
    { role: "data-engineer", category: Category.BEHAVIORAL, difficulty: Difficulty.MEDIUM, question: "How do you handle disputes over data ownership between teams?", modelAnswer: "Implement data mesh principles, assigning clear domain-driven ownership and establishing data contracts." },
    { role: "data-engineer", category: Category.DOMAIN_SPECIFIC, difficulty: Difficulty.MEDIUM, question: "Why is dbt popular in modern data engineering?", modelAnswer: "dbt enables software engineering practices (version control, testing, modularity) for SQL-based data transformations." },

    // AI Product Manager
    { role: "ai-product-manager", category: Category.DOMAIN_SPECIFIC, difficulty: Difficulty.MEDIUM, question: "How do you price an LLM-based SaaS product?", modelAnswer: "Consider token costs, API overhead, and value-based pricing. Options include tiered subscription or usage-based (credits)." },
    { role: "ai-product-manager", category: Category.TECHNICAL, difficulty: Difficulty.MEDIUM, question: "Explain precision vs recall to a non-technical stakeholder.", modelAnswer: "Precision is how often our AI is right when it flags something. Recall is how many of the actual targets it successfully found." },
    { role: "ai-product-manager", category: Category.SYSTEM_DESIGN, difficulty: Difficulty.HARD, question: "How would you prioritize features for a new AI coding assistant?", modelAnswer: "Prioritize table-stakes (code completion), then high-value differentiators (repo-level context), balancing engineering cost and token latency." },
    { role: "ai-product-manager", category: Category.BEHAVIORAL, difficulty: Difficulty.MEDIUM, question: "How do you manage expectations when AI outputs are unpredictable?", modelAnswer: "Set clear UX boundaries, use confidence scores, allow user overrides, and educate stakeholders on probabilistic systems." },
    { role: "ai-product-manager", category: Category.DOMAIN_SPECIFIC, difficulty: Difficulty.HARD, question: "How do you address bias in your AI product's training data?", modelAnswer: "Implement continuous red-teaming, diverse evaluation datasets, and fairness metrics monitoring in production." },

    // AI Cloud Architect
    { role: "ai-cloud-architect", category: Category.TECHNICAL, difficulty: Difficulty.MEDIUM, question: "When would you use AWS SageMaker vs Bedrock?", modelAnswer: "Bedrock for consuming managed foundation models via API. SageMaker for custom training, fine-tuning, and deploying bespoke models." },
    { role: "ai-cloud-architect", category: Category.SYSTEM_DESIGN, difficulty: Difficulty.HARD, question: "Design a high-availability multi-region AI inference architecture.", modelAnswer: "Use global load balancing (Route53), replicate model containers via EKS across regions, and use ElastiCache for global session memory." },
    { role: "ai-cloud-architect", category: Category.TECHNICAL, difficulty: Difficulty.HARD, question: "How do you optimize cloud costs for GPU workloads?", modelAnswer: "Use spot instances for fault-tolerant training, provisioned throughput for predictable inference, and scale-to-zero serverless GPUs for bursty traffic." },
    { role: "ai-cloud-architect", category: Category.BEHAVIORAL, difficulty: Difficulty.MEDIUM, question: "Describe a time you migrated a legacy ML pipeline to the cloud.", modelAnswer: "Containerized monolithic scripts, orchestrated via Step Functions, and shifted storage to S3 for scalable data lakes." },
    { role: "ai-cloud-architect", category: Category.DOMAIN_SPECIFIC, difficulty: Difficulty.MEDIUM, question: "What are the security implications of exposing an LLM API publicly?", modelAnswer: "Risk of prompt injection, denial of wallet (cost exhaustion), and data exfiltration. Mitigate via WAF and rate limiting." },

    // AI Security Analyst
    { role: "ai-security-analyst", category: Category.TECHNICAL, difficulty: Difficulty.MEDIUM, question: "What is an adversarial attack on a neural network?", modelAnswer: "Applying imperceptible perturbations to input data causing the model to misclassify with high confidence." },
    { role: "ai-security-analyst", category: Category.SYSTEM_DESIGN, difficulty: Difficulty.HARD, question: "Design a security perimeter for an enterprise RAG system.", modelAnswer: "Implement RBAC at the vector DB level, PII redaction before embedding, and prompt filtering middleware to block injections." },
    { role: "ai-security-analyst", category: Category.TECHNICAL, difficulty: Difficulty.HARD, question: "How does differential privacy work in ML?", modelAnswer: "It adds mathematical noise to datasets or gradients during training to guarantee individual user data cannot be reverse-engineered." },
    { role: "ai-security-analyst", category: Category.BEHAVIORAL, difficulty: Difficulty.MEDIUM, question: "How would you handle a data leak caused by an LLM memorizing PII?", modelAnswer: "Immediately rotate keys, roll back to a clean model version, and investigate training data filtration processes." },
    { role: "ai-security-analyst", category: Category.DOMAIN_SPECIFIC, difficulty: Difficulty.MEDIUM, question: "What is 'Model Inversion'?", modelAnswer: "An attack where the adversary queries the model to reconstruct the sensitive data it was originally trained on." }
  ];

  await prisma.interviewQuestion.createMany({ data: interviewQuestionsData });
  console.log(`✅ Created 30 Interview Questions`);

  console.log('🎉 Database Seeding Completed Successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
