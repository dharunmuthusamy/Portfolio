import { Film, Mic, Fingerprint } from 'lucide-react';

interface VisualProps {
  className?: string;
}

export function MovieRecommendationVisual({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-bg-secondary border border-border-subtle flex items-center justify-center ${className}`}>
      <div className="flex items-center gap-3 text-txt-muted">
        <Film className="w-6 h-6" />
        <span className="text-sm font-medium">Movie Recommendation Engine</span>
      </div>
    </div>
  );
}

export function SpeechKernelVisual({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-bg-secondary border border-border-subtle flex items-center justify-center ${className}`}>
      <div className="flex items-center gap-3 text-txt-muted">
        <Mic className="w-6 h-6" />
        <span className="text-sm font-medium">Speech Analysis Platform</span>
      </div>
    </div>
  );
}

export function BiometricFingerprintVisual({ className = '' }: VisualProps) {
  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-bg-secondary border border-border-subtle flex items-center justify-center ${className}`}>
      <div className="flex items-center gap-3 text-txt-muted">
        <Fingerprint className="w-6 h-6" />
        <span className="text-sm font-medium">Biometric Detection</span>
      </div>
    </div>
  );
}

/* ── Image Project Visual (for screenshots) ──── */

interface ImageVisualProps extends VisualProps {
  src: string;
  alt?: string;
  projectId?: string;
}

export function PowerBIDashboardVisual({ src, alt = 'Project Preview', className = '' }: ImageVisualProps) {
  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden border border-border-subtle shadow-subtle group ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );
}
