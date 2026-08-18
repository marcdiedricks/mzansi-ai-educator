import { Programme, Level, Module, Lesson } from './types';

export const programme: Programme = {
  id: 'MZAIE',
  title: 'Mzansi AI Educator',
  version: '1.0',
  defaultLocale: 'en-ZA',
  activeLevelId: 'MZAIE-L1',
};

export const level: Level = {
  id: 'MZAIE-L1',
  title: 'AI Foundations',
  competencyStage: 'Acquire',
  version: '1.0',
  moduleIds: [
    'MZAIE-L1-M01',
    'MZAIE-L1-M02',
    'MZAIE-L1-M03',
    'MZAIE-L1-M04',
    'MZAIE-L1-M05',
    'MZAIE-L2-M01',
    'MZAIE-L2-M02',
    'MZAIE-L2-M03',
  ],
};

export const modules: Module[] = [
  // --- LEVEL 1 MODULES ---
  {
    id: 'MZAIE-L1-M01',
    title: '1.1 What Is AI?',
    description: 'Understand the foundations of artificial intelligence and pattern recognition.',
    order: 1,
    lessonIds: ['MZAIE-L1-M01-L01'],
    competencyIds: ['AI_UNDERSTANDING'],
    version: '1.0',
  },
  {
    id: 'MZAIE-L1-M02',
    title: '1.2 AI Around You',
    description: 'Discover AI applications in smartphones, transport, and local services.',
    order: 2,
    lessonIds: ['MZAIE-L1-M02-L01'],
    competencyIds: ['AI_UNDERSTANDING', 'DATA_AWARENESS'],
    version: '1.0',
  },
  {
    id: 'MZAIE-L1-M03',
    title: '1.3 Data, Privacy & Safety',
    description: 'Learn how personal information powers AI and how POPIA protects you.',
    order: 3,
    lessonIds: ['MZAIE-L1-M03-L01'],
    competencyIds: ['DATA_AWARENESS', 'BASIC_PRIVACY'],
    version: '1.0',
  },
  {
    id: 'MZAIE-L1-M04',
    title: '1.4 Ubuntu and Technology',
    description: 'Applying African human-centered ethics to technology and community impact.',
    order: 4,
    lessonIds: ['MZAIE-L1-M04-L01'],
    competencyIds: ['UBUNTU_TECHNOLOGY_AWARENESS', 'RESPONSIBLE_AI_USE'],
    version: '1.0',
  },
  {
    id: 'MZAIE-L1-M05',
    title: '1.5 How Generative AI Works',
    description: 'Explore tokens, prompts, next-word prediction, and critical verification.',
    order: 5,
    lessonIds: ['MZAIE-L1-M05-L01'],
    competencyIds: ['AI_UNDERSTANDING', 'CRITICAL_QUESTIONING'],
    version: '1.0',
  },

  // --- LEVEL 2 MODULES ---
  {
    id: 'MZAIE-L2-M01',
    title: '2.1 The Art of Effective Prompting',
    description: 'Master structured prompting techniques to get high-value, precise outputs.',
    order: 6,
    lessonIds: ['MZAIE-L2-M01-L01'],
    competencyIds: ['AI_UNDERSTANDING', 'CRITICAL_QUESTIONING'],
    version: '1.0',
  },
  {
    id: 'MZAIE-L2-M02',
    title: '2.2 Real-World AI Productivity Tools',
    description: 'Explore practical tools for summarization, writing assistance, coding, and study support.',
    order: 7,
    lessonIds: ['MZAIE-L2-M02-L01'],
    competencyIds: ['AI_UNDERSTANDING', 'RESPONSIBLE_AI_USE'],
    version: '1.0',
  },
  {
    id: 'MZAIE-L2-M03',
    title: '2.3 Critical Fact-Checking & Bias Detection',
    description: 'Learn step-by-step methods to audit AI answers, detect hallucinations, and safeguard accuracy.',
    order: 8,
    lessonIds: ['MZAIE-L2-M03-L01'],
    competencyIds: ['CRITICAL_QUESTIONING', 'HUMAN_JUDGEMENT'],
    version: '1.0',
  },
];

export const lessons: Lesson[] = [
  // --- LEVEL 1 LESSONS ---
  {
    id: 'MZAIE-L1-M01-L01',
    title: 'What Is Artificial Intelligence?',
    levelId: 'MZAIE-L1',
    moduleId: 'MZAIE-L1-M01',
    locale: 'en-ZA',
    version: '1.0',
    estimatedMinutes: 10,
    objectives: [
      'Understand, in simple terms, what artificial intelligence is and what it can do.',
    ],
    competencyIds: ['AI_UNDERSTANDING'],
    activityIds: [],
    assessmentId: null,
    sourceIds: [],
    offlineEligible: true,
    trustState: 'VERIFIED_CURRICULUM',
    quiz: [
      {
        id: 'q1',
        question: 'Which of the following best describes Artificial Intelligence (AI)?',
        options: [
          'A physical robot with human emotions and consciousness.',
          'Computer software that recognises patterns in data to predict outcomes or generate content.',
          'A magic calculator that never makes mistakes.',
          'A human being operating a computer from behind a screen.',
        ],
        correctIndex: 1,
        explanation:
          'AI systems are computer programs that analyze vast amounts of data to find patterns and make predictions. They do not possess consciousness or human feelings.',
      },
      {
        id: 'q2',
        question: 'How does predictive text on your smartphone guess your next word?',
        options: [
          'It reads your mind using wireless sensors.',
          'It connects to a secret human typist.',
          'It uses statistical language patterns learned from past text data.',
          'It guesses completely at random.',
        ],
        correctIndex: 2,
        explanation:
          'Predictive text is a classic pattern recognition model trained on millions of sentences to calculate the highest probability next word.',
      },
    ],
    blocks: [
      {
        id: 'b1',
        type: 'objective',
        variant: 'standard',
        content:
          'Understand, in simple terms, what artificial intelligence is and what it can do.',
      },
      {
        id: 'b2',
        type: 'explanation',
        variant: 'standard',
        content:
          'Artificial intelligence refers to computer systems designed to perform tasks that normally require aspects of human intelligence, such as recognising patterns, working with language, making predictions or generating content.',
      },
      {
        id: 'b3',
        type: 'explanation',
        variant: 'plain',
        content:
          'AI is technology that uses data and patterns to perform tasks such as answering questions, recognising pictures or predicting what might happen next.',
      },
      {
        id: 'b4',
        type: 'example',
        variant: 'SouthAfricanContext',
        content:
          'A learner using predictive text on a mobile phone is already interacting with technology that uses patterns in language to suggest what they may type next.',
      },
      {
        id: 'b5',
        type: 'keyPoint',
        variant: 'standard',
        content:
          'AI does not think or understand exactly like a human being. It processes information and patterns according to how the system was designed and trained.',
      },
      {
        id: 'b6',
        type: 'reflection',
        variant: 'standard',
        content:
          'Where have you encountered technology that seemed to predict, recommend or respond intelligently in your daily routine?',
      },
      {
        id: 'b7',
        type: 'summary',
        variant: 'standard',
        content:
          'AI uses data and computational methods to recognise patterns, make predictions or generate outputs. Different AI systems perform different kinds of tasks.',
      },
    ],
  },
  {
    id: 'MZAIE-L1-M02-L01',
    title: 'AI Around You in Everyday South Africa',
    levelId: 'MZAIE-L1',
    moduleId: 'MZAIE-L1-M02',
    locale: 'en-ZA',
    version: '1.0',
    estimatedMinutes: 8,
    objectives: [
      'Identify AI algorithms at work in navigation apps, voice assistants, mobile banking, and social feeds.',
    ],
    competencyIds: ['AI_UNDERSTANDING', 'DATA_AWARENESS'],
    activityIds: [],
    assessmentId: null,
    sourceIds: [],
    offlineEligible: true,
    trustState: 'VERIFIED_CURRICULUM',
    quiz: [
      {
        id: 'q1',
        question: 'How do GPS navigation apps help minibus taxis navigate traffic in Johannesburg or Cape Town?',
        options: [
          'By using satellite cameras to manually count cars one by one.',
          'By aggregating live speed data from thousands of connected smartphones to predict congestion.',
          'By guessing based on yesterday’s weather.',
          'By shutting down traffic lights on slower roads.',
        ],
        correctIndex: 1,
        explanation:
          'Navigation AI continuously aggregates anonymous movement telemetry from thousands of road users in real-time to compute optimal routes.',
      },
      {
        id: 'q2',
        question: 'When an online shopping or video app suggests items you might like, what is doing the recommendation?',
        options: [
          'A recommendation algorithm matching your viewing patterns with similar users.',
          'A random number generator.',
          'A store manager watching your screen in real time.',
          'The device battery sensor.',
        ],
        correctIndex: 0,
        explanation:
          'Recommender systems use collaborative filtering and machine learning to find people with tastes similar to yours and suggest items they liked.',
      },
    ],
    blocks: [
      {
        id: 'm2_b1',
        type: 'objective',
        variant: 'standard',
        content:
          'Spot the hidden AI systems operating behind everyday South African digital services, from GPS routing to bank fraud detection.',
      },
      {
        id: 'm2_b2',
        type: 'explanation',
        variant: 'standard',
        content:
          'You encounter AI daily without opening specialized AI apps. Recommendation algorithms curate video streams, spam filters protect email inboxes, and computer vision unlocks smartphones via face scanning.',
      },
      {
        id: 'm2_b3',
        type: 'explanation',
        variant: 'plain',
        content:
          'Whenever an app automatically groups your photos, predicts the best route through traffic, or flags an unusual bank transaction as potential fraud, machine learning is working behind the scenes.',
      },
      {
        id: 'm2_b4',
        type: 'example',
        variant: 'SouthAfricanContext',
        content:
          'South African banks use fraud-detection AI that alerts you via SMS within seconds if a card transaction happens in Durban while your phone is registered in Polokwane.',
      },
      {
        id: 'm2_b5',
        type: 'keyPoint',
        variant: 'standard',
        content:
          'AI is not just in the future; it already shapes which news articles you see, which taxi route is quickest, and which music tracks are queued on your playlist.',
      },
      {
        id: 'm2_b6',
        type: 'reflection',
        variant: 'standard',
        content:
          'Think of the last 3 apps you used today. Which ones used an algorithm to decide what content to show you first?',
      },
      {
        id: 'm2_b7',
        type: 'summary',
        variant: 'standard',
        content:
          'Everyday AI operates as invisible infrastructure in banking, navigation, search engines, and entertainment platforms.',
      },
    ],
  },
  {
    id: 'MZAIE-L1-M03-L01',
    title: 'Data, Privacy & Safety (POPIA in the AI Era)',
    levelId: 'MZAIE-L1',
    moduleId: 'MZAIE-L1-M03',
    locale: 'en-ZA',
    version: '1.0',
    estimatedMinutes: 10,
    objectives: [
      'Understand how AI models are fueled by personal data and how the Protection of Personal Information Act (POPIA) protects your rights.',
    ],
    competencyIds: ['DATA_AWARENESS', 'BASIC_PRIVACY'],
    activityIds: [],
    assessmentId: null,
    sourceIds: [],
    offlineEligible: true,
    trustState: 'VERIFIED_CURRICULUM',
    quiz: [
      {
        id: 'q1',
        question: 'What is the main South African law governing how companies collect and process your personal data?',
        options: [
          'The Copyright Act of 1978',
          'The Protection of Personal Information Act (POPIA)',
          'The National Road Traffic Act',
          'The Basic Conditions of Employment Act',
        ],
        correctIndex: 1,
        explanation:
          'POPIA (Protection of Personal Information Act) is South Africa’s data privacy law that sets strict guidelines on collecting, storing, and securing personal data.',
      },
      {
        id: 'q2',
        question: 'Why should you avoid pasting sensitive personal information (like ID numbers or passwords) into public AI tools?',
        options: [
          'Because the AI will lock your computer.',
          'Because that input data may be retained, logged, or used to train future iterations of the model.',
          'Because AI tools charge per letter typed.',
          'Because computers cannot read numbers.',
        ],
        correctIndex: 1,
        explanation:
          'Public AI services frequently log prompt inputs for system improvement and retraining, which could expose private or confidential details.',
      },
    ],
    blocks: [
      {
        id: 'm3_b1',
        type: 'objective',
        variant: 'standard',
        content:
          'Learn the connection between your digital footprint, AI model training, and privacy protections under South African law.',
      },
      {
        id: 'm3_b2',
        type: 'explanation',
        variant: 'standard',
        content:
          'AI models require enormous amounts of training data. Every click, photo upload, search term, and post contributes to the digital dataset companies use to build algorithmic profiles.',
      },
      {
        id: 'm3_b3',
        type: 'explanation',
        variant: 'plain',
        content:
          'Your personal data is valuable. When an online service is free, your data and attention are often the product being used to train and monetize algorithms.',
      },
      {
        id: 'm3_b4',
        type: 'example',
        variant: 'SouthAfricanContext',
        content:
          'Under POPIA in South Africa, schools and organizations cannot upload photos of learners or their ID numbers to third-party AI cloud systems without explicit consent and security safeguards.',
      },
      {
        id: 'm3_b5',
        type: 'keyPoint',
        variant: 'standard',
        content:
          'Always check permissions before installing apps. If a flashlight or calculator app asks for your microphone and contact book, pause and question why!',
      },
      {
        id: 'm3_b6',
        type: 'reflection',
        variant: 'standard',
        content:
          'Have you ever received a targeted advertisement about something you only searched for minutes earlier? How do you think that connection was made?',
      },
      {
        id: 'm3_b7',
        type: 'summary',
        variant: 'standard',
        content:
          'Data privacy is a constitutional right. Practicing mindful data hygiene keeps your identity, location, and sensitive records safe in the algorithmic world.',
      },
    ],
  },
  {
    id: 'MZAIE-L1-M04-L01',
    title: 'Ubuntu and Technology: Human-Centered AI',
    levelId: 'MZAIE-L1',
    moduleId: 'MZAIE-L1-M04',
    locale: 'en-ZA',
    version: '1.0',
    estimatedMinutes: 8,
    objectives: [
      'Explore how the African philosophy of Ubuntu ("Umuntu ngumuntu ngabantu") guides fair, inclusive, and compassionate AI development.',
    ],
    competencyIds: ['UBUNTU_TECHNOLOGY_AWARENESS', 'RESPONSIBLE_AI_USE'],
    activityIds: [],
    assessmentId: null,
    sourceIds: [],
    offlineEligible: true,
    trustState: 'VERIFIED_CURRICULUM',
    quiz: [
      {
        id: 'q1',
        question: 'What does "Ubuntu in AI" mean in practice for South African innovators?',
        options: [
          'Replacing all human workers with automated machinery immediately.',
          'Building technologies that prioritize human dignity, community benefit, linguistic inclusion, and social justice.',
          'Copying foreign software without considering local languages or challenges.',
          'Only building games for expensive gaming consoles.',
        ],
        correctIndex: 1,
        explanation:
          'Ubuntu philosophy emphasizes mutual care and community well-being, ensuring technology uplifts all people rather than leaving marginalized communities behind.',
      },
      {
        id: 'q2',
        question: 'What happens when an AI model is trained only on internet data from wealthy Western nations?',
        options: [
          'It becomes smarter than all human beings.',
          'It may exhibit algorithmic bias, misunderstand African languages, cultural nuances, and local contexts.',
          'It automatically translates all 11 official South African languages with 100% accuracy.',
          'It runs faster on local cellular networks.',
        ],
        correctIndex: 1,
        explanation:
          'Models without diverse African representation in training data struggle with local slang, cultural contexts, accents, and local realities.',
      },
    ],
    blocks: [
      {
        id: 'm4_b1',
        type: 'objective',
        variant: 'standard',
        content:
          'Discover how African philosophies provide moral compasses for ethical AI development, algorithmic fairness, and digital inclusion.',
      },
      {
        id: 'm4_b2',
        type: 'explanation',
        variant: 'standard',
        content:
          'Ubuntu teaches "I am because we are". When applied to artificial intelligence, it reminds engineers and learners that technology should serve human dignity, bridge inequality, and support collective well-being rather than causing harm or exclusion.',
      },
      {
        id: 'm4_b3',
        type: 'explanation',
        variant: 'plain',
        content:
          'AI should make life better for the whole community, not just a few people. We must build AI that respects everyone’s language, culture, and rights.',
      },
      {
        id: 'm4_b4',
        type: 'example',
        variant: 'SouthAfricanContext',
        content:
          'South African AI researchers at Masakhane are training language models in isiZulu, Sesotho, Sepedi, and Afrikaans so our indigenous languages are celebrated and preserved in the AI revolution.',
      },
      {
        id: 'm4_b5',
        type: 'keyPoint',
        variant: 'standard',
        content:
          'Technology is not neutral. The humans who design, train, and test AI instill their values and biases into the code.',
      },
      {
        id: 'm4_b6',
        type: 'reflection',
        variant: 'standard',
        content:
          'How can AI be used in your local community to solve an actual challenge, like water management, healthcare access, or tutoring?',
      },
      {
        id: 'm4_b7',
        type: 'summary',
        variant: 'standard',
        content:
          'Ubuntu provides a framework for ethical AI that puts community, empathy, and collective empowerment at the center of technological progress.',
      },
    ],
  },
  {
    id: 'MZAIE-L1-M05-L01',
    title: 'How Generative AI Works: Tokens, Prompts & Truth',
    levelId: 'MZAIE-L1',
    moduleId: 'MZAIE-L1-M05',
    locale: 'en-ZA',
    version: '1.0',
    estimatedMinutes: 12,
    objectives: [
      'Demystify how Large Language Models (LLMs) break words into tokens and predict next sequences, while recognizing "hallucinations".',
    ],
    competencyIds: ['AI_UNDERSTANDING', 'CRITICAL_QUESTIONING'],
    activityIds: [],
    assessmentId: null,
    sourceIds: [],
    offlineEligible: true,
    trustState: 'VERIFIED_CURRICULUM',
    quiz: [
      {
        id: 'q1',
        question: 'What is a "hallucination" in Generative AI?',
        options: [
          'When the computer screen flickers with colorful lights.',
          'When an AI model generates factually incorrect or fabricated information with high confidence.',
          'When the device battery is below 5%.',
          'When the AI becomes sentient and dreams.',
        ],
        correctIndex: 1,
        explanation:
          'Because LLMs predict plausible next words rather than retrieving guaranteed truths, they can fluently invent convincing but false claims.',
      },
      {
        id: 'q2',
        question: 'What is a "token" in Large Language Models?',
        options: [
          'A plastic coin used in arcade video games.',
          'A chunk of text (a word, syllable, or character group) that the AI processes as numerical data.',
          'A password required to login to a website.',
          'A physical cable connecting your monitor to your computer.',
        ],
        correctIndex: 1,
        explanation:
          'Language models convert text into numeric chunks called tokens. An average English word is roughly 1 to 2 tokens.',
      },
    ],
    blocks: [
      {
        id: 'm5_b1',
        type: 'objective',
        variant: 'standard',
        content:
          'Understand how Generative AI tools (like ChatGPT or Gemini) generate paragraphs, why they sound so human, and why fact-checking remains essential.',
      },
      {
        id: 'm5_b2',
        type: 'explanation',
        variant: 'standard',
        content:
          'Generative AI models break text into small pieces called "tokens" and convert them into mathematical vectors. By analyzing billions of token sequences during training, the model calculates the probability of the most fitting next token in response to your prompt.',
      },
      {
        id: 'm5_b3',
        type: 'explanation',
        variant: 'plain',
        content:
          'Think of Generative AI as a super-advanced version of autocomplete. It doesn’t "know" facts the way a human teacher does; it predicts which words usually follow each other.',
      },
      {
        id: 'm5_b4',
        type: 'example',
        variant: 'SouthAfricanContext',
        content:
          'If you prompt an AI with "In South Africa, the national animal is the...", the model calculates that "Springbok" has the highest mathematical probability to follow.',
      },
      {
        id: 'm5_b5',
        type: 'keyPoint',
        variant: 'standard',
        content:
          'Because AI predicts words based on patterns rather than understanding truth, it can generate confident-sounding falsehoods ("hallucinations"). Always verify critical facts with reliable human sources!',
      },
      {
        id: 'm5_b6',
        type: 'reflection',
        variant: 'standard',
        content:
          'If you used Generative AI to write a research report for school, what steps would you take to ensure the dates and quotes are 100% accurate?',
      },
      {
        id: 'm5_b7',
        type: 'summary',
        variant: 'standard',
        content:
          'Generative AI is a powerful creative writing, coding, and brainstorming assistant, but human judgement and verification are always required.',
      },
    ],
  },

  // --- LEVEL 2 LESSONS ---
  {
    id: 'MZAIE-L2-M01-L01',
    title: 'Mastering Prompting with the C-R-E-O Framework',
    levelId: 'MZAIE-L1',
    moduleId: 'MZAIE-L2-M01',
    locale: 'en-ZA',
    version: '1.0',
    estimatedMinutes: 10,
    objectives: [
      'Learn how to craft professional, high-yield prompts using the C-R-E-O (Context, Role, Explicit instructions, Output) framework.',
    ],
    competencyIds: ['AI_UNDERSTANDING', 'CRITICAL_QUESTIONING'],
    activityIds: [],
    assessmentId: null,
    sourceIds: [],
    offlineEligible: true,
    trustState: 'VERIFIED_CURRICULUM',
    quiz: [
      {
        id: 'q1',
        question: 'What does the "C" stand for in the C-R-E-O prompting framework?',
        options: [
          'Computer specifications',
          'Context (the background situation and target audience)',
          'Coding language',
          'Cloud storage',
        ],
        correctIndex: 1,
        explanation:
          'Context provides the AI with critical background details so it tailors the tone, vocabulary, and relevance of its response.',
      },
      {
        id: 'q2',
        question: 'Why should you specify an explicit Output Format in your prompt?',
        options: [
          'It forces the AI to structure answers directly into tables, bullet lists, or templates you need.',
          'It reduces your monthly data subscription.',
          'It translates the text into binary machine code.',
          'It prevents the AI from searching the internet.',
        ],
        correctIndex: 0,
        explanation:
          'Specifying the output format (like a 3-column table or bulleted list) eliminates unnecessary filler and saves formatting time.',
      },
    ],
    blocks: [
      {
        id: 'l2_m1_b1',
        type: 'objective',
        variant: 'standard',
        content:
          'Transition from vague questions to structured, professional instructions that yield immediate high-quality answers.',
      },
      {
        id: 'l2_m1_b2',
        type: 'explanation',
        variant: 'standard',
        content:
          'The C-R-E-O framework ensures complete clarity:\n- **Context**: State the background and target audience.\n- **Role**: Assign a persona (e.g. "Act as a senior educator").\n- **Explicit Instructions**: Detail the exact tasks, constraints, and exclusions.\n- **Output**: Define the structure (e.g. Markdown table, bulleted action points).',
      },
      {
        id: 'l2_m1_b3',
        type: 'example',
        variant: 'SouthAfricanContext',
        content:
          'Example prompt: "Context: I run a youth development NGO in Khayelitsha. Role: Experienced grant writer. Explicit: Draft a 200-word executive summary for digital literacy funding. Output: 3 clear paragraphs with a bulleted budget summary."',
      },
      {
        id: 'l2_m1_b4',
        type: 'keyPoint',
        variant: 'standard',
        content:
          'A precise prompt saves hours of revision. The more specific your constraints, the better the AI output.',
      },
      {
        id: 'l2_m1_b5',
        type: 'reflection',
        variant: 'standard',
        content:
          'Take a recent prompt you asked an AI. How could you rewrite it using the C-R-E-O framework to make it twice as effective?',
      },
      {
        id: 'l2_m1_b6',
        type: 'summary',
        variant: 'standard',
        content:
          'Structured prompting transforms AI from an unpredictable conversational toy into a high-leverage professional tool.',
      },
    ],
  },
  {
    id: 'MZAIE-L2-M02-L01',
    title: 'Practical AI Productivity in Work & Study',
    levelId: 'MZAIE-L1',
    moduleId: 'MZAIE-L2-M02',
    locale: 'en-ZA',
    version: '1.0',
    estimatedMinutes: 10,
    objectives: [
      'Apply AI for summarization, drafting formal communications, study flashcard generation, and logic drafting.',
    ],
    competencyIds: ['AI_UNDERSTANDING', 'RESPONSIBLE_AI_USE'],
    activityIds: [],
    assessmentId: null,
    sourceIds: [],
    offlineEligible: true,
    trustState: 'VERIFIED_CURRICULUM',
    quiz: [
      {
        id: 'q1',
        question: 'Which of the following is a high-value use of AI for a student or professional?',
        options: [
          'Asking the AI to generate practice exam questions and summarize complex textbook chapters.',
          'Submitting unedited AI-generated essays as their own original work without reviewing.',
          'Entering confidential client passwords to test the AI memory.',
          'Believing every historical date provided without verification.',
        ],
        correctIndex: 0,
        explanation:
          'AI excels as an interactive study partner, summarizer, and brainstorming assistant when coupled with human critical review.',
      },
    ],
    blocks: [
      {
        id: 'l2_m2_b1',
        type: 'objective',
        variant: 'standard',
        content:
          'Harness AI to eliminate repetitive administrative friction and accelerate learning and research workflows.',
      },
      {
        id: 'l2_m2_b2',
        type: 'explanation',
        variant: 'standard',
        content:
          'AI can synthesize lengthy PDF policy documents into concise bullet summaries, generate mock interview questions, and assist in drafting professional correspondence.',
      },
      {
        id: 'l2_m2_b3',
        type: 'example',
        variant: 'SouthAfricanContext',
        content:
          'An entrepreneur can paste municipal tender specifications and ask AI: "List the mandatory compliance documents required according to section 4 in a checklist format."',
      },
      {
        id: 'l2_m2_b4',
        type: 'keyPoint',
        variant: 'standard',
        content:
          'Use AI to create the first draft or breakdown, then use your human expertise and local context to refine and finalize.',
      },
      {
        id: 'l2_m2_b5',
        type: 'summary',
        variant: 'standard',
        content:
          'AI boosts productivity when treated as an accelerator rather than an autopilot.',
      },
    ],
  },
  {
    id: 'MZAIE-L2-M03-L01',
    title: 'Verification, Hallucinations & Critical Auditing',
    levelId: 'MZAIE-L1',
    moduleId: 'MZAIE-L2-M03',
    locale: 'en-ZA',
    version: '1.0',
    estimatedMinutes: 10,
    objectives: [
      'Develop practical auditing techniques to cross-examine AI claims, catch fake citations, and ensure accountability.',
    ],
    competencyIds: ['CRITICAL_QUESTIONING', 'HUMAN_JUDGEMENT'],
    activityIds: [],
    assessmentId: null,
    sourceIds: [],
    offlineEligible: true,
    trustState: 'VERIFIED_CURRICULUM',
    quiz: [
      {
        id: 'q1',
        question: 'What should you do if an AI cites a legal case or academic paper you have never heard of?',
        options: [
          'Assume it must be true because computers do not make mistakes.',
          'Independently verify the case name, date, and citations on official legal databases or verified repositories.',
          'Ignore it completely.',
          'Share it immediately on social media as breaking news.',
        ],
        correctIndex: 1,
        explanation:
          'AI models frequently hallucinate plausible-sounding legal citations, book titles, and statistical studies. Human verification is essential.',
      },
    ],
    blocks: [
      {
        id: 'l2_m3_b1',
        type: 'objective',
        variant: 'standard',
        content:
          'Equip yourself with a rigorous verification checklist to evaluate AI-generated facts, statistics, and citations.',
      },
      {
        id: 'l2_m3_b2',
        type: 'explanation',
        variant: 'standard',
        content:
          'Never rely on an unverified AI output for medical, legal, financial, or engineering decisions. Practice the "Trust but Verify" rule: check primary sources for every factual assertion.',
      },
      {
        id: 'l2_m3_b3',
        type: 'example',
        variant: 'SouthAfricanContext',
        content:
          'When asking an AI about South African Labour Relations Act dispute resolution rules, always double-check the exact section numbers against official government gazettes.',
      },
      {
        id: 'l2_m3_b4',
        type: 'keyPoint',
        variant: 'standard',
        content:
          'Human judgement remains irreplaceable. The author of the prompt and final document remains 100% accountable for the information presented.',
      },
      {
        id: 'l2_m3_b5',
        type: 'summary',
        variant: 'standard',
        content:
          'Critical thinking and empirical verification are the ultimate antidotes to algorithmic misinformation and hallucinations.',
      },
    ],
  },
];
