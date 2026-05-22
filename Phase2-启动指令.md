# Phase 2 启动指令

> 请在新窗口中复制以下完整指令给 Claude

---

我需要你继续 **lifeos（人生操作系统）** 项目的 Phase 2 开发。

## 项目背景

**项目位置**：`C:\Users\张德帅\lifeos\`

**Phase 1 已完成**：
- ✅ 完整的规划文档（CLAUDE.md、PRD、TASKS、ARCHITECTURE、DECISIONS）
- ✅ HTML 原型验证（`prototype/index.html`），视觉相似度 95%
- ✅ 设计理念明确：Cinematic Dashboard、航海隐喻、玻璃拟态

**Phase 2 目标**：
- 用 Next.js 14 + TypeScript + Tailwind CSS 实现完整版本
- 基于 HTML 原型移植到 React 组件
- 建立完整的组件库和状态管理

---

## 🎯 第一步：读取项目规划文档

请先读取以下文档，理解项目的完整背景：

```bash
# 必读文档（按顺序）
1. C:\Users\张德帅\lifeos\CLAUDE.md          # 项目配置和开发规范
2. C:\Users\张德帅\lifeos\docs\PRD.md        # 产品需求文档
3. C:\Users\张德帅\lifeos\ARCHITECTURE.md    # 技术架构文档
4. C:\Users\张德帅\lifeos\TASKS.md           # 任务清单
5. C:\Users\张德帅\lifeos\DECISIONS.md       # 技术决策记录
```

**关键要点**：
- **项目最高原则**：LifeOS 不是普通任务管理工具，而是以"航海隐喻"为核心的人生仪表盘
- **MVP 边界**：第一版只做个人单用户 Dashboard，不做登录、多用户、云同步
- **开发原则**：先静态后动态、先完成再完美、先验证再扩展
- **Cinematic Dashboard**：页面高度 1.15～1.25 屏，不是传统的 16:9 横屏网页

---

## 🏗️ 第二步：查看 HTML 原型

HTML 原型位置：`C:\Users\张德帅\lifeos\prototype\index.html`

请在浏览器中打开预览，理解最终的视觉效果：
- 全屏星空帆船背景
- 所有卡片悬浮在背景之上
- 玻璃拟态效果明显
- 三栏布局 + 顶部栏 + 底部六大维度 + 统计栏

**不要推翻 HTML 原型的视觉效果**，你的任务是用 Next.js 实现相同的效果。

---

## 📋 第三步：执行 Phase 2 任务

请严格按照 `TASKS.md` 中的 **Phase 2：Next.js 基础框架** 执行��

### Phase 2 任务清单（1周）

**Week 1：项目搭建和基础组件**

1. **项目初始化**（负责人：前端开发者 Agent）
   ```bash
   npx create-next-app@latest lifeos-app --typescript --tailwind --app
   cd lifeos-app
   npm install framer-motion zustand @tanstack/react-query lucide-react date-fns
   ```

2. **Design Tokens 系统**（负责人：前端开发者 Agent）
   - 创建 `src/styles/tokens.css`
   - 配置 Tailwind 扩展（自定义颜色、字体、间距）
   - 从 HTML 原型中提取所有 CSS 变量

3. **基础组件开发**（负责人：前端开发者 Agent）
   - `GlassCard` 组件（玻璃拟态基础）
   - `CircularProgress` 组件（圆形进度环）
   - `Button` 组件（主要/次要/图标按钮）

4. **布局结构**（负责人：前端开发者 Agent）
   - 创建 `Layout` 组件（三栏/两栏/单栏响应式）
   - 实现星空背景渐变
   - 测试响应式断点

**验收标准**：
- [ ] Next.js 项目可运行（`npm run dev` 成功）
- [ ] `npm run lint` 通过（0 errors, 0 warnings）
- [ ] `npm run build` 通过（无构建错误）
- [ ] Design Tokens 系统完成
- [ ] 3 个核心基础组件完成
- [ ] 响应式布局框架完成

---

## 🚨 关键约束和规范

### 1. 严格遵循 CLAUDE.md 规范

- **主 Claude 只做分发和审查**，不扮演 Agent
- **具体工作必须派发给独立 Agent 执行**
- 使用 `Agent` 工具派发任务，指定 `subagent_type`

**示例**：
```typescript
Agent({
  description: "搭建 Next.js 项目脚手架",
  subagent_type: "前端开发者",
  prompt: "请在 C:\Users\张德帅\lifeos-app\ 目录下搭建 Next.js 14 项目..."
})
```

### 2. 防翻车规则（来自 CLAUDE.md）

- ❌ 不要扩大需求（第一版只做 Dashboard 首页）
- ❌ 不要做复杂动画（先静态精品感）
- ❌ 不要接入数据库（使用 mockData.ts）
- ❌ 不要添加登录系统
- ✅ 保持克制，专注首页 Dashboard

### 3. 技术栈（来自 ARCHITECTURE.md）

**必须使用**：
- Next.js 14 (App Router)
- TypeScript（严格模式）
- Tailwind CSS
- Framer Motion（动画）
- Zustand（状态管理）
- Lucide React（图标）

**不要使用**：
- 其他 UI 组件库（shadcn/ui、Ant Design 等）
- 其他状态管理库（Redux、MobX 等）
- 其他图标库

### 4. Mock 数据管理（来自 ARCHITECTURE.md）

所有数据必须集中管理在 `src/data/mockLifeData.ts`：

```typescript
// src/data/mockLifeData.ts
export const mockDimensions: LifeDimension[] = [...];
export const mockTodayTasks: Task[] = [...];
export const mockSailingStatus: SailingStatus = {...};
export const mockNorthStar: NorthStar = {...};
export const mockMilestones: Milestone[] = [...];
```

### 5. 组件开发规范

**从 HTML 原型移植组件时**：
1. 先读取 `prototype/index.html` 和 `prototype/styles.css`
2. 提取对应的 HTML 结构和 CSS 样式
3. 转换为 React 组件 + Tailwind CSS
4. 保持视觉效果一致（不要改变设计）

**组件文件结构**：
```
src/components/
├── ui/
│   ├── GlassCard.tsx
│   ├── CircularProgress.tsx
│   └── Button.tsx
├── dashboard/
│   ├── SailingStatus.tsx
│   ├── CoreNavigation.tsx
│   └── Toolbox.tsx
└── layout/
    └── DashboardLayout.tsx
```

---

## 📝 工作流程

### 第一次响应时

1. **确认理解**：
   - 我已读取所有规划文档
   - 我已查看 HTML 原型
   - 我理解 Phase 2 的任务和约束

2. **制定执行计划**：
   - 列出 Phase 2 Week 1 的详细任务清单
   - 说明每个任务的负责 Agent 和预计时间
   - 说明验收标准

3. **询问确认**：
   - 是否立即开始执行？
   - 是否有需要调整的地方？

### 执行任务时

1. **派发 Agent**：
   ```typescript
   Agent({
     description: "任务简短描述",
     subagent_type: "前端开发者",
     prompt: "详细的任务说明..."
   })
   ```

2. **等待 Agent 完成**：
   - Agent 完成后会自动通知
   - 不要重复 Agent 的工作

3. **验证结果**：
   - 检查 Agent 的输出
   - 确认是否符合验收标准
   - 如果不符合，派发 Agent 修改

4. **报告进度**：
   - 每完成一个任务，更新 TASKS.md
   - 向用户报告进度

---

## ⚠️ 常见错误（请避免）

1. ❌ **不要自己写代码**
   - 主 Claude 只做分发和审查
   - 所有代码都由 Agent 编写

2. ❌ **不要推翻 HTML 原型的设计**
   - HTML 原型已经通过验收（95% 相似度）
   - 你的任务是移植，不是重新设计

3. ❌ **不要扩大需求**
   - 第一版只做 Dashboard 首页
   - 不要添加其他页面（/vision、/goals 等）

4. ❌ **不要使用未经批准的技术栈**
   - 严格按照 ARCHITECTURE.md 中的技术栈
   - 不要引入新的依赖

5. ❌ **不要跳过验收标准**
   - 每个 Phase 都有明确的验收标准
   - 必须全部通过才能进入下一阶段

---

## 🎯 成功标准

Phase 2 完成后，应该达到：

1. **项目可运行**：
   - `npm run dev` 成功启动
   - 浏览器中可以访问 `http://localhost:3000`

2. **代码质量**：
   - `npm run lint` 通过
   - `npm run build` 通过
   - TypeScript 严格模式无错误

3. **视觉还原度**：
   - 与 HTML 原型的视觉相似度 ≥90%
   - 玻璃拟态效果明显
   - 响应式布局正常

4. **组件完整性**：
   - 所有基础组件完成
   - 所有组件有 TypeScript 类型定义
   - 所有组件有基本的交互效果

---

## 📞 如果遇到问题

1. **先读取相关文档**：
   - CLAUDE.md（开发规范）
   - ARCHITECTURE.md（技术架构）
   - DECISIONS.md（技术决策）

2. **查看 HTML 原型**：
   - `prototype/index.html`
   - `prototype/styles.css`

3. **询问用户**：
   - 如果文档中没有明确说明
   - 如果需要做技术选择
   - 如果遇到无法解决的问题

---

**现在请开始 Phase 2 的工作！** 🚀

首先，请确认你已经：
1. ✅ 读取了所有规划文档
2. ✅ 查看了 HTML 原型
3. ✅ 理解了 Phase 2 的任务和约束

然后，请制定详细的执行计划，并询问我是否可以开始执行。
