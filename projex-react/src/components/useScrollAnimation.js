import { useEffect } from 'react';

export default function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .fade-in');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
