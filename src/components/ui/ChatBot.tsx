import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Circle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { cn } from '../../lib/utils';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  about: `## About Wajid Mehmood
Wajid is an **AI Engineer & Full-Stack Developer** with a focus on building performant mobile apps and training production-grade machine learning models. 

**Key Stats:**
- 4+ years of industry experience
- 15+ mobile apps shipped to stores
- 40+ ML models trained and deployed

He specializes in bridging the gap between complex AI research and user-friendly mobile interfaces.`,

  services: `## Services & Expertise
Wajid provides high-impact technical solutions across three core domains:

1. **Flutter App Development**: Native-performance cross-platform apps for iOS & Android.
2. **AI/ML Engineering**: Custom model training (PyTorch/TensorFlow) and LLM integration.
3. **Full-Stack Systems**: Scalable backends using Next.js, Node.js, and FastAPI.

Whether you're looking for a **MVP build** or **AI integration** into existing systems, Wajid delivers technically rigorous results.`,

  projects: `## Featured Projects
Here are the highlights of Wajid's recent work:

1. **EcoTracker Mobile**: An AI-powered sustainability companion built with **Flutter and TensorFlow Lite**.
2. **ChestAI Diagnostics**: A medical imaging system for X-ray classification using **PyTorch and FastAPI**.
3. **Nexus CRM**: A full-stack enterprise tool with built-in **ML for lead scoring**, leveraging Next.js and PostgreSQL.

Each project is designed with a focus on **efficiency, scalability, and user impact.**`,

  tech: `## Technical Stack
Wajid's toolkit is selected for performance and modern standards:

| Category | Technologies |
| :--- | :--- |
| **Mobile** | Flutter, Dart, Android SDK, iOS |
| **AI/ML** | PyTorch, TensorFlow, Claude AI, Gemini, DeepSeek |
| **Frontend** | React, Next.js, Tailwind CSS, TypeScript |
| **Backend** | Node.js, FastAPI, PostgreSQL, Firebase |

He maintains a **90%+ proficiency** across these core technologies.`,

  hire: `## Availability & Collaboration
Wajid is currently **available** for:
- 🚀 Full-time Senior Roles
- 🛠️ Freelance Projects (MVP/AI focus)
- 🤝 Open-source Collaborations

**Location**: Islamabad, Pakistan (Open to Remote)
**Next Steps**: You can reach out directly via **wajidmehmood074@gmail.com** to discuss your project requirements.`,

  contact: `## Let's Connect
You can reach Wajid through any of these professional channels:

- 📧 **Email**: wajidmehmood074@gmail.com
- 🔗 **LinkedIn**: [wajidmehmood](https://www.linkedin.com/in/wajid-mehmood-5507202b2/)
- 💻 **GitHub**: [WajidMehmood-Portfolio](https://github.com/WajidMehmood-Portfolio)

I'd recommend reaching out via **email** for the fastest response regarding project inquiries!`,

  cv: `## Resume / CV
You can download Wajid's latest CV by clicking the **"Download CV"** button in the hero section of this portfolio. 

Alternatively, feel free to email him at **wajidmehmood074@gmail.com** and he can send you a detailed technical summary direct to your inbox.`,

  experience: `## Professional Journey
Wajid has built a robust career at the intersection of AI and Mobile Dev:

- **2024-Present**: Sr. Flutter Developer & ML Lead at **TechFlow Solutions**.
- **2022-2024**: Full-Stack Developer at **DataPulse AI**.
- **2021-2022**: MLE Fellow at **AgriCompute Research**.

He holds a **BSCS from NUML** (Started 2022), focusing on distributed systems and computational intelligence.`,

  education: `## Education
Currently pursuing a **Bachelor of Science in Computer Science (BSCS)** at **NUML University** (2022-Present). 

**Focus Areas:**
- 🧠 Distributed Systems
- 🤖 Computational Intelligence
- 📱 Advanced Mobile Architecture

Wajid consistently applies academic rigor to his practical engineering builds.`,

  tech_tip: `### ARIA Tech Tip: Flutter Performance
When building complex Flutter lists, always use **ListView.builder** instead of the default constructor. It lazily loads children only as they enter the viewport, which significantly reduces memory footprint and prevents frame drops during scrolling. 

Also, keep your build methods small and use **const constructors** wherever possible to minimize unnecessary widget rebuilds! 🛠️`,

  ml_tip: `### AI Perspective: Local vs. Cloud ML
For mobile apps like Wajid's **EcoTracker**, using **on-device inference (TFLite/CoreML)** is superior for privacy and latency. However, for training heavy models like **ChestAI**, high-VRAM cloud instances are essential. 

The future is **Hybrid AI** — processing sensitive features locally and offloading heavy compute tasks to optimized cloud endpoints via FastAPI. 🧠`,
};

const QUICK_REPLIES = [
  { label: "🚀 Profile", key: "about" },
  { label: "🛠️ Services", key: "services" },
  { label: "💼 Projects", key: "projects" },
  { label: "📬 Contact", key: "contact" },
];

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! 👋 I'm **ARIA**, Wajid Mehmood's AI assistant.\n\nWhether you're here to explore the portfolio, get answers about Wajid's work and skills, or just need help with a tech problem — I've got you covered.\n\nWhat can I help you with today?",
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
      let response = "I'm not sure about that. Try asking about Wajid's services, projects, performance metrics, or contact info. You can also reach him directly at wajidmehmood074@gmail.com for specific inquiries.";

      if (lowerText.includes("about") || lowerText.includes("yourself") || lowerText.includes("who are you") || lowerText.includes("profile")) response = KNOWLEDGE_BASE.about;
      else if (lowerText.includes("service") || lowerText.includes("offer") || lowerText.includes("can you do")) response = KNOWLEDGE_BASE.services;
      else if (lowerText.includes("project") || lowerText.includes("built") || lowerText.includes("work")) response = KNOWLEDGE_BASE.projects;
      else if (lowerText.includes("tech") || lowerText.includes("stack") || lowerText.includes("use") || lowerText.includes("skill") || lowerText.includes("language")) response = KNOWLEDGE_BASE.tech;
      else if (lowerText.includes("hire") || lowerText.includes("available") || lowerText.includes("available for work")) response = KNOWLEDGE_BASE.hire;
      else if (lowerText.includes("contact") || lowerText.includes("reach") || lowerText.includes("email")) response = KNOWLEDGE_BASE.contact;
      else if (lowerText.includes("cv") || lowerText.includes("resume")) response = KNOWLEDGE_BASE.cv;
      else if (lowerText.includes("experience") || lowerText.includes("career") || lowerText.includes("timeline")) response = KNOWLEDGE_BASE.experience;
      else if (lowerText.includes("education") || lowerText.includes("study") || lowerText.includes("university") || lowerText.includes("numl")) response = KNOWLEDGE_BASE.education;
      else if (lowerText.includes("flutter") || lowerText.includes("performance") || lowerText.includes("slow")) response = KNOWLEDGE_BASE.tech_tip;
      else if (lowerText.includes("ai") || lowerText.includes("ml") || lowerText.includes("model") || lowerText.includes("cloud")) response = KNOWLEDGE_BASE.ml_tip;

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
            className="mb-4 w-[350px] md:w-[450px] h-[600px] bg-[#0A0A0F] border border-[#1E1E2E] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
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
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-[#F1F0FF]">ARIA</h3>
                    <span className="text-[10px] bg-[#7C3AED]/20 text-[#7C3AED] px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">Assistant</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[10px] text-[#6B6880] font-medium">Adaptive Reasoning Intelligence</span>
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
                    "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed",
                    msg.isBot 
                      ? "bg-[#111118] text-[#A09DB8] border border-[#1E1E2E] rounded-tl-none" 
                      : "bg-[#7C3AED] text-white rounded-tr-none shadow-[0_4px_12px_rgba(124,58,237,0.3)]"
                  )}>
                    {msg.isBot ? (
                      <div className="markdown-content">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{msg.text}</div>
                    )}
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
