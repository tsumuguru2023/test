/**
 * リベ大デンタルクリニック武蔵小杉院 — 初めての方へ
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========== Smooth scroll ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector('.l-header').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });

      // Close mobile menu if open
      closeMobileMenu();
    });
  });

  // ========== Header shadow on scroll ==========
  const header = document.querySelector('.l-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // ========== Hamburger menu ==========
  const hamburger = document.getElementById('js-hamburger');
  const mobileNav = document.getElementById('js-mobile-nav');

  function closeMobileMenu() {
    if (hamburger && mobileNav) {
      hamburger.classList.remove('is-active');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('is-active');
      mobileNav.classList.toggle('is-open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click inside mobile nav
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // Close mobile menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    }
  });
});
