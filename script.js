/**
 * Mohamed Ismail - Engineering & AI Portfolio
 * Refactored Single-Page Interactive Architecture
 */

// Enable progressive enhancement CSS styling
document.documentElement.classList.add('js-active');

/* ==========================================================================
   PROJECTS DATASET (All 7 Verified Projects)
   ========================================================================== */
const PROJECTS_DATA = {
  dawreek: {
    id: "dawreek",
    title: "DawReeK — Premier League Match Prediction System",
    category: "AI & Machine Learning • Desktop App",
    badge: "Verified Repository",
    badgeType: "lime",
    shortDesc: "A desktop machine learning application that predicts Premier League match outcomes, goals, and team form using Poisson and regression algorithms with SQL Server.",
    overview: "DawReeK is an end-to-end desktop sports analytics application engineered to forecast English Premier League match results. It couples machine learning predictive modeling with an enterprise Microsoft SQL Server relational database and a responsive desktop graphical interface.",
    problem: "Sports data is noisy, dynamic, and multi-variable. Manually calculating team form, home advantage, goal probabilities, and expected points requires aggregating dozens of match metrics that change week to week.",
    solution: "Developed an integrated data pipeline that ingests historical match records into SQL Server, calculates rolling performance indicators, trains Poisson goal-expectancy models, and renders live match predictions through a unified desktop dashboard.",
    features: [
      "Poisson regression goal-expectancy modeling for home and away fixtures",
      "Microsoft SQL Server relational database storing league tables, historical scores, and squad stats",
      "Rolling team form calculations, goal difference differentials, and expected points (xP)",
      "Interactive desktop GUI with match selector, prediction odds breakdown, and result simulators",
      "Model evaluation pipeline with accuracy tracking and cross-validation"
    ],
    technologies: ["Python", "SQL Server", "Scikit-learn", "Pandas", "NumPy", "Tkinter", "Poisson Regression"],
    contribution: "Designed and implemented the complete application: wrote SQL relational schema queries, built data transformation pipelines in Pandas, trained predictive regression models, and developed the desktop interface.",
    gallery: [
      { src: "assets/dawreek-1.png", title: "Main Match Prediction Dashboard", caption: "Live fixture view displaying predicted win/draw/loss probabilities and expected goal counts." },
      { src: "assets/dawreek-2.png", title: "League Standings & Points Table", caption: "Dynamic Premier League table with automated points, goal difference, and form metrics." },
      { src: "assets/dawreek-3.png", title: "Team Performance & Head-to-Head Analytics", caption: "Head-to-head comparison tool evaluating rolling form over the last 5 fixtures." },
      { src: "assets/dawreek-4.png", title: "Goal Distribution Breakdown", caption: "Poisson expected goal probabilities modeled across home and away matches." },
      { src: "assets/dawreek-5.png", title: "Detailed Fixture Analysis Console", caption: "Individual match breakdown showing offensive/defensive ratings and statistical factors." },
      { src: "assets/dawreek-6.png", title: "Model Accuracy & Evaluation Metrics", caption: "Backtesting interface comparing predicted scorelines against verified historical outcomes." },
      { src: "assets/dawreek-7.png", title: "SQL Server Connection & Data Ingestion", caption: "Relational database synchronization module updating local match stores." },
      { src: "assets/dawreek-8.png", title: "Match Simulation Engine", caption: "Monte Carlo match outcome simulator exploring probable score distribution ranges." },
      { src: "assets/dawreek-9.png", title: "Team Form & Momentum Indicators", caption: "Visual indicators showing upward/downward momentum trends across the season." },
      { src: "assets/dawreek-10.png", title: "Settings & Model Hyperparameters", caption: "Configuration console for adjusting model weighting, decay factors, and database endpoints." }
    ],
    github: "https://github.com/mohamed267411-netizen/DawReeK",
    demo: null
  },

  ransomguard: {
    id: "ransomguard",
    title: "RansomGuard — Behavioral Ransomware Detection & Response",
    category: "Cybersecurity • Behavioral ML",
    badge: "Graduation Project (Class of 2027)",
    badgeType: "amber",
    shortDesc: "A graduation project investigating Windows Sysmon telemetry and process file entropy to detect ransomware behavior and explore automated host isolation.",
    overview: "RansomGuard is an intelligent endpoint security graduation project focused on behavioral detection of active ransomware attacks. Rather than relying on easily bypassed static signature databases, it analyzes real-time host telemetry to detect malicious encryption patterns before critical data loss occurs.",
    problem: "Modern ransomware employs polymorphic binaries, code obfuscation, and zero-day delivery mechanisms that routinely evade conventional signature-based antivirus solutions. Once inside, automated encryption executes in seconds.",
    solution: "Investigates low-level Windows Sysmon event telemetry to extract behavioral features (sudden I/O spikes, Shannon file entropy changes, mass file renaming, and shadow copy deletion attempts) to identify malicious processes and trigger automated containment.",
    features: [
      "Endpoint event telemetry ingestion from Windows Sysmon log channels",
      "Process behavioral heuristics detecting high-frequency file write bursts",
      "Shannon entropy calculation distinguishing encrypted files from plain text/compressed formats",
      "Machine learning anomaly classifier trained on malicious vs benign activity profiles",
      "Automated response framework exploring immediate process suspension and network isolation"
    ],
    technologies: ["Python", "Windows Sysmon", "Machine Learning", "Process Telemetry", "Security Engineering"],
    contribution: "Co-architecting the detection pipeline: designing the telemetry event parser, formulating entropy extraction algorithms, and developing behavior classification models for the graduation capstone.",
    gallery: [],
    schematicType: "ransomguard",
    github: null,
    demo: null
  },

  smartbox: {
    id: "smartbox",
    title: "Smart Box — IoT-Based Smart Package Security System",
    category: "Embedded Systems • IoT",
    badge: "University Engineering Project",
    badgeType: "lime",
    shortDesc: "A university engineering project exploring secure package reception through dual-factor electronic access control, microcontroller logic, and IoT status monitoring.",
    overview: "Smart Box is a university engineering project exploring how embedded systems, electronic access control, and IoT concepts can solve the 'last-meter' package delivery problem. It provides an electronically secured compartment that allows authorized couriers and recipients to deposit and retrieve deliveries safely.",
    problem: "Unattended deliveries left outside homes are exposed to porch theft, weather damage, and tampering. Recipients often face delivery window conflicts or must travel to remote pickup hubs.",
    solution: "Designed an embedded security system combining a dedicated physical compartment with dual-factor access (numeric PIN keypad and 13.56 MHz RFID scanner) coordinated by a microcontroller and solenoid locking mechanism with IoT status reporting.",
    features: [
      "Dual-factor authorization interface: 4x3 matrix keypad for PIN codes and RFID reader for proximity tags",
      "Central microcontroller state machine coordinating credential validation and lock timing",
      "Electronic solenoid locking mechanism with relay driver circuits and default-locked fail-safe state",
      "Enclosed delivery compartment designed to prevent unauthorized physical access",
      "IoT connectivity concepts for remote status telemetry and package arrival event logging"
    ],
    technologies: ["Embedded Systems", "IoT Concepts", "RFID (13.56MHz)", "Keypad Matrix", "Microcontroller (ESP32/Arduino)", "Circuit Design"],
    contribution: "Designed system workflow, mapped microcontroller pinout and hardware interface schematics, formulated access authorization state machine, and drafted IoT telemetry specifications.",
    gallery: [],
    schematicType: "smartbox",
    github: null,
    demo: null
  },

  tazkarti: {
    id: "tazkarti",
    title: "Tazkarti Bot — Match Availability & Telegram Alerts",
    category: "Automation • Software Development",
    badge: "Verified Repository",
    badgeType: "lime",
    shortDesc: "An automated Python monitoring service that detects Egyptian football match ticket releases, persists state in SQLite, and broadcasts instant push alerts via Telegram.",
    overview: "Tazkarti Bot is a production-tested Python automation tool that continuously monitors ticket availability for Egyptian football matches on the Tazkarti booking platform, notifying subscribers in real time the moment seats are released.",
    problem: "High-profile football match tickets in Egypt sell out within minutes of being released. The platform does not provide public release schedules, forcing fans to manually refresh booking pages repeatedly.",
    solution: "Built an asynchronous background polling daemon that periodically inspects ticket availability, detects status changes using SQLite relational state persistence, and broadcasts rich HTML alert notifications with direct booking links via Telegram Bot API.",
    features: [
      "Continuous HTTP polling engine with resilient error handling and request throttling",
      "Relational SQLite state database (matches.db) tracking historical fixture availability",
      "Deduplication logic preventing spam alerts while ensuring instant notification on release",
      "Telegram Bot API integration broadcasting instant push notifications with booking links",
      "Configurable polling frequencies and environment variable management via python-dotenv"
    ],
    technologies: ["Python", "Telegram Bot API", "SQLite", "Requests", "Workflow Automation", "Python-dotenv"],
    contribution: "Designed and authored the complete automation script: implemented HTTP request parsing, built SQLite relational tracking schema, and integrated the Telegram notification bot.",
    gallery: [],
    schematicType: "tazkarti",
    github: "https://github.com/mohamed267411-netizen/tazkarti_bot",
    demo: null
  },

  airline: {
    id: "airline",
    title: "Airline Management System — Desktop Reservation Console",
    category: "Software Development • Desktop App",
    badge: "University Foundation Project",
    badgeType: "lime",
    shortDesc: "An object-oriented desktop reservation application managing flights, passenger bookings, and ticket states with relational SQLite persistence and a Tkinter GUI.",
    overview: "The Airline Management System is a university software engineering project demonstrating fundamental object-oriented architecture (OOP), database design, and graphical user interface development in Python.",
    problem: "Flight booking operations require atomic seat allocation, passenger record tracking, and schedule validation to avoid double-booking and maintain synchronized flight capacity records.",
    solution: "Engineered a multi-view desktop console with relational SQLite database backing. Structured flight, passenger, and booking entities into modular Python classes with automated seat counting and ticket generation.",
    features: [
      "Flight scheduling module with destination lookup, departure times, and capacity tracking",
      "Passenger registration and ticket reservation interface with input validation",
      "Relational SQLite embedded database persisting all records across application restarts",
      "Seat availability decrementer preventing overbooking and duplicate seat assignments",
      "Clean desktop GUI built with Python Tkinter supporting fast lookup and booking cancellations"
    ],
    technologies: ["Python", "Tkinter GUI", "SQLite", "Object-Oriented Programming (OOP)", "Relational Modeling"],
    contribution: "Authored the full codebase: designed SQLite schema, programmed OOP business logic classes, and constructed the Tkinter graphical views and booking forms.",
    gallery: [
      { src: "assets/air1.png", title: "Flight Schedule & Lookup Console", caption: "Main dashboard displaying scheduled flights, available seats, and departure details." },
      { src: "assets/air2.png", title: "Passenger Record Management", caption: "Form interface for capturing passenger identification, contact details, and assigned flights." },
      { src: "assets/air3.png", title: "Booking Confirmation & Seat Allocation", caption: "Atomic seat reservation view confirming booking status and seat numbers." },
      { src: "assets/air4.png", title: "Ticket Cancellation & Database Sync", caption: "Reservation cancellation workflow updating remaining seat capacities in real time." }
    ],
    github: null,
    demo: null
  },

  gym: {
    id: "gym",
    title: "Gym Members Analytics — Exploratory Data Analysis",
    category: "Data Analysis • Python",
    badge: "Verified Repository",
    badgeType: "lime",
    shortDesc: "An exploratory data analysis project evaluating gym member attendance patterns, workout frequency, and subscription retention factors using Pandas and Matplotlib.",
    overview: "An exploratory data analysis (EDA) project analyzing gym membership demographics, attendance frequencies, workout durations, and subscription renewal trends to uncover operational retention drivers.",
    problem: "Fitness centers experience high member turnover. Without analyzing attendance behaviors and demographic patterns, operators cannot identify at-risk members or optimize facility schedules.",
    solution: "Cleaned and transformed multi-variable gym operational data, performed statistical distribution analysis, and visualized correlations between visit frequency, workout types, and long-term membership renewals.",
    features: [
      "Data preprocessing pipeline handling missing entries, type normalization, and outlier detection",
      "Demographic and age-bracket breakdown assessing membership distribution",
      "Correlation analysis between weekly visit frequency and subscription tier longevity",
      "Data visualization with Matplotlib and Seaborn revealing peak usage hours and workout trends",
      "Actionable recommendations for gym management to improve member engagement"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning", "EDA"],
    contribution: "Executed the complete analysis workflow: cleaned raw datasets, performed statistical aggregation in Pandas, and generated data visualizations.",
    gallery: [
      { src: "assets/gym-dashboard.png", title: "Gym Members Analytics Dashboard", caption: "Comprehensive visualization of member demographics, attendance frequency, and retention distributions." }
    ],
    github: "https://github.com/mohamed267411-netizen/Analysis-of-the-Gym",
    demo: null
  },

  yourmovies: {
    id: "yourmovies",
    title: "Your Movies — Multi-Page Entertainment Web Portal",
    category: "Software Development • Web Technologies",
    badge: "Live Web Application",
    badgeType: "lime",
    shortDesc: "A responsive multi-page entertainment catalog for movies, series, and anime built with semantic HTML5, CSS3 transitions, and vanilla JavaScript DOM filtering.",
    overview: "Your Movies is a multi-page web application featuring curated catalogs for trending films, television series, and anime releases, built with semantic web standards and hosted on GitHub Pages.",
    problem: "Many modern entertainment discovery sites are bloated with heavy client-side JavaScript frameworks, third-party tracking scripts, and slow initial page load times.",
    solution: "Constructed a lightweight, multi-page web portal using semantic HTML5, modular CSS3 styling, and clean Vanilla JavaScript for fast navigation, client-side media filtering, and zero-dependency performance.",
    features: [
      "Multi-page architecture with dedicated portals for movies, television series, and anime",
      "Client-side search and category filtering powered by Vanilla JavaScript",
      "Modern dark UI layout with responsive CSS grid and smooth hover interactions",
      "Mobile-optimized responsive navigation and touch-friendly media cards",
      "Zero build tools or dependencies, deployed live on GitHub Pages"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"],
    contribution: "Designed and developed the entire web portal from scratch: wrote semantic HTML5 page templates, authored responsive CSS3 layouts, and implemented vanilla JS search and filtering.",
    gallery: [],
    schematicType: "yourmovies",
    github: null,
    demo: "https://mohamed267411-netizen.github.io/your-movie/"
  }
};

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize Core Navigation & Interaction Modules
  initNavbarScroll();
  initMobileMenu();
  initSpotlightCards();
  initScrollReveal();
  initScrollSpy();
  initProjectFilters();
  initProjectDetailModal();
  initImageLightbox();
  initEmailComposerAndCopy();
  initFooterYear();

  // Non-intrusive progressive animations (only if reduced motion is disabled)
  if (!prefersReducedMotion) {
    initCanvasMesh();
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

  // Close when clicking navigation anchor links
  const links = mobileNav.querySelectorAll('.mobile-nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}

/* ==========================================================================
   3. SPOTLIGHT CARD BORDER HOVER EFFECT
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

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   5. SCROLL SPY ACTIVE NAV INDICATOR (5 Core Sections)
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
    threshold: 0.2,
    rootMargin: '-80px 0px -40% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   6. PROJECT CATEGORY FILTERING (7 Selected Projects)
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.project-grid-card');
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

      projectCards.forEach(card => {
        const cats = (card.getAttribute('data-category') || '').split(' ');
        if (selectedFilter === 'all' || cats.includes(selectedFilter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   7. IN-PAGE PROJECT DETAIL MODAL SYSTEM
   ========================================================================== */
let currentModalGallery = [];
let currentGalleryIndex = 0;

function initProjectDetailModal() {
  const modal = document.getElementById('project-detail-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const viewDetailBtns = document.querySelectorAll('.btn-view-details');
  if (!modal) return;

  let lastActiveElement = null;

  const openProjectModal = (projectId, triggerEl) => {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    lastActiveElement = triggerEl;

    // Populate Modal Metadata & Text
    document.getElementById('modal-project-title').textContent = data.title;
    document.getElementById('modal-project-category').textContent = data.category;
    document.getElementById('modal-project-overview').textContent = data.overview;
    document.getElementById('modal-project-problem').textContent = data.problem;
    document.getElementById('modal-project-solution').textContent = data.solution;
    document.getElementById('modal-project-contribution').textContent = data.contribution;

    // Features List
    const featuresList = document.getElementById('modal-project-features');
    featuresList.innerHTML = '';
    data.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      featuresList.appendChild(li);
    });

    // Tech Pills
    const techBox = document.getElementById('modal-project-techs');
    techBox.innerHTML = '';
    data.technologies.forEach(t => {
      const pill = document.createElement('span');
      pill.className = 'tech-pill';
      pill.textContent = t;
      techBox.appendChild(pill);
    });

    // Links Bar
    const linksBar = document.getElementById('modal-project-links');
    linksBar.innerHTML = '';

    if (data.github) {
      const ghBtn = document.createElement('a');
      ghBtn.href = data.github;
      ghBtn.target = '_blank';
      ghBtn.rel = 'noopener noreferrer';
      ghBtn.className = 'btn btn-sm btn-outline-lime font-mono';
      ghBtn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        <span>View Repository</span>
      `;
      linksBar.appendChild(ghBtn);
    }

    if (data.demo) {
      const demoBtn = document.createElement('a');
      demoBtn.href = data.demo;
      demoBtn.target = '_blank';
      demoBtn.rel = 'noopener noreferrer';
      demoBtn.className = 'btn btn-sm btn-lime font-mono';
      demoBtn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        <span>Open Live Website</span>
      `;
      linksBar.appendChild(demoBtn);
    }

    if (!data.github && !data.demo) {
      const infoSpan = document.createElement('span');
      infoSpan.className = 'font-mono text-muted';
      infoSpan.style.fontSize = '0.8rem';
      infoSpan.textContent = 'Academic Project • Code and deployment are maintained internally.';
      linksBar.appendChild(infoSpan);
    }

    // Gallery / Schematics setup
    const gallerySection = document.getElementById('modal-gallery-section');
    const schematicSection = document.getElementById('modal-schematic-section');

    if (data.gallery && data.gallery.length > 0) {
      gallerySection.style.display = 'flex';
      schematicSection.style.display = 'none';

      currentModalGallery = data.gallery;
      currentGalleryIndex = 0;
      updateModalGallery();
    } else {
      gallerySection.style.display = 'none';
      schematicSection.style.display = 'block';
      renderSchematicPreview(schematicSection, data.schematicType);
    }

    // Open Modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 80);
    }
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  // Attach click listeners to cards
  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.getAttribute('data-project-id');
      openProjectModal(pid, btn);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Backdrop click to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Gallery Controls
  const prevBtn = document.getElementById('gallery-prev-btn');
  const nextBtn = document.getElementById('gallery-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (!currentModalGallery.length) return;
      currentGalleryIndex = (currentGalleryIndex - 1 + currentModalGallery.length) % currentModalGallery.length;
      updateModalGallery();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (!currentModalGallery.length) return;
      currentGalleryIndex = (currentGalleryIndex + 1) % currentModalGallery.length;
      updateModalGallery();
    });
  }

  // Keyboard navigation & accessibility
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('image-lightbox');
    const isLightboxOpen = lightbox && lightbox.classList.contains('active');

    // If lightbox is open, let lightbox handler handle Escape
    if (isLightboxOpen) return;

    if (modal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft' && currentModalGallery.length > 1) {
        currentGalleryIndex = (currentGalleryIndex - 1 + currentModalGallery.length) % currentModalGallery.length;
        updateModalGallery();
      } else if (e.key === 'ArrowRight' && currentModalGallery.length > 1) {
        currentGalleryIndex = (currentGalleryIndex + 1) % currentModalGallery.length;
        updateModalGallery();
      }
    }
  });
}

function updateModalGallery() {
  if (!currentModalGallery.length) return;

  const item = currentModalGallery[currentGalleryIndex];
  const imgEl = document.getElementById('modal-gallery-active-img');
  const captionEl = document.getElementById('modal-gallery-caption');
  const counterEl = document.getElementById('modal-gallery-counter');
  const thumbsBox = document.getElementById('modal-thumbs-strip');

  if (imgEl) {
    imgEl.src = item.src;
    imgEl.alt = item.title;
  }
  if (captionEl) {
    captionEl.textContent = `${item.title}: ${item.caption}`;
  }
  if (counterEl) {
    counterEl.textContent = `${String(currentGalleryIndex + 1).padStart(2, '0')} / ${String(currentModalGallery.length).padStart(2, '0')}`;
  }

  // Populate thumbnails
  if (thumbsBox) {
    thumbsBox.innerHTML = '';
    currentModalGallery.forEach((itm, idx) => {
      const tbtn = document.createElement('button');
      tbtn.type = 'button';
      tbtn.className = `thumb-mini-btn ${idx === currentGalleryIndex ? 'active' : ''}`;
      tbtn.textContent = String(idx + 1).padStart(2, '0');
      tbtn.title = itm.title;
      tbtn.addEventListener('click', () => {
        currentGalleryIndex = idx;
        updateModalGallery();
      });
      thumbsBox.appendChild(tbtn);
    });

    const activeThumb = thumbsBox.querySelector('.thumb-mini-btn.active');
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }
}

function renderSchematicPreview(container, type) {
  if (type === 'ransomguard') {
    container.innerHTML = `
      <div class="technical-preview-box">
        <div class="preview-chrome font-mono">
          <div class="preview-dots"><span></span><span></span><span></span></div>
          <span class="preview-address">ransomguard &bull; behavioral-telemetry</span>
          <span class="preview-tag text-amber">Graduation Project</span>
        </div>
        <div class="ransomguard-schematic font-mono">
          <div class="sys-flow-box">
            <div class="flow-stage"><span class="flow-pill">Endpoint Telemetry</span><span class="flow-detail">Windows Sysmon Channels</span></div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-stage highlight"><span class="flow-pill">Event Feature Extractor</span><span class="flow-detail">I/O Bursts &bull; Shannon Entropy</span></div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-stage"><span class="flow-pill">Behavioral Anomaly Classifier</span><span class="flow-detail">Process Heuristics &bull; ML</span></div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-stage containment"><span class="flow-pill text-amber">Automated Containment</span><span class="flow-detail">Process Suspension &bull; Network Isolation</span></div>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'smartbox') {
    container.innerHTML = `
      <div class="technical-preview-box">
        <div class="preview-chrome font-mono">
          <div class="preview-dots"><span></span><span></span><span></span></div>
          <span class="preview-address">smartbox &bull; iot-access-controller</span>
          <span class="preview-tag text-lime">University Project</span>
        </div>
        <div class="smartbox-schematic font-mono">
          <div class="sb-arch-diagram">
            <div class="sb-inputs-row">
              <div class="sb-module-box">
                <div class="sb-module-header"><span>Keypad Matrix</span><span class="text-lime">4x3 PIN</span></div>
                <div class="sb-keypad-mini"><span class="sb-key-btn">1</span><span class="sb-key-btn">2</span><span class="sb-key-btn">3</span><span class="sb-key-btn">4</span><span class="sb-key-btn">5</span><span class="sb-key-btn">6</span><span class="sb-key-btn">7</span><span class="sb-key-btn">8</span><span class="sb-key-btn">9</span><span class="sb-key-btn">*</span><span class="sb-key-btn">0</span><span class="sb-key-btn">#</span></div>
              </div>
              <div class="sb-module-box">
                <div class="sb-module-header"><span>RFID Reader</span><span class="text-lime">13.56MHz</span></div>
                <div class="sb-rfid-sensor"><span>Proximity Credential</span></div>
              </div>
            </div>
            <div class="sb-bus-connector"><span class="sb-bus-line"></span><span>&darr; GPIO Bus &darr;</span><span class="sb-bus-line"></span></div>
            <div class="sb-mcu-core"><div class="sb-mcu-title">&bull; Microcontroller Processing Core &bull;</div><div class="sb-mcu-desc">State Machine &bull; Access Validation &bull; Actuator Gating</div></div>
            <div class="sb-bus-connector"><span class="sb-bus-line"></span><span>&darr; Actuator Signal &bull; Telemetry &darr;</span><span class="sb-bus-line"></span></div>
            <div class="sb-outputs-row">
              <div class="sb-module-box"><div class="sb-module-header"><span>Solenoid Lock</span><span class="sb-lock-status">&bull; Controlled</span></div><div class="text-muted" style="font-size: 0.65rem;">Relay-driven locking bolt</div></div>
              <div class="sb-module-box"><div class="sb-module-header"><span>IoT Telemetry</span><span class="text-lime">Concept</span></div><div class="text-muted" style="font-size: 0.65rem;">Remote reception status log</div></div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (type === 'tazkarti') {
    container.innerHTML = `
      <div class="technical-preview-box">
        <div class="preview-chrome font-mono">
          <div class="preview-dots"><span></span><span></span><span></span></div>
          <span class="preview-address">tazkarti_bot &bull; monitor.py &bull; daemon</span>
          <span class="preview-tag text-lime">Automation</span>
        </div>
        <div class="bot-stream-visual font-mono" style="padding: 16px; background: #080d1a;">
          <div style="font-size: 0.72rem; line-height: 1.8; color: var(--text-secondary);">
            <span class="text-muted">[DAEMON]</span> Initializing SQLite database <span class="text-lime">matches.db</span>... OK<br>
            <span class="text-muted">[POLL]</span> Requesting fixture state from Tazkarti endpoint... 200 OK<br>
            <span class="text-muted">[STATE]</span> Parsing available category blocks &amp; seat reservations<br>
            <span class="text-lime">[EVENT]</span> New Match Tickets Released &bull; Egyptian Premier League<br>
            <span class="text-muted">[BROADCAST]</span> Transmitting formatted HTML alert payload via Telegram API... Delivered
          </div>
        </div>
      </div>
    `;
  } else if (type === 'yourmovies') {
    container.innerHTML = `
      <div class="technical-preview-box">
        <div class="preview-chrome font-mono">
          <div class="preview-dots"><span></span><span></span><span></span></div>
          <span class="preview-address">https://mohamed267411-netizen.github.io/your-movie/</span>
          <span class="preview-tag text-lime">Live on GitHub Pages</span>
        </div>
        <div class="web-preview-mockup font-mono" style="padding: 18px; background: #080d1a;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px; margin-bottom: 12px;">
            <span style="font-weight: 800; color: var(--color-lime);">YOUR MOVIES</span>
            <div style="display: flex; gap: 10px; font-size: 0.7rem; color: var(--text-muted);">
              <span>Movies</span> &bull; <span>Series</span> &bull; <span>Anime</span>
            </div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 4px; font-size: 0.75rem;">
            <div style="color: var(--color-lime); font-weight: 700; margin-bottom: 4px;">Curated Entertainment Portal</div>
            <div style="color: var(--text-secondary); line-height: 1.5;">Lightweight, responsive multi-page architecture with client-side Vanilla JS filtering and zero external framework overhead.</div>
          </div>
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   8. FULLSCREEN IMAGE LIGHTBOX
   ========================================================================== */
function initImageLightbox() {
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-active-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');
  const stageBox = document.getElementById('gallery-stage-box');

  if (!lightbox || !stageBox) return;

  const openLightbox = () => {
    if (!currentModalGallery.length) return;
    updateLightbox();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');

    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 80);
    }
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) modalCloseBtn.focus();
  };

  const updateLightbox = () => {
    if (!currentModalGallery.length) return;
    const item = currentModalGallery[currentGalleryIndex];
    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.title;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = `${item.title} (${currentGalleryIndex + 1} / ${currentModalGallery.length})`;
    }
  };

  stageBox.addEventListener('click', openLightbox);

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (!currentModalGallery.length) return;
      currentGalleryIndex = (currentGalleryIndex - 1 + currentModalGallery.length) % currentModalGallery.length;
      updateLightbox();
      updateModalGallery();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (!currentModalGallery.length) return;
      currentGalleryIndex = (currentGalleryIndex + 1) % currentModalGallery.length;
      updateLightbox();
      updateModalGallery();
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-img-wrap')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      currentGalleryIndex = (currentGalleryIndex - 1 + currentModalGallery.length) % currentModalGallery.length;
      updateLightbox();
      updateModalGallery();
    } else if (e.key === 'ArrowRight') {
      currentGalleryIndex = (currentGalleryIndex + 1) % currentModalGallery.length;
      updateLightbox();
      updateModalGallery();
    }
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
   10. DYNAMIC FOOTER YEAR
   ========================================================================== */
function initFooterYear() {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   11. PROGRESSIVE BACKGROUND PARTICLE CONSTELLATION CANVAS
   ========================================================================== */
function initCanvasMesh() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let reqId;

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resize, { passive: true });
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 1.5 + 0.6;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(163, 230, 53, 0.28)';
      ctx.fill();
    }
  }

  // Adjust particle count according to screen size
  const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 28000), 45);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  const maxDistance = 120;

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const opacity = (1 - dist / maxDistance) * 0.12;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(163, 230, 53, ${opacity})`;
          ctx.lineWidth = 0.7;
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
