# THINK Level 1 Reconciliation — Controlled Implementation Baseline

Status: implementation branch baseline
Branch: think-level1-reconciliation
Deployment: NOT AUTHORISED

## Purpose
Reconcile the beginner pathway before code changes while preserving the existing four-level, 32-module programme and learner progress.

## Frozen programme philosophy
Mzansi AI Educator is an adaptable, inclusive AI education and training programme that teaches people to use AI effectively without surrendering their own thinking, judgement, creativity or responsibility.

One core programme must support multiple delivery contexts: self-study, NGOs and community programmes, schools, colleges, workplace training, structured institutional delivery and independent learning. Adapt examples, facilitator support, pace, language, activities and evidence requirements to the setting; do not create separate curricula or duplicate apps for each audience.

## Beginner-first and South Africa-first design
Design from the beginner outward, not from the expert downward. A learner must not need prior AI, coding, mathematics or advanced digital knowledge to begin Level 1.

Use plain language before technical terminology. Explain the idea first and introduce the professional term afterwards where it is useful. Learner-facing wording must not make ordinary first-time users feel that AI is only for experts.

Design first for real South African access conditions, including underserved, marginalised and rural communities, ordinary or older Android phones, expensive or unreliable data, weak or absent connectivity, shared devices and multilingual needs. Offline and low-data usefulness, simple navigation and accessibility are programme requirements, not optional extras.

## Multilingual architecture lock
The existing onboarding already records one learner language as `en`, `af` or `xh`. Preserve that choice and use it as the language selector for curriculum presentation.

Do not duplicate lesson IDs, module IDs, progress records, THINK evidence or assessments by language. English, Afrikaans and isiXhosa are presentation layers over the same canonical learning object. A learner who changes language remains in the same lesson and keeps the same progress.

Translation must preserve meaning, South African context, answer correctness and the plain-language-first rule. Technical terms may be retained where useful, but they must be explained naturally in the selected language. Translation must not create a second curriculum architecture.

Implementation sequence: prove the language layer on one canonical Level 1 lesson first; validate rendering, quiz correctness, offline behaviour and unchanged progress; then extend only after that pilot passes.

## Human thinking and responsibility
AI assists; it does not replace human reasoning, judgement, creativity or responsibility. Learning activities should make the learner think, try, check, explain and apply rather than passively copy AI output.

Use THINK in learner-friendly behaviour:
**Try it yourself → Ask to understand → Check the answer → Try again on your own → Say what you learned.**

Professional terminology may be taught progressively, but understanding must come before jargon.

## Assessment philosophy
Beginner assessment is formative. Use the pattern:
**LEARN → CHECK → EXPLAIN → TRY AGAIN → CONTINUE.**

Knowledge checks may record scores for learner feedback, programme evaluation or institutional evidence, but a percentage must not become an arbitrary barrier that excludes a beginner from continuing. Wrong answers should produce useful feedback and another attempt.

Applied work, independent explanation, checking and demonstrated reasoning are stronger evidence of learning than a quiz percentage alone.

## Adaptable institutional use
The same educational core may be supported by facilitator guidance, assessments, progress records and reporting for formal or structured settings. Those delivery layers must not change the core philosophy or create a separate programme.

Suitability for schools, colleges, NGOs or structured training does not imply accreditation, qualification status or endorsement. Any accreditation or formal alignment claim requires separate evidence and approval.

## Canonical programme boundary
- Level 1: eight beginner modules only.
- Level 2: eight Practical AI Skills modules.
- Level 3: eight AI Creator & Builder modules.
- Level 4: eight AI Innovation & Problem-Solving modules.
- Legacy Level 2 modules embedded in the old Level 1 data structure must not define the canonical Level 1 boundary.

## Canonical Level 1 learning scope
The controlled curriculum requires the beginner pathway to cover:
1. AI Is Already Around You — recognition, everyday AI, what AI is and is not.
2. Algorithms and Patterns — algorithm, pattern recognition, prediction, classification.
3. Data, Training Data and Models — data, training data, model, training versus inference.
4. Generative AI and Language Models — generative AI, tokens, next-token prediction, prompts, limitations.
5. Bias, Representation and African Data — algorithmic bias, underrepresentation, accents/languages, fairness testing.
6. Privacy, Safety and Human Agency — privacy, POPIA awareness, sensitive data, consent, human oversight.
7. Ubuntu, Ethics and Responsible AI — dignity, community impact, accountability, where AI should not be used.
8. Level 1 Applied Challenge — analyse an everyday AI system and explain what it does, data/model concepts, failure risks, affected people and human oversight.

## THINK integration
THINK is a teaching method, not a fifth level, module, course, app, certificate or navigation area.

Level 1 emphasis:
- T — Try independently before assistance.
- H — Hunt for understanding through explanation and hints.
- I — Investigate is introduced through simple checking and verification.
- N and K are used lightly where an activity naturally supports independent transfer and reflection.

Progression:
- Level 2 makes Investigate explicit.
- Level 3 makes Navigate independently central.
- Level 4 uses the complete T-H-I-N-K cycle.

## CREO source lock
Canonical CREO: Context, Request, Examples, Output.
Any legacy learner-facing definition that conflicts with this must be reconciled before release.

## Progress protection
Do not rename, clear or repurpose existing learner progress storage keys.
Do not convert historical lesson completion into THINK competence automatically.
If THINK evidence needs persistence, use a separate versioned evidence structure.

## Acceptance gates
1. Eight genuine Level 1 modules, no Level 2 contamination.
2. Beginner can start without prior AI knowledge.
3. Existing learner progress remains readable.
4. THINK is embedded without duplicate curriculum.
5. Core learning remains useful offline.
6. Levels 2–4 receive no unnecessary redesign.
7. No accreditation claim.
8. No deployment until explicit owner approval.
