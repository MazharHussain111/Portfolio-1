/**
 * @file Main JavaScript file for Ahmad Raza's portfolio
 * @description Handles all interactive functionality including animations, navigation, and page-specific features
 */

/* ====================== */
/* TYPE DEFINITIONS (JSDoc) */
/* ====================== */

/**
 * @typedef {Object} ProjectData
 * @property {string} title - Project title
 * @property {string} category - Project category
 * @property {string} year - Project year
 * @property {string} client - Client name
 * @property {string} services - Services provided
 * @property {string} image - Image path
 * @property {string} overview - Project overview
 * @property {string} challenge - Project challenge description
 * @property {string[]} challengePoints - Array of challenge points
 * @property {string} solution - Project solution description
 * @property {string[]} solutionPoints - Array of solution points
 * @property {Array<{value: string, text: string}>} highlights - Project highlights
 * @property {Array<{role: string, name: string}>} credits - Project credits
 * @property {Array<{label: string, value: string}>} technicalSpecs - Technical specifications
 */

/* ====================== */
/* CONSTANTS AND CONFIGURATION */
/* ====================== */

// Project data - moved to separate data file in production
const PROJECTS_DATA = {
    1: {
      title: "Kotlin Developer",
      category: "Brand Identity",
      year: "2023",
      client: "Nexus Technologies",
      services: "Creative Direction, Brand Strategy, Visual Design",
      image: "images/project1.jpg",
      overview: "Comprehensive rebrand for tech startup including logo, visual system, and brand guidelines.",
      challenge: "Sought to translate their innovative technology into a visual identity that would:",
      challengePoints: [
        "Communicate complex technology simply",
        "Stand out in a crowded market",
        "Scale across digital and physical touchpoints",
        "Resonate with both technical and non-technical audiences"
      ],
      solution: "We developed a dynamic identity system featuring:",
      solutionPoints: [
        "Modular logo system that adapts to context",
        "Vibrant color palette that conveys energy",
        "Custom typography for technical precision",
        "Motion system for digital applications",
        "Comprehensive brand guidelines"
      ],
      highlights: [
        { value: "48%", text: "Increase in brand recognition" },
        { value: "3.2x", text: "More media coverage" },
        { value: "94%", text: "Positive customer feedback" },
        { value: "1", text: "Design award won" }
      ],
      credits: [
        { role: "Creative Direction", name: "Alexander Stone" },
        { role: "Design Lead", name: "Jamie Chen" },
        { role: "Motion Design", name: "Elena Rodriguez" },
        { role: "Client Management", name: "Marcus Wong" }
      ],
      technicalSpecs: [
        { label: "Logo Formats", value: "Vector, Responsive, Animated" },
        { label: "Color System", value: "Primary, Secondary, Accents" },
        { label: "Typography", value: "Custom Typeface, Google Fonts" },
        { label: "Deliverables", value: "Brand Guidelines, Assets" }
      ]
    },
    2:{
      "title": "FitTrack Pro",
      "category": "Mobile App Development",
      "year": "2024",
      "client": "HealthPlus Wellness",
      "services": "UI/UX Design, Frontend & Backend Development, API Integration",
      "image": "images/project2.jpg",
      "overview": "A cross-platform fitness app with AI-powered workout plans, nutrition tracking, and real-time health analytics.",
      "challenge": "Key challenges included:",
      "challengePoints": [
        "Creating a seamless user experience across iOS and Android",
        "Integrating wearable devices (Fitbit, Apple Watch)",
        "Ensuring data privacy and HIPAA compliance",
        "Handling real-time sync for offline mode"
      ],
      "solution": "Our approach included:",
      "solutionPoints": [
        "Flutter framework for cross-platform efficiency",
        "Firebase for authentication and cloud storage",
        "Custom AI algorithm for personalized recommendations",
        "GraphQL API for efficient data fetching",
        "Biometric login for security"
      ],
      "highlights": [
        { "value": "4.9", "text": "App Store rating (500K+ downloads)" },
        { "value": "72%", "text": "User retention rate" },
        { "value": "1M+", "text": "Active monthly users" },
        { "value": "2", "text": "Industry awards won" }
      ],
      "credits": [
        { "role": "Project Lead", "name": "Sarah Johnson" },
        { "role": "UI/UX Designer", "name": "David Kim" },
        { "role": "Backend Developer", "name": "Priya Patel" },
        { "role": "QA Engineer", "name": "Carlos Mendez" }
      ],
      "technicalSpecs": [
        { "label": "Platforms", "value": "iOS, Android, Web" },
        { "label": "Tech Stack", "value": "Flutter, Node.js, Firebase" },
        { "label": "APIs", "value": "Fitbit, Google Health, Stripe" },
        { "label": "Database", "value": "Firestore, MongoDB" }
      ]
    },
    3:{
      "title": "Website Development",
      "category": " Web Development",
      "year": "2023",
      "client": "Urban Lifestyle Brands",
      "services": "Frontend Development, Backend Integration, Payment Gateway Setup",
      "image": "images/project2.jpg",
      "overview": "A high-performance e-commerce platform for sustainable fashion brands with multi-vendor support.",
      "challenge": "Primary challenges were:",
      "challengePoints": [
        "Handling 10,000+ concurrent users during sales",
        "Multi-vendor inventory synchronization",
        "SEO optimization for product discoverability",
        "Mobile-first responsive design"
      ],
      "solution": "Implemented solutions:",
      "solutionPoints": [
        "Next.js for server-side rendering (SSR)",
        "Headless Shopify for checkout flow",
        "Redis for caching high-traffic pages",
        "Dynamic lazy-loading for images",
        "JWT-based authentication"
      ],
      "highlights": [
        { "value": "3.5s", "text": "Average page load time" },
        { "value": "40%", "text": "Increase in conversion rate" },
        { "value": "$2M+", "text": "Revenue in first quarter" },
        { "value": "0", "text": "Downtime incidents" }
      ],
      "credits": [
        { "role": "Frontend Lead", "name": "Emily Zhang" },
        { "role": "Backend Developer", "name": "Rajiv Kapoor" },
        { "role": "DevOps Engineer", "name": "Liam O'Connor" },
        { "role": "Client Manager", "name": "Sophia Rivera" }
      ],
      "technicalSpecs": [
        { "label": "Frontend", "value": "Next.js, Tailwind CSS" },
        { "label": "Backend", "value": "Node.js, Express" },
        { "label": "Payment", "value": "Stripe, PayPal" },
        { "label": "Hosting", "value": "AWS EC2, Cloudflare" }
      ]
    },
    4:{
      "title": "TaskFlow",
      "category": "MERN Stack Development",
      "year": "2024",
      "client": "Productivity Labs",
      "services": "Full-Stack Development, Database Design, User Analytics",
      "image": "images/project1.jpg",
      "overview": "A collaborative task management tool with Kanban boards, time tracking, and team analytics.",
      "challenge": "Critical hurdles included:",
      "challengePoints": [
        "Real-time updates across devices",
        "Role-based access control (RBAC)",
        "Data encryption for enterprise clients",
        "Scalability for large teams"
      ],
      "solution": "Built with:",
      "solutionPoints": [
        "MongoDB Atlas for scalable NoSQL storage",
        "React with Redux for state management",
        "Socket.io for live collaboration",
        "Jest + Cypress for testing",
        "Dockerized microservices architecture"
      ],
      "highlights": [
        { "value": "10K+", "text": "Teams onboarded" },
        { "value": "92%", "text": "Reduction in missed deadlines" },
        { "value": "4.8", "text": "User satisfaction score" },
        { "value": "300ms", "text": "API response time" }
      ],
      "credits": [
        { "role": "Full-Stack Lead", "name": "Daniel Lee" },
        { "role": "React Specialist", "name": "Aisha Bello" },
        { "role": "Database Architect", "name": "Hiroshi Tanaka" },
        { "role": "Security Engineer", "name": "Natalia Petrova" }
      ],
      "technicalSpecs": [
        { "label": "Stack", "value": "MongoDB, Express, React, Node.js" },
        { "label": "Auth", "value": "OAuth 2.0, JWT" },
        { "label": "Deployment", "value": "AWS ECS, CI/CD Pipeline" },
        { "label": "Analytics", "value": "Custom dashboard with D3.js" }
      ]
    }
    // ... other projects follow same structure
  };
  
  // Animation timing constants
  const ANIMATION_DEFAULTS = {
    duration: 2000,
    delayIncrement: 100,
    threshold: 0.1
  };
  
  /* ====================== */
  /* CORE INITIALIZATION */
  /* ====================== */
  
  /**
   * Main initialization function - Sets up all page functionality
   */
  function initPortfolio() {
    // Initialize core functionality
    initSmoothScroll();
    initLoaders();
    initThemeSystem();
    
    // Setup UI components
    setupNavigation();
    setupMagneticButtons();
    setupContactForm();
    
    // Initialize page sections
    initAboutPage();
    initResumePage();
    initTestimonials();
    initProjectsSection();
    
    // Setup animations
    initNumberAnimations();
    initScrollAnimations();
    initHomeSections();
    
    // Initialize project detail page if needed
    if (isProjectDetailPage()) {
      initProjectDetailPage();
    }
  }
  
  // Start the application when DOM is ready
  document.addEventListener('DOMContentLoaded', initPortfolio);
  
  /* ====================== */
  /* CORE FUNCTIONALITY */
  /* ====================== */
  
  /**
   * Initialize smooth scrolling with Locomotive Scroll
   * @returns {LocomotiveScroll} The Locomotive Scroll instance
   */
  function initSmoothScroll() {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (!scrollContainer) return null;
  
    const locoScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      smoothMobile: false,
      inertia: 0.8,
      getDirection: true,
      smartphone: { smooth: false, breakpoint: 768 },
      tablet: { smooth: false, breakpoint: 1024 }
    });
  
    const header = document.querySelector(".header");
    const scrollThreshold = 100;
    let isScrollingDown = false;
  
    // Handle scroll events for header visibility
    locoScroll.on("scroll", (obj) => {
      const currentScroll = obj.scroll.y;
      const scrollDirection = obj.direction;
  
      if (currentScroll > scrollThreshold) {
        if (scrollDirection === 'down' && !isScrollingDown) {
          header.classList.add("hide");
          isScrollingDown = true;
        } else if (scrollDirection === 'up' && isScrollingDown) {
          header.classList.remove("hide");
          isScrollingDown = false;
        }
      } else {
        header.classList.remove("hide");
        isScrollingDown = false;
      }
    });
  
    // Update scroll on window events
    window.addEventListener("load", () => locoScroll.update());
    window.addEventListener("resize", () => locoScroll.update());
  
    return locoScroll;
  }
  
  /**
   * Initialize all loaders (both bubble and 3D orbital)
   */
  function initLoaders() {
    initBubbleLoader();
    
    // Fallback in case load event doesn't fire
    setTimeout(() => {
      const loader = document.querySelector('.bubble-loader');
      if (loader && !loader.classList.contains('hidden')) {
        hideLoader(loader);
      }
    }, 3000);
  }
  
  /**
   * Initialize 3D Orbital Loader with particles
   */
  function initBubbleLoader() {
    const loaderContainer = document.querySelector('.bubble-loader');
    if (!loaderContainer) return;
    
    // Create loader structure
    loaderContainer.innerHTML = `
      <div class="particles" id="particles"></div>
      <div class="loader-container">
        <div class="loader-3d-ultra">
          <div class="orbital-ring ring-x"></div>
          <div class="orbital-ring ring-y"></div>
          <div class="orbital-ring ring-z"></div>
          <div class="core"></div>
        </div>
      </div>
    `;
    
    // Create particles
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 4}s`;
      particlesContainer.appendChild(particle);
    }
    
    // Hide loader when page loads
    window.addEventListener('load', () => hideLoader(loaderContainer));
  }
  
  /**
   * Hide loader with transition
   * @param {HTMLElement} loader - The loader element to hide
   */
  function hideLoader(loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 600);
    }, 300);
  }
  
  /* ====================== */
  /* NAVIGATION COMPONENTS */
  /* ====================== */
  
  /**
   * Setup main navigation functionality
   */
  function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Mobile menu toggle
    if (navToggle && navList) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navList.classList.toggle('active');
      });
    }
  
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navList?.classList.contains('active')) {
          navToggle?.classList.remove('active');
          navList.classList.remove('active');
        }
      });
    });
  
    // Set active link based on current page
    setActiveNavLink(navLinks);
  }
  
  /**
   * Set active navigation link based on current page
   * @param {NodeList} navLinks - All navigation links
   */
  function setActiveNavLink(navLinks) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if ((currentPage === 'index.html' && linkPage === 'index.html') || 
          (currentPage === linkPage)) {
        link.classList.add('active');
      }
    });
  }
  
  /* ====================== */
  /* UI COMPONENTS */
  /* ====================== */
  
  /**
   * Setup magnetic button effects
   */
  function setupMagneticButtons() {
    document.querySelectorAll('.magnetic').forEach(button => {
      button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) * 0.02;
        const angleY = (centerX - x) * 0.02;
        
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
        const scale = 1 + (0.1 * (1 - distance / maxDistance));
        
        button.style.transform = `perspective(500px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})`;
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = '';
      });
    });
  }
  
  /**
   * Setup contact form functionality with Formspree
   */
  function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
  
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      const successMessage = document.getElementById('formSuccess');
      
      // Show loading state
      submitButton.innerHTML = '<span>Sending...</span>';
      submitButton.disabled = true;
      
      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          successMessage.style.display = 'flex';
          contactForm.reset();
          
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        alert('There was a problem sending your message. Please try again later.');
        console.error('Form submission error:', error);
      } finally {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }
  
  /* ====================== */
  /* THEME SYSTEM */
  /* ====================== */
  
  /**
   * Initialize theme functionality
   */
  function initThemeSystem() {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or use OS preference
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    applyTheme(savedTheme);
    
    // Toggle theme on button click
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      });
    }
  }
  
  /**
   * Apply theme to the document
   * @param {string} theme - Theme to apply ('light' or 'dark')
   */
  function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }
  
  
  
  /**
   * Initialize scroll animations for elements
   */
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: ANIMATION_DEFAULTS.threshold,
      rootMargin: '0px 0px -50px 0px'
    });
  
    // Animate all elements with animation classes
    document.querySelectorAll('.text-reveal, .fade-in, .scale-in, .slide-in-left, .slide-in-right, .rotate-in').forEach(el => {
      observer.observe(el);
    });
  
    // Animate section headers with staggered children
    document.querySelectorAll('.section-header').forEach(header => {
      observer.observe(header);
      
      const children = header.querySelectorAll('*');
      children.forEach((child, index) => {
        child.classList.add('text-reveal', `delay-${index + 1}`);
        observer.observe(child);
      });
    });
  
    // Animate cards with delays
    document.querySelectorAll('.service-card, .project-card').forEach((card, index) => {
      card.classList.add('scale-in', `delay-${index % 3}`);
      observer.observe(card);
    });
  }
  
  /* ====================== */
  /* PAGE-SPECIFIC FUNCTIONS */
  /* ====================== */
  
  /**
   * Initialize About Page Animations
   */
  function initAboutPage() {
    // Animate progress bars
    document.querySelectorAll('.progress-fill').forEach(bar => {
      const value = bar.getAttribute('data-value');
      setTimeout(() => {
        bar.style.width = `${value}%`;
      }, 500);
    });
  
    // Interactive timeline
    const milestones = document.querySelectorAll('.timeline-milestone');
    milestones.forEach(milestone => {
      milestone.addEventListener('click', function() {
        milestones.forEach(m => m.classList.remove('active'));
        this.classList.add('active');
      });
    });
  
    // Interactive badges hover effect
    const badges = document.querySelectorAll('.interactive-badge');
    badges.forEach(badge => {
      badge.addEventListener('mouseenter', function() {
        const value = this.getAttribute('data-value');
        const numberEl = this.querySelector('.badge-number');
        numberEl.textContent = value.includes('+') ? value : `+${value}`;
      });
      
      badge.addEventListener('mouseleave', function() {
        const value = this.getAttribute('data-value');
        const numberEl = this.querySelector('.badge-number');
        numberEl.textContent = value;
      });
    });
  }
  
  /**
   * Initialize Resume Page Timeline Animations
   */
  function initResumePage() {
    if (!document.querySelector('.timeline')) return;
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * ANIMATION_DEFAULTS.delayIncrement);
        }
      });
    }, { threshold: 0.1 });
  
    timelineItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(item);
    });
  }
  
  /**
   * Initialize Testimonials with Infinite Scroll Effect
   */
  function initTestimonials() {
    const rows = document.querySelectorAll('.testimonial-row');
    if (!rows.length) return;
    
    rows.forEach(row => {
      const track = row.querySelector('.testimonial-track');
      const cards = track.querySelectorAll('.testimonial-card');
      
      // Clone cards if there are too few for infinite scroll
      if (cards.length <= 4) {
        cards.forEach(card => {
          const clone = card.cloneNode(true);
          track.appendChild(clone);
        });
      }
    });
  }
  
  /**
   * Initialize Projects Section
   */
  function initProjectsSection() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
  
    // Clear existing content
    projectsGrid.innerHTML = '';
  
    // Create project cards from data
    Object.entries(PROJECTS_DATA).forEach(([id, project]) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card will-animate scale-in';
      projectCard.dataset.projectId = id;
      
      projectCard.innerHTML = `
        <div class="project-image-container">
          <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        </div>
        <div class="project-info">
          <span class="project-category">${project.category}</span>
          <h3 class="heading-4 project-name">${project.title}</h3>
          <a href="project-detail.html?project=${id}" class="project-details-btn">
            <span>View Details</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
  
    // Set up scroll animations for project cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: ANIMATION_DEFAULTS.threshold });
  
    document.querySelectorAll('.project-card').forEach((card, index) => {
      card.style.transitionDelay = `${(index % 4) * 0.1}s`;
      observer.observe(card);
    });
  }
  
  /**
   * Check if current page is project detail page
   * @returns {boolean} True if on project detail page
   */
  function isProjectDetailPage() {
    return window.location.pathname.includes('project-detail.html');
  }
  
  /**
   * Initialize project detail page
   */
  function initProjectDetailPage() {
    const projectId = getProjectIdFromUrl();
    const project = PROJECTS_DATA[projectId];
    
    if (!project) {
      console.error('Project not found');
      return;
    }
    
    // Update page metadata
    document.title = `Alexander Stone | ${project.title}`;
    
    // Update page content
    updateProjectContent(project);
    
    // Set up navigation
    setupProjectNavigation(projectId);
  }
  
  /**
   * Get project ID from URL parameters
   * @returns {number} Project ID
   */
  function getProjectIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    let projectId = parseInt(urlParams.get('project')) || 1;
    
    // Validate project ID
    if (!PROJECTS_DATA[projectId]) {
      projectId = 1;
      window.history.replaceState({}, '', `?project=${projectId}`);
    }
    
    return projectId;
  }
  
  /**
   * Update project detail page content
   * @param {ProjectData} project - Project data object
   */
  function updateProjectContent(project) {
    // Update hero section
    document.getElementById('project-category').textContent = project.category;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-client').textContent = project.client;
    document.getElementById('project-year').textContent = project.year;
    document.getElementById('project-services').textContent = project.services;
    
    // Update image
    updateProjectImage('project-image-container', project.image);
    
    // Update content sections
    updateContentSection('project-overview', project.overview);
    updateContentSection('project-challenge', project.challenge);
    updateContentSection('project-solution', project.solution);
    
    updateListSection('project-challenge-points', project.challengePoints);
    updateListSection('project-solution-points', project.solutionPoints);
    updateTechnicalSpecs('project-specs', project.technicalSpecs);
    updateHighlights('project-highlights', project.highlights);
    updateCredits('project-credits', project.credits);
  }
  
  /**
   * Update project image container with new image
   * @param {string} containerId - ID of the container element
   * @param {string} imagePath - Path to the image
   */
  function updateProjectImage(containerId, imagePath) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    container.className = 'project-image-square-container will-animate fade-in';
    
    const img = new Image();
    img.src = imagePath;
    img.alt = document.getElementById('project-title').textContent;
    img.loading = 'eager';
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.8s ease';
    
    img.onerror = function() {
      container.style.backgroundColor = 'var(--slate)';
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'center';
      container.innerHTML = '<p>Image not available</p>';
    };
    
    img.onload = function() {
      img.style.opacity = '1';
      container.appendChild(img);
    };
    
    container.appendChild(img);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: ANIMATION_DEFAULTS.threshold });
    
    observer.observe(container);
  }
  
  /**
   * Update content section with new text
   * @param {string} elementId - ID of the element to update
   * @param {string} content - New content to set
   */
  function updateContentSection(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) element.textContent = content;
  }
  
  /**
   * Update list section with new items
   * @param {string} elementId - ID of the list container
   * @param {string[]} items - Array of items to add
   */
  function updateListSection(elementId, items) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      container.appendChild(li);
    });
  }
  
  /**
   * Update technical specs section
   * @param {string} elementId - ID of the specs container
   * @param {Array<{label: string, value: string}>} specs - Array of spec items
   */
  function updateTechnicalSpecs(elementId, specs) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = '';
    specs.forEach(spec => {
      const div = document.createElement('div');
      div.className = 'spec-item';
      div.innerHTML = `
        <span class="spec-label">${spec.label}</span>
        <span class="spec-value">${spec.value}</span>
      `;
      container.appendChild(div);
    });
  }
  
  /**
   * Update highlights section
   * @param {string} elementId - ID of the highlights container
   * @param {Array<{value: string, text: string}>} highlights - Array of highlight items
   */
  function updateHighlights(elementId, highlights) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = '';
    highlights.forEach(highlight => {
      const li = document.createElement('li');
      li.className = 'highlight-item';
      li.innerHTML = `
        <div class="highlight-number">${highlight.value}</div>
        <div class="highlight-text">${highlight.text}</div>
      `;
      container.appendChild(li);
    });
  }
  
  /**
   * Update credits section
   * @param {string} elementId - ID of the credits container
   * @param {Array<{role: string, name: string}>} credits - Array of credit items
   */
  function updateCredits(elementId, credits) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = '';
    credits.forEach(credit => {
      const li = document.createElement('li');
      li.className = 'credit-item';
      li.innerHTML = `
        <span class="credit-role">${credit.role}</span>
        <span class="credit-name">${credit.name}</span>
      `;
      container.appendChild(li);
    });
  }
  
  /**
   * Setup project navigation (previous/next buttons)
   * @param {number} currentProjectId - Current project ID
   */
  function setupProjectNavigation(currentProjectId) {
    const projectIds = Object.keys(PROJECTS_DATA).map(Number);
    const currentIndex = projectIds.indexOf(currentProjectId);
    
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');
    
    if (prevBtn) {
      const prevId = currentIndex > 0 ? projectIds[currentIndex - 1] : projectIds[projectIds.length - 1];
      prevBtn.href = `project-detail.html?project=${prevId}`;
    }
    
    if (nextBtn) {
      const nextId = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : projectIds[0];
      nextBtn.href = `project-detail.html?project=${nextId}`;
    }
  }
  
  /* ====================== */
  /* UTILITY FUNCTIONS */
  /* ====================== */
  
  // Update copyright year automatically
  document.getElementById('year').textContent = new Date().getFullYear();
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* ====================== */
  /* STATS ANIMATION FUNCTIONS */
  /* ====================== */
  
  /**
   * Initialize all number animations across different home sections
   */
  function initNumberAnimations() {
    // Animate all elements with animate-number or counter class
    document.querySelectorAll('.animate-number, .counter, .animate-number-v1, .stat-value-v2, .stat-value-v3').forEach(el => {
      setupNumberAnimation(el);
    });
  }
  
  /**
   * Setup animation for a single number element
   * @param {HTMLElement} element - The element to animate
   */
  function setupNumberAnimation(element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumberValue(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(element);
  }
  
  /**
   * Animate number value from 0 to target
   * @param {HTMLElement} element - The element containing the number
   */
  function animateNumberValue(element) {
    // Handle different data attributes for different versions
    let target;
    
    if (element.classList.contains('counter')) {
      target = parseInt(element.getAttribute('data-target')) || 0;
    } else if (element.classList.contains('stat-value-v2')) {
      const counterSpan = element.querySelector('.counter');
      if (counterSpan) {
        target = parseInt(counterSpan.getAttribute('data-target')) || 0;
      } else {
        target = parseInt(element.textContent.replace('+', '')) || 0;
      }
    } else {
      target = parseInt(element.getAttribute('data-value')) || 
               parseInt(element.textContent.replace('+', '')) || 0;
    }
    
    const duration = ANIMATION_DEFAULTS.duration;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
        
        // Add '+' suffix if the original text had it
        if (element.textContent.includes('+') || element.classList.contains('stat-value-v2')) {
          element.textContent = Math.floor(current) + '+';
        } else {
          element.textContent = Math.floor(current);
        }
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }
  
  /* ====================== */
  /* HOME SECTION SPECIFIC INITIALIZATION */
  /* ====================== */
  
  /**
   * Initialize home section specific animations
   */
  function initHomeSections() {
    // Initialize floating badges for version 1
    const floatingBadges = document.querySelectorAll('.floating-badge-v1');
    floatingBadges.forEach((badge, index) => {
      setTimeout(() => {
        badge.classList.add('animate-in');
      }, (index + 1) * 300);
    });
  
    // Initialize blob animation for version 2
    const blobShape = document.querySelector('.blob-shape-v2');
    if (blobShape) {
      // Blob morph animation is handled by CSS
    }
  
    // Initialize circular stats for version 3
    const roundStats = document.querySelectorAll('.stat-round-v3');
    roundStats.forEach((stat, index) => {
      const fill = stat.querySelector('.round-fill-v3');
      if (fill) {
        setTimeout(() => {
          const value = parseInt(stat.querySelector('.stat-value-v3').getAttribute('data-value')) || 0;
          const percentage = Math.min(value, 100); // Cap at 100 for the circle
          fill.style.strokeDasharray = `${percentage}, 100`;
        }, (index + 1) * 300);
      }
    });
  }