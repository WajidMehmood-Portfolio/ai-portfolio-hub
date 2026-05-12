// src/components/hero/OrbitSystem.tsx
import React, { useState } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { techStack, TechIcon } from '../../data/techStack';
import { cn } from '../../lib/utils';

interface IconNodeProps {
  icon: TechIcon;
}

const IconNode: React.FC<IconNodeProps> = ({ icon }) => {
  return (
    <div className="relative group">
      <motion.div
        whileHover={{ 
          scale: 1.2,
          boxShadow: `0 0 16px ${icon.glowColor}`,
          borderColor: icon.color
        }}
        className={cn(
          "w-12 h-12 rounded-xl bg-[#111118] border border-[#1E1E2E] flex items-center justify-center transition-all duration-300 overflow-visible"
        )}
      >
        <icon.icon className="w-7 h-7" style={{ color: icon.color }} />
        
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#111118] border border-[#2A2A3E] rounded text-[10px] font-bold text-[#F1F0FF] opacity-0 group-hover:opacity-100 group-hover:-top-11 transition-all pointer-events-none whitespace-nowrap z-50">
          {icon.name}
        </div>
      </motion.div>
    </div>
  );
};

interface OrbitRingProps {
  radius: number;
  duration: number;
  direction: 'clockwise' | 'counter-clockwise';
  icons: TechIcon[];
  ringColor: string;
  parentRotation: any; // Use any for simplicity with MotionValue
}

const OrbitRing: React.FC<OrbitRingProps> = ({ radius, duration, direction, icons, ringColor, parentRotation }) => {
  const shouldReduceMotion = useReducedMotion();
  
  // Create a negative version of parent rotation to counter it
  const counterParentRotation = useTransform(parentRotation, (v: number) => -v);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Visual Ring */}
      <div 
        className="absolute border border-dashed rounded-full pointer-events-none"
        style={{ 
          width: radius * 2, 
          height: radius * 2, 
          borderColor: ringColor,
          opacity: 0.15,
          borderWidth: '0.5px'
        }}
      />
      
      {/* Rotating Container */}
      <motion.div
        animate={shouldReduceMotion ? {} : { 
          rotate: direction === 'clockwise' ? 360 : -360 
        }}
        transition={{ 
          duration, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ width: radius * 2, height: radius * 2 }}
        className="relative will-change-transform"
      >
        {icons.map((icon) => {
          const angle = (icon.angleOffset * Math.PI) / 180;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={icon.id}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                animate={shouldReduceMotion ? {} : { 
                  rotate: direction === 'clockwise' ? -360 : 360 
                }}
                transition={{ 
                  duration, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ rotate: counterParentRotation }}
              >
                <IconNode icon={icon} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

interface CenterNodeProps {
  parentRotation: any;
}

const CenterNode: React.FC<CenterNodeProps> = ({ parentRotation }) => {
  const counterRotation = useTransform(parentRotation, (v: number) => -v);
  
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.05, 1],
        boxShadow: [
          '0 0 20px rgba(124, 58, 237, 0.2)',
          '0 0 40px rgba(124, 58, 237, 0.4)',
          '0 0 20px rgba(124, 58, 237, 0.2)'
        ]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ rotate: counterRotation }}
      className="z-10 w-24 h-24 rounded-full bg-[#111118] border-2 border-[#7C3AED]/30 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#7C3AED]/5 animate-pulse" />
      <span className="text-2xl font-black text-[#F1F0FF] relative z-10 tracking-tighter drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">
        WM
      </span>
    </motion.div>
  );
};

interface OrbitSystemProps {
  scale?: number;
}

export const OrbitSystem: React.FC<OrbitSystemProps> = ({ scale = 1 }) => {
  const innerIcons = techStack.filter(i => i.ring === 'inner');
  const outerIcons = techStack.filter(i => i.ring === 'outer');

  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div 
      className={cn(
        "relative w-[450px] h-[450px] flex items-center justify-center overflow-visible select-none",
        isDragging ? "cursor-grabbing" : "cursor-grab"
      )}
      style={{ 
        transformOrigin: "center center",
        scale,
        rotate: springRotation 
      }}
      onPanStart={() => setIsDragging(true)}
      onPanEnd={() => setIsDragging(false)}
      onPan={(_, info) => {
        // Map horizontal movement to rotation
        const sensitivity = 0.5;
        rotation.set(rotation.get() + info.delta.x * sensitivity);
      }}
      aria-label="Technology Stack Orbit System"
      role="img"
    >
      <OrbitRing 
        radius={120} 
        duration={20} 
        direction="clockwise" 
        icons={innerIcons} 
        ringColor="#7C3AED" 
        parentRotation={springRotation}
      />
      <OrbitRing 
        radius={210} 
        duration={30} 
        direction="counter-clockwise" 
        icons={outerIcons} 
        ringColor="#06B6D4" 
        parentRotation={springRotation}
      />
      <CenterNode parentRotation={springRotation} />
    </motion.div>
  );
};

export default OrbitSystem;
