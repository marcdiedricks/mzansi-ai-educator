# Mzansi AI Educator — Level 1 Gap Audit

Status: Controlled audit
Reference baseline: MZANSI_SOURCE_LOCKED_CURRICULUM_MAP.md

## 1. Executive finding

The current Level 1 implementation is technically useful as a prototype but educationally too shallow for the source-locked Mzansi standard.

Primary issue: the app currently behaves like a sequence of short informational lessons with quizzes, while the controlled curriculum requires concept scaffolding, local application, practical activity, reflection, assessment and progression toward demonstrated competence.

## 2. Structural defects

### 2.1 Level boundary contamination
The current Level 1 `moduleIds` array includes Level 2 module IDs:
- MZAIE-L2-M01
- MZAIE-L2-M02
- MZAIE-L2-M03

This makes Level 1 completion logic and learner-facing progression ambiguous.

Required correction:
- Level 1 contains Level 1 modules only.
- Level 2 modules belong to the USE level only.
- Progress and certificates must calculate against the correct level boundary.

### 2.2 Stage terminology mismatch
The current Level 1 uses `competencyStage: Acquire`.

Controlled Mzansi learner-facing terminology is:
- DISCOVER
- USE
- CREATE
- LEAD

UNESCO terminology may inform the crosswalk internally but must not replace the Mzansi learner-facing progression.

### 2.3 Lesson depth too low
Current substantial lessons are generally estimated at approximately 8–10 minutes.

This is insufficient as the default pattern for concepts such as:
- AI foundations
- algorithms
- data and training data
- privacy
- Ubuntu and technology
- generative AI
- bias and representation

Required correction:
Each substantial concept lesson should include explanation, local example, worked example, activity, failure mode/misconception, knowledge check, applied task, reflection, assessment, recap and glossary reinforcement.

## 3. Current strengths to preserve

The current implementation already contains useful building blocks:
- plain-language variants
- South African context variants
- reflection blocks
- offlineEligible flags
- technical terminology such as algorithm, predictive text, machine learning and generative AI
- privacy and POPIA awareness
- Ubuntu and technology framing

These should be expanded rather than discarded.

## 4. Missing Level 1 concepts

The source-locked Level 1 DISCOVER minimum scope requires stronger or explicit treatment of:
- algorithm as a formal concept
- data versus training data
- model
- training versus inference
- prediction versus classification
- algorithmic bias
- representation and African data inclusion
- human agency
- where AI is inappropriate
- responsible human oversight
- generative AI limitations
- hallucination as a concept introduction

Some of these appear indirectly, but they are not yet structured as explicit learner competencies.

## 5. Missing pedagogical layers

Current lessons often contain:
- objective
- explanation
- plain explanation
- local example
- key point
- reflection
- summary
- short quiz

Missing or inconsistent:
- technical term card
- worked example
- learner activity
- unplugged fallback
- misconception/failure mode
- scenario reasoning
- practical task
- assessment beyond quiz
- explanation of incorrect answers as a learning loop
- glossary reinforcement
- language-aware explanation layer
- demonstrated competence requirement

## 6. Assessment defects

Most lessons rely on multiple-choice quizzes.

The controlled assessment doctrine requires a mix of:
- verbal explanation
- scenario reasoning
- observation
- paper activities
- practical demonstration
- identifying failure modes
- short-answer explanation
- prototype or design evidence at later stages

Quiz submission must remain separate from lesson completion.

## 7. Language gap

Onboarding now captures English, Afrikaans and isiXhosa, but curriculum content remains primarily English.

Required architecture:
- one concept model
- multiple learner-facing explanation layers
- preserve technical AI terminology
- provide plain explanation in selected language
- glossary translation/support
- allow assessment evidence in an appropriate learner language where valid

Do not fork the curriculum into separate language versions.

## 8. South African context gap

The current app has several local examples, which is a strength.

However, local context needs broader range and deeper application.

Avoid reducing South African relevance to poverty/township examples only.

Use contexts across:
- transport
- banking
- school and college
- public services
- small business
- informal enterprise
- agriculture
- artisan trades
- creative industries
- engineering
- software
- community organisations
- professional settings

## 9. Offline gap

Current lessons are marked offline eligible, but offline eligibility alone is not enough.

Required validation:
- lesson opens after connectivity loss
- glossary remains available
- learner state persists locally
- activity can continue offline
- low-tech fallback exists for connectivity-dependent tasks
- interrupted sessions recover safely

## 10. Recommended Level 1 DISCOVER structure

Proposed Level 1 modules:

### 1.1 AI Is Already Around You
Recognition, everyday AI, what AI is and is not.

### 1.2 Algorithms and Patterns
Algorithm, pattern recognition, prediction, classification.

### 1.3 Data, Training Data and Models
Data, training data, model, training versus inference.

### 1.4 Generative AI and Language Models
Generative AI, tokens, next-token prediction, prompts, limitations.

### 1.5 Bias, Representation and African Data
Algorithmic bias, underrepresentation, accents/languages, testing fairness.

### 1.6 Privacy, Safety and Human Agency
Privacy, POPIA awareness, sensitive data, consent, human oversight.

### 1.7 Ubuntu, Ethics and Responsible AI
Human dignity, community impact, accountability, where AI should not be used.

### 1.8 Level 1 Applied Challenge
Learner analyses an everyday AI system and explains:
- what it does
- what data it may use
- what algorithm/model concept applies
- what could go wrong
- who may be affected
- what human oversight is needed

This applied challenge is the Level 1 evidence gate.

## 11. Completion rule

Level 1 should not complete because all quiz buttons were pressed.

Recommended completion evidence:
- all core concept lessons completed
- core knowledge checks attempted
- required practical/unplugged activities completed
- Level 1 Applied Challenge completed
- progress stored locally

No accreditation claim is made.

## 12. Next build decision

Do not expand Level 2 yet.

Next:
1. align dashboard to DISCOVER → USE → CREATE → LEAD
2. correct Level 1 boundaries
3. rebuild Level 1 content using the permanent lesson standard
4. validate English first concept architecture while preserving multilingual structure
5. add Afrikaans and isiXhosa explanation layers progressively
6. run offline and state-persistence validation
