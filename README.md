# Roshan Kohar — Personal Portfolio Website 🚀

A high-end, production-ready personal portfolio built from scratch with an immersive 360° interactive 3D hero, cinematic scroll physics, and a dark obsidian design system tailored for a **Frontend Developer / UI Engineer & Aspiring Data Analyst**.

---

## 🌟 Highlights & Features

- **Immersive 3D & 360° Hero Experience**:
  - Full-viewport 3D analytical core built with Three.js (`@react-three/fiber` & `@react-three/drei`).
  - Interactive 360° mouse drag & touch rotation with smooth inertia damping and idle auto-rotation.
  - Layered depth, subtle mouse parallax camera movement, and multi-light glowing backdrop.
  - Automatic fallback to an animated CSS/SVG isometric core on low-power devices or WebGL exceptions.
- **Scroll-Driven Motion & Smooth Physics**:
  - Integrated Lenis smooth scrolling synchronized with GSAP ScrollTrigger.
  - Spring-following custom magnetic cursor for desktop (automatically disabled on mobile/touch screens).
  - Respects `prefers-reduced-motion` for accessibility.
- **Tailored Sections**:
  - **Hero**: Animated typography, status badges, live metrics, and quick CTA buttons.
  - **About**: Bio, Future Interns internship spotlight, B.Tech CSE degree, and animated stats.
  - **Skills**: Categorized competencies (Data Analysis & BI, Programming & Databases, Frontend & Web, Analytical Core) with interactive category filters and animated proficiency meters.
  - **Projects**: Filterable project showcase (**Business Sales Performance Analytics**, **Customer Churn Analysis Dashboard**, **Library Management System**, **DataPulse Workbench**) with KPI metrics and detailed case study modal views.
  - **Process**: 4-stage Data-to-Impact methodology pipeline (Ingestion → Cleaning → Analysis → Impact).
  - **Contact**: Interactive contact form with validation, celebratory confetti, 1-click email copy button with checkmark feedback, and direct social links.
  - **Footer**: Live ticking IST clock, brand mark, and smooth back-to-top button.
- **Single Source of Truth**:
  - All content, copy, skills, projects, and 3D configs are organized in `src/data/content.ts`.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite (TypeScript)
- **Styling**: Tailwind CSS v4 with custom design tokens & glassmorphic panels
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Motion & Scrolling**: GSAP, `@studio-freight/lenis` / `lenis`
- **Icons**: Lucide React + custom inline SVG icons
- **Effects**: `canvas-confetti`

---

## 📂 Project Structure

```
portfolio/
├── index.html                   # SEO tags, Syne & Outfit fonts, OpenGraph metadata
├── vite.config.ts               # Tailwind v4 plugin & path aliases
├── tailwind.config.js           # Design tokens & color system
├── public/
│   ├── favicon.svg              # Custom 3D analytics node favicon
│   └── models/                  # Custom 3D .glb models directory
└── src/
    ├── main.tsx                 # App mounting point
    ├── App.tsx                  # Root assembly with smooth scrolling & layout
    ├── data/
    │   └── content.ts           # 🌟 SINGLE SOURCE OF TRUTH (All content & config)
    ├── styles/
    │   └── index.css            # Tailwind theme, glassmorphism, scrollbars
    ├── hooks/
    │   ├── useMousePosition.ts  # Normalized mouse coordinates for 3D parallax
    │   └── useReducedMotion.ts  # Accessibility media query listener
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx       # Glowing, magnetic primary & secondary buttons
    │   │   ├── Card.tsx         # Glassmorphic card container with hover borders
    │   │   ├── Badge.tsx        # Status pills & technology chips
    │   │   ├── Heading.tsx      # Section typography headers with gradient accent
    │   │   ├── CustomCursor.tsx # Smooth spring-following cursor (desktop only)
    │   │   └── Icons.tsx        # Crisp SVG icons (GitHub, LinkedIn)
    │   ├── canvas/
    │   │   ├── HeroCanvas.tsx   # Canvas wrapper with suspense & WebGL fallback
    │   │   ├── DataCore3D.tsx   # 360° rotatable 3D analytical core & orbital rings
    │   │   └── CanvasFallback.tsx # High-performance CSS/SVG glowing fallback
    │   └── layout/
    │       ├── Navbar.tsx       # Glassmorphic header with scroll spy indicator
    │       ├── Footer.tsx       # Real-time IST clock, socials, back-to-top
    │       └── SmoothScroll.tsx # Lenis smooth scrolling integration
    └── sections/
        ├── Hero.tsx             # 3D interactive hero, headline, animated badges
        ├── About.tsx            # Personal story, B.Tech CSE, Future Interns experience
        ├── Skills.tsx           # Categorized skills with interactive filters
        ├── Projects.tsx         # Project cards with metrics & case study modal
        ├── Process.tsx          # 4-stage Data-to-Impact pipeline
        └── Contact.tsx          # Contact form, copy email, social cards
```

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js 18+** and **npm** installed.

### 2. Installation
Open your terminal in the `portfolio` folder:
```bash
npm install --legacy-peer-deps
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` to view the website.

### 4. Build for Production
To create an optimized production bundle:
```bash
npm run build
```
The output will be generated in the `dist/` directory. You can preview it with:
```bash
npm run preview
```

---

## ✏️ How to Edit Content

All portfolio content is centralized in **[`src/data/content.ts`](./src/data/content.ts)**:

- **Personal Info & Bio**: Edit `PORTFOLIO_DATA.personal` (Name, Roles, Tagline, Short Bio, Full Bio, Location, Email).
- **Social Links**: Edit `PORTFOLIO_DATA.socials` (GitHub, LinkedIn, Email URLs).
- **Skills & Competencies**: Update `PORTFOLIO_DATA.skillsCategories` to add or modify skill levels, categories, and sub-tags.
- **Projects**: Add or update items in `PORTFOLIO_DATA.projects` (Title, Subtitle, Description, Technologies, GitHub URL, Live Demo URL, and KPI metrics).
- **Experience Timeline**: Edit `PORTFOLIO_DATA.experience` to update internship roles, achievements, and badges.
- **Process Steps**: Modify `PORTFOLIO_DATA.process` for services or workflow steps.

---

## 🎨 How to Swap the 3D Model

The 3D Hero is built to render a procedural glowing data core by default, and allows you to swap in your own custom 3D `.glb` or `.gltf` model in two easy steps:

1. **Place your 3D model**:
   - Save your `.glb` model into the `portfolio/public/models/` folder (e.g., `public/models/my-custom-model.glb`).

2. **Update the config in [`src/data/content.ts`](./src/data/content.ts)**:
   ```typescript
   model3DConfig: {
     useCustomModel: true,                     // Set to true
     modelPath: "/models/my-custom-model.glb", // Path relative to public/
     scale: 2.0,                               // Adjust scale as needed
     autoRotateSpeed: 1.0,                     // Adjust idle rotation speed
     cameraPosition: [0, 0, 5.5],              // Camera zoom/distance
   }
   ```
The 3D viewer will automatically load your custom `.glb` model while maintaining the 360° interactive rotation, lighting, and camera parallax!

---

## 🌐 How to Deploy

### Option 1: Deploy to Vercel (Recommended)
1. Push your portfolio code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: personal portfolio website"
   git remote add origin https://github.com/koharroshan256-wq/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"New Project"** and import your portfolio repository.
4. Framework Preset will automatically detect **Vite**.
5. Set the Root Directory to `portfolio` (if deploying from a monorepo root) or leave as `./` if repository root.
6. Click **Deploy**. Vercel will build and provide a live production URL with automated SSL.

### Option 2: Deploy to Netlify
1. Go to [netlify.com](https://www.netlify.com) and click **"Add new site"** → **"Import an existing project"**.
2. Connect your GitHub repository.
3. Configure build settings:
   - **Base directory**: `portfolio` (if in subfolder)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

---

## 📄 License
This portfolio is open-source and free to customize under the MIT License.
