import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className = '', iconSize = 17 }: SocialLinksProps) {
  const { githubUrl, linkedinUrl, email } = portfolioData.personalInfo;

  const links = [
    { href: githubUrl,           label: 'GitHub',   Icon: Github,   external: true  },
    { href: linkedinUrl,         label: 'LinkedIn', Icon: Linkedin, external: true  },
    { href: `mailto:${email}`,   label: 'Email',    Icon: Mail,     external: false },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon, external }) =>
        href ? (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className="p-2 rounded-lg border transition-all duration-150 focus-visible:outline-none"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--border-color)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--emerald-primary)';
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-secondary)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--emerald-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
            }}
          >
            <Icon size={iconSize} aria-hidden="true" />
          </a>
        ) : null
      )}
    </div>
  );
}
