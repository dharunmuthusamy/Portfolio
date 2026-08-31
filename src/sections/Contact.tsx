import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Github, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const { personalInfo } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      // NOTE: Web3Forms access keys are safe to be public as they only allow sending emails to you.
      // We include it directly here so it works perfectly when deployed via GitHub Pages.
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "a94afabe-184c-43e4-bd88-77f71faea5e7";
      
      if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        setSubmitError('Web3Forms access key is missing. Please configure it in .env or directly in the code.');
        setSubmitting(false);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please check your internet connection.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactLinks = [
    {
      id: 'email-link',
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      external: false,
    },
    {
      id: 'github-link',
      icon: Github,
      label: 'GitHub',
      value: 'dharunmr',
      href: personalInfo.githubUrl,
      external: true,
    },
    {
      id: 'linkedin-link',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Dharun MR',
      href: personalInfo.linkedinUrl,
      external: true,
    },
  ];

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '10px 14px',
    color: 'var(--text-primary)',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--emerald-primary)';
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--border-color)';
  };

  return (
    <section id="contact" className="section-base" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container-main max-w-[900px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-tag">08 / CONTACT</span>
          <h2 className="section-heading">Get In Touch</h2>
          <div className="section-rule" />
          <p className="text-[14px] max-w-xl mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Open to AI &amp; Data Science internships, collaborations, and research opportunities.
            Feel free to reach out — I'd love to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <h3 className="text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
              Connect directly
            </h3>
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ id, icon: Icon, label, value, href, external }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border group transition-all duration-200"
                  style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--emerald-primary)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-secondary)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-primary)';
                  }}
                >
                  <div className="p-2 rounded-lg shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--emerald-soft)', color: 'var(--emerald-primary)' }}>
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{label}</span>
                    <span className="text-[14px] font-medium" style={{ color: 'var(--text-primary)' }}>{value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div
              id="contact-form-card"
              className="p-6 sm:p-8 rounded-2xl border shadow-md"
              style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: 'var(--emerald-soft)', color: 'var(--emerald-primary)' }}>
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-bold" style={{ color: 'var(--text-primary)' }}>Message Sent!</h4>
                    <p className="text-[14px] mt-1" style={{ color: 'var(--text-secondary)' }}>
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); }}
                    className="btn-secondary text-sm mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {submitError && (
                    <div className="p-3 rounded-lg border text-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)', color: 'rgb(239, 68, 68)' }}>
                      {submitError}
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-[12px] font-mono font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      style={inputStyle}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-[12px] font-mono font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      style={inputStyle}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-[12px] font-mono font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message here..."
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || !formState.name || !formState.email || !formState.message}
                    id="contact-submit-btn"
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    ) : (
                      <Send className="w-4 h-4" aria-hidden="true" />
                    )}
                    <span>{submitting ? 'Sending…' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
