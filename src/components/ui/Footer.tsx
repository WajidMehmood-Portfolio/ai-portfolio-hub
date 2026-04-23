// src/components/ui/Footer.tsx
import React from 'react';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

import { SOCIAL_URLS } from '../../lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] bg-clip-text text-transparent">
            WAJID M.
          </h3>
          <p className="text-[#3D3A50] text-sm mt-2 font-medium">
            © {new Date().getFullYear()} WAJID MEHMOOD. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          {[
            { icon: Linkedin, label: 'LinkedIn', href: SOCIAL_URLS.linkedin },
            { icon: Github, label: 'GitHub', href: SOCIAL_URLS.github },
            { icon: Twitter, label: 'Twitter', href: SOCIAL_URLS.twitter },
            { icon: Mail, label: 'Email', href: SOCIAL_URLS.email },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-[#6B6880] hover:text-[#F1F0FF] hover:scale-110 transition-all"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-[#3D3A50] text-xs font-mono uppercase tracking-[0.2em]">
          Designed with intention
        </div>
      </div>
    </footer>
  );
};

export default Footer;
