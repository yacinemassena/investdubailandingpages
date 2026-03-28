import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

// Format AI response with proper styling
const formatMessage = (content: string) => {
  // Split by double newlines for paragraphs
  const blocks = content.split(/\n\n+/);
  
  return blocks.map((block, blockIndex) => {
    // Check if block is a bullet list
    const lines = block.split('\n');
    const isBulletList = lines.every(line => 
      line.trim().startsWith('•') || 
      line.trim().startsWith('-') || 
      line.trim().startsWith('*') ||
      line.trim() === ''
    );
    
    if (isBulletList && lines.some(l => l.trim())) {
      return (
        <ul key={blockIndex} className="my-2 space-y-1.5">
          {lines.filter(l => l.trim()).map((line, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">•</span>
              <span>{line.replace(/^[•\-*]\s*/, '')}</span>
            </li>
          ))}
        </ul>
      );
    }
    
    // Check for numbered list
    const isNumberedList = lines.every(line => 
      /^\d+[.)]/.test(line.trim()) || line.trim() === ''
    );
    
    if (isNumberedList && lines.some(l => l.trim())) {
      return (
        <ol key={blockIndex} className="my-2 space-y-1.5">
          {lines.filter(l => l.trim()).map((line, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 font-medium min-w-[1.25rem]">{i + 1}.</span>
              <span>{line.replace(/^\d+[.)]\s*/, '')}</span>
            </li>
          ))}
        </ol>
      );
    }
    
    // Regular paragraph
    return (
      <p key={blockIndex} className={blockIndex > 0 ? 'mt-3' : ''}>
        {block}
      </p>
    );
  });
};

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
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/logoinvestdubairound.svg" 
                  alt="InvestDubai" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 text-body">InvestDubai Assistant</h3>
                <p className="text-body text-zinc-500">Here to help you learn</p>
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
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-body leading-relaxed font-light ${
                    message.role === 'user'
                      ? 'bg-zinc-900 text-white rounded-br-md shadow-md'
                      : 'bg-white text-zinc-700 rounded-bl-md border border-zinc-200 shadow-sm'
                  }`}
                >
                  {message.role === 'assistant' ? formatMessage(message.content) : message.content}
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
                className="flex-1 px-4 py-2.5 rounded-full bg-zinc-50 border border-zinc-200 text-body text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
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
