# CLAUDE.md

## 项目概述

**lifeos** - 基于航海隐喻的个人人生操作系统

- **定位**：个人使用的精品级 Life OS 系统
- **用户**：全栈开发者，注重代码质量和架构设计
- **视觉风格**：Glassmorphism + Deep Space Theme（深蓝色星空背景 + 半透明玻璃拟态卡片）
- **核心隐喻**：人生如航海，目标是北极星，任务是航行日志

## 架构

### 五层工作架构
```
Agent层 → 分发层 → Skill层 → Hook层 → Memory层
```

- **Agent 是角色**，Skill 是能力包，必须在指令中明确要求调用
- **主 Claude 只做分发和审查，不扮演 Agent**
- 具���工���必须并行派发给独立 Agent 执行

### 常驻 Agent 团队
- **Product Agent**：需求分析、PRD 撰写、优先级判断
- **UX/UI Agent**：视觉设计、交互设计（必须同时调用 power-design + web-design-engineer）
- **Frontend Agent**：Next.js 开发、组件实现
- **Backend Agent**：API 设计、数据持久化
- **QA Agent**：测试用例、质量把关
- **Security Agent**：安全审查、敏感数据处理
- **Reality Check Agent**：可行性评估、技术债务预警

## 技术栈

### 核心框架
- **Next.js 14** (App Router)
- **TypeScript** (严格模式)
- **Tailwind CSS** (设计系统)
- **Zustand** (状态管理)

### UI 组件
- **Framer Motion** (动画)
- **Recharts** (数据可视化)
- **Radix UI** (无障碍组件基础)
- **Lucide React** (图标)

### 开发工具
- **ESLint** + **Prettier** (代码规范)
- **Husky** + **lint-staged** (提交前检查)
- **TypeScript** (类型检查)

### 数据持久化
- **LocalStorage** (MVP 阶段)
- **IndexedDB** (未来扩展)

## 开发规范

### MVP 边界（第一版不做什么）

**第一阶段只做**：
- ✅ 个人单用户 Dashboard
- ✅ 本地状态管理（Zustand + LocalStorage）
- ✅ 静态数据展示（mockData.ts）
- ✅ 精致的 UI 和交互动效

**第一阶段不做**：
- ❌ 用户登录/注册系统
- ❌ 多用户支持
- ❌ 云端数据同步
- ❌ 后端 API 和数据库
- ❌ 复杂的权限系统
- ❌ AI 总结和智能推荐
- ❌ 移动端 App（只做响应式 Web）

**演进路径**：
- V1.0：静态数据 + 本地存储 + 精致 UI
- V2.0：接入 Supabase / Notion API
- V3.0：多用户 + 云同步 + AI 功能

### 开发原则

1. **先静态，后动态**
   - 第一阶段所有数据使用 `src/data/mockData.ts` 管理
   - 确保 UI、信息架构、交互闭环成立后，再逐步接入数据库
   - 不要一开始就陷入后端复杂度

2. **先完成，再完美**
   - 优先完成核心功能的可用版本
   - 不要在第一版就追求所有细节完美
   - 通过迭代逐步提升质量

3. **先验证，再扩展**
   - 用 HTML 原型验证视觉效果
   - 用 MVP 验证核心价值
   - 确认方向正确后再扩展功能

---

## 项目最高原则

LifeOS 不是普通任务管理工具，而是一个以"航海隐喻"为核心的人生仪表盘。

任何新增功能都必须回答三个问题：
1. 它是否强化"船长 / 航行 / 北极星 / 里程碑"的隐喻？
2. 它是否提升用户对人生状态的掌控感？
3. 它是否能在首页 Dashboard 中被优雅呈现？

如果答案是否定的，不要加入。

---

## Cinematic Dashboard 比例策略

LifeOS 首页采用 **Cinematic Dashboard** 设计理念，不是传统的 16:9 横屏网页。

### 设计基准

- 原概念图尺寸：1198 × 1313（宽:高 ≈ 0.91:1）
- 这是一个偏竖向的海报比例，类似电影海报或驾驶舱仪表盘
- 允许轻微纵向滚动（1.15～1.25 屏高度）

### 实现策略

```css
.container {
  min-height: 115vh;
  max-height: 125vh;
}

/* 固定高度策略（更稳定） */
@media (min-width: 1440px) {
  .container {
    min-height: 1320px; /* 约 1.15 屏（基于 1152px 浏览器高度） */
    max-height: 1440px; /* 约 1.25 屏 */
  }
}
```

### 视觉层级

1. **顶部栏**（64px）：导航和用户信息
2. **中央上半部分**：背景帆船 + 主文案（约 40% 高度）
3. **左右侧栏**：信息卡片（中上区域，不撑到底部）
4. **页面下方**：六大维度卡片（横向排列）
5. **最底部**：航行数据统计栏

### 为什么不是 1 屏？

- 原概念图比 16:9 屏幕"高 14%"
- 强行压缩会破坏视觉层级和卡片可读性
- 1.2 屏高度是最佳平衡点：保持完整视觉���允���轻微滚动

### 不要做什么

- ❌ 不要为了"无滚动"强行压缩卡片和字体
- ❌ 不要把所有内容塞进 100vh
- ❌ 不要删减模块来适应 1 屏
- ✅ 允许轻微滚动，保持视觉完整性

---

## 防翻车规则

### 1. 信息舒适度优先于视觉相似度

- 页面一眼能看懂当前人生状态、今日任务、六大维度
- 视觉层级清楚：主视觉 > 今日任务 > 六大维度 > 统计数据
- 卡片不拥挤，文字在 1440px 下不小于 14px
- 中央帆船图不能压过功能信息

### 2. 首页优先于功能页

- Phase 2-3 先把 Dashboard 做到精品，再扩展其他页面
- Dashboard 是 LifeOS 的核心展示面和个人作品集亮点
- 如果首页完成度高，项目马上就有展示价值

### 3. Mock 数据要像真实数据

- 所有 mock 数据集中管理在 `src/data/mockLifeData.ts`
- 字段要接近未来真实数据库结构
- 这样后面接 Supabase / LocalStorage / Notion 都不会推倒重来

### 4. 先不要做太复杂的动画

- 可以做：圆形进度环、卡片 hover、星空轻微漂浮
- 不要做：复杂 3D 船体动画、大量粒子系统、真实天气 API、复杂时间轴动画、页面切换大动画、AI 自动总结
- 先把"静态精品感"做出来

### 5. 六大维度卡片要有统一的数据逻辑

- 每个维度都保留 4 个字段：id、title、subtitle、score、trend、linkedGoals
- 未来可以让每个维度自动关联目标、习惯、任务和成长记录

### 6. 不要扩大需求

- 第一版目标：做出一个极具完成度的 LifeOS 首页 Dashboard
- 让别人一打开就觉得：这个人有产品审美、有系统思维、有前端工程能力
- 不要追求"人生操作系统"的完整性

### 7. 保持克制

- 不要添加复杂粒子动画、3D 动画、天气 API、登录系统、数据库
- 重点打磨：玻璃拟态、三栏布局、圆形进度环、中央帆船主视觉、六大维度卡片
- 字体可读性优先，桌面端文字不得过小

### 任务级别判断

#### L1 小改动
- **范围**：限单文件、纯样式调整、文案修改
- **流程**：直接改 → build/lint → commit
- **禁止**：重构、新依赖、改数据结构

#### L2 功能模块
- **范围**：单个功能模块（如"习惯打卡组件"）
- **流程**：建 worktree → 写简短 SPEC → 开发 → QA + Reviewer → 单模块单 commit
- **要求**：功能完整、测试通过、文档更新

#### L3 项目级
- **范围**：多模块联动、架构调整、新页面
- **流程**：Phase 0 采访生成 SPEC → 用户确认 → 新会话执行
- **原型策略**：先 HTML 原型验证视觉效果，满意后移植到 Next.js

### 铁律

#### 不要做
- ❌ 不要扩大需求（用户说做 A，你做了 A+B+C）
- ❌ 不要顺手重构（改 bug 时重写整个文件）
- ❌ 不要吞错误（`.catch(() => null)` 或空 catch 块）
- ❌ 不要泄露 stack trace（错误响应只返回用户友好信息）
- ❌ 不要在 main/master 分支直接开发
- ❌ 不要新增依赖除非明确同意

#### 必须做
- ✅ 开工前确认 branch（L2/L3 必须 worktree）
- ✅ API key/token/password 只进环境变量
- ✅ 提交前必须 `npm run lint && npm run build`
- ✅ 完成后更新 TASKS.md
- ✅ L2/L3 完成后写 HANDOFF.md

### 代码质量标准

#### TypeScript
```typescript
// ✅ 好的
interface Goal {
  id: string;
  title: string;
  progress: number;
  deadline: Date | null;
}

// ❌ 坏的
const goal: any = { ... };
```

#### 组件设计
```typescript
// ✅ 好的：单一职责、类型安全、可测试
interface GlassCardProps {
  children: React.ReactNode;
  blur?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GlassCard({ children, blur = 'md', className }: GlassCardProps) {
  return (
    <div className={cn('glass-card', `blur-${blur}`, className)}>
      {children}
    </div>
  );
}

// ❌ 坏的：职责混乱、类型不明确
function Card(props: any) {
  // 既做样式又做数据获取又做状态管理
}
```

#### 错误处理
```typescript
// ✅ 好的
try {
  await saveGoal(goal);
} catch (error) {
  console.error('Failed to save goal:', error);
  toast.error('保存失败，请重试');
  // 记录到错误监控服务
}

// ❌ 坏的
try {
  await saveGoal(goal);
} catch {}  // 吞掉错误
```

## 提交前检查清单

```bash
# 1. 类型检查
npm run type-check

# 2. 代码规范
npm run lint

# 3. 构建测试
npm run build

# 4. 运行测试（如果有）
npm run test

# 5. 确认改动
git diff

# 6. 提交
git add .
git commit -m "feat: 添加习惯打卡组件"
```

## 设计规范

### 20条设计原则（power-design）
1. **Body 字号 ≥ 24px**（桌面端）
2. **8pt 网格系统**（所有尺寸是 8 的倍数）
3. **60-30-10 配色法则**（主色 60% + 辅助色 30% + 强调色 10%）
4. **留白 ≥ 40%**（避免拥挤）
5. **对比度 ≥ 4.5:1**（WCAG AA 标准）

### Glassmorphism 规范
```css
/* 玻璃拟态卡片 */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* 深色太空背景 */
.space-bg {
  background: linear-gradient(180deg, #0a1628 0%, #1a2744 100%);
}
```

## 项目结构

```
lifeos/
├── CLAUDE.md                 # 本文件
├── TASKS.md                  # 任务清单
├── ARCHITECTURE.md           # 技术架构
├── docs/
│   ├── PRD.md               # 产品需求文档
│   ├── DESIGN_SYSTEM.md     # 设计系统
│   └── API.md               # API 文档
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # 组件库
│   │   ├── ui/             # 基础 UI 组件
│   │   ├── features/       # 功能组件
│   │   └── layouts/        # 布局组件
│   ├── lib/                # 工具函数
│   ├── stores/             # Zustand 状态管理
│   ├── types/              # TypeScript 类型定义
│   └── styles/             # 全局样式
├── public/                  # 静态资源
└── tests/                   # 测试文件
```

## 工作流程

### Phase 0：项目规划（本阶段）
- [x] 创建 CLAUDE.md
- [x] 创建 docs/PRD.md
- [x] 创建 TASKS.md
- [x] 创建 ARCHITECTURE.md
- [ ] 用户确认规划

### Phase 1：HTML 原型验证
- 独立 HTML 文件验证视觉效果
- 不依赖 Next.js，纯 HTML + CSS + Vanilla JS
- 确认玻璃拟态效果、动画、响应式
- 用户满意后进入 Phase 2

### Phase 2：Next.js 基础框架
- 初始化 Next.js 项目
- 配置 Tailwind CSS + TypeScript
- 搭建基础组件库（GlassCard、Button、Input 等）
- 实现设计系统（Design Tokens）

### Phase 3：核心功能开发
- 左侧栏：航行状态 + 核心导航 + 工具箱
- 中央区域：六大维度卡片 + 数据统计
- 右侧栏：今日任务 + 人生北极星 + 近期里程碑
- 数据持久化（LocalStorage）

### Phase 4：视觉增强和优化
- 动画效果（Framer Motion）
- 响应式适配（桌面/平板/手机）
- 性能优化（懒加载、代码分割）
- 无障碍优化（ARIA 标签、键盘导航）

## 记住

> **真实数据 + 极致克制 > 炫技特效**

- 功能完整 > 功能多
- 代码质量 > 开发速度
- 用户体验 > 技术炫耀
- 可维护性 > 一次性实现

## 联系方式

- **项目负责人**：张米杨（MagicY）
- **技术栈**：Next.js 14 + TypeScript + Tailwind CSS
- **开发工具**：Claude Code（重度用户）

---

## Phase 2 经验教训：HTML 原型迁移到 Next.js

### 核心错误

1. **修改了错误的文件**
   - HTML 原型（`prototype/`）一直是正确的视觉基准
   - `localhost:3000` 显示的是 Next.js 版本（`web/`）
   - 我一直在修改 `prototype/styles.css`，但 `localhost:3000` 根本不读取这个文件
   - **教训**：先确认用户看的是哪个版本，再修改对应的文件

2. **没有深度对比 HTML 原型的实际 CSS**
   - 凭感觉用 Tailwind 重写布局，导致多个关键参数不一致
   - 例如：宽度（1920px vs 1440px）、列宽（25% vs 320px）、间距（18px vs 24px）
   - **教训**：逐行对比 HTML 原型的 CSS，不要凭感觉写代码

3. **过度微调而不是从根本上重建**
   - Phase 2.6、2.7、2.8 都失败了，每次都是微调现有代码
   - 没有找到根本原因，只是治标不治本
   - **教训**：如果修复失败 2 次，必须停止微调，从根本上重建

4. **一开始就组件化**
   - 过早拆分成 React 组件，导致布局系统崩坏
   - 组件化后很难追踪 CSS 是否正确应用
   - **教训**：先确保视觉一致，再组件化

### 成功经验：Phase 2.9 的正确做法

**迁移流程**：
1. **完整阅读 HTML 原型**：读取 `prototype/index.html` 和 `prototype/styles.css` 的完整内容
2. **复制 HTML 结构**：把 HTML 原型的主体结构复制到 `app/page.tsx`，保持相同的 DOM 层级和 class 名称
3. **迁移关键 CSS**：把 HTML 原型的 CSS 完整迁移到 `app/globals.css`，不做任何优化或重构
4. **验证视觉一致性**：运行 `npm run lint` 和 `npm run build`，确保编译成功
5. **组件化拆分**：视觉一致后，再逐步拆分成 React 组件

**关键原则**：
- 不要凭感觉用 Tailwind 重写，要逐行迁移 HTML 和 CSS
- 不要一开始就组件化，先确保视觉一致
- 不要优化或重构 CSS，先确保视觉一致
- 不要自评"已完成"，必须等待用户验证

**结果**：
- Phase 2.9 一次成功，视觉完全一致
- `npm run lint` 和 `npm run build` 都通过
- 用户验收通过，背景图片也成功替换

---

## Phase 3 原则：添加交互功能

### Phase 3 目标
在 Phase 2 的基础上添加基础交互功能，让 Dashboard 从静态展示变成可交互的应用。

### Phase 3 原则
1. **不引入 Zustand**：Phase 3 只做基础交互，不引入复杂状态管理
2. **不引入 LocalStorage**：Phase 3 只做内存状态，不做持久化
3. **不新增复杂功能**：Phase 3 只做基础交互，不做复杂功能（如 AI 推荐、云同步等）
4. **保持视觉一致**：Phase 3 不改变视觉效果，只添加交互逻辑

### Phase 3 边界
**只做**：
- ✅ 任务勾选功能（点击勾选框，任务标记为完成）
- ✅ 导航点击功能（点击导航项，显示对应页面）
- ✅ 工具箱点击功能（点击工具箱图标，显示对应弹窗）
- ✅ 里程碑标记完成功能（点击里程碑，标记为完成）
- ✅ 其他基础交互功能（悬停效果、点击反馈等）

**不做**：
- ❌ 状态管理（Zustand）
- ❌ 本地存储（LocalStorage）
- ❌ 复杂动画（Framer Motion）
- ❌ 响应式适配（移交 Phase 4）
- ❌ AI 功能（移交 V2.0）
- ❌ 云同步（移交 V2.0）

### Phase 3 技术栈
- **React Hooks**：useState、useEffect、useCallback
- **TypeScript**：类型安全的状态管理
- **Tailwind CSS**：样式保持不变

### Phase 3 验收标准
- [ ] 任务勾选功能完成（点击勾选框，任务标记为完成）
- [ ] 导航点击功能完成（点击导航项，显示对应页面）
- [ ] 工具箱点击功能完成（点击工具箱图标，显示对应弹窗）
- [ ] 里程碑标记完成功能完成（点击里程碑，标记为完成）
- [ ] 所有交互流程测试通过
- [ ] `npm run lint` 通过
- [ ] `npm run build` 通过
- [ ] 用户验收通过

---
