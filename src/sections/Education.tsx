import { portfolioData } from '../data/portfolio';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="section-base border-y"
      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
    >
      <div className="container-main max-w-[900px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-tag">05 / EDUCATION</span>
          <h2 className="section-heading">Education</h2>
          <div className="section-rule" />
          <p className="text-[14px] max-w-xl mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Academic background in Artificial Intelligence, Data Science, and Computer Science.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border shadow-md transition-all duration-300 group"
              style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--emerald-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 p-2.5 rounded-xl group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'var(--emerald-soft)', color: 'var(--emerald-primary)' }}
                  >
                    <GraduationCap className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-[17px] sm:text-[19px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                      {item.degree}
                    </h3>
                    {item.fieldOfStudy && (
                      <p className="text-[14px] mt-0.5 font-medium" style={{ color: 'var(--emerald-primary)' }}>
                        {item.fieldOfStudy}
                      </p>
                    )}
                  </div>
                </div>
                {item.cgpa && (
                  <span className="tag-emerald text-sm font-semibold shrink-0 px-3 py-1.5 self-start sm:self-center">
                    CGPA: {item.cgpa}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[13px]" style={{ color: 'var(--text-secondary)' }}>
                <span className="flex items-center gap-1.5 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
                  {item.institution}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
                  {item.period}
                </span>
                {item.boardOrUniversity && (
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
                    {item.boardOrUniversity}
                  </span>
                )}
              </div>

              {item.grade && !item.cgpa && (
                <p className="mt-3 text-[13px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>GRADE: </span>
                  <span style={{ color: 'var(--text-primary)' }}>{item.grade}</span>
                </p>
              )}

              {item.percentage && (
                <p className="mt-3 text-[13px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>PERCENTAGE: </span>
                  <span style={{ color: 'var(--text-primary)' }}>{item.percentage}%</span>
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
