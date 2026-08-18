export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  takeaway: string;
  quiz: QuizQuestion[];
}

export interface Level {
  id: number;
  title: string;
  description: string;
  badge: string;
  lessons: Lesson[];
}

export const LEVELS: Level[] = [
  {
    id: 1,
    title: "Level 1: AI Fundamentals",
    description: "Understand what AI really is, demystify the buzzwords, and see how it fits into daily life in Mzansi.",
    badge: "🌱 Seedling",
    lessons: [
      {
        id: "l1-1",
        title: "1. What is AI Really?",
        subtitle: "Pattern recognition, not magic",
        content: "Artificial Intelligence is not a human brain inside a computer. At its core, AI is pattern recognition powered by mathematics and massive amounts of data. Just like an experienced mechanic can identify an engine problem just by listening to the sound, an AI model learns patterns from millions of examples to predict what comes next.",
        takeaway: "AI doesn't 'think' like a human; it predicts outcomes based on patterns learned from past data.",
        quiz: [
          {
            question: "How does an AI model primarily generate answers?",
            options: [
              "It possesses human consciousness and feelings.",
              "It finds patterns in training data to predict what comes next.",
              "It searches the physical world in real-time.",
              "It memorizes every single book ever written word for word."
            ],
            correctIndex: 1,
            explanation: "AI uses statistical patterns from training data to calculate the most probable response."
          }
        ]
      },
      {
        id: "l1-2",
        title: "2. Large Language Models (LLMs)",
        subtitle: "How tools like ChatGPT and Gemini work",
        content: "LLMs are trained on billions of words from across the web and literature. When you give them a prompt, they calculate the most probable next word (or 'token') in the sequence. They are brilliant brainstorming and drafting partners, but they don't have personal beliefs or firsthand life experience.",
        takeaway: "LLMs are advanced next-token prediction engines—great for drafting and explaining, but needing human verification.",
        quiz: [
          {
            question: "Why should you double-check important factual claims from an LLM?",
            options: [
              "LLMs cannot generate text in English.",
              "LLMs always copy directly from Wikipedia without permission.",
              "LLMs predict likely words and can sometimes hallucinate incorrect facts.",
              "LLMs only work when connected to quantum computers."
            ],
            correctIndex: 2,
            explanation: "Because LLMs generate probable text, they can produce convincing but incorrect information (hallucinations)."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Level 2: Effective Prompting",
    description: "Master the art of giving clear instructions to get high-value, precise results every time.",
    badge: "⚡ Crafter",
    lessons: [
      {
        id: "l2-1",
        title: "1. The C-R-E-O Prompting Framework",
        subtitle: "Context, Role, Explicit instructions, Output format",
        content: "To get the best response from an AI, give it structure: \n- **Context**: Explain your situation (e.g., 'I run a bakery in Kuils River').\n- **Role**: Assign an identity (e.g., 'Act as an experienced small business advisor').\n- **Explicit Instructions**: State exact goals and boundaries.\n- **Output**: Define format (e.g., 'Give me a 3-bullet action list with Rand estimates').",
        takeaway: "Garbage in, garbage out. Clear context and explicit structure produce high-impact results.",
        quiz: [
          {
            question: "What is the primary benefit of specifying an Output Format in a prompt?",
            options: [
              "It makes the AI run faster on mobile data.",
              "It forces the response into an easily readable, actionable structure you need.",
              "It translates the prompt into binary code.",
              "It prevents the AI from using technical words."
            ],
            correctIndex: 1,
            explanation: "Defining output formats (like bullet points or tables) ensures the response is directly usable without unnecessary filler."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Level 3: Ethics & Bias in Africa",
    description: "Explore algorithmic bias, data sovereignty, POPIA compliance, and responsible AI adoption.",
    badge: "🛡️ Guardian",
    lessons: [
      {
        id: "l3-1",
        title: "1. Algorithmic Bias & Representation",
        subtitle: "Why local data and local context matter",
        content: "Most global AI models are trained predominantly on Western and North American datasets. When applied locally, they may misunderstand South African languages, cultural nuances, or township economic realities. Building responsibly means demanding representative datasets and maintaining critical human oversight.",
        takeaway: "Always question whether an AI model understands the local African context and language before relying on its conclusions.",
        quiz: [
          {
            question: "Why might a global AI model struggle with South African cultural idioms or local languages?",
            options: [
              "African languages are mathematically impossible to tokenize.",
              "The training datasets under-represent African languages and local contexts.",
              "AI only works in US dollar currency settings.",
              "Internet cables in Africa filter out local words."
            ],
            correctIndex: 1,
            explanation: "Under-representation of African content in foundational training datasets leads to cultural and linguistic blind spots."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Level 4: Building & Innovating",
    description: "Move from a passive consumer to an active builder solving real-world African challenges.",
    badge: "🚀 Builder",
    lessons: [
      {
        id: "l4-1",
        title: "1. Offline-First & Data-Lite Solutions",
        subtitle: "Designing for real connectivity conditions",
        content: "In South Africa, mobile data is costly and loadshedding or spotty network coverage is common. World-class African solutions prioritize Progressive Web Apps (PWAs), offline caching, compressed payloads, and edge logic so learners and workers can access tools anywhere.",
        takeaway: "The most impactful technology in Africa is accessible, resilient, and data-frugal.",
        quiz: [
          {
            question: "What makes a Progressive Web App (PWA) ideal for low-connectivity environments?",
            options: [
              "It requires a high-speed fiber connection at all times.",
              "It can cache essential assets offline and install directly without an app store.",
              "It only runs on expensive desktop workstations.",
              "It automatically pays for the user's mobile data."
            ],
            correctIndex: 1,
            explanation: "PWAs can run offline using cached files and don't require large downloads from app stores."
          }
        ]
      }
    ]
  }
];

export interface QnAPair {
  keywords: string[];
  answer: string;
}

export const MZANSI_KNOWLEDGE_BASE: QnAPair[] = [
  {
    keywords: ["what is ai", "artificial intelligence", "definition"],
    answer: "AI stands for Artificial Intelligence. In simple terms, it is software trained on vast amounts of data to recognize patterns and make predictions or generate text/images based on those patterns."
  },
  {
    keywords: ["pwa", "progressive web app", "offline", "data"],
    answer: "A Progressive Web App (PWA) is a website that can be installed on your phone or laptop just like a native app. It caches files locally so it works even with poor internet or completely offline!"
  },
  {
    keywords: ["prompt", "prompting", "better results", "how to ask"],
    answer: "For the best prompt results, use the CREO framework: Context (your background), Role (who the AI should act as), Explicit instructions (exact boundaries), and Output format (e.g., bullet points or table)."
  },
  {
    keywords: ["bias", "ethics", "africa", "popia"],
    answer: "Because most global AI models were trained on Western data, they can carry bias against African cultural contexts and local languages. Responsible builders always verify outputs and safeguard personal information (POPIA)."
  },
  {
    keywords: ["mzansi", "mission", "educator"],
    answer: "Mzansi AI Educator is built to make AI literacy practical, culturally grounded, and accessible to every South African without requiring high-speed data or expensive hardware."
  }
];
