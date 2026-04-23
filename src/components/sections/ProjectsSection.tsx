// src/components/sections/ProjectsSection.tsx
import React, { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { PROJECTS_DATA } from '../../data/projects';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Flutter', 'ML/AI', 'Full-Stack'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <SectionWrapper id="projects" className="bg-[#0A0A0F]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#F1F0FF] mb-4">
          Proof Of <span className="gradient-text">Concept</span>
        </h2>
        <p className="text-[#6B6880] max-w-2xl mx-auto">
          A selection of projects where I've bridged the gap between complex machine learning 
          models and elegant, performant mobile applications.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${
              filter === cat 
                ? 'bg-[#7C3AED] border-[#7C3AED] text-white shadow-lg' 
                : 'text-[#6B6880] border-[#1E1E2E] hover:border-[#7C3AED]/40 hover:text-[#A09DB8]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group perspective-1000 h-[420px]"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <Card className="h-full flex flex-col p-0 border-[#1E1E2E] bg-[#13131A] overflow-hidden">
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13131A] to-transparent z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <Badge variant="violet" className="absolute top-4 right-4 z-20">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#F1F0FF] mb-2">{project.title}</h3>
                      <p className="text-[#6B6880] text-sm line-clamp-3 mb-4">{project.description}</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-[#A78BFA] bg-[#7C3AED]/10 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <Card className="h-full flex flex-col p-8 border-[#7C3AED]/40 bg-[#111118] shadow-[0_0_30px_rgba(124,58,237,0.15)]">
                    <h3 className="text-xl font-bold text-[#F1F0FF] mb-4">Technical Details</h3>
                    <div className="space-y-4 flex-grow">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[#6B6880] font-bold mb-1">Impact Metric</div>
                        <div className="text-[#6EE7B7] font-bold text-lg">{project.metrics}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[#6B6880] font-bold mb-2">Deep Stack</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button size="sm" className="flex-1 gap-2">
                        Case Study <ArrowRight size={14} />
                      </Button>
                      <button className="p-2 border border-[#2A2A3E] rounded-xl hover:bg-[#1A1A24] text-[#A09DB8] transition-colors">
                        <Github size={18} />
                      </button>
                    </div>
                  </Card>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
