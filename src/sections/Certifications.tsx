import { portfolioData } from '../data/portfolio';
import { BadgeCheck, Building2, Calendar, ExternalLink, Link } from 'lucide-react';
import { motion } from 'framer-motion';

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section-base" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-tag">06 / CERTIFICATIONS</span>
          <h2 className="section-heading">Certifications</h2>
          <div className="section-rule" />
          <p className="text-[14px] max-w-xl mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Verified professional credentials in AI, Data Science, and programming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col gap-4 p-5 rounded-xl border transition-all duration-300 group hover:-translate-y-1 shadow-sm"
              style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--emerald-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 p-2 rounded-lg group-hover:scale-110 transition-transform mt-0.5"
                  style={{ backgroundColor: 'var(--emerald-soft)', color: 'var(--emerald-primary)' }}
                >
                  <BadgeCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-[12px] font-medium" style={{ color: 'var(--text-secondary)' }}>
                    <Building2 className="w-3 h-3 shrink-0" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{cert.date}</span>
              </div>

              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tag-neutral text-[10px] font-mono">{skill}</span>
                  ))}
                </div>
              )}

              {(cert.credentialUrl || cert.credentialId) && (
                <div className="flex items-center gap-3 text-[12px] mt-auto pt-2" style={{ borderTop: '1px solid var(--border-color)' }}>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View credential for ${cert.title}`}
                      className="flex items-center gap-1.5 font-medium transition-colors hover:underline"
                      style={{ color: 'var(--emerald-primary)' }}
                    >
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      Verify
                    </a>
                  )}
                  {cert.credentialId && (
                    <span className="flex items-center gap-1 text-[10px] font-mono truncate" style={{ color: 'var(--text-muted)' }}>
                      <Link className="w-2.5 h-2.5 shrink-0" aria-hidden="true" />
                      {cert.credentialId}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
