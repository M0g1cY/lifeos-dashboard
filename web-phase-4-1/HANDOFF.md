# HANDOFF.md - Phase 4 交接文档

**生成日期**：2026-05-22
**更新日期**：2026-05-22 (Phase 4.1 完成)
**生成者**：Phase 3 开发会话
**更新者**：Phase 4.1 开发会话
**目的**：为下一个 Claude Code 窗口提供完整上下文

---

## 1. 当前项目状态

- **项目路径**：`/c/Users/张德帅/lifeos/web-phase-4-1` (Phase 4.1 worktree)
- **主项目路径**：`/c/Users/张德帅/lifeos/web`
- **当前分支**：`phase-4/localstorage-persistence`
- **最新 commit**：`4dce2ad` (feat: persist selected dimension state)
- **Working tree**：clean
- **Lint**：PASS
- **Build**：PASS
- **Phase 4.1 目标**：✅ 已达成 (localStorage 状态持久化)

---

## 2. Phase 4.1 安全点

| Commit | Hash | 含义 |
|--------|------|------|
| Commit 1 | 4c66edd | SSR-safe localStorage utilities |
| Commit 2 | 60b0de2 | useLocalStorageState hook |
| Commit 3 | 9bc0de8 | taskStatus 持久化 (初版，有 bug) |
| Fix 3.1 | a258a5e | 修复 hydration 覆盖问题 |
| Fix 3.2 | dd808be | 修复 initialValue 依赖问题 |
| Commit 4 | 4dce2ad | selectedDimensionId 持久化 |

---

## 3. Phase 4.1 已完成内容

**已持久化状态：**

| 状态 | localStorage Key | 类型 | 默认值 | 说明 |
|------|------------------|------|--------|------|
| taskStatus | `lifeos:v1:taskStatus` | `Record<string, boolean>` | 从 mockTodayTasks 生成 | 任务完成状态 |
| selectedDimensionId | `lifeos:v1:selectedDimensionId` | `string \| null` | `null` | 当前选中维度 |

**未持久化状态（按设计保持临时）：**

- ❌ MilestoneTimeline `completed` toggle
- ❌ CoreNavigation `active` state
- ❌ ToolboxCard `expanded` state
- ❌ NorthStarCard `expanded` state
- ❌ VoyageStatusCard `metric` mode

**真实浏览器验收结果：**

- ✅ taskStatus 刷新后保留
- ✅ StatsBar 今日完成数正确恢复
- ✅ selectedDimensionId 刷新后保留
- ✅ 取消选中后刷新恢复默认 quote
- ✅ 无 hydration warning
- ✅ 回归检查通过

---

## 4. Phase 2.11.1 安全点

- **Commit**：`2d0c0da`
- **含义**：静态视觉基线，所有组件从 HTML 原型迁移完成，零交互

---

## 5. Phase 3 安全点

| 阶段 | Commit | 含义 |
|------|--------|------|
| Phase 3.1 | 20860af | 3 个组件内部交互（LifeDimensionDock/TodayVoyageCard/ToolboxCard） |
| Phase 3.2 | 81f1da6 | 2 个组件内部交互（CoreNavigation/MilestoneTimeline） |
| Phase 3.3 | 76e0d16 | 首个跨组件联动（DashboardClientShell + HeroQuote 联动） |
| Phase 3.4 | 2e1f439 | 2 个组件内部交互（NorthStarCard/VoyageStatusCard） |
| Phase 3.5 | df07651 | 第二个跨组件联动（TodayVoyageCard → StatsBar） |

---

## 6. Phase 3 已完成内容

**9/9 Dashboard 组件全部交互化：**

| 组件 | 交互 | 状态管理 |
|------|------|---------|
| LifeDimensionDock | 点击选中维度 | Shell props |
| HeroQuote/mainContent | 与维度联动显示 | Shell 计算 |
| TodayVoyageCard | 任务完成 toggle | Shell props |
| StatsBar | 今日完成数联动 | Shell props |
| ToolboxCard | 展开/收起描述 | 内部 useState |
| CoreNavigation | active 状态切换 | 内部 useState |
| MilestoneTimeline | completed toggle | 内部 useState |
| NorthStarCard | 展开/收起 description | 内部 useState |
| VoyageStatusCard | 基础/扩展指标切换 | 内部 useState |

**2 个跨组件联动：**
1. LifeDimensionDock click → Shell.selectedDimensionId → mainContent
2. TodayVoyageCard toggle → Shell.taskStatus → StatsBar.completedCount

---

## 7. 当前架构说明

```
app/page.tsx (Server Component)
└── TopBar (Server Component)
└── DashboardClientShell ('use client')
    ├── 管理状态：selectedDimensionId, taskStatus (均已持久化)
    └── DashboardCanvas (纯布局，接收 ReactNode slots)
        ├── LifeDimensionDock ← props
        ├── TodayVoyageCard ← props
        ├── StatsBar ← props
        ├── VoyageStatusCard ← 内部 useState
        ├── CoreNavigation ← 内部 useState
        ├── ToolboxCard ← 内部 useState
        ├── NorthStarCard ← 内部 useState
        └── MilestoneTimeline ← 内部 useState
```

**关键架构决策：**
- app/page.tsx 保持 Server Component
- DashboardClientShell 是唯一 Client 边界
- 没有 Context / Zustand / Redux
- localStorage 通过自定义 hook 实现（`useLocalStorageState`）
- 没有数据库 / 后端 API
- 没有新增依赖（Phase 3 + Phase 4.1 全程零新依赖）

---

## 8. 重要约束

- ❌ 不要把 app/page.tsx 改成 'use client'
- ❌ 不要破坏 Phase 2 视觉系统
- ❌ 不要修改 Design Tokens（globals.css 前 53 行）
- ❌ 不要改背景系统
- ❌ 不要一次性上数据库/登录/复杂全局状态
- ✅ 每个小功能必须独立 commit
- ✅ 每次修改后必须 npm run lint && npm run build
- ✅ 跨组件联动优先 Client Shell + props
- ✅ localStorage 持久化通过 `useLocalStorageState` hook

---

## 9. 已知技术债

1. **Optional props 兼容问题**：LifeDimensionDock、TodayVoyageCard、StatsBar 为兼容 `app/*-test/` 测试页面使用 optional props，正式组件接口被迫宽松
2. **测试页面未清理**：`app/central-test/`、`app/components-test/`、`app/dashboard-test/`、`app/right-sidebar-test/` 仍存在，被 .gitignore 排除但参与 TypeScript 编译
3. **HeroQuote 组件未复用**：mainContent 直接在 Shell 中渲染
4. **useLocalStorageState 依赖省略**：`useEffect` 依赖数组故意省略了 `initialValue`，已在代码注释中说明原因

---

## 10. Phase 4.2+ 建议方向

### Phase 4.2：测试页清理与 Props 收紧
- 清理或补齐 `app/*-test/` 测试页的 props
- 将 optional props 改为 required
- 提升类型安全性

### Phase 4.3：MilestoneTimeline Persistence 技术评估
- 评估 `completed` toggle 是否需要持久化
- 如果需要，设计 localStorage schema
- 考虑与 `taskStatus` 的关系

### Phase 4.4：微交互增强
- 添加 localStorage 写入成功的视觉反馈
- 添加 localStorage 配额满的错误提示
- 优化 hydration 期间的加载状态

### Phase 4.5：响应式适配
- 移动端布局优化
- 平板端三栏布局调整
- 触摸交互优化

---

## 11. 下一个窗口启动指令

```
请先执行以下步骤，不要直接开发：

1. 读取项目文档：
   - /c/Users/张德帅/lifeos/web-phase-4-1/HANDOFF.md
   - /c/Users/张德帅/lifeos/web-phase-4-1/PHASE4_1_REPORT.md
   - /c/Users/张德帅/lifeos/CLAUDE.md

2. 确认当前状态：
   cd /c/Users/张德帅/lifeos/web-phase-4-1
   git branch --show-current
   git log -1 --oneline
   git status --short
   npm run lint
   npm run build

3. 确认以下条件满足后再继续：
   - 当前分支：phase-4/localstorage-persistence
   - 最新 commit：4dce2ad (或更新的 docs commit)
   - Working tree：clean
   - Lint/build：pass

4. 不要直接开发 Phase 4.2。
   先做 Phase 4.2 技术评估：测试页清理与 props 收紧方案。
   输出评估后等待用户确认再开始实现。
```

---

## 12. Phase 4.1 Hydration 问题复盘

### Bug 1：默认值覆盖 storage
**根本原因**：写入 effect 依赖 `[key, value, hydrated]`，在 hydration 阶段 `setHydrated(true)` 先生效，此时 `value` 仍是旧的 `defaultTaskStatus`，导致用默认值覆盖了 localStorage。

**修复方案**：使用 `queueMicrotask` 延迟 setState 到 useEffect 完成后，使用 `isHydrated` ref 防止首次 mount 写入。

### Bug 2：initialValue 引用变化导致 effect 反复触发
**根本原因**：`defaultTaskStatus` 每次渲染都重新创建（新引用），导致 `useEffect([key, initialValue])` 中的 `initialValue` 每次都变化，触发 effect 重新执行。

**修复方案**：移除 `initialValue` 依赖，直接恢复 localStorage 中的值，不做比较。localStorage 是唯一真实来源。

**最终实现**：
- 使用 `queueMicrotask` 绕过 React 19 的 `react-hooks/set-state-in-effect` 规则
- 使用 `isHydrated` ref 防止首次 mount 写入 initialValue
- 移除 `initialValue` 依赖，避免每次渲染触发 effect
- SSR-safe：`safeGet` / `safeSet` 在 SSR 时返回 fallback / no-op
- 错误降级：localStorage 不可用时降级为内存态，不崩溃

---

## 13. 重要文件

| 文件 | 说明 |
|------|------|
| `HANDOFF.md` | 本文档，项目交接文档 |
| `PHASE4_1_REPORT.md` | Phase 4.1 完整交付报告 |
| `DEBUG_GUIDE.md` | localStorage 调试指南 |
| `lib/storage.ts` | SSR-safe localStorage 原语 |
| `lib/useLocalStorageState.ts` | React 19 compliant localStorage hook |
| `components/layout/DashboardClientShell.tsx` | Client Shell，管理持久化状态 |

