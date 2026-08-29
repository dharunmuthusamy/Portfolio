import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Dharun MR",
    title: "AI & Data Science Student",
    careerDomain: "Artificial Intelligence & Data Science",
    email: "dharunshivani30@gmail.com",
    phone: "+91 8838345586",
    location: "Pollachi, Tamil Nadu, India",
    githubUrl: "https://github.com/dharunmuthusamy",
    linkedinUrl: "https://linkedin.com/in/dharunmr/",
    objective:
      "Passionate about AI and Data Science, aiming to apply strong programming, problem-solving, and data visualization skills to real-world challenges. Seeking an internship to grow as a collaborative and impact-driven tech professional.",
    resumePdfPath: "https://drive.google.com/file/d/19_wajlMVVLidFsTCF9puqOeXjWa6Ykpf/view?usp=sharing",
  },

  areasOfInterest: [
    {
      category: "Data Science",
      topics: [
        "Big Data",
        "Data Visualization",
        "Machine Learning",
        "Deep Learning",
        "NLP",
      ],
    },
    {
      category: "Data Analysis",
      topics: [
        "Data Visualization",
        "Data Handling",
        "Statistics",
        "Business Analysis (Power BI)",
      ],
    },
  ],

  education: [
    {
      id: "btech-aids",
      degree: "Bachelor of Technology",
      fieldOfStudy: "Artificial Intelligence and Data Science",
      institution: "Dr. Mahalingam College of Engineering and Technology",
      location: "Pollachi",
      boardOrUniversity: "Anna University",
      period: "2023 - 2027",
      grade: "CGPA: 8.35*",
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Vidya Nethrra Matriculation Higher Secondary School",
      location: "Pollachi",
      boardOrUniversity: "State Board",
      period: "2023",
      grade: "82%",
    },
    {
      id: "sslc",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Vidya Nethrra Matriculation Higher Secondary School",
      location: "Pollachi",
      boardOrUniversity: "State Board",
      period: "2021",
    },
  ],

  technicalSkills: [
    {
      category: "Programming Languages & Web",
      skills: [
        { name: "Python", isCore: true },
        { name: "TypeScript", isCore: true },
        { name: "React 19", isCore: true },
        { name: "Java", isCore: true },
        { name: "C", isCore: false },
      ],
    },
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "Machine Learning", isCore: true },
        { name: "Deep Learning", isCore: true },
        { name: "PyTorch", isCore: true },
        { name: "ResNet-50", isCore: true },
        { name: "Scikit-learn", isCore: true },
        { name: "OpenCV", isCore: false },
        { name: "MediaPipe", isCore: false },
        { name: "Whisper AI", isCore: false },
        { name: "Google Gemini AI", isCore: true },
        { name: "NLP", isCore: false },
      ],
    },
    {
      category: "Data Science & Databases",
      skills: [
        { name: "Pandas", isCore: true },
        { name: "NumPy", isCore: true },
        { name: "Data Modeling", isCore: true },
        { name: "EDA & Cleaning", isCore: false },
        { name: "Firebase Firestore", isCore: true },
        { name: "MySQL", isCore: true },
        { name: "SQLite", isCore: false },
      ],
    },
    {
      category: "Data Visualization & BI",
      skills: [
        { name: "Power BI", isCore: true },
        { name: "DAX", isCore: true },
        { name: "Microsoft Excel", isCore: true },
        { name: "Pivot Tables", isCore: false },
        { name: "Matplotlib", isCore: false },
      ],
    },
    {
      category: "Frameworks & Dev Tools",
      skills: [
        { name: "Python Flask", isCore: true },
        { name: "Vite", isCore: false },
        { name: "Tailwind CSS", isCore: true },
        { name: "Firebase Auth", isCore: false },
        { name: "WebSockets / SocketIO", isCore: false },
        { name: "Git & GitHub", isCore: true },
      ],
    },
  ],

  softSkills: [
    "Communication",
    "Problem-Solving",
    "Collaborative",
    "Time Management",
    "Project Management",
  ],

  projects: [
    {
      id: "movie-recommendation",
      title: "Movie Recommendation Engine",
      category: "Machine Learning & Recommendation Systems",
      date: "Jan, 2025",
      description:
        "Designed and implemented a machine learning recommendation system using collaborative filtering algorithms to provide personalized movie recommendations based on user rating patterns.",
      features: [
        "Constructed TF-IDF Vectorizer feature matrices across movie metadata (genres, keywords, overview, taglines).",
        "Calculated pairwise Cosine Similarity metrics to identify nearest-neighbor movie recommendations.",
        "Implemented difflib fuzzy string matching for resilient user query searching and top-N ranking.",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "TF-IDF Vectorizer",
        "Cosine Similarity",
        "Pandas",
        "NumPy",
        "Google Colab",
      ],
      previewImage: "./movie_rec_preview.png",
      isFeatured: true,
    },
    {
      id: "fingerprint-blood-group",
      title: "Fingerprint-Based Blood Group Detection",
      category: "Deep Learning & Computer Vision",
      date: "Apr, 2026",
      description:
        "Engineered a deep learning computer vision model to predict human blood groups directly from fingerprint biometric ridge pattern images.",
      features: [
        "ResNet-50 Deep Learning architecture trained to classify human blood group biometric patterns.",
        "Real-time confidence scoring (98.5%+ accuracy) with non-invasive fingerprint ridge analysis.",
        "Privacy-first inference pipeline with instant sample pattern evaluation (A+, O-, B+, AB+).",
      ],
      technologies: [
        "ResNet-50",
        "Deep Learning",
        "Computer Vision",
        "PyTorch",
        "Python",
        "Flask",
        "Image Processing",
      ],
      previewImage: "./fingerprint_preview.png",
      isFeatured: true,
    },
    {
      id: "patient-waitlist-analysis",
      title: "Patient Waitlist Analysis",
      category: "Data Analytics & Business Intelligence",
      date: "2025",
      description:
        "Built an interactive Power BI dashboard analyzing healthcare patient waitlist data to uncover trends in wait times across Inpatient, Outpatient, and Day Case types, medical specialties, and time periods — enabling identification of delays, workload distribution, and performance gaps.",
      features: [
        "Interactive filters for Date, Case Type, and Medical Specialty across the full dataset.",
        "Time-band and age-group segmentation revealing 18+ month wait-time concentrations post-2020.",
        "Average vs. Median wait-time toggle with specialty-level drill-down for comparative analysis.",
        "Inpatient vs. Outpatient trend lines exposing divergent growth patterns over time.",
      ],
      technologies: [
        "Power BI",
        "DAX",
        "Data Modeling",
        "CSV Data Sources",
        "Data Visualization",
        "Business Intelligence",
      ],
      githubUrl: "https://github.com/dharunmuthusamy/patient-waitlist-analysis",
      previewImage: "https://raw.githubusercontent.com/dharunmuthusamy/patient-waitlist-analysis/main/screenshots/summary.png",
      isFeatured: true,
    },
    {
      id: "speak-speech-analysis",
      title: "S.P.E.A.K. — Speech Performance Evaluation & Analysis Kit",
      category: "AI/ML & Full-Stack Web Application",
      date: "2025",
      description:
        "Built a comprehensive full-stack web application for analyzing and improving public speaking skills — combining real-time computer vision eye-contact tracking, Whisper AI speech transcription, voice modulation analysis, and Google Gemini AI coaching into a single integrated platform.",
      features: [
        "Real-time eye-contact tracking via MediaPipe computer vision with WebSocket streaming for live gaze analysis.",
        "Speech-to-text processing using Whisper AI with WPM calculation, accuracy scoring, and grammar evaluation.",
        "Voice modulation monitoring measuring pitch and volume consistency through Librosa audio analysis.",
        "Gemini AI-powered personalized coaching recommendations with session history and progress leaderboard.",
      ],
      technologies: [
        "Python Flask",
        "React 18",
        "TypeScript",
        "MediaPipe",
        "OpenCV",
        "Whisper AI",
        "Google Gemini AI",
        "Flask-SocketIO",
        "Librosa",
        "SQLite / SQLAlchemy",
        "Tailwind CSS",
        "Chart.js",
      ],
      githubUrl: "https://github.com/dharunmuthusamy/speak",
      previewImage: "./speak_preview.png",
      isFeatured: true,
    },
    {
      id: "excel-sales-analysis",
      title: "Sales Data Analysis & Data Modeling",
      category: "Data Analysis & Financial Modeling",
      date: "2025",
      description:
        "Built a dynamic country-level sales reporting workbook in Microsoft Excel to analyze sales performance, profit margins, regional revenue distribution, and salesperson targets — featuring dynamic country selectors, KPI summary metrics, and structured entity relationships.",
      features: [
        "Dynamic country-level reporting interface with instant transaction metrics, total sales, cost, and profit breakdowns.",
        "Salesperson performance evaluation tracking revenue contribution, unit sales, and KPI target completion status.",
        "Data cleaning, preprocessing, and entity-relationship modeling across Sales, Products, Regions, and Time dimensions.",
      ],
      technologies: [
        "Microsoft Excel",
        "Data Modeling",
        "Exploratory Data Analysis (EDA)",
        "Spreadsheet Formulas",
        "Pivot Tables",
        "Financial Analysis",
      ],
      githubUrl: "https://github.com/dharunmuthusamy/Excel-Data-analysis",
      previewImage: "./excel_sales_preview.png",
      isFeatured: true,
    },
    {
      id: "udaan-sme-suite",
      title: "UDAAN-SME Digital Suite",
      category: "Full-Stack SaaS Ecosystem & CRM",
      date: "2026",
      description:
        "Engineered a modern SaaS ecosystem for Small and Medium Enterprises (SMEs) to digitize operations — featuring real-time invoice generation, CRM client tracking, inventory management, PDF export engine, and secure multi-tenant authentication.",
      features: [
        "Interactive invoicing workflow with real-time CGST/SGST/IGST tax calculation and line-item management.",
        "Integrated CRM, inventory tracking, sales transactions, staff permissions, and business analytics dashboards.",
        "Firebase Firestore & Auth backend integration with security rules, role management, and jsPDF export engine.",
      ],
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS 4",
        "Firebase Firestore",
        "Firebase Auth",
        "jsPDF",
        "html2canvas",
      ],
      githubUrl: "https://github.com/dharunmuthusamy/udaan-sme",
      previewImage: "./udaan_sme_preview.png",
      isFeatured: true,
    },
  ],

  internships: [
    {
      id: "segolsys-internship",
      role: "Data Science Intern",
      company: "Segolsys",
      location: "Coimbatore",
      period: "June, 2025",
      type: "Internship",
      highlights: [
        "Actively engaged in learning and applying key concepts of data science, including data cleaning, data visualization, and statistical analysis.",
        "Worked hands-on with Machine Learning and Deep Learning models, Python data manipulation tools (Pandas, NumPy), and Power BI.",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Machine Learning",
        "Deep Learning",
        "Power BI",
      ],
    },
  ],

  certifications: [
    {
      id: "cert-nptel-public-speaking",
      title: "Course on Public Speaking",
      issuer: "NPTEL",
      date: "Jan 2024",
      category: "Soft Skills & Communication",
    },
    {
      id: "cert-ai-powerbi-workshop",
      title:
        "Workshop on Artificial Intelligence & Microsoft Power BI (Computer Vision, Fullstack, EDA, Machine Learning, Generative AI)",
      issuer: "Dr. MCET Department",
      date: "Mar 2024",
      category: "AI, ML & Power BI",
    },
    {
      id: "cert-generative-ai-amypro",
      title: "Workshop on Generative-AI",
      issuer: "Amypro",
      date: "June 2025",
      category: "Generative AI",
    },
  ],

  extracurricular: [
    {
      id: "nss-volunteer",
      role: "NSS Student Volunteer",
      organization: "National Service Scheme",
      period: "Sep 2023 - Present",
      description: "Actively involved as a student volunteer contributing to community service initiatives.",
    },
    {
      id: "invictus-office-bearer",
      role: "Office Bearer & Event Organizer",
      organization: "Invictus - Department Association",
      period: "Aug 2024 - Jun 2025",
      description:
        "Managed office bearer responsibilities and organized student activities including Hackathons and technical workshops.",
    },
  ],

  achievements: [
    {
      id: "tcs-nqt",
      title: "TCS National Qualifier Test (NQT)",
      score: "81.77% overall score",
      organization: "Tata Consultancy Services",
      date: "July 2026",
      description: "Achieved an overall score of 81.77% in the TCS National Qualifier Test evaluating core cognitive and programming competencies.",
    },
    {
      id: "invictus-leadership",
      title: "Department Association Leadership & Hackathon Organizer",
      organization: "Invictus - Department Association",
      period: "Aug 2024 - Jun 2025",
      description: "Organized student Hackathons and technical workshops while serving as an Office Bearer.",
    },
    {
      id: "nss-community-service",
      title: "NSS Student Volunteer Service",
      organization: "National Service Scheme (NSS)",
      period: "Sep 2023 - Present",
      description: "Volunteered in National Service Scheme community service and social outreach programs.",
    },
  ],
};
