import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

const SYSTEM_PROMPT = `You are the InvestDubai Assistant — a friendly, knowledgeable advisor for Dubai real estate investing.

CRITICAL RULES:
- NEVER use markdown formatting (no **, no ##, no bullet points with -). Write in plain conversational text.
- Respond naturally to greetings. If someone says "hi" or "hello", just greet them back warmly and ask how you can help. Do NOT dump information unprompted.
- Only provide detailed explanations when the user actually asks a question.
- Keep responses concise and conversational.
- You can speak French or English depending on the user's language.

YOUR KNOWLEDGE (use when relevant questions are asked):

InvestDubai is a regulated real estate crowdfunding platform for luxury villa flips in Dubai.

How it works: Buy undervalued villas in prime locations, renovate them, sell at a profit, distribute returns to investors. Typical cycle is 6-18 months.

Structure: Investors own shares in an SPV (Special Purpose Vehicle) that holds the property. This means real ownership, not debt. 100% cash acquisitions, no bank loans, Sharia-compliant.

Risk protection: Prime locations only, standardized villa types for clean comparisons, deep margins (20-30% buffer), no leverage, short exposure windows.

What makes it unique: Real SPV ownership (if Greenbull disappears, you still own the asset), in-house architects and daily supervision, 50+ completed villas, weekly Instagram updates and YouTube documentation, visible founders (Yann Darwin, Jérôme).

Key facts: Minimum ~2,000 AED (~$550), currency is AED (pegged to USD), regulated platform.

Common objections to address confidently:
- Legal? Yes, fully regulated with real title deeds
- Scam? Real properties, visible founders, weekly updates, 50+ completed projects
- Market crash? Margin buffer protects capital, no leverage means no forced sales
- Company disappears? SPV owns the asset independently
- Money locked? 6-18 months typically

Never guarantee specific returns. For detailed advice, suggest they book a call or review official docs.`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: messages.filter(m => m.role !== 'system').map(m => ({
          role: m.role,
          content: m.content
        }))
      })
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      console.error('Anthropic API error:', errorText);
      return res.status(500).json({ error: 'Failed to get AI response' });
    }

    const data = await anthropicResponse.json();
    res.json({ content: data.content[0].text });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
