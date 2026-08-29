import { useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import { FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, navItems, activeSection }: MobileMenuProps) {
  const { resumePdfPath } = portfolioData.personalInfo;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.body.style.overflow = isOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[var(--foreground)]/20 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 32 }}
            className="relative w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)] shadow-2xl p-6 flex flex-col gap-6 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between">
              <a
                href="#home"
                onClick={onClose}
                className="flex items-center gap-1 font-bold text-[18px] text-[var(--text-primary)]"
              >
                <span className="font-mono text-[var(--emerald-primary)] text-sm">&lt;</span>
                <span>Dharun MR</span>
                <span className="font-mono text-[var(--emerald-primary)] text-sm">/&gt;</span>
              </a>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Nav list */}
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'text-[var(--emerald-primary)] bg-[var(--emerald-soft)] font-semibold border border-[var(--emerald-primary)]/30'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[var(--emerald-primary)]" aria-hidden="true" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Resume CTA */}
            <div className="pt-2 border-t border-[var(--border-color)]">
              <a
                href={resumePdfPath}
                download="Dharun_MR_Resume.pdf"
                onClick={onClose}
                className="btn-primary w-full text-[14px] py-3"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
