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
    title: "DawReeK — Premier League Match Predictor",
    category: "Machine Learning • Python Desktop",
    badge: "Verified Repository",
    badgeType: "lime",
    shortDesc: "Got tired of subjective match arguments with friends, so I built an expected goals (xG) engine using historical Premier League match logs, Poisson distribution models, and SQL Server &mdash; packaged in a Python desktop UI to test my predictions before kick-off.",
    overview: "DawReeK started from a simple debate among friends: can historical math predict Premier League matches better than gut feelings and pundit opinions? I built a complete desktop tool to find out, combining years of match logs, rolling form metrics, and Poisson regression to calculate realistic home and away goal expectancies.",
    problem: "Football is notoriously high-variance. If you look only at simple win/loss records, you miss underlying performance trends—like a team dominating shots but suffering bad luck. Plus, processing years of match fixtures without lagging the UI required efficient data structuring.",
    solution: "Stored cleaned historical data in SQL Server, queried rolling goal stats in Pandas, and implemented Poisson regression to estimate expected goals (xG). The interface allows selecting any match-up to instantly simulate probabilities and compare projected scorelines against historical odds.",
    features: [
      "Poisson regression models calculating discrete home and away goal probability matrices",
      "Microsoft SQL Server relational database storing league tables, historical scores, and squad stats",
      "Rolling team form and goal difference calculations across recent fixtures",
      "Desktop user interface for selecting fixtures and viewing predicted scorelines",
      "Model evaluation comparing predicted goal outcomes against verified historical match results"
    ],
    technologies: ["Python", "SQL Server", "Scikit-learn", "Pandas", "NumPy", "Tkinter", "Poisson Regression"],
    contribution: "Designed and built the full pipeline from scratch: authored SQL queries and schema, engineered rolling form features in Pandas, trained the Poisson model, and built the CustomTkinter desktop interface.",
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
    title: "RansomGuard — Behavioral Ransomware Defense",
    category: "Cybersecurity • Behavioral ML",
    badge: "Graduation Capstone • Active Work",
    badgeType: "amber",
    shortDesc: "Zero-day ransomware easily bypasses hash-based antivirus databases. For our senior capstone, we're building an endpoint monitor that catches active encryption via real-time Windows Sysmon event telemetry and Shannon file entropy spikes.",
    overview: "RansomGuard is our senior engineering capstone project. Conventional antivirus tools rely heavily on known file signatures—which means zero-day ransomware can encrypt an entire drive before a signature is issued. We are investigating whether behavioral telemetry can stop attacks in flight.",
    problem: "Modern ransomware encrypts files rapidly while disguising its binary signature through polymorphic packers. Detecting encryption before critical data is lost requires identifying behavioral anomalies without falsely flagging legitimate processes like ZIP archiving or video rendering.",
    solution: "Ingesting Windows Sysmon event telemetry in real time, tracking rapid file I/O operations, and calculating Shannon file entropy on altered disk buffers (since encrypted files have near-maximum entropy ~7.9+). When a suspicious process triggers both thresholds, our containment heuristic triggers process suspension.",
    features: [
      "Real-time ingestion of Windows Sysmon log feeds for rapid process and file modification events",
      "Shannon entropy calculation algorithms to identify telltale file encryption patterns",
      "Analysis of behavioral heuristics such as rapid mass file renaming and abnormal disk I/O",
      "Planned machine learning classification for suspicious process profiles (in active development)",
      "Automated process termination and containment workflow concepts"
    ],
    technologies: ["Python", "Windows Sysmon", "Behavioral Heuristics", "Shannon Entropy", "Security Engineering"],
    contribution: "Co-architecting the capstone pipeline: analyzing Sysmon event schema, prototyping Shannon entropy calculation modules, and evaluating anomaly detection thresholds on test datasets.",
    gallery: [],
    schematicType: "ransomguard",
    github: null,
    demo: null
  },

  smartbox: {
    id: "smartbox",
    title: "Smart Box — IoT Secure Package Delivery Locker",
    category: "Embedded Systems • IoT Hardware",
    badge: "Hardware Prototype",
    badgeType: "lime",
    shortDesc: "Tackled doorstep package theft with a physical hardware build: wired an Arduino with dual-factor RFID and matrix PIN authentication, controlling a heavy-duty 12V fail-secure solenoid deadbolt through an isolated relay circuit.",
    overview: "Smart Box is a university hardware project addressing a simple, widespread headache: missed package deliveries and doorstep package theft. We engineered an autonomous locker compartment that allows couriers to safely deposit packages using dual-factor credentials.",
    problem: "Designing an unattended physical locker requires balancing electronic reliability with physical security: preventing false unlocks during voltage fluctuations, handling key debouncing, and ensuring authorized access without complicated setup.",
    solution: "Prototyped a rugged wooden compartment secured with a 12V DC solenoid deadbolt driven by a relay module. Integrated an Arduino microcontroller with a 4x4 matrix keypad and an RC522 RFID reader (13.56 MHz), implementing a robust state machine that verifies either recipient RFID cards or courier single-use PIN codes.",
    features: [
      "Dual-factor access control supporting numeric PIN keypad and 13.56 MHz RFID tag authentication",
      "Microcontroller state machine managing credential validation and solenoid lock timing",
      "Relay-driven 12V electronic solenoid locking mechanism with fail-secure behavior",
      "Physical compartment enclosure designed with secure package drop and retrieval mechanics",
      "Proposed IoT telemetry architecture for package arrival notifications and status logging"
    ],
    technologies: ["Embedded Systems", "Microcontrollers", "RFID (13.56 MHz)", "Matrix Keypad", "Relay & Solenoid Control", "IoT Architecture"],
    contribution: "Designed the electronic circuit schematics, wired all sensors and relays to the Arduino, wrote the embedded C++ state machine firmware, and assembled and tested the physical prototype.",
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
    title: "Line Follower Car — Autonomous Optical Tracking & RemoteXY RC",
    category: "Embedded Robotics • Arduino",
    badge: "Hardware & Robotics",
    badgeType: "lime",
    shortDesc: "Built from bare components to master real-time sensor loops: calibrated dual analog IR sensors for drift-free track tracing, then wired an HC-05 Bluetooth module with RemoteXY to toggle instant mobile steering from my phone.",
    overview: "Built as an embedded robotics exploration to understand sensor calibration, feedback loops, and motor control. It navigates autonomous track paths using infrared optical sensors, with an instant failover switch to manual smartphone driving via Bluetooth.",
    problem: "Infrared sensors are notoriously vulnerable to uneven track surfaces and varying ambient lighting. Setting fixed thresholds often causes robots to jitter wildly or lose tracking on sharp 90-degree turns.",
    solution: "Wrote an adaptive differential steering algorithm in C++ running on an Arduino Uno. The algorithm evaluates analog IR sensor readings, modulates PWM duty cycles to the L298N dual H-bridge motor driver, and seamlessly switches to a custom RemoteXY mobile joystick interface over Bluetooth HC-05 whenever manual steering is engaged.",
    features: [
      "Autonomous line-tracking algorithm using two analog IR track-detection sensors (A0 and A1)",
      "Dual-mode operation: toggle between autonomous line following and manual mobile control",
      "Mobile control dashboard built on the RemoteXY platform with directional pad controls",
      "L298N dual H-bridge motor driver managing DC motor speed and differential turning",
      "Battery-powered vehicular chassis tested on physical track courses"
    ],
    technologies: ["Arduino", "Embedded C/C++", "IR Sensors", "L298N Motor Driver", "Bluetooth", "RemoteXY"],
    contribution: "Sourced components, soldered and assembled chassis wiring, authored the firmware in embedded C++, tuned differential steering curves, and designed the RemoteXY mobile dashboard layout.",
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
    title: "Tazkarti Bot — Match Availability & Instant Telegram Alerts",
    category: "Automation • Python Daemon",
    badge: "Verified Repository",
    badgeType: "lime",
    shortDesc: "Egyptian football tickets sell out in 3 minutes unannounced. Rather than refreshing F5 all day, I wrote a 24/7 Python daemon that polls match availability, tracks state in SQLite, and pushes immediate Telegram alerts with direct booking links.",
    overview: "High-demand Egyptian football matches on Tazkarti sell out in minutes without any scheduled announcement. Missing the drop meant missing the game. I built Tazkarti Bot to solve this exact frustration—a background daemon that monitors availability and notifies me on Telegram the instant tickets go live.",
    problem: "Manually refreshing a web page all day is impossible, and naïve polling scripts either get rate-limited, crash on network blips, or spam you every 5 seconds with duplicate notifications.",
    solution: "Built an asynchronous Python script that polls the endpoint with backoff error handling, checks ticket states against a local SQLite database (matches.db) for clean deduplication, and sends a formatted Telegram push notification with the direct match reservation URL.",
    features: [
      "Automated HTTP polling with request error handling and configurable check intervals",
      "Local SQLite database (matches.db) storing fixture IDs and previous availability states",
      "Notification deduplication to prevent repetitive messages for the same fixture",
      "Instant Telegram Bot API push messages formatted with match details and booking URLs",
      "Environment variable configuration using python-dotenv for bot tokens and settings"
    ],
    technologies: ["Python", "Telegram Bot API", "SQLite", "Requests", "Python-dotenv"],
    contribution: "Created the entire script independently: reverse-engineered the endpoint payloads, wrote state-tracking SQLite logic, and integrated Telegram Bot webhooks with error recovery.",
    gallery: [],
    schematicType: "tazkarti",
    github: "https://github.com/mohamed267411-netizen/tazkarti_bot",
    demo: null
  },

  airline: {
    id: "airline",
    title: "Airline Management System — Reservation Desk & Console",
    category: "Software Engineering • Desktop App",
    badge: "Coursework Project",
    badgeType: "lime",
    shortDesc: "University OOP project built like a real airport reservation desk: strict relational SQLite transactions to prevent seat double-booking, complete with passenger lifecycles and an interactive Tkinter desk interface.",
    overview: "A desktop software engineering application designed to model real-world airline ticketing operations: managing flight schedules, seat allocations, and passenger records with strict transactional consistency.",
    problem: "Flight booking systems must strictly prevent overbooking and race conditions—cancelling a ticket must immediately return that specific seat to inventory, and duplicate seat assignments must be impossible.",
    solution: "Built an object-oriented Python architecture backed by an embedded SQLite database. Implemented transactional queries with foreign keys and unique constraints, paired with a user-friendly Tkinter GUI for ticket clerks to search flights, register travelers, and print booking manifests.",
    features: [
      "Flight scheduling module with destination lookup, departure times, and capacity tracking",
      "Passenger registration and ticket reservation interface with input validation",
      "Relational SQLite embedded database persisting all records across application restarts",
      "Seat availability decrementer preventing overbooking and duplicate seat assignments",
      "Clean desktop GUI built with Python Tkinter supporting fast lookup and booking cancellations"
    ],
    technologies: ["Python", "Tkinter GUI", "SQLite", "Object-Oriented Programming (OOP)"],
    contribution: "Developed the entire project: designed the 3NF relational database schema, implemented OOP business logic in Python, and built the multi-screen desktop interface.",
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
    title: "Gym Members Analytics — Attendance & Retention EDA",
    category: "Data Analysis • Python EDA",
    badge: "Verified Repository",
    badgeType: "lime",
    shortDesc: "Exploratory data analysis in Pandas and Seaborn investigating why gym members quit: uncovered key dropout inflection points, attendance drop-offs, and multi-variable correlations that predict subscription renewals.",
    overview: "A hands-on exploratory data analysis project investigating the factors that drive gym member attendance and long-term membership retention.",
    problem: "Gyms often face high churn rates within the first 60 days. Raw gym attendance logs contain inconsistencies, missing session records, and outlier ages that obscure real behavioral patterns.",
    solution: "Built a clean data wrangling pipeline in Pandas and NumPy to clean missing values and normalize visit records. Analyzed demographic correlations and generated multi-plot visualizations with Matplotlib and Seaborn, identifying clear attendance thresholds that separate committed members from churn risks.",
    features: [
      "Data preprocessing pipeline handling missing entries, type normalization, and outlier detection",
      "Demographic and age-bracket breakdown assessing membership distribution",
      "Correlation analysis between weekly visit frequency and subscription tier longevity",
      "Data visualization with Matplotlib and Seaborn revealing peak usage hours and workout trends",
      "Summary observations on member workout preferences and renewal trends"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Exploratory Data Analysis (EDA)"],
    contribution: "Executed the full analysis pipeline: cleaned the raw dataset, performed descriptive and inferential statistics in Jupyter, and designed all visual charts and summary takeaways.",
    gallery: [
      { src: "assets/gym-dashboard.png", title: "Gym Members Analytics Dashboard", caption: "Comprehensive visualization of member demographics, attendance frequency, and retention distributions." }
    ],
    github: "https://github.com/mohamed267411-netizen/Analysis-of-the-Gym",
    demo: null
  },

  yourmovies: {
    id: "yourmovies",
    title: "Your Movies — Lightweight Entertainment Web Portal",
    category: "Frontend • Vanilla Web",
    badge: "Live Web Application",
    badgeType: "lime",
    shortDesc: "Challenged myself to build a snappy multi-page media portal without heavy frameworks: handcrafted semantic HTML5, modern CSS Grid/Flexbox, and vanilla JavaScript DOM operations for instant real-time search and genre filtering.",
    overview: "A responsive multi-page entertainment catalog built as a personal challenge: create a modern, sleek media browsing experience using pure web standards with zero heavy frameworks, bundlers, or third-party libraries.",
    problem: "Building multi-page applications without modern frontend frameworks (like React or Vue) often leads to messy DOM manipulation, code duplication across pages, and sluggish client-side search.",
    solution: "Structured modular semantic HTML5 templates, created a maintainable CSS architecture with CSS custom properties, Grid, and Flexbox, and wrote efficient vanilla JavaScript DOM filters that allow instant searching and category filtering with zero perceptible latency.",
    features: [
      "Multi-page architecture with dedicated portals for movies, television series, and anime",
      "Client-side search and category filtering powered by Vanilla JavaScript",
      "Modern dark UI layout with responsive CSS grid and smooth hover interactions",
      "Mobile-optimized responsive navigation and touch-friendly media cards",
      "Zero build tools or dependencies, deployed live on GitHub Pages"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"],
    contribution: "Designed and developed the entire website from scratch: wrote the responsive styles, structured the navigation, implemented client-side JS filtering, and deployed it on GitHub Pages.",
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
  initHeroTerminalTabs();
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
   11. HERO DEVELOPER TERMINAL INTERACTIVE TABS
   ========================================================================== */
function initHeroTerminalTabs() {
  const tabs = document.querySelectorAll('.term-tab[data-term-tab]');
  const panes = {
    profile: document.getElementById('pane-profile'),
    status: document.getElementById('pane-status')
  };

  if (!tabs.length || !panes.profile || !panes.status) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const target = tab.getAttribute('data-term-tab');
      if (target === 'profile' && panes.profile) {
        panes.profile.style.display = 'block';
        if (panes.status) panes.status.style.display = 'none';
      } else if (panes.status) {
        if (panes.profile) panes.profile.style.display = 'none';
        panes.status.style.display = 'block';
      }
    });
  });
}
