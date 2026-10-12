'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global listener for smooth anchor navigation across all pages
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Handle in-page anchors like "#services" or "/#services" on home page
      let targetId = '';
      if (href.startsWith('#') && href.length > 1) {
        targetId = href.slice(1);
      } else if (href.startsWith('/#') && window.location.pathname === '/') {
        targetId = href.slice(2);
      }

      if (targetId) {
        if (targetId === 'hero' || targetId === 'home') {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl, { offset: 0, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, true);

    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
