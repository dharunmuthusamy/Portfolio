import { portfolioData } from '../data/portfolio';
import { SocialLinks } from '../components/SocialLinks';
import { FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-[72px] relative overflow-hidden bg-[var(--bg-main)]"
    >
      {/* Subtle background gradient — emerald glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-30"
        style={{ backgroundColor: 'var(--emerald-primary)' }}
      />

      <div className="container-main w-full py-16 sm:py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center min-h-[calc(100vh-72px)]">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-6 py-8 lg:py-16"
          >
            {/* Greeting + Name */}
            <div className="flex flex-col gap-2">
              <span className="text-[16px] font-medium tracking-wide text-[var(--text-secondary)]">
                Hello, I'm
              </span>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[44px] sm:text-[62px] lg:text-[70px] font-extrabold tracking-tight leading-[1.05] text-[var(--text-primary)]"
                >
                  {personalInfo.name}<span style={{ color: 'var(--emerald-primary)' }}>.</span>
                </motion.h1>
              </div>
            </div>

            {/* Role */}
            <h2 className="text-[20px] sm:text-[24px] font-semibold leading-snug text-[var(--text-secondary)]">
              AI &amp; Data Science Student
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] max-w-xl leading-[1.8] text-[var(--text-secondary)]">
              Pursuing B.Tech in Artificial Intelligence &amp; Data Science at Dr. MCET.
              Focused on building machine learning models, deep learning solutions, data
              visualisations, and intelligent analytics to solve real-world challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" className="btn-primary group">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href={personalInfo.resumePdfPath}
                download="Dharun_MR_Resume.pdf"
                className="btn-secondary"
              >
                <FileText className="w-4 h-4" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">Connect</span>
              <div className="h-px w-8 bg-[var(--border-color)]" />
              <SocialLinks />
            </div>
          </motion.div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] group">
              {/* Emerald glow aura */}
              <div
                className="absolute -inset-1 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 -z-10"
                style={{ background: 'linear-gradient(to right, var(--emerald-primary), var(--emerald-accent))' }}
              />
              <div
                className="w-full h-full rounded-2xl overflow-hidden border shadow-2xl relative"
                style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
              >
                <img
                  src="./profile.png"
                  alt={`${personalInfo.name} — AI & Data Science student`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
