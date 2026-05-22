# LifeOS - Resume Project Description

> Use these descriptions for resumes, LinkedIn profiles, and job applications.
> Customize the "主要职责" / "Key Responsibilities" section based on the target role.

---

## 🇨🇳 中文版本

### 简洁版（200 字）

**项目名称**：LifeOS - 个人生命操作系统

**技术栈**：Next.js 16 + React 19 + TypeScript + Tailwind CSS

**项目描述**：基于"航海隐喻"设计的个人人生仪表盘，采用 Glassmorphism 视觉风格 + 深空主题。从静态视觉稿到完整可交互应用，9 个 Dashboard 组件全部交互化，实现 2 个跨组件联动 + localStorage 状态持久化，全程零新增依赖。

**主要职责**：
- 主导从 HTML 原型到 React 组件的视觉迁移（Phase 2）
- 设计并实现 Server Component + Client Shell 架构
- 开发 React 19 兼容的 localStorage 持久化 Hook
- 编写完整的项目文档（HANDOFF / PHASE Report / DEBUG Guide）

**技术成果**：
- 9 个组件全部交互化，2 个跨组件联动稳定运行
- localStorage 持久化方案修复 2 个 hydration bug，零 SSR 警告
- 全程零新增依赖，保持架构纯粹性
- 严格的 Git 工作流（feature branch + worktree + 原子 commit）

---

### 详细版（300 字）

**项目名称**：LifeOS - 个人生命操作系统（Personal Life OS）

**技术栈**：Next.js 16.2.6 + React 19.2.4 + TypeScript 5 + Tailwind CSS 3

**项目描述**：
LifeOS 是一款基于"航海隐喻"设计的个人人生管理仪表盘——人生是航行，目标是北极星，任务是航行日志。采用 Glassmorphism + Deep Space 视觉风格，打造沉浸式仪表盘体验。项目从 HTML 原型出发，经过 Phase 2 视觉迁移、Phase 3 交互化、Phase 4.1 状态持久化三个阶段，完整呈现一个产品级前端项目的端到端工程能力。

**主要职责**：
- **架构设计**：设计 Server Component + Client Shell 架构，保持 `app/page.tsx` 为 Server Component，单一 Client 边界管理跨组件状态
- **核心 Hook 开发**：开发 React 19 兼容的 `useLocalStorageState` hook，使用 `queueMicrotask` 绕过 React 19 严格 Lint 规则，使用 `isHydrated` ref 防止首次 mount 写入
- **跨组件联动**：实现 2 个跨组件联动（维度 → Hero Quote、任务 → StatsBar）
- **工程规范**：严格遵守 Git workflow（feature branch + worktree）、提交前 lint/build 验证、原子 commit、完整文档交付

**技术成果**：
- 9/9 Dashboard 组件交互化，2 个跨组件联动稳定运行
- localStorage 持久化方案：修复 2 个关键 hydration bug，零 SSR 警告，零 console 错误
- Phase 3 + Phase 4.1 全程零新增依赖，体现对 React/Next.js 底层的深刻理解
- 1000+ 行项目文档（HANDOFF.md / PHASE Reports / DEBUG Guide）

---

## 🇬🇧 English Version

### Concise Version (200 words)

**Project**: LifeOS - Personal Life Operating System

**Tech Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS

**Description**: A personal life management dashboard built around a nautical metaphor with a glassmorphism + deep space aesthetic. Evolved from a static HTML prototype to a fully interactive application, with 9 dashboard components, 2 cross-component linkages, and localStorage persistence — all with zero new dependencies.

**Key Responsibilities**:
- Led visual migration from HTML prototype to React components (Phase 2)
- Designed and implemented Server Component + Client Shell architecture
- Developed React 19 compliant localStorage persistence hook
- Authored comprehensive project documentation (HANDOFF / PHASE Reports / DEBUG Guide)

**Technical Achievements**:
- 9 components fully interactive with 2 stable cross-component linkages
- localStorage persistence solution fixed 2 hydration bugs with zero SSR warnings
- Zero new dependencies added across Phase 3 + Phase 4.1
- Strict Git workflow with feature branches, worktrees, and atomic commits

---

### Detailed Version (300 words)

**Project**: LifeOS - Personal Life Operating System

**Tech Stack**: Next.js 16.2.6 + React 19.2.4 + TypeScript 5 + Tailwind CSS 3

**Description**:
LifeOS is a personal life management dashboard designed around a nautical metaphor — life is a voyage, goals are the North Star, and tasks are entries in the ship's log. Built with a glassmorphism + deep space visual style for an immersive dashboard experience. The project evolved through three phases: Phase 2 (HTML to React migration), Phase 3 (interactivity), and Phase 4.1 (state persistence), demonstrating end-to-end engineering capability for a production-grade frontend project.

**Key Responsibilities**:
- **Architecture Design**: Designed Server Component + Client Shell architecture, preserving `app/page.tsx` as a Server Component with a single Client boundary managing cross-component state
- **Core Hook Development**: Built React 19 compliant `useLocalStorageState` hook, using `queueMicrotask` to bypass React 19's stricter lint rules, with `isHydrated` ref to prevent initial mount writes
- **Cross-Component Linkages**: Implemented 2 cross-component linkages (Dimension → Hero Quote, Task → StatsBar)
- **Engineering Discipline**: Followed strict Git workflow (feature branch + worktree), pre-commit lint/build verification, atomic commits, and comprehensive documentation

**Technical Achievements**:
- All 9/9 dashboard components interactive with 2 stable cross-component linkages
- localStorage persistence: fixed 2 critical hydration bugs, zero SSR warnings, zero console errors
- Zero new dependencies added across Phase 3 + Phase 4.1, demonstrating deep understanding of React/Next.js fundamentals
- Authored 1000+ lines of project documentation (HANDOFF.md / PHASE Reports / DEBUG Guide)

---

## 🎯 Customization Tips

### For Frontend Engineer Roles

Emphasize:
- React 19 compliance details
- Hydration bug debugging process
- Custom hook development
- TypeScript strict mode
- Server Component architecture

Sample bullet point:
> Built React 19 compliant `useLocalStorageState` hook using `queueMicrotask` to bypass strict ESLint rules, fixing 2 hydration bugs that caused state to revert after page refresh.

### For Full-Stack Engineer Roles

Emphasize:
- End-to-end project ownership
- Architecture decisions
- Documentation excellence
- Git workflow discipline

Sample bullet point:
> Owned end-to-end delivery of a Next.js 16 dashboard application from HTML prototype to interactive product, including architecture design, state management, persistence layer, and 1000+ lines of handoff documentation.

### For Product Engineer / PM Roles

Emphasize:
- Product thinking (nautical metaphor)
- User experience (cross-component linkages)
- Scope discipline (zero new dependencies)
- Phased delivery approach

Sample bullet point:
> Designed and shipped LifeOS in 3 phases (visual baseline → interactivity → persistence) following strict scope discipline: 9 features, 2 linkages, 0 new dependencies, demonstrating product thinking and engineering rigor.

### For Senior / Lead Roles

Emphasize:
- Architecture decisions and tradeoffs
- Technical debt management
- Mentoring potential (documentation quality)
- System thinking

Sample bullet point:
> Architected a Server Component + Client Shell pattern that preserved Next.js best practices while solving cross-component state management without introducing global state libraries (Zustand/Redux), keeping the bundle minimal and the codebase reasonable.

---

## 📋 Common Resume Formats

### Format 1: One-Liner (LinkedIn Headline)

**English**:
> Built LifeOS — a Next.js 16 + React 19 personal dashboard with 9 interactive components, 2 cross-component linkages, and localStorage persistence (zero new deps).

**Chinese**:
> 主导开发 LifeOS 个人生命操作系统（Next.js 16 + React 19），9 个交互组件 + 2 个跨组件联动 + localStorage 持久化，零新增依赖。

---

### Format 2: Bullet Point List (Resume)

**English**:
- LifeOS — Personal Life Operating System (Next.js 16 / React 19 / TypeScript)
- Architected Server Component + Client Shell pattern preserving SSR while managing cross-component state
- Developed React 19 compliant localStorage hook fixing 2 hydration bugs
- Delivered 9 interactive components and 2 cross-component linkages with zero new dependencies
- Authored 1000+ lines of handoff documentation across 4 markdown files

**Chinese**:
- LifeOS 个人生命操作系统（Next.js 16 / React 19 / TypeScript）
- 设计 Server Component + Client Shell 架构，在保持 SSR 的同时管理跨组件状态
- 开发 React 19 兼容的 localStorage Hook，修复 2 个 hydration bug
- 交付 9 个交互组件 + 2 个跨组件联动，全程零新增依赖
- 编写 1000+ 行项目文档（4 个 markdown 文件）

---

### Format 3: STAR Format (Behavioral Interview)

**Situation**:
After completing the static visual baseline (Phase 2), LifeOS needed to evolve into a fully interactive application with state persistence — without introducing complex state management libraries or breaking the Server Component architecture.

**Task**:
Add 9 component-level interactions, 2 cross-component linkages, and localStorage persistence to two key states (selected dimension, task completion), all while maintaining React 19 + Next.js 16 best practices.

**Action**:
- Designed a Client Shell pattern (`DashboardClientShell`) as a single Client boundary, preserving `app/page.tsx` as a Server Component
- Developed a custom `useLocalStorageState` hook using `queueMicrotask` to bypass React 19's stricter lint rules
- Fixed 2 hydration bugs through systematic debugging (default value overwrite + initialValue reference loop)
- Followed strict Git workflow with feature branches, worktrees, and atomic commits
- Authored comprehensive HANDOFF.md and PHASE_REPORT.md documents

**Result**:
- 9/9 Dashboard components interactive, 2 cross-component linkages stable
- localStorage persistence verified in real browser with zero hydration warnings
- Zero new dependencies added (no Zustand, Redux, or Context API)
- 1000+ lines of documentation enabling seamless handoff to next development phase

---

## 🎓 Project Context (For Interviews)

If asked "Tell me about a project you're proud of":

**Opening (30 seconds)**:
> "I built LifeOS, a personal life dashboard using Next.js 16 and React 19. What makes it interesting isn't the product itself — it's the engineering discipline. I delivered 9 interactive components, 2 cross-component linkages, and localStorage persistence with zero new dependencies, while preserving the Server Component architecture."

**Technical Deep Dive (60 seconds)**:
> "The most challenging part was the localStorage persistence. React 19 introduced a new lint rule that prohibits setState inside useEffect without proper handling. I solved this with `queueMicrotask` to defer the setState call, plus an `isHydrated` ref to prevent the initial mount from overwriting localStorage. I hit two hydration bugs along the way — the first was the default value overwriting storage on hydration, the second was `initialValue` reference change re-triggering the effect on every render. Both took systematic debugging to identify root causes rather than patch symptoms."

**Closing (30 seconds)**:
> "What I'm most proud of isn't the code — it's the documentation. I wrote 1000+ lines across HANDOFF.md, PHASE Reports, and a debug guide, so any developer could pick up the project and continue without context loss. That discipline is what separates a project from a product."

---

**These descriptions are calibrated for honesty: every claim is backed by actual deliverables documented in HANDOFF.md and PHASE Reports.**
