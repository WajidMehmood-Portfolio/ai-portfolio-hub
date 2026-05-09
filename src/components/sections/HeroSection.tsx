// src/components/sections/HeroSection.tsx
import React from 'react';
import { Button } from '../ui/Button';
import { TypewriterText } from '../animations/TypewriterText';
import { OrbitSystem } from '../hero/OrbitSystem';
import { HeroBackground } from '../hero/HeroBackground';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeScaleVariants: any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 1.2 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0A0F]">
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#6EE7B7] text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              Available for work
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#F1F0FF] leading-[1.1] tracking-tight mb-4"
            >
              I build Flutter apps.<br />
              I train the models<br />
              <span className="gradient-text">
                that power them.
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <TypewriterText 
                texts={[
                  "Flutter Developer",
                  "ML Model Trainer",
                  "End-to-End AI Builder",
                  "On-Device AI Specialist"
                ]}
              />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-[#6B6880] text-base md:text-lg max-w-md leading-relaxed mb-10"
            >
              Crafting performant mobile experiences with intelligent, trained models — from pixel to prediction.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="gap-2">
                View My Work <ArrowRight size={18} />
              </Button>
              <a 
                href="/Wajid_Mehmood_CV.pdf" 
                download="Wajid_Mehmood_CV.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#111118] border border-[#1E1E2E] text-[#F1F0FF] font-semibold hover:border-[#7C3AED]/50 transition-all gap-2"
              >
                Download CV <Download size={18} />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-16 flex flex-col items-center lg:items-start gap-2"
            >
              <span className="text-[10px] text-[#3D3A50] uppercase font-bold tracking-[0.2em]">scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#7C3AED]"
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Orbit System */}
          <motion.div 
            className="lg:col-span-5 flex justify-center items-center"
            variants={fadeScaleVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hidden lg:block">
              <OrbitSystem scale={1} />
            </div>
            <div className="block lg:hidden scale-75 md:scale-90">
              <OrbitSystem scale={0.75} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
