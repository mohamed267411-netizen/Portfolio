/**
 * Mohamed Ismail - Engineering Portfolio
 * Interactive Scripts & Project Dataset
 */

// Enable progressive enhancement CSS styling
document.documentElement.classList.add('js-active');

/* ==========================================================================
   PROJECTS DATASET (All 8 Projects)
   ========================================================================== */
const PROJECTS_DATA = {
  dawreek: {
    id: "dawreek",
    title: "DawReeK — Premier League Match Prediction System",
    category: "AI & Machine Learning • Desktop App",
    badge: "Verified Repository",
    badgeType: "lime",
    shortDesc: "A Python desktop application that uses historical Premier League data to predict home and away goals using Poisson regression, match statistics, and SQL Server.",
    overview: "DawReeK is a Python desktop application that uses historical Premier League data to predict home and away goals. It combines Poisson regression, match statistics, and SQL Server to display predictions through a desktop interface.",
    problem: "Calculating football match probabilities and team form manually requires aggregating historical match records, goal differences, and home/away performance factors that change from week to week.",
    solution: "Built a Python desktop tool that queries historical match statistics from Microsoft SQL Server, calculates rolling team form metrics, applies Poisson regression models to estimate expected goals, and presents the predictions through a graphical desktop interface.",
    features: [
      "Poisson regression models estimating home and away goal expectancies",
      "Microsoft SQL Server relational database storing league tables, historical scores, and squad stats",
      "Rolling team form and goal difference calculations across recent fixtures",
      "Desktop user interface for selecting fixtures and viewing predicted scorelines",
      "Model evaluation comparing predicted goal outcomes against verified historical match results"
    ],
    technologies: ["Python", "SQL Server", "Scikit-learn", "Pandas", "NumPy", "Tkinter", "Poisson Regression"],
    contribution: "Developed the desktop application: wrote the SQL relational schema queries, built data transformation logic in Pandas, implemented the Poisson goal prediction models, and constructed the Tkinter interface.",
    gallery: [
      { src: "assets/dawreek-1.png", title: "Main Match Prediction Dashboard", caption: "Fixture view displaying predicted win/draw/loss probabilities and expected goal counts." },
      { src: "assets/dawreek-2.png", title: "League Standings & Points Table", caption: "Premier League table displaying points, goal difference, and recent form metrics." },
      { src: "assets/dawreek-3.png", title: "Team Performance & Head-to-Head Analytics", caption: "Head-to-head comparison evaluating rolling form over recent fixtures." },
      { src: "assets/dawreek-4.png", title: "Goal Distribution Breakdown", caption: "Poisson expected goal probabilities modeled across home and away matches." },
      { src: "assets/dawreek-5.png", title: "Detailed Fixture Analysis Console", caption: "Individual match breakdown showing offensive/defensive ratings and statistical factors." },
      { src: "assets/dawreek-6.png", title: "Model Accuracy & Evaluation Metrics", caption: "Evaluation interface comparing predicted scorelines against historical outcomes." },
      { src: "assets/dawreek-7.png", title: "SQL Server Connection & Data Ingestion", caption: "Relational database synchronization module updating local match records." },
      { src: "assets/dawreek-8.png", title: "Match Simulation Engine", caption: "Outcome simulator exploring probable score distribution ranges." },
      { src: "assets/dawreek-9.png", title: "Team Form & Momentum Indicators", caption: "Indicators showing form trends across the season." },
      { src: "assets/dawreek-10.png", title: "Settings & Model Hyperparameters", caption: "Configuration options for model weighting and database connection parameters." }
    ],
    github: "https://github.com/mohamed267411-netizen/DawReeK",
    demo: null
  },

  ransomguard: {
    id: "ransomguard",
    title: "RansomGuard — Behavioral Ransomware Detection & Response (In Development)",
    category: "Cybersecurity • Behavioral ML",
    badge: "Graduation Project (Class of 2027) • In Development",
    badgeType: "amber",
    shortDesc: "An undergraduate engineering capstone project investigating Windows Sysmon telemetry and file entropy analysis to explore behavioral ransomware detection.",
    overview: "RansomGuard is an undergraduate engineering graduation capstone project currently under active development. The project explores behavioral detection strategies to identify potential ransomware activity by analyzing endpoint telemetry rather than relying solely on static signature databases.",
    problem: "Modern ransomware employs code obfuscation and polymorphic binaries that can bypass conventional signature-based antivirus solutions. Detecting active encryption requires identifying behavioral anomalies such as rapid file modifications and entropy spikes.",
    solution: "Developing a detection framework that analyzes Windows Sysmon event logs to identify suspicious process behaviors, calculates Shannon entropy on modified files to detect encryption patterns, and researches automated containment concepts such as process suspension.",
    features: [
      "Exploration of Windows Sysmon log ingestion for process and file modification events",
      "Shannon entropy calculation algorithms to identify file encryption behavior",
      "Analysis of behavioral heuristics such as rapid file renaming and abnormal disk I/O",
      "Planned machine learning classification for suspicious process profiles (in progress)",
      "Conceptual framework for automated process termination and endpoint containment (planned)"
    ],
    technologies: ["Python", "Windows Sysmon", "Behavioral Heuristics", "Shannon Entropy", "Security Engineering"],
    contribution: "Co-developing the project for the graduation capstone: researching Sysmon event parsing, experimenting with file entropy algorithms, and testing anomaly detection approaches.",
    gallery: [],
    schematicType: "ransomguard",
    github: null,
    demo: null
  },

  smartbox: {
    id: "smartbox",
    title: "Smart Box — IoT-Based Smart Package Security System",
    category: "Embedded Systems • IoT",
    badge: "University Engineering Prototype",
    badgeType: "lime",
    shortDesc: "A university engineering project prototyping an electronically secured package delivery compartment using dual-factor PIN and RFID access control and IoT architecture concepts.",
    overview: "Smart Box is a university engineering project designed to address unattended package delivery security. The project combines physical compartment design with electronic access control, allowing authorized couriers and recipients to deposit and retrieve deliveries safely using a keypad PIN or RFID tag.",
    problem: "Deliveries left unattended at doorsteps are vulnerable to package theft and weather damage when recipients are away from home.",
    solution: "Designed and prototyped an electronic delivery compartment integrating a numeric matrix keypad, an RFID reader, a microcontroller for credential verification, and a solenoid lock mechanism, with a proposed architecture for IoT status telemetry.",
    features: [
      "Dual-factor access control supporting numeric PIN keypad and 13.56 MHz RFID tag authentication",
      "Microcontroller state machine managing credential validation and solenoid lock timing",
      "Relay-driven 12V electronic solenoid locking mechanism with fail-secure behavior",
      "Physical compartment enclosure designed with secure package drop and retrieval mechanics",
      "Proposed IoT telemetry architecture for package arrival notifications and status logging"
    ],
    technologies: ["Embedded Systems", "Microcontrollers", "RFID (13.56 MHz)", "Matrix Keypad", "Relay & Solenoid Control", "IoT Architecture"],
    contribution: "Designed system architecture, wired and tested the keypad, RFID reader, and solenoid relay circuit with the microcontroller, and documented the hardware schematics.",
    gallery: [
      { src: "assets/smart-box.png", title: "Smart Box Prototype Overview", caption: "Physical prototype and hardware assembly of the delivery box." },
      { src: "assets/box1.jpeg", title: "Front Access Keypad and RFID Interface", caption: "Electronic authentication panel supporting dual-factor PIN and RFID entry." },
      { src: "assets/box2.jpeg", title: "Interior Storage Compartment and Solenoid Lock", caption: "Secure compartment featuring relay-driven electronic solenoid locking bolt." },
      { src: "assets/box3.jpeg", title: "Microcontroller Circuitry and Power Wiring", caption: "Microcontroller wiring, relay driver module, and power distribution." },
      { src: "assets/box4.jpeg", title: "Enclosure Structure and Drop Mechanics", caption: "Physical enclosure designed for package drop and safe retrieval." },
      { src: "assets/box4.png", title: "Integrated Physical Assembly", caption: "Full operational perspective showcasing package reception workflow." }
    ],
    schematicType: "smartbox",
    github: null,
    demo: null
  },

  linefollower: {
    id: "linefollower",
    title: "Line Follower Car — Autonomous Tracking & RemoteXY Control",
    category: "Embedded Systems • Robotics • Arduino",
    badge: "Hardware & Robotics Project",
    badgeType: "lime",
    shortDesc: "An Arduino robot combining autonomous optical line tracking via analog infrared sensors with manual Bluetooth driving via RemoteXY.",
    overview: "The Line Follower Car is an embedded robotics project built with an Arduino microcontroller. It combines autonomous line navigation along a physical surface track using infrared sensors with manual remote control via a smartphone app over Bluetooth.",
    problem: "Robotic navigation requires real-time optical sensor processing for autonomous guidance while maintaining the ability to switch to manual control when human steering is needed.",
    solution: "Assembled a two-wheel-drive vehicular chassis controlled by an Arduino Uno, paired with a dual-channel DC motor driver, two analog IR sensors for track boundary detection, and a Bluetooth module integrated with the RemoteXY mobile dashboard for mode toggling and steering.",
    features: [
      "Autonomous line-tracking algorithm using two analog IR track-detection sensors (A0 and A1)",
      "Dual-mode operation: toggle between autonomous line following and manual mobile control",
      "Mobile control dashboard built on the RemoteXY platform with directional pad controls",
      "L298N dual H-bridge motor driver managing DC motor speed and differential turning",
      "Battery-powered vehicular chassis tested on physical track courses"
    ],
    technologies: ["Arduino", "Embedded C/C++", "IR Sensors", "L298N Motor Driver", "Bluetooth", "RemoteXY"],
    contribution: "Assembled the chassis, wired the sensors and motor driver to the Arduino, authored the control firmware in C/C++, and configured the RemoteXY mobile dashboard layout.",
    gallery: [
      { src: "assets/line-follower-car.jpg", title: "Line Follower Car & Testing Track", caption: "Robotic car prototype beside the track course used for testing autonomous navigation." },
      { src: "assets/line-follower-remotexy.jpg", title: "RemoteXY Mobile Dashboard", caption: "Mobile interface screenshot showing mode switch and directional controls." }
    ],
    schematicType: "linefollower",
    github: null,
    demo: null
  },

  tazkarti: {
    id: "tazkarti",
    title: "Tazkarti Bot — Match Availability & Telegram Alerts",
    category: "Automation • Software Development",
    badge: "Verified Repository",
    badgeType: "lime",
    shortDesc: "An automated Python monitoring script that checks football ticket availability on Tazkarti, tracks state changes in SQLite, and sends instant push alerts via Telegram.",
    overview: "Tazkarti Bot is a Python background service designed to solve the problem of missing high-demand football ticket releases in Egypt. It automatically monitors the Tazkarti platform and sends instant notifications to Telegram when tickets become available.",
    problem: "High-profile football match tickets in Egypt frequently sell out within minutes of being released with no advance schedule, requiring fans to manually check the site repeatedly.",
    solution: "Created an automated Python script that periodically polls the Tazkarti ticketing pages, parses availability status, tracks changes in a local SQLite database (matches.db), and immediately sends push alerts with booking links via the Telegram Bot API.",
    features: [
      "Automated HTTP polling with request error handling and configurable check intervals",
      "Local SQLite database (matches.db) storing fixture IDs and previous availability states",
      "Notification deduplication to prevent repetitive messages for the same fixture",
      "Instant Telegram Bot API push messages formatted with match details and booking URLs",
      "Environment variable configuration using python-dotenv for bot tokens and settings"
    ],
    technologies: ["Python", "Telegram Bot API", "SQLite", "Requests", "Python-dotenv"],
    contribution: "Authored the full automation script: implemented HTTP scraping and parsing logic, designed the SQLite tracking table, and integrated Telegram Bot alerts.",
    gallery: [],
    schematicType: "tazkarti",
    github: "https://github.com/mohamed267411-netizen/tazkarti_bot",
    demo: null
  },

  airline: {
    id: "airline",
    title: "Airline Management System — Desktop Reservation Console",
    category: "Software Development • Desktop App",
    badge: "University Coursework Project",
    badgeType: "lime",
    shortDesc: "An object-oriented desktop application managing flight schedules, passenger reservations, and seat allocations using Python, SQLite, and Tkinter.",
    overview: "The Airline Management System is a university software engineering project built to practice object-oriented programming (OOP), relational database design, and GUI development in Python.",
    problem: "Managing flight reservations requires synchronized tracking of passenger information, flight availability, and seat allocations to prevent errors like double-booking.",
    solution: "Developed a desktop application using Python and Tkinter, backed by an embedded SQLite database. Used OOP principles to structure flight, passenger, and booking entities with relational queries and input validation.",
    features: [
      "Flight scheduling module with destination lookup, departure times, and capacity tracking",
      "Passenger registration and ticket reservation interface with input validation",
      "Relational SQLite embedded database persisting all records across application restarts",
      "Seat availability decrementer preventing overbooking and duplicate seat assignments",
      "Clean desktop GUI built with Python Tkinter supporting fast lookup and booking cancellations"
    ],
    technologies: ["Python", "Tkinter GUI", "SQLite", "Object-Oriented Programming (OOP)"],
    contribution: "Built the entire project: designed the SQLite database schema, implemented the Python classes and methods, and built the Tkinter graphical interface.",
    gallery: [
      { src: "assets/air1.png", title: "Flight Schedule Interface", caption: "Main dashboard displaying scheduled flights, available seats, and departure details." },
      { src: "assets/air2.png", title: "Passenger Record Management", caption: "Form interface for capturing passenger identification, contact details, and assigned flights." },
      { src: "assets/air3.png", title: "Booking Confirmation & Seat Allocation", caption: "Seat reservation view confirming booking status and seat numbers." },
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
    shortDesc: "An exploratory data analysis project examining gym member attendance patterns, workout frequency, and subscription retention using Pandas and Matplotlib.",
    overview: "Gym Members Analytics is a data analysis project conducted in Python. It evaluates a dataset of gym memberships to understand member demographics, attendance habits, workout types, and retention patterns.",
    problem: "Understanding what factors influence gym member attendance and membership renewals requires analyzing multi-variable data across age groups, visit frequencies, and workout preferences.",
    solution: "Used Pandas and NumPy to clean and aggregate raw membership data, handled data type conversions and missing values, and created statistical visualizations using Matplotlib and Seaborn.",
    features: [
      "Data preprocessing pipeline handling missing entries, type normalization, and outlier detection",
      "Demographic and age-bracket breakdown assessing membership distribution",
      "Correlation analysis between weekly visit frequency and subscription tier longevity",
      "Data visualization with Matplotlib and Seaborn revealing peak usage hours and workout trends",
      "Summary observations on member workout preferences and renewal trends"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Exploratory Data Analysis (EDA)"],
    contribution: "Completed the end-to-end data analysis workflow: wrote the Python scripts, cleaned the dataset, performed descriptive statistics, and generated all charts.",
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
    overview: "Your Movies is a front-end web project built to practice responsive web design and client-side JavaScript DOM manipulation. It provides organized catalogs for trending films, television series, and anime titles.",
    problem: "Building a responsive multi-page catalog requires clean semantic HTML structure, consistent CSS layout across pages, and responsive client-side filtering without external framework dependencies.",
    solution: "Developed a clean multi-page site using semantic HTML5, modern CSS3 styling with flexbox and grid, and vanilla JavaScript to provide instant search and genre filtering without any external libraries.",
    features: [
      "Multi-page architecture with dedicated portals for movies, television series, and anime",
      "Client-side search and category filtering powered by Vanilla JavaScript",
      "Modern dark UI layout with responsive CSS grid and smooth hover interactions",
      "Mobile-optimized responsive navigation and touch-friendly media cards",
      "Zero build tools or dependencies, deployed live on GitHub Pages"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"],
    contribution: "Created the entire website from scratch: wrote the semantic HTML5 page templates, authored responsive CSS3 layouts, and implemented vanilla JS search and filtering.",
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
    const visualsHeading = document.getElementById('modal-visuals-heading');
    const visualsSub = document.getElementById('modal-visuals-sub');

    if (data.gallery && data.gallery.length > 0) {
      gallerySection.style.display = 'flex';
      schematicSection.style.display = 'none';

      if (visualsHeading) {
        visualsHeading.innerHTML = `<span class="text-lime">&gt;</span> APPLICATION SCREENS &amp; INTERFACE GALLERY`;
      }
      if (visualsSub) {
        visualsSub.textContent = `${data.gallery.length} verified screens available • Click image to open fullscreen viewer`;
      }

      currentModalGallery = data.gallery;
      currentGalleryIndex = 0;
      updateModalGallery();
    } else {
      gallerySection.style.display = 'none';
      schematicSection.style.display = 'block';

      if (visualsHeading) {
        visualsHeading.innerHTML = `<span class="text-lime">&gt;</span> SYSTEM ARCHITECTURE &amp; WORKFLOW SCHEMATIC`;
      }
      if (visualsSub) {
        visualsSub.textContent = `Technical system blueprint & telemetry pipeline diagram`;
      }

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
  } else if (type === 'linefollower') {
    container.innerHTML = `
      <div class="technical-preview-box">
        <div class="preview-chrome font-mono">
          <div class="preview-dots"><span></span><span></span><span></span></div>
          <span class="preview-address">arduino &bull; line-follower &bull; remotexy</span>
          <span class="preview-tag text-lime">Robotics</span>
        </div>
        <div class="bot-stream-visual font-mono" style="padding: 16px; background: #080d1a;">
          <div style="font-size: 0.72rem; line-height: 1.8; color: var(--text-secondary);">
            <span class="text-muted">[SENSORS]</span> Dual Analog IR Array (A0: Left, A1: Right)... Calibrated<br>
            <span class="text-muted">[MODES]</span> Autonomous Optical Tracking &bull; Mobile RemoteXY Override<br>
            <span class="text-lime">[ACTUATORS]</span> Dual DC Drive Motors with Differential Steering via Motor Driver<br>
            <span class="text-muted">[TELEMETRY]</span> Directional driving commands and operating mode status
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
