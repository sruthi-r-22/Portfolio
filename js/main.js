/**
 * RENTALA SRUTHI - PORTFOLIO INTERACTION ENGINE
 * Lightweight, Non-Blocking, Event-Optimized
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initProjectFilters();
  initProjectModal();
  initEmailCopy();
  initContactForm();
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   PROJECT DATA REPOSITORY
   ========================================================================== */
const PROJECTS_DATA = [
  {
    id: 'farm-memory',
    index: '01 / 06',
    title: 'Farm Memory',
    subtitle: 'AI Voice Assistant for Indian Farmers',
    event: 'VoiceforBharat Challenge',
    category: 'ai-genai',
    categoryLabel: 'AI & GenAI / Audio',
    summary: 'A resilient multi-agent conversational AI voice agent with long-term memory, function calling for live weather, localized guardrails, and crop specialist handoffs under low-bandwidth constraints.',
    tech: ['Python', 'LiveKit Agents', 'Deepgram STT', 'Groq Llama 3.3', 'Murf Falcon TTS', 'Open-Meteo', 'WebRTC'],
    highlights: [
      'Engineered an ultra-low latency voice pipeline running over WebRTC via LiveKit agents with bidirectional audio streaming.',
      'Incorporated Deepgram Nova STT and Murf Falcon TTS for near-instant speech synthesis tuned for regional Indian accents.',
      'Implemented Groq-accelerated Llama 3.3 for high-throughput zero-latency reasoning and dynamic tool/function calling.',
      'Integrated real-time meteorological telemetry from Open-Meteo API for hyperlocal advisory alerts.',
      'Designed a context-aware episodic memory architecture to remember prior crop cycles, soil conditions, and past pest outbreaks.'
    ],
    architecture: 'WebRTC Edge Ingestion → Deepgram Nova Streaming STT → LiveKit Agent Pipeline → Groq LLaMA 3.3 Function Calling (Open-Meteo API) → Murf Falcon Streaming TTS → Low-Bandwidth Return Feed',
    githubUrl: 'https://github.com/sruthi-r-22/murf-livekit-starter'
  },
  {
    id: 'smartbundle-ai',
    index: '02 / 06',
    title: 'SmartBundle AI',
    subtitle: 'Intelligent Retail & Cross-Selling Engine',
    event: 'Demux 3.0 Hackathon',
    category: 'full-stack',
    categoryLabel: 'Full-Stack / E-Commerce AI',
    summary: 'Created a dynamic e-commerce storefront delivering real-time bundle recommendations conditioned on live shopping cart state with automated state management and sub-50ms inference feedback.',
    tech: ['Next.js', 'React', 'TypeScript', 'Python', 'REST API', 'Tailwind CSS'],
    highlights: [
      'Developed a fluid, responsive Next.js and TypeScript frontend with optimistic UI updates and live cart state synchronization.',
      'Designed affinity-scoring recommendation logic correlating cart metadata with predictive inventory bundling rules.',
      'Architected micro-service endpoints using Python REST APIs to calculate price elasticity and bundle discounts in real-time.',
      'Engineered atomic state management preventing inventory desync and race conditions during high concurrent traffic spikes.'
    ],
    architecture: 'Next.js App Router Frontend → Client-Side Cart Observer → High-Throughput Python REST Gateway → Association Rule Engine → Instant Dynamic Bundling Cache',
    githubUrl: 'https://github.com/sriyukthach/SmartBundle-AI'
  },
  {
    id: 'bugtrace',
    index: '03 / 06',
    title: 'BugTrace',
    subtitle: 'Android Device Telemetry & Automated Bug Detection',
    event: 'iQOO Hackathon',
    category: 'systems',
    categoryLabel: 'Systems & Telemetry',
    summary: 'Engineered an end-to-end device telemetry capture system over local Wi-Fi with real-time multi-signal analysis, log parsing, and automated developer reproduction report generation.',
    tech: ['Android', 'FastAPI', 'SQLite', 'HTTP/JSON', 'Local Wi-Fi Network'],
    highlights: [
      'Built a lightweight Android telemetry collector capturing ANR crashes, memory spikes, thread dumps, and frame drops over local Wi-Fi.',
      'Designed a high-performance FastAPI ingestion pipeline handling concurrent multi-device streaming log batches.',
      'Formulated heuristic crash clustering algorithms on SQLite storing structured device logs with indexed timestamp markers.',
      'Automated standardized reproduction reports with stack trace synthesis, hardware profiles, and step-by-step reproduction matrices.'
    ],
    architecture: 'Android OS Background Telemetry Agent → Wi-Fi Socket Streaming → FastAPI High-Concurrency Receiver → Log Sanitization & Indexing → Automated Diagnostic Report Engine',
    githubUrl: 'https://github.com/pvsatvika/BugTrace'
  },
  {
    id: 'industrial-intelligence',
    index: '04 / 06',
    title: 'Industrial Intelligence',
    subtitle: 'AI-Powered Document Q&A System',
    event: 'ET AI Hackathon 2.0',
    category: 'ai-genai',
    categoryLabel: 'AI & GenAI / RAG',
    summary: 'An interactive Q&A pipeline over complex, unstructured industrial PDF manuals and technical compliance documentation using context-grounded prompt engineering via Google Gemini LLM.',
    tech: ['Python', 'Streamlit', 'Google Gemini API', 'PyPDF', 'Prompt Engineering'],
    highlights: [
      'Built an end-to-end multi-document ingestion and chunking parser using PyPDF optimized for dense technical schematics.',
      'Engineered hallucination-resilient prompt templates grounded in strict context boundaries using Google Gemini API.',
      'Designed an intuitive Streamlit interface allowing industrial operators to ask natural language questions with source citation tags.',
      'Delivered rapid extraction of machine tolerances, error codes, and maintenance schedules from multi-hundred-page manuals.'
    ],
    architecture: 'Unstructured Technical PDF → PyPDF Document Ingestion & Chunking → Context Anchor Engine → Google Gemini LLM Reasoning → Cited Evidence Output',
    githubUrl: 'https://github.com/sruthi-r-22/Industrial-Intelligence'
  },
  {
    id: 'pyrosentinel-gis',
    index: '05 / 06',
    title: 'PyroSentinel GIS',
    subtitle: 'Geospatial Fire Monitoring Prototype',
    event: 'Smart India Hackathon (SIH 2026)',
    category: 'systems',
    categoryLabel: 'Geospatial & Analytics',
    summary: 'Built a Detect → Contextualize → Classify → Visualize pipeline to ingest satellite thermal hotspot data and accurately distinguish industrial heat anomalies from critical forest fire events.',
    tech: ['GIS Spatial Analysis', 'Satellite Thermal Hotspot Data', 'Python', 'GeoJSON', 'Data Pipelines'],
    highlights: [
      'Structured an automated satellite data ingestion pipeline filtering thermal radiant energy (FRP) and confidence scores.',
      'Formulated spatial buffer algorithms cross-referencing recognized industrial zones, power plants, and refineries to prevent false positives.',
      'Implemented automated hazard classification to prioritize rapid-response alerts for remote non-industrial forestry zones.',
      'Generated geo-referenced visual layers and bounding polygons for emergency monitoring teams.'
    ],
    architecture: 'Satellite Thermal Feed (MODIS/VIIRS Hotspots) → Spatial Noise Filter → Buffer Proximity Engine (Industrial vs Wildland) → Severity Score Classifier → Geospatial GeoJSON Map Feed',
    githubUrl: 'https://github.com/pvsatvika/pyrosentinel-gis'
  },
  {
    id: 'pricedrop',
    index: '06 / 06',
    title: 'PriceDrop',
    subtitle: 'Full-Stack E-Commerce with Scheduled Price Decay',
    event: 'Web2Cart Challenge',
    category: 'full-stack',
    categoryLabel: 'Full-Stack / Algorithms',
    summary: 'Designed scheduled interval price decay algorithms with server-enforced anti-manipulation checks, real-time inventory decrementing, and seamless checkout flows.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Python', 'FastAPI', 'SQLite'],
    highlights: [
      'Engineered Dutch auction-style continuous price decay algorithms dynamically recalculating product pricing at configured intervals.',
      'Enforced rigorous server-side timestamp validation in FastAPI preventing client tampering, clock drift, or race conditions.',
      'Implemented transactional SQLite order reservation with rollback protection to guarantee zero ghost inventory during drops.',
      'Built a sleek, high-energy React/Tailwind user interface with live count-down clocks and instant checkout responsiveness.'
    ],
    architecture: 'React + Vite UI with Live WebSockets/Timers → FastAPI Anti-Tamper Checkpoint → Price Decay Formula Engine → ACID Transactional SQLite Store',
    githubUrl: 'https://github.com/sruthi-r-22/PriceDrop-'
  }
];

/* ==========================================================================
   LIGHTWEIGHT NAVBAR SCROLL OBSERVER (Throttled via requestAnimationFrame)
   ========================================================================== */
function initNavbarScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  let isTicking = false;

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > 40) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   MOBILE MENU CONTROLLER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-nav-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.style.display = 'flex';
    mobileMenu.classList.add('active');
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    mobileMenu.style.display = 'none';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   PROJECT FILTERING LOGIC
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   PROJECT DETAILS MODAL / DRAWER
   ========================================================================== */
function initProjectModal() {
  const backdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!backdrop) return;

  const modalIndex = document.getElementById('modal-project-index');
  const modalEvent = document.getElementById('modal-project-event');
  const modalTitle = document.getElementById('modal-project-title');
  const modalSubtitle = document.getElementById('modal-project-subtitle');
  const modalSummary = document.getElementById('modal-project-summary');
  const modalHighlights = document.getElementById('modal-project-highlights');
  const modalArchitecture = document.getElementById('modal-project-architecture');
  const modalTechPills = document.getElementById('modal-project-tech');
  const modalGithubLink = document.getElementById('modal-github-link');

  function openModal(projectId) {
    const data = PROJECTS_DATA.find(p => p.id === projectId);
    if (!data) return;

    if (modalIndex) modalIndex.textContent = data.index;
    if (modalEvent) modalEvent.textContent = data.event;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalSummary) modalSummary.textContent = data.summary;
    if (modalArchitecture) modalArchitecture.textContent = data.architecture;

    if (modalHighlights) {
      modalHighlights.innerHTML = data.highlights
        .map(h => `<li class="flex items-start gap-2.5 text-sm text-[#CCCCCC] leading-relaxed">
          <span class="text-[#C85A32] font-mono mt-1 font-bold">›</span>
          <span>${h}</span>
        </li>`)
        .join('');
    }

    if (modalTechPills) {
      modalTechPills.innerHTML = data.tech
        .map(t => `<span class="tech-pill">${t}</span>`)
        .join('');
    }

    if (modalGithubLink) {
      modalGithubLink.href = data.githubUrl;
    }

    backdrop.style.display = 'flex';
    backdrop.classList.add('active');

    // Create icons on demand inside modal once
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeModal() {
    backdrop.classList.remove('active');
    backdrop.style.display = 'none';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      if (pid) openModal(pid);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   ONE-CLICK EMAIL COPY & TOAST FEEDBACK
   ========================================================================== */
function initEmailCopy() {
  const emailBtns = document.querySelectorAll('.copy-email-btn');
  const email = 'sruthirentala22@gmail.com';

  emailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      } else {
        showToast(`Email: ${email}`);
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>${message}</span>
  `;

  toast.style.display = 'flex';
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
    toast.style.display = 'none';
  }, 3000);
}

/* ==========================================================================
   CONTACT FORM HANDLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const subjectInput = document.getElementById('sender-subject');
    const messageInput = document.getElementById('sender-message');
    const feedbackBox = document.getElementById('contact-feedback');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : 'Project Inquiry / Collaboration';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      if (feedbackBox) {
        feedbackBox.textContent = 'Please fill out all required fields.';
        feedbackBox.classList.remove('hidden', 'text-emerald-400');
        feedbackBox.classList.add('text-rose-400');
      }
      return;
    }

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
    const mailtoBody = encodeURIComponent(`Hi Sruthi,\n\n${message}\n\n---\nSender: ${name}\nEmail: ${email}`);
    const mailtoUrl = `mailto:sruthirentala22@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    if (feedbackBox) {
      feedbackBox.textContent = 'Opening your email client... You can also copy the email directly.';
      feedbackBox.classList.remove('hidden', 'text-rose-400');
      feedbackBox.classList.add('text-emerald-400');
    }

    showToast('Triggering mail client for Sruthi Rentala...');
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 450);
  });
}
