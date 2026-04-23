// src/components/ui/NavBar.tsx
import React, { useState } from 'react';
import { NAV_LINKS } from '../../lib/constants';
import { cn } from '../../lib/utils';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#1E1E2E]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] bg-clip-text text-transparent">
          WAJID M.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[#F1F0FF]',
                activeSection === link.href.slice(1) ? 'text-[#A78BFA]' : 'text-[#6B6880]'
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#F1F0FF]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0D14] border-b border-[#1E1E2E] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2 transition-colors',
                    activeSection === link.href.slice(1) ? 'text-[#A78BFA]' : 'text-[#6B6880]'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
