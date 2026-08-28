import { portfolioData } from '../data/portfolio';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Experience() {
  const { internships } = portfolioData;

  return (
    <section
      id="experience"
      className="section-base border-y"
      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
    >
      <div className="container-main max-w-[920px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-tag">03 / EXPERIENCE</span>
          <h2 className="section-heading">Experience</h2>
          <div className="section-rule" />
          <p className="text-[14px] max-w-xl mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Industry internships and practical data science exposure.
          </p>
        </motion.div>

        <div className="relative ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-12" style={{ borderLeft: '1px solid var(--border-color)' }}>
          {internships.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Node */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-4 group-hover:scale-125 transition-transform"
                style={{
                  backgroundColor: 'var(--emerald-primary)',
                  borderColor: 'var(--bg-secondary)',
                  boxShadow: '0 0 12px var(--emerald-primary)',
                }}
              />

              {/* Card */}
              <div
                className="p-6 rounded-xl border transition-all duration-300 shadow-md"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--emerald-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-[18px] font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-[13px]" style={{ color: 'var(--text-secondary)' }}>
                      <span className="flex items-center gap-1.5 font-medium" style={{ color: 'var(--text-primary)' }}>
                        <Building2 className="w-3.5 h-3.5" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
                        {item.company}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                          · <MapPin className="w-3 h-3" aria-hidden="true" /> {item.location}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-mono shrink-0 mt-1 sm:mt-0" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
                    <span>{item.period}</span>
                    {item.type && (
                      <span className="tag-emerald text-[11px] py-0.5 px-2.5">{item.type}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2.5 text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.highlights.map((bullet, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tag-neutral text-[11px] font-mono">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
