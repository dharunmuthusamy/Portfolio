import { portfolioData } from '../data/portfolio';
import { PowerBIDashboardVisual } from '../components/ProjectVisuals';
import { Github, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
  const { projects, personalInfo } = portfolioData;

  return (
    <section id="projects" className="section-base" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-tag">04 / PROJECTS</span>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="section-rule" />
          <p className="text-[14px] max-w-xl mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Practical Machine Learning, Deep Learning, and AI solutions developed through hands-on technical implementation.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20 sm:gap-24 mb-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
              >
                {/* Screenshot */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div
                    className="relative overflow-hidden rounded-2xl border shadow-xl transition-all duration-500"
                    style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--emerald-primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                  >
                    <div className="overflow-hidden aspect-[16/10] relative">
                      {project.previewImage ? (
                        <PowerBIDashboardVisual
                          src={project.previewImage}
                          alt={`${project.title} preview`}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                          <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>PROJECT PREVIEW</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className={`lg:col-span-6 flex flex-col gap-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="tag-emerald text-xs">{project.category}</span>
                    <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{project.date}</span>
                  </div>

                  <h3
                    className="text-[22px] sm:text-[26px] font-bold tracking-tight leading-snug transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-[14px] leading-[1.75]" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {project.features && project.features.length > 0 && (
                    <ul className="flex flex-col gap-2 my-1">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-[13px]" style={{ color: 'var(--text-secondary)' }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--emerald-primary)' }} aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag-neutral text-[11px] font-mono">{tech}</span>
                    ))}
                  </div>

                  {(project.githubUrl || project.demoUrl) && (
                    <div className="flex items-center gap-5 pt-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group/link"
                          style={{ color: 'var(--text-primary)' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--emerald-primary)'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
                        >
                          <Github className="w-4 h-4" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
                          <span>GitHub</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group/link"
                          style={{ color: 'var(--emerald-primary)' }}
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        {personalInfo.githubUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl border shadow-lg transition-colors"
            style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--emerald-primary)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: 'var(--emerald-soft)', color: 'var(--emerald-primary)' }}>
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-[16px] font-bold" style={{ color: 'var(--text-primary)' }}>
                  Explore more on GitHub
                </h4>
                <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                  Additional repositories and open-source AI &amp; Data Science projects.
                </p>
              </div>
            </div>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 text-xs font-mono uppercase tracking-wider group"
            >
              <Github className="w-4 h-4" style={{ color: 'var(--emerald-primary)' }} aria-hidden="true" />
              <span>View GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
            </a>
          </motion.div>
        )}

      </div>
    </section>
  );
}
