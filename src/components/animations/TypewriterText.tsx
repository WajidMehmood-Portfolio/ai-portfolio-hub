// src/components/animations/TypewriterText.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  holdDuration?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 60,
  deleteSpeed = 30,
  holdDuration = 2000,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [timer, setTimer] = useState(typingSpeed);

  useEffect(() => {
    const handleType = () => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTimer(deleteSpeed);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTimer(typingSpeed);
      }

      if (!isDeleting && displayText === fullText) {
        setTimer(holdDuration);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setTimer(500);
      }
    };

    const timeout = setTimeout(handleType, timer);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, timer, typingSpeed, deleteSpeed, holdDuration]);

  return (
    <div className="flex items-center gap-1 font-mono text-lg text-violet-400 min-h-[1.75rem]">
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="w-2 h-5 bg-violet-400"
      />
    </div>
  );
};

export default TypewriterText;
