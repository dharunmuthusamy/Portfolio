import { Cpu, Database, Network, LineChart, Binary } from 'lucide-react';

export function AbstractDataVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center p-4">
      {/* Outer subtle glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-cyan-500/10 to-indigo-500/5 rounded-3xl blur-2xl dark:from-brand-500/15 dark:via-cyan-500/10 dark:to-transparent" />

      {/* Main glass visual container */}
      <div className="relative w-full h-full rounded-2xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden p-6 flex flex-col justify-between">
        
        {/* Subtle grid background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />

        {/* Top bar: AI & Data Science Kernel status */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
              AI_DATA_ENGINE // ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-brand-600 dark:text-brand-400 font-mono">
            <Binary className="w-3.5 h-3.5" />
            <span>v2.5</span>
          </div>
        </div>

        {/* Center: Interconnected Neural Node SVG Network */}
        <div className="relative my-4 h-48 w-full flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full text-slate-300 dark:text-slate-700/60 stroke-current" fill="none" viewBox="0 0 300 180">
            {/* Neural Connections */}
            <line x1="50" y1="90" x2="130" y2="40" strokeWidth="1.5" strokeDasharray="3 3" className="animate-[dash_10s_linear_infinite]" />
            <line x1="50" y1="90" x2="130" y2="140" strokeWidth="1.5" />
            <line x1="130" y1="40" x2="230" y2="90" strokeWidth="1.5" />
            <line x1="130" y1="140" x2="230" y2="90" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="130" y1="40" x2="130" y2="140" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="50" y1="90" x2="230" y2="90" strokeWidth="1.5" strokeOpacity="0.4" />

            {/* Glowing active path */}
            <path d="M50 90 L130 40 L230 90" stroke="#0C8EE9" strokeWidth="2" strokeOpacity="0.7" />
          </svg>

          {/* Connected Floating Nodes */}
          <div className="relative z-10 w-full h-full flex items-center justify-between px-2">
            {/* Input Node */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400 shadow-sm flex flex-col items-center gap-1">
              <Database className="w-5 h-5" />
              <span className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300">Data</span>
            </div>

            {/* Middle Layer Nodes */}
            <div className="flex flex-col gap-8">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm flex items-center gap-1.5 px-3">
                <Cpu className="w-4 h-4" />
                <span className="text-[10px] font-mono font-medium">ML Model</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm flex items-center gap-1.5 px-3">
                <Network className="w-4 h-4" />
                <span className="text-[10px] font-mono font-medium">Deep Net</span>
              </div>
            </div>

            {/* Output Node */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 shadow-sm flex flex-col items-center gap-1">
              <LineChart className="w-5 h-5" />
              <span className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300">Insights</span>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Accuracy:</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold">98.5%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Domain:</span>
            <span className="text-brand-600 dark:text-brand-400 font-semibold">AI & DS</span>
          </div>
        </div>

      </div>
    </div>
  );
}
