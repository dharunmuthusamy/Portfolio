import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme, effectiveTheme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center gap-0.5 p-1 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)]">
      {([
        { value: 'light', Icon: Sun,     label: 'Light theme' },
        { value: 'dark',  Icon: Moon,    label: 'Dark theme' },
        { value: 'system',Icon: Monitor, label: `System theme (${effectiveTheme})` },
      ] as const).map(({ value, Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`p-1.5 rounded transition-colors duration-150 ${
            theme === value
              ? 'bg-[var(--bg-primary)] text-[var(--emerald-primary)] shadow-sm'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
          title={label}
          aria-label={label}
          aria-pressed={theme === value}
        >
          <Icon className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
