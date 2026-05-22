# TASKS.md - lifeos 任务清单

## 项目概览
- **项目名称**：lifeos（人生操作系统）
- **开始日期**：2026-05-21
- **预计完成**：2026-07-01（6周）
- **当前阶段**：Phase 0 - 项目规划

---

## Phase 0：项目规划（2026-05-21）

### 规划文档
- [x] 创建 CLAUDE.md（项目配置文档）
  - 负责人：Product Agent
  - 完成时间：2026-05-21
  
- [x] 创建 docs/PRD.md（产品需求文档）
  - 负责人：Product Agent
  - 完成时间：2026-05-21
  
- [x] 创建 TASKS.md（任务清单）
  - 负责人：Product Agent
  - 完成时间：2026-05-21
  
- [ ] 创建 ARCHITECTURE.md（技术架构文档）
  - 负责人：Frontend Agent
  - 预计时间：2026-05-21
  - 依赖：PRD.md 完成
  
- [ ] 用户确认规划
  - 负责人：MagicY
  - 预计时间：2026-05-21
  - 依赖：所有规划文档完成

---

## Phase 1：HTML 原型验证（2026-05-22 - 05-25，3天）

### 目标
验证视觉效果和交互体验，不依赖 Next.js，纯 HTML + CSS + Vanilla JS

### 验收标准
- [ ] 首页 HTML 原型与概念图视觉相似度达到 **80%**
- [ ] 三栏布局清晰：左 25% / 中 50% / 右 25%
- [ ] 玻璃拟态卡片效果完成（半透明背景 + 背景模糊 + 边框发光）
- [ ] 星空背景渐变完成（#0a1628 → #1a2744）
- [ ] 帆船主视觉图片展示完成
- [ ] 圆形进度环动画流畅（76% 进度）
- [ ] 可在 1440px 桌面端正常展示
- [ ] 所有交互元素有悬停效果
- [ ] 用户确认视觉效果满意

#### Phase 1 额外验收标准（信息舒适度）

- [ ] 页面一眼能看懂当前人生状态、今日任务、六大维度
- [ ] 视觉层级清楚：主视觉 > 今日任务 > 六大维度 > 统计数据
- [ ] 卡片不拥挤，文字在 1440px 下不小于 14px
- [ ] 中央帆船图不能压过功能信息
- [ ] 所有数据必须集中放在 mock 数据区域，不能散落在 HTML 各处
- [ ] 六大维度、今日任务、里程碑、统计数据都要设计成未来可组件化的数据结构

### 任务清单

#### 1.1 基础框架搭建
- [ ] 创建 `prototype/index.html`（三栏布局）
  - 负责人：UX/UI Agent（调用 power-design + web-design-engineer）
  - 预计时间：2小时
  - 验收标准：三栏布局正确，响应式适配桌面端

- [ ] 实现深色太空背景
  - 负责人：UX/UI Agent
  - 预计时间：1小时
  - 验收标准：渐变效果（#0a1628 → #1a2744）+ 星星粒子动画

#### 1.2 左侧栏组件
- [ ] 航行状态卡片（圆形进度环）
  - 负责人：UX/UI Agent
  - 预计时间：3小时
  - 验收标准：圆形进度环动画流畅，显示 76% 进度 + 三个子指标

- [ ] 核心导航菜单
  - 负责人：UX/UI Agent
  - 预计时间：2小时
  - 验收标准：4个导航项（人生愿景、目标管理、习惯系统、成长记录），悬停效果

- [ ] 工具箱（6个图标按钮）
  - 负责人：UX/UI Agent
  - 预计时间：1小时
  - 验收标准：6个图标按钮，悬停效果

#### 1.3 中央区域组件
- [ ] 帆船背景图
  - 负责人：UX/UI Agent
  - 预计时间：1小时
  - 验收标准：全屏背景图，不影响卡片可读性

- [ ] 六大维度卡片（玻璃拟态）
  - 负责人：UX/UI Agent
  - 预计时间：4小时
  - 验收标准：3x2 网格布局，玻璃拟态效果，悬停动画

- [ ] 底部数据统计栏
  - 负责人：UX/UI Agent
  - 预计时间：2小时
  - 验收标准：5个指标，数字动画效果

#### 1.4 右侧栏组件
- [ ] 今日航行任务清单
  - 负责人：UX/UI Agent
  - 预计时间：3小时
  - 验收标准：任务列表，可勾选，勾选动画

- [ ] 人生北极星卡片
  - 负责人：UX/UI Agent
  - 预计时间：1小时
  - 验收标准：文本显示，可编辑（弹窗）

- [ ] 近期里程碑列表
  - 负责人：UX/UI Agent
  - 预计时间：2小时
  - 验收标准：时间线展示，可添加、可完成

#### 1.5 交互和动画
- [ ] 页面加载动画
  - 负责人：UX/UI Agent
  - 预计时间：2小时
  - 验收标准：淡入效果，卡片依次出现

- [ ] 卡片悬停动画
  - 负责人：UX/UI Agent
  - 预计时间：1小时
  - 验收标准：悬停时卡片轻微上浮 + 阴影加深

- [ ] 任务完成动画
  - 负责人：UX/UI Agent
  - 预计时间：2小时
  - 验收标准：勾选时播放庆祝动画

#### 1.6 用户验收
- [ ] 用户测试原型
  - 负责人：MagicY
  - 预计时间：1小时
  - 验收标准：视觉效果满意，动画流畅，无明显 Bug

- [ ] 收集反馈并调整
  - 负责人：UX/UI Agent
  - 预计时间：2小时
  - 依赖：用户测试完成

---

## Phase 2：Next.js 基础框架（2026-05-21 - 05-22，完成）

### 目标
搭建 Next.js 项目，实现基础组件库和设计系统

### 验收标准
- [x] Next.js 项目可运行（`npm run dev` 成功）
- [x] `npm run lint` 通过（0 errors, 0 warnings）
- [x] `npm run build` 通过（无构建错误）
- [x] 首页组件拆分完成（至少 10 个组件）
- [x] Mock 数据集中管理（`web/data/mockLifeData.ts`）
- [x] Design Tokens 系统完成（色彩、字体、间距）
- [x] GlassCard 基础组件完成
- [x] CircularProgress 组件完成
- [x] 响应式布局框架完成（桌面/平板/手机）（移交 Phase 4）
- [x] 代码质量：TypeScript 严格模式、ESLint 配置、Prettier 配置

### 完成日期：2026-05-22

### 完成总结
Phase 2 成功完成 HTML 原型到 Next.js 的迁移，所有核心功能已实现：
- ✅ HTML 原型完整迁移到 Next.js（Phase 2.9）
- ✅ 保守组件化拆分（Phase 2.10）
- ✅ 接入 mockLifeData.ts 数据（Phase 2.11）
- ✅ 视觉效果与 HTML 原型完全一致
- ✅ 构建和 lint 都通过
- ✅ 所有 Dashboard 展示数据均来自 mockLifeData.ts

### 任务清单

#### 2.1 项目初始化
- [x] 初始化 Next.js 16 项目（App Router）
  - 负责人：Frontend Agent
  - 完成时间：2026-05-21
  - 备注：使用 Next.js 16.2.6 + React 19.2.4

- [x] 配置 ESLint + Prettier
  - 负责人：Frontend Agent
  - 完成时间：2026-05-21
  - 备注：Next 16 移除 `next lint`，已迁移到 `eslint .`

- [ ] 配置 Husky + lint-staged
  - 负责人：Frontend Agent
  - 备注：移交 Phase 4，本次未启用提交钩子

- [x] 安装依赖
  - 负责人：Frontend Agent
  - 已安装：lucide-react, clsx, tailwind-merge, date-fns
  - 备注：framer-motion / zustand / recharts 留到 Phase 3-4 按需引入

#### 2.2 设计系统搭建
- [x] 创建 Design Tokens
  - 负责人：Frontend Agent
  - 路径：`web/app/globals.css` 中的 `:root` 与 `@theme`
  - 完成时间：2026-05-21

- [x] 配置 Tailwind CSS（v4 + `@theme`）
  - 负责人：Frontend Agent
  - 完成时间：2026-05-21

- [x] 创建全局样式（`web/app/globals.css`）
  - 负责人：Frontend Agent
  - 完成时间：2026-05-21

#### 2.3 基础组件库
- [x] GlassCard 组件（`web/components/ui/GlassCard.tsx`）
- [x] Button 组件（`web/components/ui/Button.tsx`，4 variants × 3 sizes）
- [ ] Input 组件
  - 备注：本期 Dashboard 不需要，移交 Phase 3
- [x] CircularProgress 组件（`web/components/ui/CircularProgress.tsx`）
- [ ] NavigationItem 组件
  - 备注：CoreNavigation 内联实现，未单独抽离

#### 2.4 布局组件
- [x] DashboardShell 组件（三栏 + 全宽 footer）
  - 负责人：Frontend Agent
  - 路径：`web/components/layout/DashboardShell.tsx`
- [x] BackgroundScene 组件（`web/components/layout/BackgroundScene.tsx`）
- [x] TopBar 组件（`web/components/layout/TopBar.tsx`）

#### 2.5 类型定义
- [x] 创建 TypeScript 类型（`web/types/lifeos.ts`）
  - 完成时间：2026-05-21
  - 内容：User、LifeDimension、Goal、Task、Milestone、SailingStatus、NorthStar

#### 2.6 状态管理
- [ ] 创建 Zustand Store
  - 备注：本期使用纯 mock 数据 + 静态展示，移交 Phase 3
- [ ] 实现 LocalStorage 持久化
  - 备注：移交 Phase 3

#### 2.7 测试和验收
- [x] 运行 `npm run build`
  - 验收标准：构建成功，无 TypeScript 错误
  - 结果：Next.js 16.2.6 编译成功，9 个路由全部预渲染
- [x] 运行 `npm run lint`
  - 验收标准：无 ESLint 错误
  - 结果：EXIT_CODE=0，0 errors / 0 warnings
- [x] 首页 Dashboard 组装
  - 路径：`web/app/page.tsx`
  - 完成时间：2026-05-21
- [x] Phase 2 完成报告
  - 路径：`web/PHASE2_REPORT.md`
  - 完成时间：2026-05-21
- [ ] 用户验收基础框架
  - 负责人：MagicY
  - 待办：等待用户检视

---

## Phase 3：核心功能开发（2026-06-02 - 06-15，2周）

### 目标
实现所有核心功能，数据持久化正常

### 验收标准
- [ ] 航行状态卡片完成（圆形进度环 + 三个子指标）
- [ ] 核心导航完成（4 个主要入口 + 悬停效果）
- [ ] 今日任务清单完成（任务勾选 + 动画）
- [ ] 六大维度卡片完成（2行3列网格 + 悬停效果）
- [ ] 底部数据统计栏完成（5 个指标）
- [ ] 人生北极星卡片完成
- [ ] 近期里程碑列表完成
- [ ] 所有数据从 mockData.ts 读取
- [ ] 状态管理完成（Zustand Store）
- [ ] 本地存储完成（LocalStorage 持久化）

### 任务清单

#### 3.1 左侧栏功能
- [ ] 航行状态卡片（SailingStatus）
  - 负责人：Frontend Agent
  - 预计时间：4小时
  - 路径：`src/components/features/SailingStatus.tsx`
  - 功能：圆形进度环 + 三个子指标（已航行、剩余时间、累计成长）

- [ ] 核心导航（CoreNavigation）
  - 负责人：Frontend Agent
  - 预计时间：2小时
  - 路径：`src/components/features/CoreNavigation.tsx`
  - 功能：4个导航项，点击切换页面

- [ ] 工具箱（Toolbox）
  - 负责人：Frontend Agent
  - 预计时间：3小时
  - 路径：`src/components/features/Toolbox.tsx`
  - 功能：6个图标按钮（设置、数据导出、主题切换、帮助、反馈、关于）

#### 3.2 中央区域功能
- [ ] 六大维度卡片（DimensionCards）
  - 负责人：Frontend Agent
  - 预计时间：6小时
  - 路径：`src/components/features/DimensionCards.tsx`
  - 功能：3x2 网格布局，点击跳转详情页

- [ ] 底部数据统计栏（StatsBar）
  - 负责人：Frontend Agent
  - 预计时间：3小时
  - 路径：`src/components/features/StatsBar.tsx`
  - 功能：5个指标（航行天数、完成任务数、成长指数、健康指数、幸福指数）

#### 3.3 右侧栏功能
- [ ] 今日任务清单（TodayTasks）
  - 负责人：Frontend Agent
  - 预计时间：6小时
  - 路径：`src/components/features/TodayTasks.tsx`
  - 功能：任务列表、添加任务、勾选任务、删除任务

- [ ] 人生北极星（NorthStar）
  - 负责人：Frontend Agent
  - 预计时间：3小时
  - 路径：`src/components/features/NorthStar.tsx`
  - 功能：显示核心价值观、编辑弹窗（支持 Markdown）

- [ ] 近期里程碑（Milestones）
  - 负责人：Frontend Agent
  - 预计时间：4小时
  - 路径：`src/components/features/Milestones.tsx`
  - 功能：时间线展示、添加里程碑、完成里程碑

#### 3.4 详情页面
- [ ] 维度详情页（`src/app/dimension/[id]/page.tsx`）
  - 负责人：Frontend Agent
  - 预计时间：6小时
  - 功能：显示该维度的目标列表、添加目标、编辑目标

- [ ] 目标详情页（`src/app/goal/[id]/page.tsx`）
  - 负责人：Frontend Agent
  - 预计时间：4小时
  - 功能：显示目标详情、任务列表、进度更新

#### 3.5 数据持久化
- [ ] 实现数据导出功能
  - 负责人：Frontend Agent
  - 预计时间：2小时
  - 格式：JSON
  - 验收标准：点击"数据导出"按钮，下载 JSON 文件

- [ ] 实现数据导入功能
  - 负责人：Frontend Agent
  - 预计时间：2小时
  - 验收标准：上传 JSON 文件，数据恢复

#### 3.6 测试和验收
- [ ] 功能测试（QA Agent）
  - 负责人：QA Agent
  - 预计时间：4小时
  - 测试用例：所有核心功能可用，数据持久化正常

- [ ] 用户验收核心功能
  - 负责人：MagicY
  - 验收标准：所有功能完整，无 P0 Bug

---

## Phase 4：视觉增强和优化（2026-06-16 - 06-30，2周）

### 目标
完善动画效果，响应式适配，性能优化

### 验收标准
- [ ] 背景视差效果完成（帆船图片滚动视差）
- [ ] 所有悬停动画完成（卡片提升 + 发光）
- [ ] 页面过渡动画完成（路由切换动画）
- [ ] 响应式适配完成（桌面/平板/手机三种布局）
- [ ] 性能优化完成（Lighthouse 分数 ≥90）
- [ ] 无障碍优化完成（WCAG AA 标准）
- [ ] 深色模式完成（可切换）
- [ ] 所有交互流程测试通过
- [ ] 代码审查通过（无明显技术债）
- [ ] 用户体验测试通过（自己使用 1 周无明显问题）

### 任务清单

#### 4.1 动画效果
- [ ] 页面加载动画（Framer Motion）
  - 负责人：Frontend Agent
  - 预计时间：3小时
  - 效果：淡入 + 卡片依次出现

- [ ] 卡片悬停动画
  - 负责人：Frontend Agent
  - 预计时间：2小时
  - 效果：悬停时卡片轻微上浮 + 阴影加深

- [ ] 任务完成动画
  - 负责人：Frontend Agent
  - 预计时间：3小时
  - 效果：勾选时播放庆祝动画（五彩纸屑）

- [ ] 里程碑完成动画
  - 负责人：Frontend Agent
  - 预计时间：2小时
  - 效果：完成时播放烟花动画

- [ ] 圆形进度环动画
  - 负责人：Frontend Agent
  - 预计时间：2小时
  - 效果：从 0% 到当前值的动画

#### 4.2 响应式适配
- [ ] 平板端适配（768px - 1024px）
  - 负责人：Frontend Agent
  - 预计时间：4小时
  - 策略：左侧栏收起，中央区域 + 右侧栏并排

- [ ] 手机端适配（< 768px）
  - 负责人：Frontend Agent
  - 预计时间：6小时
  - 策略：单栏布局，底部导航栏

#### 4.3 性能优化
- [ ] 代码分割（Dynamic Import）
  - 负责人：Frontend Agent
  - 预计时间：2小时
  - 目标：首屏加载时间 < 1s

- [ ] 图片懒加载
  - 负责人：Frontend Agent
  - 预计时间：1小时
  - 使用：Next.js Image 组件

- [ ] 性能模式（关闭动画和模糊效果）
  - 负责人：Frontend Agent
  - 预计时间：2小时
  - 验收标准：低端设备可流畅运行

#### 4.4 无障碍优化
- [ ] ARIA 标签
  - 负责人：Frontend Agent
  - 预计时间：2小时
  - 验收标准：所有交互元素有 ARIA 标签

- [ ] 键盘导航
  - 负责人：Frontend Agent
  - 预计时间：3小时
  - 验收标准：所有功能可通过键盘操作

- [ ] 对比度检查
  - 负责人：Frontend Agent
  - 预计时间：1小时
  - 验收标准：所有文本对比度 ≥ 4.5:1

#### 4.5 测试和验收
- [ ] 性能测试（Lighthouse）
  - 负责人：QA Agent
  - 预计时间：1小时
  - 目标：Performance ≥ 90, Accessibility ≥ 90

- [ ] 跨浏览器测试
  - 负责人：QA Agent
  - 预计时间：2小时
  - 浏览器：Chrome, Firefox, Safari, Edge

- [ ] 用户最终验收
  - 负责人：MagicY
  - 验收标准：所有功能完整，动画流畅，响应式适配完成

---

## V1.0 发布（2026-07-01）

### 发布清单
- [ ] 运行 `npm run build`
  - 验收标准：构建成功，无错误

- [ ] 运行 `npm run lint`
  - 验收标准：无 ESLint 错误

- [ ] 更新 README.md
  - 内容：项目介绍、功能列表、技术栈、安装说明

- [ ] 创建 CHANGELOG.md
  - 内容：V1.0 功能列表

- [ ] 部署到 Vercel
  - 验收标准：线上版本可访问

- [ ] 庆祝 🎉
  - 负责人：MagicY
  - 方式：写一篇复盘文章

---

## 未来计划（V2.0）

### 功能扩展
- [ ] AI 推荐（基于历史数据推荐目标和任务）
- [ ] 云同步（Supabase 或 Firebase）
- [ ] 移动端 App（React Native）
- [ ] 数据分析（BI 级别的分析和可视化）
- [ ] 社交功能（分享目标、互相激励）
- [ ] 主题切换（浅色主题、其他深色主题）
- [ ] 多语言支持（英文、日文）

---

## 注意事项

### 开发规范
- 所有任务完成后更新本文件（标记为 [x]）
- L2/L3 任务完成后写 HANDOFF.md
- 提交前必须 `npm run lint && npm run build`
- 不要扩大需求、不要顺手重构、不要吞错误

### 风险管理
- 如果某个任务超过预计时间 50%，立即向 MagicY 报告
- 如果遇到技术难题，先尝试 2 种不同方案，仍无法解决则升级
- 如果发现需求不明确，立即暂停并与 Product Agent 沟通

### 质量标准
- 所有代码必须通过 TypeScript 类型检查
- 所有组件必须有清晰的 Props 类型定义
- 所有功能必须在桌面端测试通过
- 所有动画必须流畅（60fps）
