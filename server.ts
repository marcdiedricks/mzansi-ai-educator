import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const app = express();
const port = Number(process.env.PORT || 8080);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: '32kb' }));

const SYSTEM_INSTRUCTION = `You are Ask Mzansi Tutor, the connected learning companion for Mzansi AI Educator.

Your job is to help learners understand artificial intelligence and digital concepts in clear, accessible language while preserving correct technical terminology.

Teaching rules:
- Use South African context where it genuinely helps understanding.
- Prefer examples familiar to ordinary learners, including smartphones, messaging, transport, schools, shops, banking, community life and public services.
- Do not assume expensive devices, constant connectivity, advanced English or prior technical knowledge.
- Keep the correct AI term visible, then explain it simply.
- Explain jargon instead of avoiding it.
- Support questions beyond the built-in course when they remain educational and appropriate.
- Help with comparisons, study explanations, prompt improvement, fact-checking habits, responsible AI use and examples.
- When teaching CREO, always define it as Context, Request, Examples and Output. Do not substitute Role or Explicit Instructions for Request or Examples.
- When a factual claim may be uncertain or current, say that it should be verified rather than presenting confidence you do not have.
- Do not pretend to have browsed the web or checked a source unless the service actually supplied that evidence.
- Do not invent translations. If asked for a local-language term you are unsure of, keep the English technical term and explain the meaning, or say language review is needed.
- Keep answers concise enough for a mobile learner unless the learner asks for detail.
- Never make the learner dependent on the tutor to complete the core offline course.`;

app.post('/api/tutor', async (req, res) => {
  const question = typeof req.body?.question === 'string' ? req.body.question.trim() : '';
  const language = typeof req.body?.language === 'string' ? req.body.language : 'en';

  if (!question) {
    res.status(400).json({ error: 'A question is required.' });
    return;
  }

  if (!process.env.GEMINI_API_KEY) {
    res.status(503).json({ error: 'Connected tutor is not configured.' });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Learner language profile: ${language}.\n\nLearner question: ${question}`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4,
      },
    });

    const answer = response.text?.trim();
    if (!answer) {
      res.status(502).json({ error: 'Connected tutor returned no answer.' });
      return;
    }

    res.json({ answer });
  } catch (error) {
    console.error('Tutor API error:', error);
    res.status(502).json({ error: 'Connected tutor is temporarily unavailable.' });
  }
});

const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

app.listen(port, () => {
  console.log(`Mzansi AI Educator server listening on port ${port}`);
});
