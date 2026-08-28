# Dharun MR — Personal Portfolio (AI & Data Science)

Professional personal portfolio website built for **Dharun MR** (B.Tech in Artificial Intelligence & Data Science).

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 📁 Project Architecture

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD deployment workflow
├── public/
│   ├── Dharun_MR_Resume.pdf    # Resume asset
│   └── favicon.svg             # Favicon asset
├── src/
│   ├── assets/                 # Static images and media assets
│   ├── components/             # Reusable UI primitives (ThemeToggle, etc.)
│   ├── data/
│   │   └── portfolio.ts        # Centralized portfolio data from resume
│   ├── hooks/
│   │   └── useTheme.ts         # Light/Dark Theme Provider & custom hook
│   ├── sections/               # Portfolio sections (to be built in upcoming stages)
│   ├── types/
│   │   └── portfolio.ts        # TypeScript interfaces for portfolio dataset
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # Application shell
│   ├── index.css               # Global CSS, Tailwind directives, theme tokens
│   └── main.tsx                # Application entry point
├── index.html                  # SEO metadata, Inter font, Open Graph tags
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts              # Vite configuration optimized for relative GitHub Pages hosting
```

---

## 💻 Local Development Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone <your-repository-url>
cd portfolio

# Install dependencies
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application locally.

### 3. Production Build
```bash
npm run build
```
The compiled production bundle will be generated in the `dist/` directory.

---

## 🌐 GitHub Pages Deployment Setup

This portfolio is configured for automated deployment via **GitHub Actions**:

1. Push your project to a GitHub repository.
2. In your repository settings on GitHub, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Push changes to the `main` branch to trigger the `.github/workflows/deploy.yml` pipeline automatically.
