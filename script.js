/**
 * Mohamed Ismail - Engineering & AI Portfolio
 * Creative UI/UX Interactions & Accessible Architecture
 */

// Enable progressive enhancement CSS styling
document.documentElement.classList.add('js-active');

document.addEventListener('DOMContentLoaded', () => {
  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize Core Functions
  initNavbarScroll();
  initMobileMenu();
  initSpotlightCards();
  initScrollReveal();
  initScrollSpy();
  initProjectFilters();
  initLabStatusSwitcher();
  initProjectCarousels();
  initSmartBoxModal();
  initEmailComposerAndCopy();
  initFooterYear();

  // Non-intrusive progressive animations (only if reduced motion is disabled)
  if (!prefersReducedMotion) {
    initCanvasMesh();
    initHeroTerminalTyping();
  }
});

/* ==========================================================================
   1. NAVBAR SCROLL INTERACTION
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   2. ACCESSIBLE MOBILE NAVIGATION MENU
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!toggleBtn || !mobileNav) return;

  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on nav link click
  const links = mobileNav.querySelectorAll('.mobile-nav-link');
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   3. SPOTLIGHT HOVER EFFECT (Linear / Vercel style)
   ========================================================================== */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   4. SCROLL REVEAL OBSERVER (Progressive Enhancement)
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-delay');
        if (delay) {
          setTimeout(() => {
            el.classList.add('revealed');
          }, parseInt(delay, 10));
        } else {
          el.classList.add('revealed');
        }
        obs.unobserve(el);
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   5. SCROLL SPY ACTIVE NAV INDICATOR
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-item');
  if (!sections.length || !desktopLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   6. INTERACTIVE PROJECT CATEGORY FILTERING
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.project-showcase-card');
  const emptyState = document.getElementById('projects-empty-state');
  const totalCountEl = document.getElementById('projects-total-count');
  
  if (!filterBtns.length || !projectCards.length) return;

  if (totalCountEl) {
    totalCountEl.textContent = projectCards.length;
  }

  // Calculate and display dynamic count for each category filter tab
  filterBtns.forEach(btn => {
    const filter = btn.getAttribute('data-filter');
    const countEl = btn.querySelector('.filter-count');
    if (!countEl) return;

    if (filter === 'all') {
      countEl.textContent = projectCards.length;
    } else {
      let count = 0;
      projectCards.forEach(card => {
        const cats = (card.getAttribute('data-category') || '').split(' ');
        if (cats.includes(filter)) count++;
      });
      countEl.textContent = count;
    }
  });

  // Filter click handling with keyboard support
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedFilter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      let visibleCount = 0;
      projectCards.forEach(card => {
        const cats = (card.getAttribute('data-category') || '').split(' ');
        if (selectedFilter === 'all' || cats.includes(selectedFilter)) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}

/* ==========================================================================
   7. SIGNATURE COMPONENT: LAB STATUS / CURRENTLY BUILDING SWITCHER
   ========================================================================== */
function initLabStatusSwitcher() {
  const trackBtns = document.querySelectorAll('.lab-track-btn');
  const trackViews = document.querySelectorAll('.lab-track-view');
  if (!trackBtns.length || !trackViews.length) return;

  trackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTrack = btn.getAttribute('data-track');

      trackBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      trackViews.forEach(view => {
        if (view.getAttribute('data-track') === targetTrack) {
          view.classList.add('active');
        } else {
          view.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   8. PROJECT IMAGE GALLERY CAROUSELS (Numbered Navigation)
   ========================================================================== */
function initProjectCarousels() {
  const carousels = document.querySelectorAll('.project-gallery-carousel');
  if (!carousels.length) return;

  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.gallery-slide');
    const numPills = carousel.querySelectorAll('.num-pill');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;

      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      numPills.forEach((pill, idx) => {
        if (idx === currentIndex) {
          pill.classList.add('active');
          pill.setAttribute('aria-selected', 'true');
          pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          pill.classList.remove('active');
          pill.setAttribute('aria-selected', 'false');
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex + 1);
      });
    }

    numPills.forEach((pill, idx) => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(idx);
      });
    });

    // Keyboard navigation when inside carousel
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showSlide(currentIndex + 1);
      }
    });
  });
}

/* ==========================================================================
   9. FUNCTIONAL EMAIL COMPOSER & TOAST FEEDBACK
   ========================================================================== */
function initEmailComposerAndCopy() {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  const showToast = (msg) => {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3400);
  };

  // Copy Email Button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-copy') || 'mohamed267411@gmail.com';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          const input = document.createElement('input');
          input.value = email;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          document.body.removeChild(input);
        }
        showToast('Email address copied to clipboard: ' + email);
      } catch (err) {
        showToast('Email: ' + email);
      }
    });
  }

  // Functional Quick Email Form (Opens mailto draft in default client)
  const quickForm = document.getElementById('contact-quick-form');
  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const senderName = document.getElementById('contact-name').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      const encodedSubject = encodeURIComponent(subject || 'Engineering Portfolio Inquiry');
      const bodyContent = `Hello Mohamed,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0ABest regards,%0D%0A${encodeURIComponent(senderName)}`;
      
      const mailtoUrl = `mailto:mohamed267411@gmail.com?subject=${encodedSubject}&body=${bodyContent}`;
      
      showToast('Opening default email application...');
      window.location.href = mailtoUrl;
    });
  }
}

/* ==========================================================================
   9. FOOTER YEAR AUTO-UPDATE
   ========================================================================== */
function initFooterYear() {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   10. HERO TERMINAL INTERACTIVE TYPING SIMULATION
   ========================================================================== */
function initHeroTerminalTyping() {
  const target = document.getElementById('hero-typing-target');
  if (!target) return;

  const commands = [
    'python -m ransomguard.telemetry --event sysmon',
    'python tazkarti_bot/monitor.py --interval 30',
    'python -m dawreek.predict --league EPL',
    'python scripts/eda_gym.py --export dashboard',
    'git status --short'
  ];

  let cmdIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  const typeCycle = () => {
    const current = commands[cmdIndex];

    if (isDeleting) {
      target.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      target.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === current.length) {
      typingSpeed = 2600; // Pause at end of command
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      cmdIndex = (cmdIndex + 1) % commands.length;
      typingSpeed = 600; // Pause before new command
    }

    setTimeout(typeCycle, typingSpeed);
  };

  setTimeout(typeCycle, 1200);
}

/* ==========================================================================
   11. INTERACTIVE BACKGROUND CANVAS MESH (Crisp High-DPR)
   ========================================================================== */
function initCanvasMesh() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let dpr = window.devicePixelRatio || 1;
  let width = window.innerWidth;
  let height = window.innerHeight;

  function setSize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  setSize();

  const particles = [];
  const count = Math.min(Math.floor((width * height) / 24000), 40);
  const maxDistance = 135;

  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Debounced Resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setSize();
    }, 150);
  }, { passive: true });

  class NodeParticle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.8;
      this.alpha = Math.random() * 0.35 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.1;
          this.y -= Math.sin(angle) * force * 1.1;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(163, 230, 53, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new NodeParticle());
  }

  let isVisible = true;
  let reqId = null;

  document.addEventListener('visibilitychange', () => {
    isVisible = !document.hidden;
    if (isVisible) {
      if (!reqId) {
        reqId = requestAnimationFrame(animate);
      }
    } else {
      if (reqId) {
        cancelAnimationFrame(reqId);
        reqId = null;
      }
    }
  });

  function animate() {
    if (!isVisible) {
      reqId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const opacity = (1 - dist / maxDistance) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(163, 230, 53, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    reqId = requestAnimationFrame(animate);
  }

  reqId = requestAnimationFrame(animate);
}

/* ==========================================================================
   11. SMART BOX PROJECT DETAILS MODAL
   ========================================================================== */
function initSmartBoxModal() {
  const openBtns = document.querySelectorAll('.smartbox-modal-open-btn');
  const modal = document.getElementById('smartbox-details-modal');
  if (!modal || !openBtns.length) return;

  const closeBtns = modal.querySelectorAll('.modal-close-btn');
  let lastFocusedElement = null;

  const openModal = (trigger) => {
    lastFocusedElement = trigger;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus on the first close button inside the modal for keyboard accessibility
    const firstCloseBtn = modal.querySelector('.modal-close-btn');
    if (firstCloseBtn) {
      setTimeout(() => firstCloseBtn.focus(), 80);
    }
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => openModal(btn));
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close modal when clicking directly on the backdrop outside the container
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Keyboard navigation: Escape key to close, and Tab key focus trapping
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
    }

    if (e.key === 'Tab') {
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  });
}
