// src/components/sections/AboutSection.tsx
import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TIMELINE_DATA } from '../../data/timeline';
import { CounterAnimation } from '../animations/CounterAnimation';
import { motion } from 'motion/react';
import { User, Code, Brain, Rocket } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Apps Shipped', value: 15, icon: Rocket },
    { label: 'Models Trained', value: 40, icon: Brain },
    { label: 'Happy Clients', value: 25, icon: User },
    { label: 'Years Exp', value: 4, icon: Code },
  ];

  return (
    <SectionWrapper id="about" className="bg-[#0A0A0F]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Bio & Stats */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F0FF]">
              From Pixel <span className="text-[#A78BFA]">To Prediction</span>.
            </h2>
            <p className="text-[#A09DB8] leading-relaxed text-lg">
              I’m WAJID MEHMOOD, a full-stack developer who lives at the intersection of mobile 
              engineering and artificial intelligence. I don't just build the interface; 
              I architect the intelligence that drives it.
            </p>
            <p className="text-[#A09DB8] leading-relaxed">
              With over 4 years of experience specializing in Flutter and ML engineering, 
              I've helped startups and enterprise clients turn complex data into 
              intuitive, on-device user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <div className="flex justify-center mb-3 text-[#A78BFA]">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-[#A78BFA]">
                  <CounterAnimation end={stat.value} />+
                </div>
                <div className="text-sm text-[#6B6880] mt-1 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-[#F1F0FF] mb-10 pl-4 border-l-4 border-[#7C3AED]">
            Professional Journey
          </h3>
          
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <div key={item.title} className="relative pl-10">
                {/* Connector line */}
                {index !== TIMELINE_DATA.length - 1 && (
                  <div className="absolute left-[11px] top-6 w-0.5 h-[calc(100%+48px)] bg-[#2A2A3E]" />
                )}
                
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#7C3AED] ring-4 ring-[#7C3AED]/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="space-y-2">
                  <Badge variant="violet" className="mb-2">
                    {item.year}
                  </Badge>
                  <h4 className="text-xl font-bold text-[#F1F0FF]">{item.title}</h4>
                  <div className="text-[#A78BFA] text-sm font-semibold">{item.company}</div>
                  <p className="text-[#6B6880] text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
