// src/components/sections/SkillsSection.tsx
import React, { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Badge } from '../ui/Badge';
import { SKILLS_DATA } from '../../data/skills';
import { motion, AnimatePresence } from 'motion/react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const categories = Object.keys(SKILLS_DATA);

  const radarData = {
    labels: SKILLS_DATA[activeTab].map(s => s.name),
    datasets: [
      {
        label: 'Skill Level',
        data: SKILLS_DATA[activeTab].map(s => s.level),
        backgroundColor: 'rgba(124, 58, 237, 0.15)',
        borderColor: '#7C3AED',
        borderWidth: 2,
        pointBackgroundColor: '#7C3AED',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#7C3AED',
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: { color: '#2A2A3E' },
        grid: { color: '#1E1E2E' },
        pointLabels: { 
          color: '#A09DB8',
          font: { size: 12, family: 'Inter' }
        },
        ticks: { 
          display: false,
          backdropColor: 'transparent'
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <SectionWrapper id="skills" className="bg-[#111118]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0FF] mb-4">
          My <span className="gradient-text">Excellence</span> Stack
        </h2>
        <p className="text-[#6B6880] max-w-2xl mx-auto">
          I've curated a toolkit that enables end-to-end development, focusing on performance,
          on-device intelligence, and pixel-perfect design.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <div className="inline-flex p-1 bg-[#111118] border border-[#1E1E2E] rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === cat 
                  ? 'bg-[#7C3AED] text-white shadow-lg' 
                  : 'text-[#6B6880] hover:text-[#A09DB8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Radar Chart */}
        <div className="bg-[#13131A] p-8 rounded-3xl border border-[#1E1E2E] aspect-square flex items-center justify-center">
          <Radar data={radarData} options={radarOptions} />
        </div>

        {/* Skill Details */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {SKILLS_DATA[activeTab].map((skill) => (
                <div 
                  key={skill.name} 
                  className="bg-[#1A1A24] border border-[#2A2A3E] p-5 rounded-2xl group hover:border-[#7C3AED]/40 transition-colors"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#F1F0FF] font-bold">{skill.name}</span>
                    <span className="text-xs font-bold text-[#A78BFA]">{skill.level}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-[#111118] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <div className="pt-6 border-t border-[#1E1E2E]">
            <h4 className="text-[#F1F0FF] font-bold mb-4">Complementary Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Docker', 'Vercel', 'Postman', 'Figma', 'Jupyter', 'Weights & Biases'].map(tool => (
                <Badge key={tool} variant="outline">{tool}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
