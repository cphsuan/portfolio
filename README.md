# Portfolio Website

A professional, recruiter-focused portfolio website built with Next.js 15, TypeScript, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 15.5.0 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **UI Components:** Radix UI primitives
- **Build Tool:** Turbopack
- **Package Manager:** pnpm

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── shared/            # Shared components
├── lib/                   # Utilities and constants
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript definitions
└── config/                # Configuration files
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
pnpm run dev    # Start development server with Turbopack
pnpm run build  # Build for production
pnpm start      # Start production server
```

## Features

- ✅ **Phase 1: Core Foundation** (Completed)
  - Organized folder structure
  - shadcn/ui integration
  - ESLint & Prettier configuration
  - Design system with light/dark mode
  - Responsive utilities
  - TypeScript strict mode

- ✅ **Phase 2: Layout & Navigation** (Completed)
  - Glassmorphism header with scroll effects
  - Dark/light theme toggle with next-themes
  - Mobile-first responsive navigation
  - Slide-in mobile menu with icons
  - Smooth scroll navigation
  - Error boundaries for component reliability
  - Scroll lock for mobile menu
  - Centralized site configuration

- 🚧 **Phase 3: Content Sections** (Next)
- 🚧 **Phase 4: Data Management** (Upcoming)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
