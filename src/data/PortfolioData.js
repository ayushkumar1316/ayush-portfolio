// ==========================================
// PORTFOLIO DATA - Centralized Data Management
// ==========================================

const portfolioData = {

  // ── 1. HERO SECTION ──
  hero: {
    name: "Ayush Kumar Biswal",
    role: "Full-Stack Developer",
    shortBio: "I'm a full-stack developer dedicated to designing and building highly scalable, interactive web platforms. Combining clean system architecture with intuitive UX animations.",
    greeting: "Hey, I'm Ayush Kumar ",
    headline: "I build digital experiences that solve real problems.",
    availability: "Open For Full-Time Roles & Freelance",
    image: "/hero-image.png",
    heroImage: "/images/hero/hero-avatar.png",
    stats: [
      { label: "Years Exp", value: "1" },
      { label: "Projects Done", value: "5" },
      { label: "Happy Clients", value: "5+" },
      { label: "Hackathons", value: "3+" },
    ],
    techStack: [
      { name: "React", hex: "#61DAFB" },
      { name: "Node.js", hex: "#339933" },
      { name: "Express", hex: "#FFFFFF" },
      { name: "MongoDB", hex: "#47A248" },
      { name: "Firebase", hex: "#FFCA28" },
      { name: "Python", hex: "#3776AB" },
      { name: "Tailwind", hex: "#38bdf8" },
      { name: "Git", hex: "#F05032" },
    ],
    floatingCards: {
      left: { label: "Turning Ideas", value: "Into Big Impact" },
      right: { label: "Completed", value: "5+ Projects" },
    },
  },

  // ── 2. FEATURED WORK SECTION ──
  featuredWork: {
    overline: "SIGNATURE PROJECT",

    title: "FlowMind",

    subtitle: "AI-Powered Productivity Platform",

    description:
      "A modern AI-powered productivity platform that helps students and professionals plan, prioritize, and execute their work through intelligent task management, smart scheduling, and personalized AI guidance.",

    thumbnail: "/images/projects/flowmind-thumb.png",

    mockup: "",

    liveLink: "https://flowmind-db.web.app",

    githubLink: "https://github.com/ayushkumar1316/flowmind-ai",

    status: "Live",

    stats: [
      {
        value: "8+",
        label: "Pages",
      },
      {
        value: "40+",
        label: "Reusable Components",
      },
      {
        value: "2",
        label: "AI Integrations",
      },
      {
        value: "100%",
        label: "Responsive",
      },
    ],

    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Firebase",
      "Gemini",
      "Groq",
    ],

    caseStudy: {

      overview:
        "FlowMind is an AI-first productivity platform designed to simplify planning, task management, and daily execution. It combines intelligent scheduling, personalized AI recommendations, and an intuitive user experience to help users stay focused, organized, and productive.",

      problem:
        "Most productivity tools only store tasks but fail to help users decide what to work on next. Students and professionals often struggle with prioritization, deadline management, and maintaining consistency across multiple projects.",

      solution:
        "FlowMind combines AI-powered planning with a clean productivity dashboard that intelligently recommends priorities, organizes workloads, tracks progress, and provides contextual guidance throughout the user's workflow.",

      keyFeatures: [

        {
          title: "AI Task Planner",
          description:
            "Generate intelligent daily plans based on priorities, deadlines, and workload.",
        },

        {
          title: "Smart Dashboard",
          description:
            "Centralized workspace to monitor projects, productivity, and upcoming tasks.",
        },

        {
          title: "Task Management",
          description:
            "Create, organize, filter, and manage tasks with a distraction-free workflow.",
        },

        {
          title: "AI Productivity Coach",
          description:
            "Receive contextual suggestions and actionable insights to improve consistency.",
        },

        {
          title: "Real-Time Sync",
          description:
            "Instant updates and seamless synchronization across application modules.",
        },

        {
          title: "Responsive Experience",
          description:
            "Fully optimized interface across desktop, tablet, and mobile devices.",
        },

      ],

      techStack: [

        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase",
        "Gemini",
        "Groq",

      ],

      projectGallery: [
        "/images/flowmind/frontpage.png",
        "/images/flowmind/dashboad.png",
        "/images/flowmind/ai-planner.png",
        "/images/flowmind/insights.png",
      ],

      tags: [

        "AI Powered",
        "Productivity",
        "Responsive",
        "Modern UI",
        "Real-time",
        "Portfolio Project",

      ],

      learnings: [

        "Product Thinking",
        "AI Integration",
        "Prompt Engineering",
        "Component Architecture",
        "State Management",
        "Responsive Design",
        "Animation Design",
        "Performance Optimization",

      ],
    },
  },

  //* ── 3. PROJECTS SECTION ──*/ 
  projects: {
    categories: [
      "All Projects",
      "Full Stack",
      "Web Apps",
      "AI / ML",
      "Mobile Apps",
    ],
    items: [
      {
  id: "flowmind",

  title: "FlowMind",

  category: "Full Stack",

  badge: "Signature Project",

  description:
    "An AI-powered productivity platform that helps students and professionals plan, organize, and execute their work more efficiently.",

  image: "/images/projects/flowmind-cover.png",

  thumbnail: "/images/projects/flowmind-thumb.png",

  mockup: "",

  techStack: [
    "react",
    "vite",
    "tailwind",
    "firebase",
    "gemini",
    "groq",
    "framer-motion",
  ],

  liveLink: "https://flowmind-db.web.app",

  githubLink: "https://github.com/ayushkumar1316/flowmind-ai",

  gradient:
    "from-violet-600/30 via-purple-600/20 to-indigo-600/30",

  status: "Live",

  stats: [
    {
      value: "18+",
      label: "Pages",
    },
    {
      value: "40+",
      label: "Reusable Components",
    },
    {
      value: "2",
      label: "AI Integrations",
    },
    {
      value: "100%",
      label: "Responsive",
    },
  ],

  caseStudy: {

    overview:
      "FlowMind is an AI-first productivity platform built to simplify planning, task management, and daily execution. It combines intelligent scheduling, AI-powered recommendations, and a modern user experience to help users stay focused, organized, and productive.",

    problem:
      "Students and professionals often struggle with scattered tasks, missed deadlines, and inefficient planning. Traditional productivity applications focus on storing tasks rather than helping users decide what to work on next.",

    solution:
      "FlowMind combines AI-powered planning, intelligent prioritization, and a clean productivity dashboard to recommend what matters most, organize workloads, and guide users toward consistent progress.",

    keyFeatures: [

      {
        title: "AI Task Planner",
        description:
          "Generate intelligent daily plans based on workload, deadlines, and priorities.",
      },

      {
        title: "Smart Dashboard",
        description:
          "A centralized workspace for managing projects, tracking progress, and staying organized.",
      },

      {
        title: "Task Management",
        description:
          "Create, organize, filter, and prioritize tasks through an intuitive workflow.",
      },

      {
        title: "AI Productivity Coach",
        description:
          "Receive contextual recommendations and personalized insights to improve productivity.",
      },

      {
        title: "Real-Time Synchronization",
        description:
          "Keep tasks and updates synchronized seamlessly across the application.",
      },

      {
        title: "Responsive Experience",
        description:
          "Designed for a consistent experience across desktop, tablet, and mobile devices.",
      },

    ],

    techStack: [

      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Gemini AI",
      "Groq",
      "Framer Motion",

    ],

    projectGallery: [
      "/images/flowmind/frontpage.png",
      "/images/flowmind/dashboad.png",
      "/images/flowmind/ai-planner.png",
      "/images/flowmind/insights.png",
    ],

    tags: [

      "AI Powered",
      "Productivity",
      "Responsive",
      "Real-time",
      "Modern UI",
      "Portfolio Project",

    ],

    learnings: [

      "Product Thinking",
      "AI Integration",
      "Prompt Engineering",
      "Component Architecture",
      "Responsive Design",
      "Animation Design",
      "Performance Optimization",
      "User Experience",

    ],

  },
},
      {
  id: "snapprail",
  title: "SnappRail",
  category: "AI & Web Apps",
  badge: "AI Platform",
  description: "AI-powered digital grievance management platform designed to streamline railway passenger support with automated triage and real-time Firestore sync.",
  image: "https://placehold.co/600x400/1a1a2e/3b82f6?text=SnappRail",
  thumbnail: "https://placehold.co/600x400/1a1a2e/3b82f6?text=SnappRail",
  mockup: "",
  techStack: ["html", "javascript", "react", "tailwind", "firebase", "ai-apis"],
  liveLink: "https://snapprail-demo.vercel.app",
  githubLink: "https://github.com/ayushkumar/snapprail",
  gradient: "from-blue-600/35 via-indigo-600/20 to-purple-600/35",
  status: "Completed",
  stats: [
    { value: "80%", label: "Faster Triage" },
    { value: "Real-Time", label: "Firestore" },
    { value: "AI", label: "Categorization" },
    { value: "Live", label: "Escalation" },
  ],
  caseStudy: {
    overview: "SnappRail is a mobile-first, full-stack web application designed to accelerate the grievance redressal process for railway passengers by leveraging real-time data synchronization and AI-powered ticket triage.",
    problem: "Manual reporting delays, clunky processing, and inefficient complaint sorting lead to slow resolution times and poor response handling for critical passenger issues.",
    solution: "Developed an intelligent platform featuring natural language AI classification, automated severity scoring, and zero-refresh real-time updates via Firebase Firestore.",
    keyFeatures: [
      { title: "Mobile-First Passenger Portal", description: "Intuitive, lightweight interface optimized for mobile screens and low-bandwidth networks." },
      { title: "AI-Powered Grievance Triage", description: "Analyzes complaint descriptions using AI APIs to automatically route issues to correct departments." },
      { title: "Automated Severity Engine", description: "Calculates urgency scores to prioritize medical, security, and critical infrastructure issues." },
      { title: "Real-Time Firestore Sync", description: "Zero-refresh live status synchronization across passenger views and admin dashboards." },
      { title: "Multi-Role Authentication", description: "Secure access control separating passenger tracking from department admin controls." },
      { title: "Evidence Cloud Storage", description: "Integrated Firebase Storage for instant image and proof uploads during reporting." },
    ],
    techStack: ["Html","React.js", "Tailwind CSS", "Firebase Firestore", "Firebase Auth", "Firebase Storage", "RESTful AI APIs"],
    projectGallery: [],
    tags: ["AI-Driven", "Real-time Sync", "Mobile-First", "Firebase NoSQL"],
    learnings: ["AI Natural Language Processing Integration", "Real-time Firestore Architecture", "Role-Based Security & Auth", "Responsive Mobile-First UI/UX", "Automated Workflow Optimization"],
  },
},
{
  id: "agriplus",

  title: "Agri Plus",

  category: "Mobile Apps",

  badge: "Academic Project",

  description:
    "An Android application that empowers farmers through direct market access, expert consultation, organic farming resources, and AI-assisted agricultural support.",

  image: "/images/projects/agriplus-cover.png",

  thumbnail: "/images/projects/agriplus-thumb.png",

  mockup: "",

  techStack: [
    "java",
    "xml",
    "firebase",
    "mysql",
    "figma",
  ],

  liveLink: "https://github.com/ayushkumar1316/agriplus/releases",

  githubLink: "https://github.com/ayushkumar1316/agriplus",

  gradient:
    "from-green-600/30 via-emerald-600/20 to-teal-600/30",

  status: "Completed",

  stats: [
    {
      value: "8+",
      label: "Core Modules",
    },
    {
      value: "20+",
      label: "Application Screens",
    },
    {
      value: "2",
      label: "User Roles",
    },
    {
      value: "100%",
      label: "Mobile First",
    },
  ],

  caseStudy: {

    overview:
      "Agri Plus is an Android application developed to bridge the gap between farmers and consumers by providing a digital marketplace, expert guidance, and educational resources. The platform promotes sustainable farming while helping farmers improve productivity and market accessibility.",

    problem:
      "Small and local farmers often depend on intermediaries, receive unfair prices for their produce, and have limited access to modern agricultural knowledge, expert consultation, and digital selling platforms.",

    solution:
      "Developed a mobile-first platform where farmers can directly connect with buyers, explore organic farming techniques, access agricultural learning resources, and receive AI-assisted support through a simple and accessible user experience.",

    keyFeatures: [

      {
        title: "Direct Marketplace",
        description:
          "Connect farmers directly with buyers, eliminating unnecessary intermediaries.",
      },

      {
        title: "Expert Consultation",
        description:
          "Enable farmers to seek advice and guidance from agricultural experts.",
      },

      {
        title: "Organic Farming Hub",
        description:
          "Provide educational resources and best practices for sustainable farming.",
      },

      {
        title: "Knowledge Center",
        description:
          "Access articles, farming guides, and agricultural learning materials.",
      },

      {
        title: "Farmer Profile",
        description:
          "Manage personal information, products, and farming activities in one place.",
      },

      {
        title: "Modern Android Experience",
        description:
          "Designed with a clean Material-inspired interface optimized for Android devices.",
      },

    ],

    techStack: [

      "Java",
      "XML",
      "Firebase",
      "MySQL",
      "Android Studio",
      "Figma",

    ],

    projectGallery: [],

    tags: [

      "Agriculture",
      "Android",
      "Marketplace",
      "Farmer Support",
      "Organic Farming",
      "Educational Platform",

    ],

    learnings: [

      "Android Development",
      "Java Programming",
      "Firebase Authentication",
      "Database Design",
      "Mobile UI/UX",
      "Product Thinking",
      "User-Centered Design",
      "Team Collaboration",

    ],

  },
},
      {
        id: "smartopd",
        title: "Smart OPD",
        category: "Full Stack",
        badge: "Full Stack",
        description: "Healthcare platform for smart hospital management with appointment booking, queue management, and patient records.",
        image: "https://placehold.co/600x400/1a1a2e/3b82f6?text=Smart+OPD",
        thumbnail: "https://placehold.co/600x400/1a1a2e/3b82f6?text=Smart+OPD",
        mockup: "",
        techStack: ["react", "express", "mongodb", "socketio"],
        liveLink: "https://smartopd-demo.vercel.app",
        githubLink: "https://github.com/ayushkumar/smartopd",
        gradient: "from-blue-600/30 via-indigo-600/20 to-violet-600/30",
        status: "Live",
        stats: [
          { value: "15+", label: "Pages" },
          { value: "3", label: "User Roles" },
          { value: "Real-time", label: "Queue" },
          { value: "Live", label: "Product" },
        ],
        caseStudy: {
          overview: "Smart OPD is a comprehensive healthcare platform designed to streamline hospital outpatient department operations with digital queue management and appointment booking.",
          problem: "Hospitals face long wait times, manual queue management, and inefficient patient flow in outpatient departments.",
          solution: "Developed a digital queue management system with real-time updates, appointment booking, and patient record management.",
          keyFeatures: [
            { title: "Digital Queue", description: "Real-time queue tracking with estimated wait times." },
            { title: "Appointment Booking", description: "Online slot booking with doctor availability." },
            { title: "Patient Records", description: "Digital health records accessible to patients and doctors." },
            { title: "Doctor Dashboard", description: "Manage appointments and view patient history." },
            { title: "Notifications", description: "SMS and push notifications for queue updates." },
            { title: "Analytics", description: "Hospital performance metrics and patient flow analytics." },
          ],
          techStack: ["React", "Express.js", "MongoDB", "Socket.io", "Node.js"],
          projectGallery: [],
          tags: ["Real-time", "Healthcare", "Multi-role", "Scalable"],
          learnings: ["Real-time Communication", "Healthcare Domain", "Role-based Access", "System Design", "Socket Programming"],
        },
      },
      {
        id: "aqi-predictor",
        title: "AQI Predictor",
        category: "AI / ML",
        badge: "ML / AI",
        description: "Machine learning model that predicts air quality index based on environmental parameters with interactive visualizations.",
        image: "https://placehold.co/600x400/1a1a2e/f97316?text=AQI+Predictor",
        thumbnail: "https://placehold.co/600x400/1a1a2e/f97316?text=AQI+Predictor",
        mockup: "/images/mockups/aqi-mock.png",
        techStack: ["python", "tensorflow", "react"],
        liveLink: "https://aqi-predictor.vercel.app",
        githubLink: "https://github.com/ayushkumar/aqi-predictor",
        gradient: "from-orange-600/30 via-red-600/20 to-pink-600/30",
        status: "Live",
        stats: [
          { value: "92%", label: "Accuracy" },
          { value: "6", label: "Pollutants" },
          { value: "24h", label: "Forecast" },
          { value: "Live", label: "Product" },
        ],
        caseStudy: {
          overview: "AQI Predictor is a machine learning powered application that forecasts air quality index based on environmental parameters like temperature, humidity, and pollutant concentrations.",
          problem: "Air quality predictions are often inaccurate or unavailable at hyper-local levels, making it hard for people to plan outdoor activities.",
          solution: "Trained a TensorFlow model on historical AQI data to provide accurate 24-hour forecasts with interactive visualizations.",
          keyFeatures: [
            { title: "ML Predictions", description: "TensorFlow model trained on historical AQI data." },
            { title: "24-hour Forecast", description: "Hour-by-hour air quality predictions." },
            { title: "Interactive Maps", description: "Visualize air quality across different locations." },
            { title: "Health Recommendations", description: "Personalized advice based on AQI levels." },
            { title: "Historical Data", description: "Trend analysis and historical AQI comparisons." },
            { title: "Alerts", description: "Push notifications when air quality deteriorates." },
          ],
          techStack: ["Python", "TensorFlow", "React", "Flask", "Pandas"],
          projectGallery: [
            "https://placehold.co/800x450/1a1a2e/f97316?text=Prediction+Dashboard",
            "https://placehold.co/800x450/1a1a2e/f97316?text=Map+View",
            "https://placehold.co/800x450/1a1a2e/f97316?text=Trend+Analysis",
            "https://placehold.co/800x450/1a1a2e/f97316?text=Health+Alerts",
          ],
          tags: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Real-time"],
          learnings: ["Machine Learning", "Data Preprocessing", "Model Deployment", "Data Visualization", "API Development"],
        },
      },
      
    ],
  },

  // ── 4. ABOUT SECTION ──
  about: {
    bio: "I'm a Full Stack Developer and problem solver who loves turning ideas into impactful digital experiences. I enjoy building products that are not just functional but meaningful.",
    badges: [
      { label: "Location", value: "Odisha, India" },
      { label: "Experience", value: "1+ Years" },
      { label: "Availability", value: "Open to Work", hasPulse: true },
    ],
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/ayushkumar1316" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/ayush-kumar-biswal" },
      { platform: "Instagram", url: "https://instagram.com/kumarkingayush" },
      { platform: "Email", url: "mailto:ayushkumarbiswal@gmail.com" },
    ],
    profileCard: {
      name: "Ayush Kumar Biswal",
      role: "Full Stack Developer",
      description: "I love creating clean, scalable, and user-friendly web applications. My goal is to solve real-world problems with code and create value.",
      image: "/hero-image.png",
      resumeLink: "./Ayush_Resume.pdf",
    },
    whatIDo: [
      { title: "Full Stack Development", description: "Building responsive and performant web apps with modern stacks." },
      { title: "Backend Development", description: "Creating robust APIs and scalable backend services." },
      { title: "UI/UX & Design", description: "Designing clean and intuitive interfaces with a focus on UX." },
      { title: "Problem Solving", description: "Analyzing problems and crafting efficient and scalable solutions." },
    ],
    techStack: ["react", "nextjs", "nodejs", "express", "mongodb", "firebase", "python", "javascript", "tailwind", "git"],
    education: [
      { year: "2022 - 2026", degree: "B.Tech in Computer Science & Engineering", institution: "Gandhi Institute Of Engineering & Technology, Gupur", },
      { year: "2022", degree: "Higher Secondary Education", institution: "Nalanda Vidya Mandir", },
      { year: "2020", degree: "Secondary Education", institution: "Saraswati Sishu Vidya Mandir", },
    ],
  },

  // ── 5. CONTACT SECTION ──
  contact: {
    overline: "CONTACT",
    title: "Let's build",
    highlightTitle: "something great",
    endTitle: "together.",

    description:
      "Whether you're looking to hire, collaborate on a project, or simply want to connect, I'd love to hear from you. Let's create something meaningful together.",

    availability: "Available for Full-time Opportunities",

    contactLinks: [
      {
        id: "email",
        label: "Email",
        value: "ayushkumarbiswal@gmail.com",
        url: "mailto:ayushkumarbiswal@gmail.com",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/ayush-kumar-biswal",
        url: "https://linkedin.com/in/ayush-kumar-biswal",
      },
      {
        id: "github",
        label: "GitHub",
        value: "github.com/ayushkumar1316",
        url: "https://github.com/ayushkumar1316",
      },
      {
        id: "location",
        label: "Location",
        value: "Bhanjanagar, Odisha, India",
        url: "https://maps.google.com/?q=Bhanjanagar,Odisha,India",
      },
    ],

    resume: {
      label: "Download Resume",
      description: "View my latest resume",
      url: "/Ayush_Resume.pdf",
    },

    responseTime: "I typically respond within 6 hours.",

    securityNote:
      "Your information stays private and will only be used to respond to your message.",
  },

  // ── 6. NAVIGATION ──
  navigation: {
    brand: "Ayush.",
    links: [
      { label: "Work", id: "work" },
      { label: "Projects", id: "projects" },
      { label: "About", id: "about" },
      { label: "Contact", id: "contact" },
    ],
    cta: "Let's Connect",
  },

  // ── 7. META / SEO ──
  meta: {
    title: "Ayush Kumar | Full-Stack Developer Portfolio",
    description: "Full-Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable and interactive web platforms.",
    keywords: [
      "Full-Stack Developer",
      "React Developer",
      "Node.js",
      "Portfolio",
      "Web Development",
      "Ayush Kumar",
    ],
  },
};

export { portfolioData };
export default portfolioData;
