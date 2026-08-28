const NAV_OFFSET = -80;

export function scrollToSection(href: string, offset = NAV_OFFSET): boolean {
  if (!href.startsWith('#') || href.length <= 1) return false;

  const targetElement = document.querySelector<HTMLElement>(href);
  if (!targetElement) return false;

  const lenis = window.lenisInstance;

  if (lenis) {
    lenis.scrollTo(targetElement, { offset });
  } else {
    const top =
      targetElement.getBoundingClientRect().top + window.scrollY + offset;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }

  history.pushState(null, '', href);
  return true;
}
