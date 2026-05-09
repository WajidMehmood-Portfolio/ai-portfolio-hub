import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Circle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  about: "I'm Wajid Mehmood, a full-stack developer specializing in Flutter and AI/ML. I build performant mobile apps and train machine learning models. 4+ years experience, 15+ apps shipped, 40+ models trained. 🚀",
  services: "I offer the following services:\n1) Flutter App Development (Android & iOS)\n2) AI/ML Model Training (PyTorch, TensorFlow)\n3) Full Stack Development (Next.js, Node.js, Firebase)\nHow can I help with your project? 💼",
  projects: "Check out some of my key projects:\n1) EcoTracker Mobile - AI sustainability app\n2) ChestAI Diagnostics - X-ray classification\n3) Nexus CRM - Full-stack with ML lead scoring\nWant to see more details? 🌐",
  tech: "My favorite stack includes:\n• Flutter (95%), Dart (92%)\n• React (85%), Next.js (82%)\n• Tailwind CSS (90%)\n• PyTorch, TensorFlow, DeepSeek, Claude AI, Gemini\n• Firebase, PostgreSQL, Node.js, FastAPI 🛠️",
  hire: "Yes! I'm available for freelance and full-time work. 🤝\nEmail: wajidmehmood074@gmail.com\nLocation: Islamabad, Pakistan\nLinkedIn: https://www.linkedin.com/in/wajid-mehmood-5507202b2/",
  contact: "You can reach me at:\n📧 Email: wajidmehmood074@gmail.com\n🔗 LinkedIn: linkedin.com/in/wajid-mehmood-5507202b2/\nOr use the contact form on this page! 📬",
  cv: "You can click the 'Download CV' button on the hero section of my portfolio, or email me at wajidmehmood074@gmail.com and I'll send it directly! 📄",
  experience: "My journey so far:\n• 2024-Present: Sr. Flutter Developer & ML Lead at TechFlow Solutions\n• 2022-2024: Full-Stack Developer at DataPulse AI\n• 2021-2022: MLE Fellow at AgriCompute Research\n• Education: BSCS from NUML (Started 2022) 💼",
  education: "I'm currently pursuing a BSCS (Bachelor of Science in Computer Science) from NUML University, started in 2022. I focus on distributed systems and computational intelligence. 🎓",
};

const QUICK_REPLIES = [
  { label: "🚀 Services", key: "services" },
  { label: "💼 Projects", key: "projects" },
  { label: "📄 CV", key: "cv" },
  { label: "📬 Contact", key: "contact" },
];

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Assalam-o-Alaikum! I'm Wajid's AI assistant. How can I help you today?\n\nYou can ask me about:\n• Services\n• Projects\n• Experience\n• Hire me\n• Contact",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Process bot response
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = "I'm not sure about that. Try asking about my services, projects, experience, or contact info. You can also email me at wajidmehmood074@gmail.com";

      if (lowerText.includes("about") || lowerText.includes("yourself") || lowerText.includes("who are you")) response = KNOWLEDGE_BASE.about;
      else if (lowerText.includes("service") || lowerText.includes("offer")) response = KNOWLEDGE_BASE.services;
      else if (lowerText.includes("project") || lowerText.includes("built")) response = KNOWLEDGE_BASE.projects;
      else if (lowerText.includes("tech") || lowerText.includes("stack") || lowerText.includes("use")) response = KNOWLEDGE_BASE.tech;
      else if (lowerText.includes("hire") || lowerText.includes("available") || lowerText.includes("work")) response = KNOWLEDGE_BASE.hire;
      else if (lowerText.includes("contact") || lowerText.includes("reach")) response = KNOWLEDGE_BASE.contact;
      else if (lowerText.includes("cv") || lowerText.includes("resume")) response = KNOWLEDGE_BASE.cv;
      else if (lowerText.includes("experience") || lowerText.includes("career")) response = KNOWLEDGE_BASE.experience;
      else if (lowerText.includes("education") || lowerText.includes("study") || lowerText.includes("university")) response = KNOWLEDGE_BASE.education;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-[#0A0A0F] border border-[#1E1E2E] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-[#111118] border-b border-[#1E1E2E] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#1E1E2E] flex items-center justify-center border border-[#7C3AED]/30">
                    <Bot size={20} className="text-[#06B6D4]" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#111118]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F1F0FF]">Wajid's Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-[#10B981] font-bold uppercase tracking-wider uppercase">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#6B6880] hover:text-[#F1F0FF] transition-colors"
                id="chatbot-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={cn(
                    "flex w-full mb-2",
                    msg.isBot ? "justify-start" : "justify-end"
                  )}
                >
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                    msg.isBot 
                      ? "bg-[#111118] text-[#A09DB8] border border-[#1E1E2E] rounded-tl-none" 
                      : "bg-[#7C3AED] text-white rounded-tr-none shadow-[0_4px_12px_rgba(124,58,237,0.3)]"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#111118] border border-[#1E1E2E] p-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-[#6B6880] rounded-full" />
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#6B6880] rounded-full" />
                    <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#6B6880] rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply.key}
                    onClick={() => handleSend(reply.label)}
                    className="px-3 py-1.5 bg-[#1A1A24] border border-[#2A2A3E] rounded-full text-xs text-[#A09DB8] hover:border-[#7C3AED] hover:text-[#F1F0FF] transition-all"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-[#1E1E2E] bg-[#111118]">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-[#0A0A0F] border border-[#2A2A3E] rounded-xl pl-4 pr-12 py-3 text-sm text-[#F1F0FF] placeholder:text-[#3D3A50] focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className={cn(
                    "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all",
                    inputValue.trim() ? "text-[#06B6D4] hover:bg-[#06B6D4]/10" : "text-[#3D3A50]"
                  )}
                  id="chatbot-send-btn"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Bubble */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(6,182,212,0.3)] transition-all",
          isOpen ? "bg-[#1E1E2E] text-[#F1F0FF]" : "bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] text-white"
        )}
        id="chatbot-toggle-btn"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};
