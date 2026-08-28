import { portfolioData } from '../data/portfolio';
import { Trophy, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section
      id="achievements"
      className="section-base border-y"
      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
    >
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-tag">07 / ACHIEVEMENTS</span>
          <h2 className="section-heading">Achievements</h2>
          <div className="section-rule" />
          <p className="text-[14px] max-w-xl mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Recognition and accomplishments from academic and technical endeavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-4 p-6 rounded-xl border transition-all duration-300 group hover:-translate-y-1 shadow-sm"
              style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--emerald-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'var(--emerald-soft)', color: 'var(--emerald-primary)' }}
                >
                  <Trophy className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-[15px] font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
                  {achievement.title}
                </h3>
              </div>

              <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {achievement.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-[12px] font-mono mt-auto pt-3" style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                {achievement.date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {achievement.date}
                  </span>
                )}
                {achievement.category && (
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" aria-hidden="true" />
                    {achievement.category}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
