# Phase 4.1 SPEC — LocalStorage 状态持久化

**分支**：`phase-4/localstorage-persistence`
**Worktree**：`../web-phase-4-1`
**起点 commit**：`b2f787c`
**任务等级**：L2

---

## 1. 目标

让 Phase 3 已建立的 2 个跨组件状态在浏览器刷新后恢复，让 Dashboard 从"内存交互产品雏形"进入"可记住状态的产品"。

不引入任何新依赖、新架构概念，只在现有 `DashboardClientShell` 边界内做最小化改造。

---

## 2. 持久化范围

| 状态 | 来源 | 持久化 |
|------|------|--------|
| `taskStatus` | `DashboardClientShell` | ✅ |
| `selectedDimensionId` | `DashboardClientShell` | ✅ |

仅这 2 项。

---

## 3. 不做范围

- ❌ MilestoneTimeline 持久化（需先状态提升，留 Phase 4.2）
- ❌ 其它组件内部 useState 的持久化（CoreNavigation / ToolboxCard / NorthStarCard / VoyageStatusCard）
- ❌ 跨标签页同步（`storage` event 监听）
- ❌ Schema 迁移层（v1 → v2）
- ❌ "重置数据"按钮 UI
- ❌ 测试页 `app/*-test/` 清理（Phase 4.3 候选）
- ❌ 引入 Zustand / Redux / Context
- ❌ 修改 `app/page.tsx`（保持 Server Component）
- ❌ 修改 `app/globals.css`、Design Tokens、背景系统
- ❌ 修改 `data/mockLifeData.ts` / `types/lifeos.ts`
- ❌ 新增 npm 依赖

---

## 4. localStorage Key 设计

统一前缀 `lifeos:v1:`：

| Key | Value 类型 |
|-----|-----------|
| `lifeos:v1:taskStatus` | `Record<string, boolean>` |
| `lifeos:v1:selectedDimensionId` | `string \| null` |

`v1` 为未来 schema 演进预留版本位，当前不实现迁移逻辑。

---

## 5. Hydration 安全策略

Next.js 16.2.6 + React 19.2.4。SSR 期间没有 `window`/`localStorage`，必须避免 SSR HTML 与客户端首帧不一致。

策略（两段式）：

1. **首帧**：`useState` 用 mock 默认值初始化（与 SSR 一致）
2. **挂载后**：`useEffect` 仅在客户端读 localStorage，若有值则 `setState` 覆盖
3. 每次 setState 后 `useEffect` 写回 localStorage

代价：首屏可能闪一帧默认值再切到持久化值（毫秒级），可接受。

错误降级：
- `typeof window === 'undefined'` → 直接返回 fallback
- `localStorage` 抛错（隐私模式 / 配额）→ `console.warn` 后降级为内存态
- `JSON.parse` 抛错 → 返回 fallback 并清理脏数据

### Hook API（Commit 2）

```ts
useLocalStorageState<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>]
```

实现要点：
- 首次渲染返回 `initialValue`（SSR-safe）
- mount 后 `useEffect` 调 `safeGet` 替换状态
- `hydrated` 标志确保读取完成前不会用 `initialValue` 覆盖已存值
- 写入 effect 仅在 `hydrated === true` 后触发

---

## 6. Commit 拆分计划

| # | 类型 | 内容 | 行为变化 | 状态 |
|---|------|------|---------|------|
| 1 | chore | `lib/storage.ts` SSR-safe 原语 | 否（未被引用） | ✅ 完成 (4c66edd) |
| 2 | chore | `lib/useLocalStorageState.ts` hook | 否（未被引用） | ✅ 完成 (60b0de2) |
| 3 | feat | `taskStatus` 接入持久化 | 是 | ✅ 完成 |
| 4 | feat | `selectedDimensionId` 接入持久化 | 是 | ⏳ |
| 5 | docs | `PHASE4_1_REPORT.md` | 否 | ⏳ |

每步后必须 `npm run lint && npm run build` 通过。

**本轮（当前会话）只做 Commit 1。**

---

## 7. 验收标准

### 功能（Commit 3-4 后才能完整验证）
- [ ] 勾选任务 → 刷新 → 状态保留
- [ ] 选中维度 → 刷新 → mainContent 仍显示该维度
- [ ] 取消勾选 / 取消选中 → 刷新 → 同步回退
- [ ] 清空 localStorage → 刷新 → 回到 mock 默认值

### 质量
- [ ] `npm run lint` PASS
- [ ] `npm run build` PASS（无 hydration warning）
- [ ] TypeScript 严格模式无 `any`
- [ ] 隐私模式（disabled localStorage）下 UI 不崩溃

### 回归
- [ ] Phase 3 全部 9 个交互正常
- [ ] 跨组件联动（维度→HeroQuote、任务→StatsBar）正常
- [ ] 三栏布局 / 背景图 / 视觉稳定

### 架构红线
- [ ] `app/page.tsx` 仍是 Server Component
- [ ] `globals.css` 零改动
- [ ] 0 新依赖
- [ ] `DashboardClientShell` 状态边界仅扩"内部实现"，对外接口不变
