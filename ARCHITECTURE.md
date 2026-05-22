# ARCHITECTURE.md - lifeos 技术架构文档

**Version**: 1.0  
**Last Updated**: 2026-05-21  
**Author**: Frontend Agent

---

## 1. 技术栈选择

### 核心框架

#### Next.js 14 (App Router)
**选择理由**：
- **App Router**：更现代的路由系统，支持 Server Components 和 Streaming
- **性能优化**：自动代码分割、图片优化、字体优化
- **开发体验**：Fast Refresh、TypeScript 支持、内置 ESLint
- **部署简单**：Vercel 一键部署，零配置

**替代方案**：
- Vite + React Router：更轻量，但缺少 Next.js 的优化和约定
- Remix：性能更好，但生态不如 Next.js 成熟

#### TypeScript (严格模式)
**选择理由**：
- **类型安全**：编译时捕获错误，减少运行时 Bug
- **代码提示**：IDE 智能提示，提升开发效率
- **重构友好**：重命名、移动文件时自动更新引用
- **文档作用**：类型定义即文档，减少注释

**配置**：
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### Tailwind CSS
**选择理由**：
- **快速开发**：Utility-first，无需写 CSS 文件
- **设计系统**：通过 `tailwind.config.ts` 统一管理 Design Tokens
- **响应式**：`sm:` `md:` `lg:` 前缀轻松实现响应式
- **性能**：PurgeCSS 自动移除未使用的样式

**替代方案**：
- CSS Modules：更传统，但需要写更多 CSS
- Styled Components：运行时开销，不适合性能敏感场景

### 状态管理

#### Zustand
**选择理由**：
- **轻量**：< 1KB，比 Redux 小 10 倍
- **简单**：无需 Provider、Action、Reducer，直接定义 Store
- **TypeScript 友好**：类型推导完美
- **持久化**：内置 `persist` 中间件，轻松实现 LocalStorage 持久化

**示例**：
```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LifeOSStore {
  user: User | null;
  tasks: Task[];
  addTask: (task: Task) => void;
}

export const useLifeOSStore = create<LifeOSStore>()(
  persist(
    (set) => ({
      user: null,
      tasks: [],
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    }),
    { name: 'lifeos-storage' }
  )
);
```

**替代方案**：
- Redux Toolkit：功能强大，但对于个人项目过于复杂
- Jotai/Recoil：原子化状态，但学���曲线陡峭

### UI 组件

#### Framer Motion
**选择理由**：
- **声明式动画**：`<motion.div animate={{ x: 100 }} />`
- **手势支持**：拖拽、悬停、点击等手势
- **布局动画**：自动处理布局变化的动画
- **性能优化**：使用 GPU 加速，60fps 流畅动画

#### Recharts
**选择理由**：
- **React 原生**：基于 React 组件，易于集成
- **响应式**：自动适配容器大小
- **可定制**：支持自定义样式和交互
- **文档完善**：示例丰富，易于上手

**替代方案**：
- Chart.js：更轻量，但不是 React 原生
- D3.js：功能最强大，但学习曲线陡峭

#### Radix UI
**选择理由**：
- **无障碍**：内置 ARIA 标签，符合 WCAG 标准
- **无样式**：Headless 组件，完全自定义样式
- **键盘导航**：支持键盘操作
- **组件丰富**：Dialog、Dropdown、Tooltip 等

#### Lucide React
**选择理由**：
- **图标丰富**：1000+ 图标
- **Tree-shakable**��只打包使用的图标
- **一致性**：所有图标风格统一
- **可定制**：支持自定义大小、颜色、描边宽度

### 开发工具

#### ESLint + Prettier
**选择理由**：
- **代码规范**：统一代码风格，减少 Code Review 争议
- **自动修复**：`eslint --fix` 自动修复大部分问题
- **集成 IDE**：VSCode 实时提示错误

**配置**：
```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error"
  }
}
```

#### Husky + lint-staged
**选择理由**：
- **提交前检查**：防止提交有问题的代码
- **只检查暂存文件**：提升检查速度
- **自动修复**：提交前自动运行 `prettier --write`

---

## 2. 项目目录结构

```
lifeos/
├── CLAUDE.md                      # 项目配置文档
├── TASKS.md                       # 任务清单
├── ARCHITECTURE.md                # 本文件
├── README.md                      # 项目介绍
├── package.json                   # 依赖管理
├── tsconfig.json                  # TypeScript 配置
├── tailwind.config.ts             # Tailwind CSS 配置
├── next.config.js                 # Next.js 配置
├── .eslintrc.json                 # ESLint 配置
├── .prettierrc                    # Prettier 配置
│
├── docs/                          # 文档目录
│   ├── PRD.md                    # 产品需求文档
│   ├── DESIGN_SYSTEM.md          # 设计系统
│   └── API.md                    # API 文档
│
├── public/                        # 静态资源
│   ├── images/                   # 图片
│   │   └── sailing-ship.jpg     # 帆船背景图
│   ├── fonts/                    # 字体
│   └── favicon.ico               # 网站图标
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # 根布局
│   │   ├── page.tsx             # 首页
│   │   ├── dimension/           # 维度详情页
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── goal/                # 目标详情页
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── globals.css          # 全局样式
│   │
│   ├── components/               # 组件库
│   │   ├── ui/                  # 基础 UI 组件
│   │   │   ├── GlassCard.tsx   # 玻璃拟态卡片
│   │   │   ├── Button.tsx      # 按钮
│   │   │   ├── Input.tsx       # 输入框
│   │   │   ├── CircularProgress.tsx  # 圆形进度环
│   │   │   ├── NavigationItem.tsx    # 导航项
│   │   │   ├── Dialog.tsx      # 弹窗
│   │   │   └── Tooltip.tsx     # 提示框
│   │   │
│   │   ├── features/            # 功能组件
│   │   │   ├── SailingStatus.tsx     # 航行状态
│   │   │   ├── CoreNavigation.tsx    # 核心导航
│   │   │   ├── Toolbox.tsx           # 工具箱
│   │   │   ├── DimensionCards.tsx    # 六大维度卡片
│   │   │   ├── StatsBar.tsx          # 数据统计栏
│   │   │   ├── TodayTasks.tsx        # 今日任务
│   │   │   ├── NorthStar.tsx         # 人生北极星
│   │   │   └── Milestones.tsx        # 近期里程碑
│   │   │
│   │   └── layouts/             # 布局组件
│   │       ├── MainLayout.tsx   # 主布局（三栏）
│   │       ├── LeftSidebar.tsx  # 左侧栏
│   │       ├── CenterArea.tsx   # 中央区域
│   │       └── RightSidebar.tsx # 右侧栏
│   │
│   ├── lib/                     # 工具函数
│   │   ├── utils.ts            # 通用工具函数
│   │   ├── cn.ts               # classnames 合并
│   │   ├── date.ts             # 日期处理
│   │   └── storage.ts          # LocalStorage 封装
│   │
│   ├── stores/                  # Zustand 状态管理
│   │   └── lifeosStore.ts      # 主 Store
│   │
│   ├── types/                   # TypeScript 类型定义
│   │   └── index.ts            # 所有类型定义
│   │
│   ├── styles/                  # 样式文件
│   │   ├── tokens.ts           # Design Tokens
│   │   └── animations.css      # 自定义动画
│   │
│   └── hooks/                   # 自定义 Hooks
│       ├── useLocalStorage.ts  # LocalStorage Hook
│       └── useMediaQuery.ts    # 响应式 Hook
│
└── tests/                       # 测试文件
    ├── unit/                    # 单元测试
    └── e2e/                     # 端到端测试
```

---

## 3. 核心组件清单

### 基础 UI 组件（`src/components/ui/`）

#### GlassCard
**功能**：玻璃拟态卡片，用于所有卡片容器

**Props**：
```typescript
interface GlassCardProps {
  children: React.ReactNode;
  blur?: 'sm' | 'md' | 'lg';  // 模糊程度
  className?: string;
  onClick?: () => void;
}
```

**样式**：
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
```

#### CircularProgress
**功能**：圆形进度环，用于航行状态卡片

**Props**：
```typescript
interface CircularProgressProps {
  progress: number;  // 0-100
  size?: number;     // 直径（px）
  strokeWidth?: number;  // 描边宽度（px）
  color?: string;    // 进度条颜色
  label?: string;    // 中心文字
}
```

**实现**：
- 使用 SVG `<circle>` 元素
- `stroke-dasharray` 和 `stroke-dashoffset` 实现进度
- Framer Motion 实现动画

#### Button
**功能**：按钮组件

**Variants**：
- `primary`：主要按钮（橙色背景）
- `secondary`：次要按钮（透明背景 + 边框）
- `ghost`：幽灵按钮（无背景无边框）

**Props**：
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}
```

### 功能组件（`src/components/features/`）

#### SailingStatus
**功能**：航行状态卡片（左侧栏顶部）

**组成**：
- 圆形进度环（76% 人生进度）
- 三个子指标：
  - 已航行：X 天
  - 剩余时间：Y 天
  - 累计成长：Z 分

**数据来源**：
```typescript
const user = useLifeOSStore((state) => state.user);
const progress = calculateLifeProgress(user.birthday, user.lifeExpectancy);
```

#### DimensionCards
**功能**：六大维度卡片（中央区域）

**布局**：3x2 网格

**维度列表**：
1. 存在意义（Meaning）
2. 能力成长（Growth）
3. 财富安全（Wealth）
4. 探索世界（Exploration）
5. 关系连接（Connection）
6. 身心状态（Wellbeing）

**交互**：
- 悬停：卡片上浮 + 阴影加深
- 点击：跳转到维度详情页

#### TodayTasks
**功能**：今日任务清单（右侧栏）

**功能**：
- 显示今日任务列表
- 勾选任务（播放完成动画）
- 添加新任务
- 删除任务

**数据来源**：
```typescript
const tasks = useLifeOSStore((state) => 
  state.tasks.filter(task => isToday(task.dueDate))
);
```

---

## 4. 数据流设计

### Zustand Store 结构

```typescript
interface LifeOSStore {
  // 用户信息
  user: User | null;
  setUser: (user: User) => void;
  
  // 六大维度
  dimensions: Dimension[];
  updateDimension: (id: string, progress: number) => void;
  
  // 目标
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;
  
  // 任务
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  
  // 里程碑
  milestones: Milestone[];
  addMilestone: (milestone: Milestone) => void;
  completeMilestone: (id: string) => void;
  
  // 人生北极星
  northStar: string;
  setNorthStar: (value: string) => void;
  
  // 数据导出/导入
  exportData: () => string;
  importData: (data: string) => void;
}
```

### 数据持久化

使用 Zustand 的 `persist` 中间件：

```typescript
export const useLifeOSStore = create<LifeOSStore>()(
  persist(
    (set, get) => ({
      // ... store 实现
    }),
    {
      name: 'lifeos-storage',  // LocalStorage key
      version: 1,              // 版本号（用于迁移）
    }
  )
);
```

### 数据流向

```
用户操作 → 组件事件 → Zustand Action → Store 更新 → LocalStorage 持久化
                                              ↓
                                         组件重新渲染
```

---

## 4.1 核心数据模型

### Mock 数据管理规范

所有 mock 数据必须集中管理在 `src/data/mockLifeData.ts`，不能散落在组件中。

**数据结构要求**：
- 字段要接近未来真实数据库结构
- 使用 TypeScript 接口定义类型
- 数据要真实、完整、可信

**示例**：

```typescript
// src/data/mockLifeData.ts

import { LifeDimension, Task, Milestone, SailingStatus, NorthStar } from '@/types/lifeos';

// 六大维度 Mock 数据
export const mockDimensions: LifeDimension[] = [
  {
    id: 'meaning',
    name: '存在意义',
    subtitle: '探索生命的意义与价值',
    icon: 'compass',
    color: '#8b5cf6',
    progress: 68,
    description: '通过哲学思考、价值观澄清和人生使命探索，找到生命的意义',
    goals: ['goal-1', 'goal-2']
  },
  {
    id: 'growth',
    name: '能力成长',
    subtitle: '持续学习与精进，成为更好的自己',
    icon: 'trending-up',
    color: '#3b82f6',
    progress: 72,
    description: '通过阅读、学习、实践和反思，不断提升个人能力',
    goals: ['goal-3', 'goal-4']
  },
  // ... 其他维度
];

// 今日任务 Mock 数据
export const mockTodayTasks: Task[] = [
  {
    id: 'task-1',
    title: '完成工作汇报文档',
    completed: false,
    priority: 'high',
    goalId: 'goal-3',
    dueDate: new Date('2026-05-21')
  },
  {
    id: 'task-2',
    title: '阅读《人生算法》第2章',
    completed: true,
    priority: 'medium',
    goalId: 'goal-1',
    completedAt: new Date('2026-05-21 10:30')
  },
  // ... 其他任务
];

// 航行状态 Mock 数据
export const mockSailingStatus: SailingStatus = {
  lifeProgress: 76,
  age: 28,
  lifeExpectancy: 80,
  sailingDays: 10227,
  placesExplored: 36,
  challengesOvercome: 128,
  peopleInspired: 56
};

// 人生北极星 Mock 数据
export const mockNorthStar: NorthStar = {
  id: 'north-star-1',
  title: '成为有影响力的创造者',
  description: '通过创造有价值的产品和内容，帮助更多人实现自我成长',
  principles: [
    '保持好奇心，持续学习',
    '追求卓越，注重细节',
    '真诚待人，建立信任',
    '长期主义，延迟满足'
  ]
};

// 近期里程碑 Mock 数据
export const mockMilestones: Milestone[] = [
  {
    id: 'milestone-1',
    goalId: 'goal-3',
    title: '完成项目交付',
    completed: false,
    order: 1
  },
  {
    id: 'milestone-2',
    goalId: 'goal-4',
    title: '获得专业认证',
    completed: false,
    order: 2
  },
  // ... 其他里程碑
];
```

---

## 4.2 数据模型定义

```typescript
// 人生维度
interface LifeDimension {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  color: string;
  progress: number; // 0-100
  description: string;
  goals: Goal[]; // 关联的目标
}

// 目标
interface Goal {
  id: string;
  title: string;
  description: string;
  dimensionId: string; // 所属维度
  status: 'active' | 'completed' | 'archived';
  progress: number; // 0-100
  startDate: Date;
  targetDate: Date;
  milestones: Milestone[]; // 里程碑
  habits: Habit[]; // 关联的习惯
}

// 里程碑
interface Milestone {
  id: string;
  goalId: string;
  title: string;
  completed: boolean;
  completedAt?: Date;
  order: number;
}

// 习惯
interface Habit {
  id: string;
  title: string;
  goalId?: string; // 可选：关联的目标
  frequency: 'daily' | 'weekly' | 'monthly';
  streak: number; // 连续天数
  lastCompletedAt?: Date;
}

// 任务
interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  goalId?: string; // 可选：关联的目标
  dueDate?: Date;
  completedAt?: Date;
}

// 航行状态
interface SailingStatus {
  lifeProgress: number; // 人生进度 0-100
  age: number; // 当前年龄
  lifeExpectancy: number; // 预期寿命
  sailingDays: number; // 航行天数
  placesExplored: number; // 探索地点
  challengesOvercome: number; // 克服风浪
  peopleInspired: number; // 启发他人
}

// 人生北极星（价值观）
interface NorthStar {
  id: string;
  title: string;
  description: string;
  principles: string[]; // 核心原则
}
```

### 数据关系

```
LifeDimension (1) ----< (N) Goal
Goal (1) ----< (N) Milestone
Goal (1) ----< (N) Habit
Goal (1) ----< (N) Task
```

### Mock 数据管理

```typescript
// src/data/mockData.ts
export const mockDimensions: LifeDimension[] = [...];
export const mockGoals: Goal[] = [...];
export const mockTasks: Task[] = [...];
export const mockSailingStatus: SailingStatus = {...};
export const mockNorthStar: NorthStar = {...};
```

---

## 5. Design Tokens 系统

### 色彩（`src/styles/tokens.ts`）

```typescript
export const colors = {
  // 主色（深蓝色）
  primary: {
    50: '#e6f0ff',
    100: '#b3d4ff',
    200: '#80b8ff',
    300: '#4d9cff',
    400: '#1a80ff',
    500: '#0066e6',  // 主色
    600: '#0052b3',
    700: '#003d80',
    800: '#00294d',
    900: '#0a1628',  // 背景色
  },
  
  // 辅助色（浅蓝色）
  secondary: {
    500: '#3b82f6',
  },
  
  // 强调色（橙色）
  accent: {
    500: '#f59e0b',
  },
  
  // 中性色
  neutral: {
    50: '#ffffff',
    100: 'rgba(255, 255, 255, 0.9)',
    200: 'rgba(255, 255, 255, 0.7)',
    300: 'rgba(255, 255, 255, 0.5)',
    400: 'rgba(255, 255, 255, 0.3)',
    500: 'rgba(255, 255, 255, 0.1)',
  },
};
```

### 字体

```typescript
export const fonts = {
  sans: ['Inter', 'Source Han Sans CN', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
};

export const fontSizes = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',  // Body 最小字号
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
};
```

### 间距（8pt 网格）

```typescript
export const spacing = {
  0: '0px',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  8: '64px',
  10: '80px',
  12: '96px',
};
```

### 圆角

```typescript
export const borderRadius = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  full: '9999px',
};
```

### 阴影

```typescript
export const shadows = {
  sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
  md: '0 4px 16px rgba(0, 0, 0, 0.2)',
  lg: '0 8px 32px rgba(0, 0, 0, 0.3)',
  glass: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
};
```

---

## 6. 响应式策略

### 断点

```typescript
export const breakpoints = {
  sm: '640px',   // 手机
  md: '768px',   // 平板
  lg: '1024px',  // 桌面
  xl: '1280px',  // 大屏
  '2xl': '1536px',  // 超大屏
};
```

### 布局策略

#### 桌面端（≥ 1024px）
- 三栏布局：左侧栏 25% + 中央区域 50% + 右侧栏 25%
- 六大维度卡片：3x2 网格

#### 平板端（768px - 1024px）
- 两栏布局：左侧栏收起（汉堡菜单）+ 中央区域 60% + 右侧栏 40%
- 六大维度卡片：2x3 网格

#### 手机端（< 768px）
- 单栏布局：全屏显示
- 底部导航栏（5个图标）
- 六大维度卡片：1x6 列表

### 响应式组件示例

```typescript
export function MainLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  
  if (isMobile) {
    return <MobileLayout>{children}</MobileLayout>;
  }
  
  if (isTablet) {
    return <TabletLayout>{children}</TabletLayout>;
  }
  
  return <DesktopLayout>{children}</DesktopLayout>;
}
```

---

## 7. 性能优化策略

### 代码分割

```typescript
// 动态导入重组件
const DimensionDetailPage = dynamic(() => import('@/components/features/DimensionDetail'), {
  loading: () => <LoadingSpinner />,
});
```

### 图片优化

```typescript
import Image from 'next/image';

<Image
  src="/images/sailing-ship.jpg"
  alt="Sailing Ship"
  fill
  priority
  quality={90}
  placeholder="blur"
/>
```

### 懒加载

```typescript
// 使用 Intersection Observer 懒加载卡片
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

return (
  <div ref={ref}>
    {inView && <DimensionCard />}
  </div>
);
```

### 性能模式

```typescript
const [performanceMode, setPerformanceMode] = useState(false);

// 性能模式下关闭动画和模糊效果
<GlassCard blur={performanceMode ? 'none' : 'md'}>
  <motion.div animate={performanceMode ? {} : { y: -10 }}>
    {children}
  </motion.div>
</GlassCard>
```

---

## 8. 安全和隐私

### 数据存储
- **LocalStorage**：所有数据存储在本地，不上传到服务器
- **数据加密**：V2 考虑使用 Web Crypto API 加密敏感数据

### 数据导出
- **格式**：JSON
- **内容**：所有用户数据（user, dimensions, goals, tasks, milestones, northStar）
- **隐私**：导出文件仅包含用户数据，不包含任何标识信息

### 数据导入
- **验证**：导入前验证 JSON 格式和数据结构
- **备份**：导入前自动备份当前数据
- **回滚**：导入失败时自动恢复备份

---

## 9. 测试策略

### 单元测试
- **工具**：Jest + React Testing Library
- **覆盖率目标**：≥ 80%
- **测试内容**：
  - 工具函数（`lib/utils.ts`）
  - Zustand Store（`stores/lifeosStore.ts`）
  - 基础 UI 组件（`components/ui/`）

### 集成测试
- **工具**：Playwright
- **测试内容**：
  - 用户流程（添加任务 → 完成任务 → 查看统计）
  - 数据持久化（刷新页面后数据不丢失）
  - 响应式布局（桌面/平板/手机）

### 性能测试
- **工具**：Lighthouse
- **目标**：
  - Performance ≥ 90
  - Accessibility ≥ 90
  - Best Practices ≥ 90
  - SEO ≥ 90

---

## 10. 部署策略

### Vercel 部署
- **自动部署**：推送到 `main` 分支自动部署
- **预览部署**：每个 PR 自动生成预览链接
- **环境变量**：通过 Vercel Dashboard 配置

### 域名配置
- **主域名**：lifeos.vercel.app（免费）
- **自定义域名**：V2 考虑购买独立域名

### 监控和日志
- **错误监控**：V2 考虑集成 Sentry
- **分析**：V2 考虑集成 Vercel Analytics

---

## 11. 未来扩展

### V2.0 功能
- **云同步**：Supabase 或 Firebase
- **AI 推荐**：基于历史数据推荐目标和任务
- **移动端 App**：React Native
- **数据分析**：BI 级别的分析和可视化
- **社交功能**：分享目标、互相激励

### 技术债务
- **测试覆盖率**：V1 专注核心功能，测试覆盖率可能不足 80%
- **无障碍**：V1 基础无障碍支持，V2 完善 ARIA 标签和键盘导航
- **国际化**：V1 仅支持中文，V2 支持多语言

---

## 12. 参考资料

### 设计参考
- [Glassmorphism UI](https://ui.glass/)
- [Dribbble - Dashboard Design](https://dribbble.com/tags/dashboard)
- [Awwwards - Animation](https://www.awwwards.com/)

### 技术文档
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)

### 书籍
- 《人生算法》：六大维度的理论基础
- 《掌控习惯》：习惯系统的设计灵感
- 《Refactoring UI》：UI 设计原则

---

## 附录：依赖列表

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^10.16.0",
    "zustand": "^4.4.0",
    "recharts": "^2.10.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-tooltip": "^1.0.7",
    "lucide-react": "^0.300.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0",
    "date-fns": "^3.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.0.0",
    "eslint-config-prettier": "^9.1.0",
    "prettier": "^3.1.0",
    "husky": "^8.0.3",
    "lint-staged": "^15.2.0",
    "@playwright/test": "^1.40.0",
    "jest": "^29.7.0",
    "@testing-library/react": "^14.1.0",
    "@testing-library/jest-dom": "^6.1.0"
  }
}
```
