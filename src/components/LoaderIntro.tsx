import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderIntroProps {
  onComplete: () => void;
}

export function LoaderIntro({ onComplete }: LoaderIntroProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'counter' | 'built' | 'driven' | 'exit'>('counter');

  useEffect(() => {
    // Counter animation: 0 → 100 in ~1 second
    const startTime = performance.now();
    const duration = 1000;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => setPhase('built'), 100);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  useEffect(() => {
    if (phase === 'built') {
      const timer = setTimeout(() => {
        setPhase('driven');
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (phase === 'driven') {
      const timer = setTimeout(() => {
        setPhase('exit');
      }, 1100);
      return () => clearTimeout(timer);
    }

    if (phase === 'exit') {
      const timer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {phase !== 'exit' && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] pointer-events-auto select-none transition-colors duration-200"
        >
          {phase === 'counter' && (
            <span
              aria-live="polite"
              aria-label={`Loading ${progress} percent`}
              style={{
                fontSize: 'clamp(4rem, 8vw, 7rem)',
                fontWeight: 600,
                letterSpacing: '-0.05em',
                lineHeight: 1,
                color: 'var(--foreground)',
              }}
            >
              {progress}
            </span>
          )}

          {/* Phase 2: BUILT TO THINK. */}
          {phase === 'built' && (
            <div className="overflow-hidden py-4 px-6 text-center">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[var(--foreground)]"
              >
                BUILT TO THINK<span className="text-[var(--accent)]">.</span>
              </motion.h1>
            </div>
          )}

          {/* Phase 3: DRIVEN TO CREATE. */}
          {phase === 'driven' && (
            <div className="overflow-hidden py-4 px-6 text-center">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[var(--foreground)]"
              >
                DRIVEN TO CREATE<span className="text-[var(--accent)]">.</span>
              </motion.h1>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
