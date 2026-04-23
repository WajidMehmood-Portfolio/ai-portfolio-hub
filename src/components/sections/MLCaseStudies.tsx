// src/components/sections/MLCaseStudies.tsx
import React, { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ML_CASE_STUDIES } from '../../data/caseStudies';
import { AccuracyChart } from '../charts/AccuracyChart';
import { LossChart } from '../charts/LossChart';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Activity, Target, Layers, ArrowRight } from 'lucide-react';

export const MLCaseStudies: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState(0);
  const study = ML_CASE_STUDIES[activeStudy];

  return (
    <SectionWrapper id="ml" className="bg-[#0D0D14]">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
        <div className="max-w-2xl">
          <Badge variant="violet" className="mb-4">End-to-End ML Mastery</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0FF] mb-4">
            Machine Learning <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-[#6B6880]">
            Detailed breakdowns of model architecture, training pipelines, and deployment strategies 
            for on-device AI applications.
          </p>
        </div>
        
        <div className="flex gap-2 bg-[#111118] p-1.5 rounded-2xl border border-[#1E1E2E]">
          {ML_CASE_STUDIES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveStudy(i)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeStudy === i 
                  ? 'bg-[#7C3AED] text-white shadow-lg' 
                  : 'text-[#6B6880] hover:text-[#A09DB8]'
              }`}
            >
              Study 0{i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Context & Metrics */}
        <div className="lg:col-span-4 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-[#F1F0FF] mb-4">{study.title}</h3>
                <p className="text-[#A09DB8] text-sm leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-[10px]">{tag}</Badge>
                  ))}
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-[#111118]">
                  <div className="flex justify-center mb-2 text-[#7C3AED]"><Target size={20} /></div>
                  <div className="text-2xl font-bold text-[#F1F0FF]">{study.metrics.accuracy}%</div>
                  <div className="text-[10px] uppercase font-bold text-[#6B6880] tracking-widest">Accuracy</div>
                </Card>
                <Card className="p-6 text-center bg-[#111118]">
                  <div className="flex justify-center mb-2 text-[#06B6D4]"><Activity size={20} /></div>
                  <div className="text-2xl font-bold text-[#F1F0FF]">{study.metrics.latency}ms</div>
                  <div className="text-[10px] uppercase font-bold text-[#6B6880] tracking-widest">Latency</div>
                </Card>
              </div>

              <Button size="lg" className="w-full gap-2">
                Download Technical Paper <ArrowRight size={18} />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Visualization */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-bold text-[#F1F0FF] flex items-center gap-2">
                  <Activity size={16} className="text-[#7C3AED]" /> Training Accuracy
                </h4>
                <span className="text-[10px] text-[#6B6880] font-mono">Max: {study.metrics.accuracy}%</span>
              </div>
              <div className="h-64">
                <AccuracyChart key={`${study.id}-accuracy`} data={study.chartData.accuracy} />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-bold text-[#F1F0FF] flex items-center gap-2">
                  <Activity size={16} className="text-[#06B6D4]" /> Loss Curve
                </h4>
                <span className="text-[10px] text-[#6B6880] font-mono">Min: 0.12</span>
              </div>
              <div className="h-64">
                <LossChart key={`${study.id}-loss`} data={study.chartData.loss} />
              </div>
            </Card>
          </div>

          {/* Pipeline Diagram Partial */}
          <Card className="p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Layers size={80} className="text-[#7C3AED]" />
            </div>
            <h4 className="text-sm font-bold text-[#F1F0FF] mb-8 flex items-center gap-2">
              <Brain size={16} className="text-[#A78BFA]" /> Architecture Pipeline
            </h4>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {['Preprocessing', 'Feature Ext', 'CNN/Transformer', 'Fully Connected', 'Output'].map((step, i) => (
                <React.Fragment key={step}>
                  <div className={`px-4 py-3 rounded-xl border font-bold text-xs transition-all ${
                    i === 2 ? 'bg-[#7C3AED]/10 border-[#7C3AED] text-[#A78BFA]' : 'bg-[#1A1A24] border-[#2A2A3E] text-[#6B6880]'
                  }`}>
                    {step}
                  </div>
                  {i < 4 && <div className="hidden md:block w-4 h-0.5 bg-[#2A2A3E]" />}
                </React.Fragment>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default MLCaseStudies;
