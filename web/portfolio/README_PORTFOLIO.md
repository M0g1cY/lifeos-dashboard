# LifeOS - Personal Life Operating System

> A cinematic dashboard for life management, built with Next.js 16 + React 19 + TypeScript

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)](https://tailwindcss.com/)

## 🎯 Project Overview

LifeOS is a personal life management system built around a **nautical metaphor** — your life is a voyage, your goals are the North Star, and your daily tasks are entries in the ship's log. The project features a glassmorphism design with a deep space theme, creating an immersive and elegant user experience.

**Key Highlights:**
- 🚀 Built with **React 19** and **Next.js 16** (latest stable versions)
- 🎨 **Glassmorphism UI** with deep space aesthetics
- 🔄 **9 interactive dashboard components** with real-time state management
- 💾 **localStorage persistence** with SSR-safe architecture
- 🏗️ **Zero new dependencies** added during Phase 3 + Phase 4.1
- ⚡ **Server Component architecture** preserved throughout

## ✨ Core Features

### 📊 Interactive Dashboard Components

- **Life Dimension Dock** — Select life dimensions (Health, Career, Relationships, etc.)
- **Hero Quote** — Dynamic quote display linked to selected dimension
- **Today Voyage Card** — Task completion with checkbox toggle
- **Stats Bar** — Real-time statistics linked to task completion
- **Toolbox Card** — Expandable tool descriptions
- **Core Navigation** — Active state switching
- **Milestone Timeline** — Completion toggle for milestones
- **North Star Card** — Expandable goal descriptions
- **Voyage Status Card** — Metric mode switching (basic/extended)

### 🔗 Cross-Component Interactions

1. **Dimension → Hero Quote Linkage**
   - Click a dimension in LifeDimensionDock
   - Hero Quote displays dimension-specific content
   - Toggle to cancel selection

2. **Task → Stats Bar Linkage**
   - Check/uncheck tasks in TodayVoyageCard
   - StatsBar updates "Today Completed" count in real-time
   - Persistent across page refreshes

### 💾 State Persistence

- **taskStatus** — Task completion states saved to localStorage
- **selectedDimensionId** — Selected dimension saved to localStorage
- **SSR-safe** — No hydration warnings
- **Error-resilient** — Graceful fallback when localStorage unavailable

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.2.6** — App Router with Server Components
- **React 19.2.4** — Latest React with concurrent features
- **TypeScript 5.x** — Strict mode enabled
- **Tailwind CSS 3.x** — Utility-first styling

### Architecture Highlights
- **Server Component First** — `app/page.tsx` remains a Server Component
- **Client Shell Pattern** — Single Client boundary (`DashboardClientShell`)
- **Zero Context** — No React Context, Zustand, or Redux
- **Custom localStorage Hook** — React 19 compliant with `queueMicrotask`
- **SSR-safe Storage** — Graceful degradation for server-side rendering

### Development Tools
- **ESLint** — Code quality enforcement
- **TypeScript** — Type safety
- **Git Worktree** — Feature branch isolation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/lifeos.git
cd lifeos/web

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Start production server
npm start
```

## 📸 Screenshots

### Dashboard Overview
![Dashboard Overview](./screenshots/dashboard-overview.png)
*Main dashboard with glassmorphism cards and deep space background*

### Interactive Features
![Task Completion](./screenshots/task-completion.png)
*Task completion with real-time stats update*

![Dimension Selection](./screenshots/dimension-selection.png)
*Dimension selection with hero quote linkage*

### localStorage Persistence
![Persistence Demo](./screenshots/persistence-demo.png)
*State preserved after page refresh*

## 🎥 Live Demo

🔗 **[View Live Demo](https://lifeos-demo.vercel.app)** *(Coming Soon)*

## 📚 Documentation

- [HANDOFF.md](../HANDOFF.md) — Complete project handoff documentation
- [PHASE4_1_REPORT.md](../PHASE4_1_REPORT.md) — Phase 4.1 delivery report
- [PHASE3_REPORT.md](../PHASE3_REPORT.md) — Phase 3 delivery report
- [CLAUDE.md](../CLAUDE.md) — Development guidelines and constraints

## 🏗️ Project Structure

```
web/
├── app/
│   ├── page.tsx                 # Server Component entry
│   └── globals.css              # Global styles + Design Tokens
├── components/
│   ├── layout/
│   │   ├── DashboardClientShell.tsx  # Client boundary + state management
│   │   └── DashboardCanvas.tsx       # Layout component
│   └── dashboard/
│       ├── LifeDimensionDock.tsx
│       ├── TodayVoyageCard.tsx
│       ├── StatsBar.tsx
│       └── ... (6 more components)
├── lib/
│   ├── storage.ts               # SSR-safe localStorage utilities
│   └── useLocalStorageState.ts  # React 19 compliant hook
├── data/
│   └── mockLifeData.ts          # Mock data
└── types/
    └── lifeos.ts                # TypeScript definitions
```

## 🎯 Development Phases

| Phase | Status | Description |
|-------|--------|-------------|
| Phase 2 | ✅ Complete | Static visual baseline (HTML → React migration) |
| Phase 3 | ✅ Complete | Interactive dashboard (9 components + 2 linkages) |
| Phase 4.1 | ✅ Complete | localStorage persistence (taskStatus + selectedDimensionId) |
| Phase 4.2 | 🔜 Planned | Test page cleanup + props tightening |
| Phase 4.3 | 🔜 Planned | Milestone persistence evaluation |

## 🤝 Contributing

This is a personal project, but feedback and suggestions are welcome!

## 📄 License

MIT License - feel free to use this project as a reference for your own work.

## 👤 Author

**Zhang Miyang (MagicY)**
- 2024 Clinical Medicine Graduate
- Transitioning to Cross-border E-commerce + AI
- Heavy Claude Code user

---

**Built with ❤️ using Next.js 16 + React 19 + TypeScript**
