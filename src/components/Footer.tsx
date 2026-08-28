import { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Footer() {
  const { personalInfo } = portfolioData;
  const year = new Date().getFullYear();

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    scrollToSection('#home');
  };

  const socials = [
    { id: 'github',   icon: Github,   label: 'GitHub',   href: personalInfo.githubUrl,         external: true  },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedinUrl,       external: true  },
    { id: 'email',    icon: Mail,     label: 'Email',    href: `mailto:${personalInfo.email}`, external: false },
  ];

  return (
    <>
      {/* Back to top floating button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-8 right-8 z-40"
          >
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--emerald-primary)] hover:border-[var(--emerald-primary)] shadow-xl transition-all duration-200 focus-visible:outline-none"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-main)]">
        <div className="container-main py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[var(--emerald-primary)]">&lt;/&gt;</span>
              <p className="text-[13px] font-mono text-[var(--text-muted)]">
                © {year} Dharun MR · AI &amp; Data Science Student
              </p>
            </div>

            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-transparent hover:border-[var(--border-color)] transition-all duration-200"
                  >
                    <IconComponent className="w-4 h-4 text-[var(--emerald-primary)]" aria-hidden="true" />
                  </a>
                );
              })}

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-transparent hover:border-[var(--border-color)] transition-all duration-200 ml-1"
              >
                <ArrowUp className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
