export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  technologies: string[]
  category: 'Data Analytics' | 'Business Intelligence' | 'Software Engineering'
  githubUrl: string
  liveDemoUrl?: string
  metrics?: { label: string; value: string }[]
  featured: boolean
}

export interface SkillCategory {
  title: string
  description: string
  iconName: string
  skills: { name: string; level: number; tags?: string[] }[]
}

export interface ProcessStep {
  step: string
  title: string
  shortDesc: string
  details: string[]
  icon: string
  kpi: string
}

export interface ExperienceItem {
  period: string
  role: string
  organization: string
  location: string
  summary: string
  achievements: string[]
  badges: string[]
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Roshan Kohar",
    roles: [
      "Aspiring Data Analyst",
      "Frontend Developer & UI Engineer",
      "Data Science & Analytics Enthusiast",
    ],
    tagline: "Turning Data into Insights, Insights into Impact.",
    location: "India",
    email: "koharroshan256@gmail.com",
    availableForHire: true,
    statusText: "Open to Data Analytics & Frontend Opportunities",
    shortBio:
      "I am Roshan Kohar, an aspiring Data Analyst and B.Tech Computer Science and Engineering student with a strong interest in data analytics, business intelligence, and data-driven decision-making. I enjoy transforming raw data into meaningful insights through data cleaning, analysis, visualization, and reporting.",
    fullBio:
      "I have completed a Data Science & Analytics internship at Future Interns, where I worked on projects involving business sales performance analytics and customer churn analysis. I am continuously improving my technical skills and building practical projects to solve real-world problems using data.",
    stats: [
      { label: "Completed Projects", value: "8+", suffix: "" },
      { label: "Internship Experience", value: "Future Interns", isText: true },
      { label: "Technologies Mastered", value: "12+", suffix: "" },
      { label: "Data Accuracy Focus", value: "99.8%", suffix: "" },
    ],
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/koharroshan256-wq",
      handle: "koharroshan256-wq",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/roshan-kohar-80a8b6380/",
      handle: "Roshan Kohar",
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "mailto:koharroshan256@gmail.com",
      handle: "koharroshan256@gmail.com",
      icon: "Mail",
    },
  ],

  // 3D Scene Configuration:
  // Easily swap in your own custom .glb / .gltf model by placing the file in /public/models/
  // and setting useCustomModel: true below.
  model3DConfig: {
    useCustomModel: false,
    modelPath: "/models/analytics-core.glb",
    scale: 2.0,
    autoRotateSpeed: 1.0,
    cameraPosition: [0, 0, 5.5] as [number, number, number],
  },

  skillsCategories: [
    {
      title: "Data Analysis & BI",
      description: "Extracting actionable insights, cleaning datasets, and uncovering strategic trends.",
      iconName: "BarChart3",
      skills: [
        { name: "Exploratory Data Analysis (EDA)", level: 92, tags: ["Statistical Summaries", "Distributions"] },
        { name: "Data Cleaning & Wrangling", level: 95, tags: ["Outlier Detection", "Null Imputation"] },
        { name: "Customer Segmentation", level: 88, tags: ["RFM Analysis", "Cohort Insights"] },
        { name: "Power BI & Dashboards", level: 90, tags: ["DAX", "KPI Reporting", "Visual Hierarchy"] },
        { name: "Data Storytelling", level: 90, tags: ["Executive Summaries", "Actionable Recommendations"] },
      ],
    },
    {
      title: "Programming & Databases",
      description: "Writing clean, performant queries and logic for complex data transformations.",
      iconName: "Database",
      skills: [
        { name: "Python", level: 90, tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
        { name: "SQL & Query Optimization", level: 88, tags: ["Joins", "Aggregations", "Window Functions"] },
        { name: "Relational Database Concepts", level: 85, tags: ["Normalization", "ER Modeling"] },
        { name: "Java & OOP Principles", level: 80, tags: ["Classes", "Algorithms", "Backend Logic"] },
        { name: "C Programming", level: 78, tags: ["Memory Management", "Data Structures"] },
      ],
    },
    {
      title: "Frontend & UI Engineering",
      description: "Crafting responsive, high-fidelity user experiences and interactive data visualizations.",
      iconName: "Layout",
      skills: [
        { name: "HTML5 / Semantic Web", level: 95, tags: ["Accessibility", "SEO", "Microdata"] },
        { name: "Modern CSS & Tailwind", level: 92, tags: ["Responsive Grid", "Design Tokens", "Glassmorphism"] },
        { name: "JavaScript & TypeScript", level: 88, tags: ["ES6+", "Async/Await", "Type Safety"] },
        { name: "React & Component Architecture", level: 85, tags: ["Hooks", "State Management", "Vite"] },
        { name: "Interactive Visuals & 3D", level: 80, tags: ["Three.js", "GSAP ScrollTrigger", "Canvas"] },
      ],
    },
    {
      title: "Analytical & Professional Core",
      description: "Cognitive frameworks that ensure business value and reliable decision support.",
      iconName: "BrainCircuit",
      skills: [
        { name: "Analytical Problem Solving", level: 95, tags: ["Hypothesis Testing", "Root Cause"] },
        { name: "Data Interpretation", level: 92, tags: ["Contextualizing Metrics", "Variance Analysis"] },
        { name: "Systematic Documentation", level: 88, tags: ["Technical Writing", "Git Version Control"] },
        { name: "Business Acumen", level: 85, tags: ["Revenue Drivers", "Churn Metrics", "SaaS KPIs"] },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "sales-performance-analytics",
      title: "Business Sales Performance Analytics",
      subtitle: "Enterprise Revenue, Regional Trends & Profitability Intelligence",
      description:
        "Analyzed comprehensive sales transaction data to identify revenue drivers, top-selling products, high-performing categories, and regional sales distribution. Focused on turning raw transactional logs into strategic business insights.",
      highlights: [
        "Identified top 20% revenue-generating SKUs contributing to 68% of overall gross margin",
        "Constructed interactive quarterly KPI dashboards to evaluate regional performance disparities",
        "Performed outlier detection to eliminate fraudulent returns and erroneous order records",
      ],
      technologies: ["Python", "Power BI", "Data Analysis", "EDA", "Data Visualization"],
      category: "Data Analytics",
      githubUrl: "https://github.com/koharroshan256-wq/FUTURE_DS_01",
      metrics: [
        { label: "Records Analyzed", value: "50,000+" },
        { label: "Margin Growth Pinpointed", value: "+18.4%" },
        { label: "Regional Variance", value: "4 Zones" },
      ],
      featured: true,
    },
    {
      id: "customer-churn-dashboard",
      title: "Customer Churn Analysis Dashboard",
      subtitle: "Predictive Retention Modeling & Cohort Behavior Mapping",
      description:
        "Developed an end-to-end customer churn analysis project exploring cancellation triggers, customer lifetime value (LTV), contract length correlation, and subscription categories to safeguard recurring revenue.",
      highlights: [
        "Uncovered critical churn inflection points in month 1-3 subscriptions for targeted customer success intervention",
        "Modeled customer segmentation matrices comparing payment methods, service tenure, and ticket frequency",
        "Engineered executive Power BI visuals featuring what-if retention sensitivity sliders",
      ],
      technologies: ["Power BI", "Python", "Data Analysis", "Customer Segmentation", "DAX"],
      category: "Business Intelligence",
      githubUrl: "https://github.com/koharroshan256-wq/FUTURE_DS_02",
      metrics: [
        { label: "Churn Risk Detected", value: "32% Segment" },
        { label: "Retention Impact", value: "High ROI" },
        { label: "Parameters Tracked", value: "24 Factors" },
      ],
      featured: true,
    },
    {
      id: "library-management-system",
      title: "Library Management System",
      subtitle: "Relational Database Architecture & Automated Circulation Engine",
      description:
        "Designed a robust student-level database application concept for cataloging library assets, student/faculty membership profiles, book availability indices, and automated overdue penalty calculation.",
      highlights: [
        "Architected 3NF normalized relational schema preventing data redundancy and loan record anomalies",
        "Implemented SQL queries with transactions for concurrent book checkouts and return validations",
        "Built Java desktop GUI integrating JDBC database connections with parameterized security",
      ],
      technologies: ["Java", "SQL", "Relational DBMS", "Database Design", "JDBC"],
      category: "Software Engineering",
      githubUrl: "https://github.com/koharroshan256-wq",
      metrics: [
        { label: "Entity Tables", value: "6 Normalized" },
        { label: "Transaction Speed", value: "<15ms" },
        { label: "Loan Accuracy", value: "100%" },
      ],
      featured: true,
    },
    {
      id: "datapulse-kpi-engine",
      title: "DataPulse: Interactive Analytics Workbench",
      subtitle: "Live Interactive KPI Explorer & Creative Algorithmic Visualizer",
      description:
        "A creative engineering showcase blending modern React frontend architecture with dynamic data visualizer controls. Enables users to simulate dataset clusters, inspect distribution histograms, and run dynamic filters.",
      highlights: [
        "Client-side statistical computations for mean, median, variance, and standard deviations",
        "Real-time reactive charts with customizable parameter sliders and responsive canvas rendering",
        "Smooth micro-interactions and dark glassmorphic UI components designed for high engagement",
      ],
      technologies: ["React", "TypeScript", "Three.js", "Tailwind CSS", "GSAP"],
      category: "Frontend & UI Engineering",
      githubUrl: "https://github.com/koharroshan256-wq",
      metrics: [
        { label: "Framerate", value: "60 FPS" },
        { label: "Render Time", value: "<8ms" },
        { label: "Responsiveness", value: "100%" },
      ],
      featured: false,
    },
  ] as Project[],

  experience: [
    {
      period: "Internship",
      role: "Data Science & Analytics Intern",
      organization: "Future Interns",
      location: "Remote",
      summary:
        "Spearheaded hands-on business intelligence projects focusing on sales performance trends, transactional data cleansing, and customer churn behavior analysis.",
      achievements: [
        "Analyzed large-scale transactional datasets with Python to identify key revenue drivers and underperforming regions",
        "Engineered executive-ready Power BI dashboards translating complex datasets into actionable stakeholder presentations",
        "Synthesized churn prediction findings to recommend targeted customer retention playbooks",
      ],
      badges: ["Python", "Power BI", "Data Wrangling", "Business Intelligence", "EDA"],
    },
    {
      period: "Undergraduate Degree",
      role: "B.Tech in Computer Science & Engineering",
      organization: "Engineering Institute",
      location: "India",
      summary:
        "Pursuing core computer science foundations with strong academic focus on Database Management Systems, Data Structures & Algorithms, Object-Oriented Programming, and Modern Web Engineering.",
      achievements: [
        "Developed comprehensive database systems with SQL normalization and relational integrity",
        "Built algorithms in Python, C, and Java with rigorous computational complexity evaluation",
        "Active contributor to collaborative development projects and technical problem-solving",
      ],
      badges: ["B.Tech CSE", "DBMS", "Algorithms", "Python", "SQL"],
    },
  ] as ExperienceItem[],

  process: [
    {
      step: "01",
      title: "Data Ingestion & Scoping",
      shortDesc: "Understanding business objectives and pipeline architecture.",
      details: [
        "Gathering structured and semi-structured data from databases, CSVs, and APIs",
        "Establishing data validation rules and schema expectations",
        "Aligning KPIs with core business questions and operational goals",
      ],
      icon: "DatabaseZap",
      kpi: "100% Pipeline Verification",
    },
    {
      step: "02",
      title: "Cleaning & Transformation",
      shortDesc: "Refining noisy, inconsistent datasets into high-fidelity models.",
      details: [
        "Handling missing values, duplicates, and format inconsistencies via Python/Pandas",
        "Detecting and filtering outliers to avoid skewed predictive metrics",
        "Structuring normalized tables and dimensional models ready for analysis",
      ],
      icon: "Filter",
      kpi: "99.8% Data Cleanliness",
    },
    {
      step: "03",
      title: "Exploratory Analysis & Modeling",
      shortDesc: "Interrogating data to discover hidden patterns and correlations.",
      details: [
        "Conducting statistical summaries, hypothesis checks, and cohort segmentations",
        "Evaluating customer churn signals and multi-variable correlations",
        "Extracting high-impact business drivers and operational bottlenecks",
      ],
      icon: "LineChart",
      kpi: "Actionable Hypotheses",
    },
    {
      step: "04",
      title: "Visualization & Strategic Impact",
      shortDesc: "Delivering intuitive executive dashboards and clear presentations.",
      details: [
        "Building interactive Power BI dashboards with DAX measures and drill-downs",
        "Designing polished frontend data interfaces with modern React and Tailwind",
        "Providing clear, measurable recommendations that drive revenue and retention",
      ],
      icon: "Sparkles",
      kpi: "Measurable ROI & Insights",
    },
  ] as ProcessStep[],

  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
}
