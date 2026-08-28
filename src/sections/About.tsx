import { portfolioData } from '../data/portfolio';
import { GraduationCap, MapPin, Building2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const { personalInfo, education } = portfolioData;
  const currentEdu = education[0];

  return (
    <section
      id="about"
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
          <span className="section-tag">01 / ABOUT</span>
          <h2 className="section-heading">About Me</h2>
          <div className="section-rule" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-5 text-[15px] sm:text-[16px] leading-[1.8]"
            style={{ color: 'var(--text-secondary)' }}
          >
            <p>
              I am an{' '}
              <strong style={{ color: 'var(--text-primary)' }} className="font-semibold">
                Artificial Intelligence &amp; Data Science
              </strong>{' '}
              undergraduate at Dr. Mahalingam College of Engineering and Technology,
              Pollachi (affiliated with Anna University).
            </p>
            <p>
              My primary focus lies in{' '}
              <strong style={{ color: 'var(--text-primary)' }} className="font-semibold">
                Machine Learning, Deep Learning, Natural Language Processing, and
                Data Visualization
              </strong>
              . I combine strong programming skills in Python and Java with modern
              data handling libraries like Pandas, NumPy, Scikit-learn, PyTorch, and
              Power BI to extract actionable insights and construct predictive models.
            </p>
            <p>
              Through hands-on projects — such as building machine learning
              recommendation engines and deep learning computer vision applications —
              and practical data science internship experience, I continuously apply
              theoretical data science principles to solve real-world problems.
            </p>

            <ul className="mt-2 flex flex-col gap-2.5">
              {['Data Science & Analytics', 'Machine & Deep Learning', 'Statistical Data Handling'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px]" style={{ color: 'var(--text-primary)' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--emerald-primary)' }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Right: Quick profile info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div
              className="flex flex-col divide-y rounded-xl overflow-hidden shadow-lg"
              style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', border: '1px solid var(--border-color)', divideColor: 'var(--border-color)' }}
            >
              {[
                { Icon: BookOpen, label: 'Degree', primary: currentEdu.degree, secondary: currentEdu.fieldOfStudy },
                { Icon: Building2, label: 'Institution', primary: currentEdu.institution, secondary: currentEdu.boardOrUniversity },
                { Icon: MapPin, label: 'Location', primary: personalInfo.location, secondary: undefined },
                { Icon: GraduationCap, label: 'Period', primary: currentEdu.period, secondary: undefined },
              ].map(({ Icon, label, primary, secondary }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 px-5 py-4 group transition-colors"
                  style={{ borderBottom: '1px solid var(--border-color)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; }}
                >
                  <div className="mt-0.5 shrink-0 group-hover:scale-110 transition-transform" style={{ color: 'var(--emerald-primary)' }}>
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-mono font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      {label}
                    </span>
                    <span className="text-[14px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {primary}
                    </span>
                    {secondary && (
                      <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
                        {secondary}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
