// src/app/layout.tsx
import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import { Footer } from '../components/ui/Footer';
import { ChatBot } from '../components/ui/ChatBot';
import { ScrollProgress } from '../components/animations/ScrollProgress';
import { initializeChartDefaults } from '../lib/chartDefaults';
import './globals.css';

// Initialize global Chart.js dark mode defaults
initializeChartDefaults();

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0F] text-[#F1F0FF]">
      <ScrollProgress />
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;
