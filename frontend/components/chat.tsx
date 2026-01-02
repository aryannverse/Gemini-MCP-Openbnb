'use client';

import { Bot, Send, User, Paperclip } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useRef, useEffect, useState } from 'react';

// Custom interface for messages since we are managing state manually
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [localInput, setLocalInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!localInput.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: localInput,
    };

    setMessages(prev => [...prev, userMessage]);
    setLocalInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }
      
      // Handle streaming response
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let assistantMessage: Message = {
           id: (Date.now() + 1).toString(),
           role: 'assistant',
           content: ''
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          // Our API route currently pipes the raw text from backend or our own stream.
          // We simply append to the last message.
          
          assistantMessage.content += chunk;
          
          setMessages(prev => {
             const newMessages = [...prev];
             // Update the last message (which is the assistant one we added)
             newMessages[newMessages.length - 1] = { ...assistantMessage };
             return newMessages;
          });
        }
      }

    } catch (err) {
      console.error("Failed to send message:", err);
      // Optional: Add error message to chat
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#09090b] text-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 glass z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-lg tracking-tight">Airbnb Agent</h1>
            <p className="text-xs text-zinc-400">Powered by Gemini 2.0 & LangGraph</p>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-zinc-400" />
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
              How can I help you find a place?
            </h2>
            <p className="text-zinc-500 max-w-md">
              Ask me about listings, prices, or locations. I can search Airbnb for you.
            </p>
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              "flex gap-4 max-w-3xl mx-auto",
              m.role === 'user' ? "justify-end" : "justify-start"
            )}
          >
            {m.role !== 'user' && (
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-zinc-300" />
              </div>
            )}
            
            <div
              className={cn(
                "rounded-2xl px-5 py-3.5 max-w-[85%] shadow-sm",
                m.role === 'user' 
                  ? "bg-indigo-600 text-white" 
                  : "bg-zinc-800/80 text-zinc-100 border border-white/5"
              )}
            >
               <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 max-w-none text-sm md:text-base">
                   <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({node, ...props}) => <a {...props} className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2" target="_blank" rel="noopener noreferrer" />
                      }}
                   >
                    {m.content || ''}
                   </ReactMarkdown>
               </div>
            </div>

            {m.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
                <User className="w-5 h-5 text-indigo-400" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
            <div className="flex gap-4 max-w-3xl mx-auto justify-start">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-zinc-300" />
                 </div>
                 <div className="rounded-2xl px-5 py-3.5 bg-zinc-800/80 border border-white/5 flex items-center gap-2">
                    <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"></span>
                 </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-[#09090b] border-t border-white/10">
        <form
          onSubmit={handleFormSubmit}
          className="max-w-3xl mx-auto relative flex items-center gap-2"
        >
          <div className="relative flex-1">
            <input
              className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-100 rounded-full pl-6 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-zinc-500"
              value={localInput}
              placeholder="Type your message..."
              onChange={(e) => setLocalInput(e.target.value)}
            />
            <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-zinc-500 hover:text-zinc-300 transition-colors"
                onClick={() => console.log("Attachment clicked")}
            >
                <Paperclip className="w-4 h-4" />
            </button>
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !localInput.trim()}
            className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-lg hover:shadow-indigo-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 ml-0.5" />
          </button>
        </form>
        <p className="text-center text-xs text-zinc-600 mt-2">
            AI can make mistakes. Please check important info.
        </p>
      </div>
    </div>
  );
}
