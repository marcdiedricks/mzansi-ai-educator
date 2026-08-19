import { Lesson } from './types';

const foundationBlocks: Lesson['blocks'] = [
  { id:'b1', type:'objective', variant:'standard', content:'Explain artificial intelligence in plain language while keeping the correct AI terms. Understand data, patterns, algorithms and predictions, then connect them to everyday technology.' },
  { id:'b2', type:'explanation', variant:'standard', content:'Artificial intelligence (AI) is a broad term for computer systems designed to perform tasks such as recognising patterns, working with language, making predictions, recommending options or generating content.' },
  { id:'b3', type:'explanation', variant:'plain', content:'In plain language: AI is technology that works with information and patterns to help produce an answer, suggestion, decision or new piece of content.' },
  { id:'b4', type:'keyPoint', variant:'standard', content:'Keep the proper words. Data means the information a system works with. A pattern is something that repeats or has a recognisable relationship. An algorithm is a set of steps or rules. A prediction is an estimate of what is likely to happen or come next.' },
  { id:'b5', type:'example', variant:'SouthAfricanContext', content:'Think about directions to a taxi rank. You follow a sequence of steps: walk to a road, turn at a landmark, cross at a robot and continue to the rank. That step-by-step sequence is a useful everyday way to understand an algorithm.' },
  { id:'b6', type:'example', variant:'SouthAfricanContext', content:'When your phone suggests the next word in a WhatsApp message, predictive text uses patterns in language to estimate what word may come next. “Predictive” does not mean the phone knows the future. It means the system is choosing a likely result from patterns.' },
  { id:'b7', type:'explanation', variant:'standard', content:'AI systems do not all work in the same way. Some follow programmed rules. Some learn statistical patterns from examples called training data. Generative AI uses learned patterns to produce new text, images or other outputs.' },
  { id:'b8', type:'example', variant:'SouthAfricanContext', content:'Everyday examples can include a bank flagging an unusual transaction, a navigation app estimating a faster route around traffic, a streaming service recommending music, or a phone grouping similar photographs. The exact technology differs, but each can involve rules, data or learned patterns.' },
  { id:'b9', type:'keyPoint', variant:'standard', content:'Not every automatic machine is AI. A basic timer that switches a light on at 18:00 can simply follow a fixed rule. An AI system usually performs a task involving patterns, classification, prediction, language, recommendation or generation.' },
  { id:'b10', type:'reflection', variant:'standard', content:'Look at three digital services you used recently. For each one, ask: What information might it use? What pattern might it notice? What suggestion, prediction or decision does it produce?' },
  { id:'b11', type:'keyPoint', variant:'standard', content:'AI can be useful and still be wrong. Its output may reflect incomplete data, weak assumptions or bias. A responsible learner checks important claims and keeps human judgement in the loop.' },
  { id:'b12', type:'reflection', variant:'standard', content:'Imagine an AI system recommends which learners should receive a limited opportunity. What could go wrong if the data mostly represents learners from wealthy, well-connected schools? This is one reason fairness and algorithmic bias matter.' },
  { id:'b13', type:'summary', variant:'standard', content:'AI works with information, rules and patterns to perform tasks. Data supplies information. Algorithms provide steps or methods. Predictions estimate likely outcomes. AI does not automatically understand the world like a person, and its answers should be checked when accuracy or fairness matters.' },
];

const foundationQuiz: NonNullable<Lesson['quiz']> = [
  { id:'q1', question:'Which description of Artificial Intelligence (AI) is most accurate?', options:['A machine that thinks and feels exactly like a person.','Computer systems that use data and computational methods to recognise patterns, make predictions or generate outputs.','Any electronic device that switches on automatically.','A system that can never make a mistake.'], correctIndex:1, explanation:'AI is a broad name for computer systems that perform tasks using data, rules or learned patterns. AI does not need human consciousness to do this.' },
  { id:'q2', question:'What is an algorithm?', options:['A step-by-step set of instructions or rules for carrying out a task.','A special type of smartphone.','A person who checks the internet.','A guarantee that an AI answer is correct.'], correctIndex:0, explanation:'An algorithm is a set of steps or rules. A recipe, a route plan and instructions for sorting information can all help you understand the idea.' },
  { id:'q3', question:'What does “prediction” mean in AI?', options:['The computer knows the future with certainty.','The system chooses a likely result based on patterns in available data.','The computer reads a person’s mind.','The system always selects a random answer.'], correctIndex:1, explanation:'In AI, prediction means estimating what is likely, not knowing the future. Predictive text is a simple example.' },
  { id:'q4', question:'A phone suggests the next word while you type a WhatsApp message. What is the best explanation?', options:['It uses language patterns to estimate a likely next word.','Someone at the phone company is typing the word for you.','It knows exactly what you are thinking.','It works without any rules, data or patterns.'], correctIndex:0, explanation:'Predictive text uses patterns from language data and your typing context to estimate which word may come next.' },
  { id:'q5', question:'Why should a learner still check an answer produced by AI?', options:['AI systems can produce incorrect, incomplete or biased outputs.','AI only works during school hours.','Checking makes the phone battery last longer.','AI cannot process language.'], correctIndex:0, explanation:'AI output is not automatically true or fair. Human judgement, checking reliable sources and asking good questions remain important.' },
];

const everydayAiBlocks: Lesson['blocks'] = [
  { id:'m2_b1', type:'objective', variant:'standard', content:'Recognise AI in everyday South African digital life, explain what data and patterns may be involved, and identify when a system is making a recommendation, classification or prediction.' },
  { id:'m2_b2', type:'explanation', variant:'standard', content:'Many AI systems are almost invisible. They sit inside services you already use, including navigation, banking, search, social media, streaming, spam filters, photo apps and online shopping.' },
  { id:'m2_b3', type:'explanation', variant:'plain', content:'In plain language: if an app seems to sort, recommend, recognise, predict or flag something automatically, there may be an AI or algorithmic system working behind the screen.' },
  { id:'m2_b4', type:'keyPoint', variant:'standard', content:'A recommendation system suggests what you may like. A classification system places something into a category. A prediction system estimates what is likely to happen next. These are different AI tasks even when they appear inside the same app.' },
  { id:'m2_b5', type:'example', variant:'SouthAfricanContext', content:'A navigation app can use location and traffic-speed data from many road users to estimate congestion and suggest a faster route through Cape Town, Johannesburg or Durban.' },
  { id:'m2_b6', type:'example', variant:'SouthAfricanContext', content:'A bank may flag a card transaction as unusual because its fraud-detection system notices that the amount, location or buying pattern differs sharply from the account holder’s normal behaviour.' },
  { id:'m2_b7', type:'example', variant:'SouthAfricanContext', content:'A music or video service may recommend Amapiano, gospel, sports or comedy content because it has detected patterns in what you watched, replayed, skipped or liked.' },
  { id:'m2_b8', type:'explanation', variant:'standard', content:'These systems depend on data. Location data can support routing. Transaction data can support fraud detection. Viewing history can support recommendations. Voice or image data can support recognition. The usefulness of the output depends partly on the quality and relevance of the data.' },
  { id:'m2_b9', type:'keyPoint', variant:'standard', content:'Personalisation is not mind-reading. The system is using past behaviour or other signals to estimate what may be useful or relevant to you.' },
  { id:'m2_b10', type:'reflection', variant:'standard', content:'Choose three apps on your phone. For each one, identify one piece of data it may use and one decision, recommendation or prediction it may produce.' },
  { id:'m2_b11', type:'keyPoint', variant:'standard', content:'AI can shape what you see and what you do not see. Recommendation systems may repeatedly show similar content, so responsible users stay curious, compare sources and do not assume a personalised feed represents the whole world.' },
  { id:'m2_b12', type:'reflection', variant:'standard', content:'Suppose a local service is trained mostly on data from wealthier neighbourhoods with strong connectivity. How might its recommendations work differently for people in townships, rural areas or low-data environments?' },
  { id:'m2_b13', type:'summary', variant:'standard', content:'Everyday AI often works by using data to recognise patterns, classify information, make predictions or recommend options. Understanding the task and the data helps you use these systems more critically.' },
];

const everydayAiQuiz: NonNullable<Lesson['quiz']> = [
  { id:'q1', question:'Which example best describes an AI recommendation system?', options:['A phone alarm ringing at exactly 06:00 every day.','A streaming app suggesting music based on what you often play.','A light switch turning on when you press it.','A calculator adding two numbers.'], correctIndex:1, explanation:'Recommendation systems use signals and patterns to estimate which items may be relevant or interesting to a user.' },
  { id:'q2', question:'What kind of data can help a navigation app estimate traffic congestion?', options:['Movement and speed information from road users and devices.','Only the colour of the car.','The phone wallpaper.','The learner’s school marks.'], correctIndex:0, explanation:'Location and movement data can help a navigation service estimate traffic conditions and travel times.' },
  { id:'q3', question:'Why might a bank flag a transaction as suspicious?', options:['The bank knows the customer is guilty.','The transaction differs from patterns normally seen on the account.','Every large transaction is automatically illegal.','The bank is guessing completely at random.'], correctIndex:1, explanation:'Fraud detection often compares a new transaction with patterns in previous activity. A flag is a warning for review, not proof of wrongdoing.' },
  { id:'q4', question:'What does personalisation usually mean?', options:['The app can read your private thoughts.','The system uses signals such as past activity to estimate what may be relevant to you.','A human employee watches every user continuously.','The app shows exactly the same content to everyone.'], correctIndex:1, explanation:'Personalisation uses data and patterns to tailor recommendations or content. It is an estimate, not mind-reading.' },
  { id:'q5', question:'Why should learners think critically about recommendation feeds?', options:['Because recommendations can repeatedly narrow what they see.','Because recommendation systems never use data.','Because all recommended content is false.','Because AI cannot work on phones.'], correctIndex:0, explanation:'Personalised feeds can reinforce existing interests and reduce exposure to different viewpoints, so learners should compare sources and explore beyond recommendations.' },
];

const privacyBlocks: Lesson['blocks'] = [
  { id:'m3_b1', type:'objective', variant:'standard', content:'Understand personal information, digital footprints, privacy and safe AI use in a South African context, including the role of POPIA.' },
  { id:'m3_b2', type:'explanation', variant:'standard', content:'AI and digital services can work with many kinds of data. Personal information can include details that identify or relate to a person, such as a name, contact details, location, photographs, identifiers, online activity or other information connected to that person.' },
  { id:'m3_b3', type:'explanation', variant:'plain', content:'In plain language: information about you has value. Before sharing it with an app, website or AI tool, ask what you are sharing, why the service needs it, who may receive it and what could happen if it is exposed.' },
  { id:'m3_b4', type:'keyPoint', variant:'standard', content:'POPIA, the Protection of Personal Information Act, is South Africa’s central data-protection law. It establishes conditions for lawful processing of personal information. A beginner does not need to memorise the Act, but should understand that organisations have responsibilities when they collect, use, store or share personal information.' },
  { id:'m3_b5', type:'example', variant:'SouthAfricanContext', content:'A school using an online AI service should think carefully before uploading learner names, photographs, assessment records or identifying information. The fact that a tool is useful does not remove privacy, security and safeguarding responsibilities.' },
  { id:'m3_b6', type:'keyPoint', variant:'standard', content:'Do not paste passwords, PINs, banking credentials, identity numbers, private medical details or confidential information into a public AI service. Treat a prompt box as a place where information may leave your immediate control.' },
  { id:'m3_b7', type:'explanation', variant:'standard', content:'Different services have different data practices. Some may store prompts, some may offer controls over history or model improvement, and policies can change. Do not assume every AI service stores or trains on data in exactly the same way. Check the service’s current privacy information when the detail matters.' },
  { id:'m3_b8', type:'example', variant:'SouthAfricanContext', content:'Suppose you want AI help writing a letter about a family problem. You can often remove names, ID numbers, addresses and other identifying details and describe the situation more generally. This is an example of data minimisation: sharing only what is needed for the task.' },
  { id:'m3_b9', type:'keyPoint', variant:'standard', content:'Permissions deserve attention too. If an app asks for access to your microphone, contacts, camera or precise location, ask whether that permission is necessary for the feature you want to use.' },
  { id:'m3_b10', type:'reflection', variant:'standard', content:'Look at one app you use. Which permissions does it have? Which are essential to its purpose, and which would you question before granting?' },
  { id:'m3_b11', type:'explanation', variant:'standard', content:'Privacy and security are related but different. Privacy concerns appropriate use of personal information. Security concerns protecting information and systems against loss, unauthorised access or misuse. Responsible AI use needs both.' },
  { id:'m3_b12', type:'example', variant:'SouthAfricanContext', content:'A community organisation may want an AI tool to summarise beneficiary feedback. A safer approach is to remove names and unnecessary identifying details before using an external service, and to follow the organisation’s consent and data-handling rules.' },
  { id:'m3_b13', type:'reflection', variant:'standard', content:'Before entering information into an AI tool, use four questions: Do I need to share this? Can I remove identifying details? Do I trust the service for this type of information? Would I be comfortable if this information were exposed?' },
  { id:'m3_b14', type:'summary', variant:'standard', content:'Safe AI use starts with data awareness. Know what personal information is, share only what is necessary, protect sensitive details, question unnecessary permissions, understand that services have different data practices, and remember that South African organisations have responsibilities under POPIA.' },
];

const privacyQuiz: NonNullable<Lesson['quiz']> = [
  { id:'q1', question:'What is POPIA?', options:['A South African law concerned with protection and lawful processing of personal information.','A type of artificial intelligence model.','A mobile network standard.','A password manager built into every phone.'], correctIndex:0, explanation:'POPIA is South Africa’s Protection of Personal Information Act. It sets conditions and responsibilities around processing personal information.' },
  { id:'q2', question:'Which information should you avoid putting into a public AI prompt?', options:['A made-up example about a fictional shop.','A general question about mathematics.','Your banking PIN and identity number.','A request to explain the word algorithm.'], correctIndex:2, explanation:'Passwords, PINs, identity numbers and other highly sensitive information should not be entered into public AI tools.' },
  { id:'q3', question:'What does data minimisation mean in everyday AI use?', options:['Share every detail so the AI has more information.','Share only the information needed for the task and remove unnecessary identifying details.','Delete every app from your phone.','Never use digital services.'], correctIndex:1, explanation:'Data minimisation means limiting information to what is necessary. Removing names, addresses and identifiers can reduce privacy risk when they are not needed.' },
  { id:'q4', question:'Which statement about AI services and prompt data is safest?', options:['Every AI service handles prompt data in exactly the same way.','No AI service ever stores prompts.','Data practices differ between services and can change, so check current privacy information when it matters.','Anything typed into an AI tool automatically becomes public on the internet.'], correctIndex:2, explanation:'Services have different policies and settings. Avoid universal claims and check the current service information for sensitive or important use.' },
  { id:'q5', question:'Why should you review an app’s permissions?', options:['To see whether requested access is necessary for what the app needs to do.','Because every permission request is automatically dangerous.','To make AI answers longer.','Because POPIA bans all phone permissions.'], correctIndex:0, explanation:'A sensible privacy habit is to question whether access to location, contacts, microphone, camera or other data is genuinely needed for the feature.' },
];

export function enhanceLesson(lesson: Lesson): Lesson {
  if (lesson.id === 'MZAIE-L1-M01-L01') {
    return {
      ...lesson,
      version:'1.1',
      estimatedMinutes:18,
      objectives:[
        'Explain artificial intelligence in plain language while using the correct AI terminology.',
        'Explain data, patterns, algorithms and predictions using familiar everyday examples.',
        'Recognise common AI systems and distinguish AI from ordinary automation.',
        'Understand why AI outputs still require checking and human judgement.',
      ],
      blocks: foundationBlocks,
      quiz: foundationQuiz,
    };
  }

  if (lesson.id === 'MZAIE-L1-M02-L01') {
    return {
      ...lesson,
      version:'1.1',
      estimatedMinutes:18,
      objectives:[
        'Recognise common AI systems in everyday South African digital services.',
        'Explain the difference between recommendation, classification and prediction.',
        'Identify the kinds of data everyday AI systems may use.',
        'Think critically about personalisation, local relevance and unequal data coverage.',
      ],
      blocks: everydayAiBlocks,
      quiz: everydayAiQuiz,
    };
  }

  if (lesson.id === 'MZAIE-L1-M03-L01') {
    return {
      ...lesson,
      version:'1.1',
      estimatedMinutes:20,
      objectives:[
        'Identify common forms of personal information and sensitive information in digital life.',
        'Explain, at beginner level, why POPIA matters when organisations process personal information.',
        'Use data minimisation and permission-checking habits when working with AI tools.',
        'Distinguish privacy from security and make safer choices before sharing information.',
      ],
      blocks: privacyBlocks,
      quiz: privacyQuiz,
    };
  }

  return lesson;
}
