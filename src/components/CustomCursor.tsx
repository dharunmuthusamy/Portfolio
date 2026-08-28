import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export function CustomCursor() {
  const { effectiveTheme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    document.documentElement.classList.add('custom-cursor-active');

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('card-surface'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const ringOpacity = effectiveTheme === 'light' ? (isHovered ? 1 : 0.85) : (isHovered ? 0.95 : 0.75);
  const ringBorderWidth = effectiveTheme === 'light' ? 2 : 1.5;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <motion.div
        className="fixed rounded-full border pointer-events-none"
        style={{
          boxShadow:
            effectiveTheme === 'light'
              ? '0 0 0 1px color-mix(in srgb, var(--foreground) 8%, transparent)'
              : '0 0 12px color-mix(in srgb, var(--accent) 35%, transparent)',
        }}
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? 'var(--emerald-soft)' : 'transparent',
          borderColor: 'var(--accent)',
          borderWidth: ringBorderWidth,
          opacity: ringOpacity,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 30,
          mass: 0.4,
        }}
      />
      <motion.div
        className="fixed rounded-full pointer-events-none"
        style={{
          backgroundColor: 'var(--accent)',
          boxShadow:
            effectiveTheme === 'light'
              ? '0 0 0 1px color-mix(in srgb, var(--foreground) 12%, transparent)'
              : '0 0 8px color-mix(in srgb, var(--accent) 50%, transparent)',
        }}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: 6,
          height: 6,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 35,
        }}
      />
    </div>
  );
}
