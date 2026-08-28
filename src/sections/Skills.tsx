import { portfolioData } from '../data/portfolio';
import { Code2, BrainCircuit, Database, BarChart3, GitFork, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export function Skills() {
  const { technicalSkills } = portfolioData;

  const categoryIcons: Record<string, typeof Code2> = {
    'Programming Languages & Web': Code2,
    'Machine Learning & AI': BrainCircuit,
    'Data Science & Databases': Database,
    'Data Visualization & BI': BarChart3,
    'Frameworks & Dev Tools': GitFork,
  };

  return (
    <section id="skills" className="section-base" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-tag">02 / SKILLS</span>
          <h2 className="section-heading">Technical Skills</h2>
          <div className="section-rule" />
          <p className="text-[14px] max-w-xl mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Core technical stack across Machine Learning, Data Science, Data Visualization, and Software Implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((group, idx) => {
            const IconComponent = categoryIcons[group.category] || Cpu;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col gap-5 p-6 rounded-xl border transition-all duration-300 group hover:-translate-y-1"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--emerald-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'var(--emerald-soft)', color: 'var(--emerald-primary)' }}
                  >
                    <IconComponent className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const skillName = typeof skill === 'string' ? skill : skill.name;
                    const isCore = typeof skill === 'object' && skill.isCore;
                    return (
                      <span
                        key={skillName}
                        className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono transition-all duration-200 hover:scale-105"
                        style={
                          isCore
                            ? { backgroundColor: 'var(--emerald-soft)', color: 'var(--emerald-primary)', border: '1px solid var(--emerald-primary)', fontWeight: 500 }
                            : { backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }
                        }
                      >
                        {skillName}
                      </span>
                    );
                  })}
                </div>

                <div
                  className="flex items-center justify-between text-[11px] font-mono mt-auto pt-2"
                  style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)' }}
                >
                  <span>CATEGORY {idx + 1}</span>
                  <span>{group.skills.length} SKILLS</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
