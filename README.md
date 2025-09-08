# Vivianne Chao - Portfolio Website

A modern, professional portfolio showcasing frontend engineering expertise with an interactive 3D whale shark visualization. Built with cutting-edge technologies including Next.js 15, TypeScript, Three.js, and a fully responsive design.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/cphsuan/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your configuration

# Start development server
pnpm run dev

# Open http://localhost:3000
```

## 📊 Performance Metrics

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Lighthouse Performance | ~75 | 90+ | 🔧 In Progress |
| First Contentful Paint | 2.1s | <1.5s | 🔧 In Progress |
| Time to Interactive | 3.2s | <2.5s | 🔧 In Progress |
| Cumulative Layout Shift | 0.08 | <0.1 | ✅ Good |
| Bundle Size (JS) | 280KB | <200KB | 🔧 In Progress |

## Tech Stack

- **Framework:** Next.js 15.5.0 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **3D Graphics:** Three.js with @react-three/fiber & @react-three/drei
- **Geometric Processing:** Delaunator for triangulation
- **UI Components:** Radix UI primitives
- **Build Tool:** Turbopack  
- **Package Manager:** pnpm
- **Testing:** Jest 30.1.3 with React Testing Library
- **CI/CD:** GitHub Actions + Vercel
- **Deployment:** Vercel Platform

## Testing

This project includes a comprehensive Jest testing setup with:

- **Jest 30.1.3** - JavaScript testing framework
- **React Testing Library 16.3.0** - Testing utilities for React components  
- **@testing-library/jest-dom** - Custom matchers for DOM testing
- **jsdom environment** - Browser-like testing environment
- **TypeScript support** - Full TypeScript integration with ts-node
- **Next.js integration** - Uses `next/jest` for seamless configuration
- **Path alias support** - Works with `@/*` import paths
- **Browser API mocks** - matchMedia, IntersectionObserver, ResizeObserver

### Running Tests

```bash
# Run all tests once
pnpm test

# Run tests in watch mode (auto-rerun on changes)  
pnpm test:watch

# Run tests with coverage (if configured)
pnpm test -- --coverage
```

### Test Structure

```
__tests__/
├── components/
│   ├── button.test.tsx      # Button component tests
│   └── logo.test.tsx        # Logo component tests  
└── page.test.tsx            # Home page layout tests
```

**Current test coverage:** 12 tests passing across 3 test suites

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with global styles
│   ├── page.tsx           # Main landing page (modular sections)
│   └── globals.css        # Global CSS with design system
├── components/             # React components (modular architecture)
│   ├── ui/                # shadcn/ui components (Button, Sheet)
│   ├── layout/            # Layout components
│   │   ├── header/        # Header with glassmorphism & scroll effects
│   │   ├── mobile/        # Mobile navigation with slide-in panel
│   │   ├── footer/        # Footer with social links
│   │   └── providers/     # Theme provider wrapper
│   ├── sections/          # Page sections (fully modular)
│   │   ├── hero-section.tsx      # Hero with 3D whale shark
│   │   ├── about-section.tsx     # About, skills, highlights
│   │   ├── projects-section.tsx  # Featured projects showcase
│   │   ├── experience-section.tsx # Work experience timeline
│   │   └── contact-section.tsx   # Contact form & info
│   └── shared/            # Shared/reusable components
│       ├── error-boundary.tsx    # Global error boundary
│       └── whale-shark-3d.tsx    # Interactive 3D visualization
├── __tests__/             # Jest test files
│   ├── components/        # Component tests
│   │   ├── button.test.tsx        # Button component tests
│   │   └── logo.test.tsx          # Logo component tests
│   └── page.test.tsx      # Page layout tests
├── lib/                   # Utilities and constants
├── hooks/                 # Custom React hooks (media query, scroll)
├── types/                 # TypeScript definitions
├── config/                # Configuration files (site, navigation)
├── jest.config.ts         # Jest configuration with Next.js integration
└── jest.setup.ts          # Jest global setup and mocks
```

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Commands

```bash
pnpm run dev         # Start development server with Turbopack
pnpm run build       # Build for production
pnpm start           # Start production server
pnpm test            # Run Jest tests once
pnpm test:watch      # Run Jest tests in watch mode
```

## Features

### ✅ Core Portfolio Features (Completed)

**🎨 3D Interactive Visualization**
- Geometric whale shark with Delaunay triangulation
- Floating animation effects
- Responsive 3D positioning across all devices
- Optimized Three.js performance

**📱 Responsive Design**
- Mobile-first approach with breakpoint optimization
- 30/70 hero layout (text/3D visualization) 
- Glassmorphism header with scroll effects
- Dark/light theme support with next-themes

**🏗️ Modular Architecture** 
- Fully separated section components
- Reusable and maintainable code structure
- Individual section imports for performance
- Clean main page with minimal complexity

**👩‍💻 Professional Content**
- Authentic frontend engineering portfolio
- Real project showcases (Perfect Corp SaaS, Lane Detection, Answer Sheet Recognition)
- Taiwan-based professional profile
- Comprehensive skills and experience timeline

### ✅ Technical Implementation

**🔧 Phase 1: Foundation**
- Next.js 15.5.0 with App Router
- TypeScript strict mode configuration
- Tailwind CSS v4 design system
- ESLint & Prettier setup
- shadcn/ui component integration

**🎯 Phase 2: Navigation & UX**
- Responsive header with scroll effects
- Mobile slide-in navigation with scroll lock  
- Theme toggle with system preference detection
- Error boundaries for reliability
- Centralized configuration management

**⚡ Phase 3: Content & Interactivity**
- Five modular section components
- 3D whale shark visualization with Three.js
- Professional content customization
- Contact form and project showcase
- Experience timeline with visual design

**🧪 Phase 4: Testing Infrastructure (Completed)**
- Jest 30.1.3 testing framework with Next.js 15.5.0 integration
- React Testing Library for component testing
- TypeScript support with ts-node configuration  
- Browser API mocks for matchMedia, IntersectionObserver, ResizeObserver
- Comprehensive test suite: 12 tests passing across 3 test suites
- Automated testing for components, layouts, and user interactions

### 🚀 In Progress

**🔗 Phase 5: Critical Improvements**
- Contact form API implementation with email service
- Image optimization with next/image
- SEO infrastructure (sitemap, robots.txt, structured data)
- Performance optimizations for mobile devices
- Error boundary for 3D component failures

### 📅 Planned Improvements

**Week 1 - Critical Fixes:**
- ✅ Implement working contact form API with validation
- ✅ Add error handling for 3D components
- ✅ Create SEO files and structured data
- ✅ Fix mobile performance issues

**Week 2 - High-Impact Features:**
- 📸 Add professional images and project screenshots
- ⚡ Implement lazy loading and code splitting
- 🎯 Add smooth scroll and micro-interactions
- 📊 Integrate analytics (Vercel Analytics)

**Week 3 - Professional Polish:**
- 🌍 Add internationalization (EN/ZH)
- ♿ Complete accessibility audit
- 📄 Add resume download feature
- 🎨 Create custom 404 page

## About This Portfolio

This portfolio showcases **Vivianne Chao**, a Frontend Engineer currently working at Perfect Corp in Taiwan. The portfolio features:

### 🌟 Professional Highlights
- **Current Role:** Frontend Engineer at Perfect Corp (March 2023 - Present)
- **Previous Experience:** Data Analyst Intern at Eastern Union Interactive Corp
- **Education:** M.S. Information Management, NTUST (Computer Graphics & Multimedia Systems Lab)
- **Location:** New Taipei, Taiwan

### 🛠️ Technical Expertise
- **Frontend:** React, Next.js, Zustand, TailwindCSS, Jest, JavaScript, TypeScript
- **Backend & Data:** Java Spring Boot, MySQL, RESTful APIs, Python, R, Solr
- **Specialties:** Machine Learning, Computer Vision, Payment Integration, SaaS Development

### 📈 Key Projects Featured
1. **SaaS Console Platform** - Greenfield Next.js project at Perfect Corp
2. **Lane Detection & Tracking** - Master's thesis with 99.9% accuracy achievement
3. **Answer Sheet Recognition** - C# system processing 100,000+ images
4. **CRM System Integration** - React-based system with Stripe/CleverBridge
5. **Real-time User Analytics** - Tableau dashboards and behavior tracking
6. **3D Portfolio Website** - This website with Three.js visualization

## 🔧 Architecture Decisions

### Performance First
- **Turbopack** for faster builds and HMR
- **Dynamic imports** for code splitting (planned)
- **Three.js optimization** with useMemo and useCallback (planned)
- **Image optimization** with next/image (planned)

### Developer Experience
- **TypeScript strict mode** for type safety
- **Path aliases** (@/*) for clean imports
- **Modular architecture** for maintainability
- **Comprehensive testing** with Jest and RTL

### Design Philosophy
- **Mobile-first** responsive approach
- **Accessibility** as a core requirement
- **Progressive enhancement** for 3D features
- **Graceful degradation** for older devices

## 🐛 Known Issues & Limitations

| Issue | Impact | Priority | Status |
|-------|--------|----------|--------|
| No contact form API | Contact submissions don't work | Critical | 🔧 In Progress |
| Missing image optimization | Slower load times | High | 📋 Planned |
| 3D performance on mobile | May crash older devices | High | 🔧 In Progress |
| No sitemap/robots.txt | Poor SEO | Medium | 📋 Planned |
| Missing analytics | No visitor insights | Medium | 📋 Planned |

## Customization Guide

This portfolio can be easily customized for other developers by updating:

1. **Personal Information** in each section component
2. **Project Details** with your own work and achievements  
3. **Experience Timeline** with your career history
4. **Contact Information** with your professional links
5. **3D Visualization** can be replaced with other Three.js models or removed entirely

See `CLAUDE.md` for detailed customization instructions and improvement priorities.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
