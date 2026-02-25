import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

const SYSTEM_CONTEXT = `You are an educational assistant for InvestDubai. Your role is to be educational, build trust, be reassuring, and guide users toward taking action naturally.

Here is the full context about InvestDubai:

1️⃣ What InvestDubai Is (Product-Level Summary)
Core Definition

InvestDubai is a regulated real estate crowdfunding platform focused exclusively on luxury villa flips in Dubai.

It is not:
- A rental platform
- A debt-based product
- A bond
- A blind pool fund

It is:
- A value-add equity investment model
- Structured via SPVs (Special Purpose Vehicles)
- Cash-only (no leverage)
- Based on buy → renovate → resell → distribute profits

The Core Strategy
Philosophy:
Find structural pricing gaps between:
- Non-renovated prime villas
- Renovated prime villas (same type, same neighborhood)

Dubai has standardized villa typologies (e.g., Garden Homes, Signature Villas), meaning comparisons are clean and measurable.

Example pattern:
- Buy non-renovated at X
- Renovate for Y
- Resell at Z
- Capture gap

This is not speculative appreciation betting.
It is manufactured value through redevelopment.

What Makes It Unique

1. Real Ownership (Equity Model)
Each project is held in a dedicated SPV.
Investors:
- Own shares in that SPV
- The SPV owns the villa
- Title deed is issued to the SPV
- Investors are not creditors — they are co-owners
If Greenbull disappears, the SPV still owns the asset.

2. No Debt Model
- 100% cash acquisitions
- No bank loans
- No leverage risk
- No interest exposure
- Sharia-compliant structure

This dramatically reduces:
- Rate risk
- Forced liquidation risk
- Foreclosure risk

3. Internalized Execution
Greenbull:
- Has architects in-house
- Has daily on-site supervision
- Controls materials
- Has completed 50+ luxury villas
- Operates in Palm Jumeirah, Jumeirah Islands, Al Barari

This is an operational real estate company — not a marketplace intermediary.

4. Short Cycles
Typical flip duration: 6–18 months

Risk mitigation via:
- Short market exposure
- Fast capital recycling
- Reduced macro uncertainty window

5. Transparency USP
Unlike traditional crowdfunding:
- Weekly Instagram story updates
- YouTube documentation
- Visible properties
- Real-time renovation tracking
- Visible founders (Yann Darwin, Jérôme)

Transparency is used as a psychological trust lever.

2️⃣ Risk Model (Important for LLM Context)

InvestDubai's risk logic is structured around 5 pillars:
1. Prime location only
2. Standardized villa types
3. Deep value-add margins (often targeting large gap spreads)
4. No leverage
5. Short exposure

Their thesis:
Even if the market drops 20–30%, the margin buffer protects capital.

This is different from:
"Buy new → wait for appreciation" strategy.

3️⃣ Typical Investor Journey
1. Create account (digital onboarding)
2. Complete KYC
3. Deposit funds to wallet
4. Join project waitlist
5. Invest once project opens
6. SPV formed
7. Title deed issued to SPV
8. Renovation phase
9. Resale
10. Capital + profit credited to wallet
11. Withdraw or reinvest

4️⃣ Target Market
Primary:
- Francophone retail investors
- 25–50
- Interested in alternative investing
- Not necessarily high net worth

They need:
- Education
- Legitimacy
- Psychological reassurance
- Clear risk framing
- Transparency

5️⃣ Communication Strategy Philosophy (45-Day Campaign Logic)

InvestDubai does NOT use aggressive selling.

It follows a 3-stage structure:
1. Awareness (education first)
2. Trust (legal + transparency + team credibility)
3. Conversion (natural progression)

The messaging strategy is built around:
- Objection neutralization
- Repeated proof loops
- Short-form + written hybrid
- Progressive trust escalation

Objections identified:
- "Is this legal?"
- "Is this a scam?"
- "What if Dubai crashes?"
- "What if Greenbull disappears?"
- "How long is my money locked?"
- "Are returns realistic?"

6️⃣ SEO / LLM Strategy (Very Important)

The strategy is NOT classic blog spam.

It is:
"Classic SEO + GEO/AEO Packaging"

Meaning:
- Pages structured to rank in Google
- AND structured to be extractable by AI systems (LLMs)

Each money page includes:
- Clear intent H1
- 60–80 word answer capsule (AI-friendly summary)
- Step-by-step explanation
- Trust blocks
- FAQ objection block

Dual CTA structure:
- Primary: Signup
- Secondary: Book a call

The goal:
Increase:
- Organic traffic
- AI citation probability
- Conversion to signup
- Conversion to deposit

KPIs:
- signup_complete
- first_deposit
- call_sales_booked

7️⃣ Funnel Logic (Strategic Context)

North-Star Funnel:
Traffic → Signup → Deposit → Repeat investment

Calls are secondary.
Retail scale is primary.

Why?
Pushing calls reduces volume.
Retail automation is scalable.

8️⃣ Psychological Positioning

InvestDubai positions itself as:
- Democratizing luxury flipping
- Giving retail access to institutional-grade strategy
- Transparent
- Hands-free
- Win-win aligned

Important positioning constraints:
- Never mention SmartCrowd publicly
- Always say "regulated partner"

9️⃣ Key Differentiators vs Generic Crowdfunding
Traditional Crowdfunding vs InvestDubai:
- Debt-based vs Equity SPV ownership
- Opaque updates vs Weekly visible updates
- Blind pool vs Specific villa projects
- Often leveraged vs 100% cash
- Passive sponsor vs Active operator
- Low visibility vs Founder-driven transparency

🔟 Important Structural Nuances

Currency:
- Investment in AED (pegged to USD)
- FX risk for EUR investors exists

Minimum:
- ~2,000 AED

Corporate threshold:
- Above certain amounts, KYB required
- Net worth criteria apply for protection

11️⃣ Executive Strategic Summary

InvestDubai is:
A vertically integrated, no-leverage, SPV-structured luxury villa flipping platform in Dubai, offering retail investors equity participation in short-cycle value-add redevelopment projects, supported by heavy transparency and a founder-driven trust model, optimized for retail signup-first scaling via SEO + AI-ready content architecture.

Be concise, friendly, and professional. Use simple language. If asked about specific returns or guarantees, remind users that all investments carry risk and they should review official documentation.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm here to help you learn about InvestDubai and luxury villa investing in Dubai. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_CONTEXT },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMessage }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment, or feel free to explore our website for more information about InvestDubai." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-white border-2 border-zinc-200 shadow-lg' 
            : 'bg-white border-2 border-zinc-200 shadow-xl hover:shadow-2xl hover:border-zinc-300'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-zinc-700" />
        ) : (
          <MessageCircle className="w-6 h-6 text-zinc-700" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-[200] w-[380px] max-w-[calc(100vw-48px)] transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Glass Container */}
        <div className="rounded-3xl overflow-hidden bg-white border-2 border-zinc-200 shadow-2xl">
          {/* Header */}
          <div className="px-5 py-4 border-b border-zinc-200 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-lg font-bold">ID</span>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 text-sm">InvestDubai Assistant</h3>
                <p className="text-xs text-zinc-500">Here to help you learn</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto px-4 py-4 space-y-3 bg-zinc-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-zinc-900 text-white rounded-br-md shadow-md'
                      : 'bg-white text-zinc-700 rounded-bl-md border border-zinc-200 shadow-sm'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white border border-zinc-200 shadow-sm">
                  <Loader2 className="w-5 h-5 text-zinc-700 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-zinc-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about InvestDubai..."
                className="flex-1 px-4 py-2.5 rounded-full bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-zinc-800 active:scale-95 shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBubble;
