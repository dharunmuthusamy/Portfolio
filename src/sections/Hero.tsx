import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function Hero() {
  const { personalInfo } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt / 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };

  // Parallax layers
  const textParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-35, 35]), springConfig);
  const textParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const photoParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const photoParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

  const cardParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [25, -25]), springConfig);
  const cardParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const traits = [
    'Machine Learning',
    'Deep Learning',
    'Data Analytics',
    'Computer Vision',
    'Problem Solver',
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen min-h-[800px] overflow-hidden select-none font-sans bg-[var(--bg-main)]"
    >
      {/* Giant Background Name - Using glass-name-text utility */}
      <motion.div 
        style={{ x: textParallaxX, y: textParallaxY }}
        className="absolute top-[15%] left-0 w-full flex justify-center z-10 pointer-events-none"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-[22vw] md:text-[25vw] tracking-[-0.07em] leading-none glass-name-text m-0 p-0"
          style={{ lineHeight: '0.8' }}
        >
          DHARUN
        </motion.h1>
      </motion.div>

      {/* Portrait Cutout */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[75%] sm:h-[80%] md:h-[85%] z-20 flex justify-center items-end pointer-events-none">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ 
            x: photoParallaxX, 
            y: photoParallaxY,
            filter: 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 35px color-mix(in srgb, var(--emerald-primary) 20%, transparent))'
          }}
          src="./assets/images/dharun-hero.png?v=3"
          alt={personalInfo.name}
          className="w-auto h-full max-h-[95%] max-w-none object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      {/* Center Headline & Buttons */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-40 flex flex-col items-center w-full max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4 mt-8"
        >
          <a 
            href="#projects"
            className="btn-pill-primary tracking-wide"
          >
            View Projects
          </a>
          <a 
            href="#about"
            className="glass-pill-btn tracking-wide"
          >
            About Me
          </a>
        </motion.div>
      </div>

      {/* Floating Glass Card 1: Specialization (Left Lower) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ x: cardParallaxX, y: cardParallaxY }}
        className="absolute bottom-[20%] left-[5%] md:left-[12%] z-30 hidden md:flex glass-card items-center gap-4 p-4 pr-6 rounded-2xl shadow-2xl"
      >
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[var(--emerald-primary)]/10 border border-[var(--emerald-primary)]/20">
          <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--emerald-primary)] animate-ping opacity-60" />
          <div className="relative w-2.5 h-2.5 rounded-full bg-[var(--emerald-primary)]" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-0.5">Specialization</span>
          <span className="text-sm font-extrabold text-[var(--text-primary)]">Deep Learning &amp; Vision</span>
        </div>
      </motion.div>

      {/* Floating Glass Card 3: Traits (Right Mid) */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ x: cardParallaxX, y: cardParallaxY }}
        className="absolute top-[52%] right-[12%] z-30 w-52 hidden md:flex glass-card flex-col gap-3 p-6 rounded-2xl shadow-2xl"
      >
        {traits.map((trait, i) => (
          <div key={i} className="flex items-center gap-3 group cursor-default">
            <div className="relative flex items-center justify-center w-3 h-3">
              <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--emerald-primary)]/40 group-hover:scale-150 group-hover:bg-[var(--emerald-primary)]/60 transition-all duration-300" />
              <div className="relative w-1.5 h-1.5 rounded-full bg-[var(--emerald-primary)]" />
            </div>
            <span className="text-[var(--text-primary)] font-bold text-[14px] group-hover:text-[var(--emerald-primary)] transition-colors duration-300">{trait}</span>
          </div>
        ))}
      </motion.div>

    </section>
  );
}

