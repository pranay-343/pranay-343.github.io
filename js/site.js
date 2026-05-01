// Pranay Patodi — site interactions
(function () {
  'use strict';

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky nav style on scroll
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 8) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal-on-scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // Contact form: open user's mail client with prefilled body.
  // Drop-in upgrade: set FORMSPREE_ENDPOINT to your Formspree URL and the
  // form will POST instead of mailto.
  const FORMSPREE_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxx'

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (!data.name || !data.email || !data.message) {
        status.textContent = 'Please fill in name, email, and message.';
        status.className = 'form-status error';
        return;
      }

      if (FORMSPREE_ENDPOINT) {
        try {
          status.textContent = 'Sending…';
          status.className = 'form-status';
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(form)
          });
          if (res.ok) {
            status.textContent = 'Thanks — I’ll be in touch within a day.';
            status.className = 'form-status success';
            form.reset();
          } else {
            throw new Error('bad status');
          }
        } catch (err) {
          status.textContent = 'Send failed. Email me directly at pranay343@gmail.com.';
          status.className = 'form-status error';
        }
        return;
      }

      // Mailto fallback (works without backend)
      const subject = `New project inquiry — ${data.topic || 'general'} (${data.name})`;
      const body =
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        (data.company ? `Company: ${data.company}\n` : '') +
        `Topic: ${data.topic || 'general'}\n\n` +
        `${data.message}`;
      const href = `mailto:pranay343@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      status.textContent = 'Opening your email app… If nothing happens, email pranay343@gmail.com directly.';
      status.className = 'form-status success';
    });
  }
})();
