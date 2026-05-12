import React, { useMemo, useEffect, useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'motion/react';

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      baseSize: number;
      size: number;
      speedX: number;
      speedY: number;
      brightness: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseSize = Math.random() * 1.5 + 0.5;
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.brightness = 0.15;
      }

      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse Interactions (Repulsion + Visual Flair)
        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.current.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.current.radius - distance) / mouse.current.radius;
          
          // Repulsion
          const directionX = forceDirectionX * force * 3;
          const directionY = forceDirectionY * force * 3;
          this.x -= directionX;
          this.y -= directionY;

          // Glow and Size boost
          this.size = this.baseSize + force * 2.5; 
          this.brightness = 0.15 + force * 0.45;
        } else {
          // Smooth return to base
          this.size += (this.baseSize - this.size) * 0.1;
          this.brightness += (0.15 - this.brightness) * 0.1;
        }

        if (this.x > width || this.x < 0) this.speedX *= -1;
        if (this.y > height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(0, 212, 255, ${this.brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = window.innerWidth < 768 ? 40 : 100;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 - distance / 1200})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none opacity-40"
    />
  );
};

export const GeometricBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Reactive motion for background elements
  const moveX = useTransform(springX, (value) => value * 0.05);
  const moveY = useTransform(springY, (value) => value * 0.05);

  const moveXFaster = useTransform(springX, (value) => value * 0.1);
  const moveYFaster = useTransform(springY, (value) => value * 0.1);

  const shapes = useMemo(() => [
    { id: 1, type: 'hexagon', size: 120, x: '10%', y: '15%', rotate: 45, opacity: 0.1 },
    { id: 2, type: 'circle', size: 80, x: '85%', y: '20%', opacity: 0.05 },
    { id: 3, type: 'triangle', size: 100, x: '20%', y: '75%', rotate: -20, opacity: 0.08 },
    { id: 4, type: 'hexagon', size: 150, x: '75%', y: '80%', rotate: 15, opacity: 0.05 },
    { id: 5, type: 'circle', size: 40, x: '50%', y: '40%', opacity: 0.1 },
    { id: 6, type: 'triangle', size: 60, x: '5%', y: '45%', rotate: 180, opacity: 0.03 },
    { id: 7, type: 'hexagon', size: 90, x: '90%', y: '60%', rotate: 60, opacity: 0.07 },
  ], []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Particle Canvas with Repulsion */}
      <ParticleCanvas />

      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#F1F0FF 1px, transparent 1px),
            linear-gradient(90deg, #F1F0FF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient Glows */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#06B6D4] opacity-[0.07] blur-[120px]"
      />
      <motion.div 
        style={{ x: useTransform(moveX, v => -v), y: useTransform(moveY, v => -v) }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#7C3AED] opacity-[0.07] blur-[120px]"
      />

      {/* Floating Geometric Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: shape.opacity }}
          style={{
            left: shape.x,
            top: shape.y,
            x: shape.id % 2 === 0 ? moveX : moveXFaster,
            y: shape.id % 2 === 0 ? moveY : moveYFaster,
            rotate: shape.rotate || 0,
          }}
          className="absolute"
        >
          {shape.type === 'hexagon' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#06B6D4]">
              <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" />
            </svg>
          )}
          {shape.type === 'circle' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#7C3AED]">
              <circle cx="50" cy="50" r="45" />
            </svg>
          )}
          {shape.type === 'triangle' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#06B6D4]">
              <path d="M50 10 L90 85 L10 85 Z" />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Subtle lines/connections */}
      <motion.div
        style={{ x: moveXFaster, y: moveYFaster }}
        className="absolute inset-0 opacity-[0.05]"
      >
        <svg width="100%" height="100%" className="text-[#7C3AED]">
          <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="80%" y1="10%" x2="60%" y2="40%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="30%" y1="80%" x2="50%" y2="60%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="90%" y1="70%" x2="70%" y2="90%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </motion.div>
    </div>
  );
};
