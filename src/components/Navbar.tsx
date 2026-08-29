import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { Menu, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = ['home', ...NAV_ITEMS.map((item) => item.href.replace('#', ''))];
  const activeSection = useActiveSection(sectionIds);
  const { resumePdfPath } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[72px] flex items-center transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-main)]/90 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container-main w-full flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-1 text-[var(--text-primary)] font-bold text-[18px] tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--emerald-primary)] rounded px-1 py-0.5"
            aria-label="Dharun MR — back to top"
          >
            <span className="font-mono text-[var(--emerald-primary)] text-sm">&lt;</span>
            <span className="group-hover:text-[var(--emerald-primary)] transition-colors">Dharun MR</span>
            <span className="font-mono text-[var(--emerald-primary)] text-sm">/&gt;</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--emerald-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[var(--emerald-primary)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[13px] py-1.5 px-4"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile right actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-transparent hover:border-[var(--border-color)] transition-all"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
}
