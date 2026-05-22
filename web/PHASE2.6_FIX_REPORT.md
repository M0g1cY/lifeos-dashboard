# Phase 2.6 文字裁切和布局安全区修复报告

**修复日期**: 2026/05/21  
**修复分支**: `fix/text-clipping-and-safe-area`  
**任务级别**: L1（小改动）

---

## 修复概述

本次修复解决了 lifeos 项目中所有文字被裁切和布局安全区不足的问题，确保所有文本内容完整可见，并为底部模块预留了足够的安全区域。

---

## 发现的问题

### 1. 全局问题：`.glass-card` 使用 `overflow: hidden`

**文件**: `app/globals.css`  
**问题**: 第 217 行的 `.glass-card` 类使用了 `overflow: hidden`，导致所有玻璃拟态卡片内的内容被裁切。

**影响范围**: 所有使用 `GlassCard` 组件的地方，包括：
- ToolboxCard（工具箱）
- LifeDimensionDock（六大维度）
- StatsBar（统计栏）
- TodayVoyageCard（今日任务）
- NorthStarCard（人生北极星）
- MilestoneTimeline（里程碑）

### 2. ToolboxCard 文字裁切

**文件**: `components/dashboard/ToolboxCard.tsx`

**问题**:
- 工具按钮文字使用 `text-xs`（12px），中文可读性差
- 按钮 padding 只有 `p-4`（16px），对于两行中文文字不够
- 没有 `min-height`，导致按钮高度不一致

### 3. LifeDimensionDock 文字裁切

**文件**: `components/dashboard/LifeDimensionDock.tsx`

**问题**:
- 卡片 padding 只有 `p-6`（24px），文字靠近边缘
- 副标题使用 `text-sm`（14px），但行高不足
- 百分比文字使用 `text-xs`（12px），可读性差
- 元素间距 `space-y-4` 不够，导致内容拥挤

### 4. StatsBar 文字裁切

**文件**: `components/dashboard/StatsBar.tsx`

**问题**:
- 统计栏 padding 只有 `py-6`（24px），上下空间不足
- 统计项间距 `gap-8` 在换行时可能导致文字被裁切
- 统计项内部间距 `space-y-2` 不够，文字拥挤

### 5. DashboardShell 底部安全区不足

**文件**: `components/layout/DashboardShell.tsx`

**问题**:
- footer 区域只有 `mt-6`（24px）顶部间距，没有底部间距
- 容器没有 `pb` 底部 padding，导致内容可能被浏览器边缘或任务栏压住

### 6. 全局字体行高不足

**文件**: `app/globals.css`

**问题**:
- 多个文本类使用 `line-height: 1.5`，对中文文本不够
- 中文文本建议行高至少 1.6

---

## 修复方案

### 1. 移除 `.glass-card` 的 `overflow: hidden`

**文件**: `app/globals.css`

**修改**:
```css
/* 修改前 */
.glass-card {
  /* ... */
  overflow: hidden;
}

/* 修改后 */
.glass-card {
  /* ... */
  /* 移除 overflow: hidden 以防止内容被裁切 */
  /* overflow: hidden; */
}
```

**理由**: `overflow: hidden` 会裁切所有超出卡片边界的内容，包括正常的文字。玻璃拟态效果不需要 `overflow: hidden`，圆角可以通过 `border-radius` 实现。

### 2. 修复 ToolboxCard

**文件**: `components/dashboard/ToolboxCard.tsx`

**修改**:
- 按钮 padding: `p-4` → `p-5`（16px → 20px）
- 按钮最小高度: 无 → `min-h-[88px]`
- 文字大小: `text-xs` → `text-sm`（12px → 14px）
- 文字行高: 无 → `leading-[1.6]`
- 图标: 添加 `flex-shrink-0` 防止被压缩

**效果**: 工具按钮文字完整可见，按钮高度一致，中文可读性提升。

### 3. 修复 LifeDimensionDock

**文件**: `components/dashboard/LifeDimensionDock.tsx`

**修改**:
- 卡片 padding: `p-6` → `p-7`（24px → 28px）
- 元素间距: `space-y-4` → `space-y-5`（16px → 20px）
- 标题行高: 无 → `leading-[1.6]`
- 副标题行高: 无 → `leading-[1.6]`
- 副标题最小高度: 无 → `min-h-[22px]`
- 百分比文字: `text-xs` → `text-sm`（12px → 14px）
- 百分比行高: 无 → `leading-[1.6]`
- 进度条容器间距: `mt-2` → `space-y-3`
- 图标: 添加 `flex-shrink-0` 防止被压缩

**效果**: 维度卡片内容完整显示，文字不拥挤，可读性提升。

### 4. 修复 StatsBar

**文件**: `components/dashboard/StatsBar.tsx`

**修改**:
- 统计栏 padding: `py-6` → `py-7`（24px → 28px）
- 统计项间距: `gap-8` → `gap-10`（32px → 40px）
- 统计项内部间距: `space-y-2` → `space-y-3`（8px → 12px）
- 数字行高: 无 → `leading-[1.4]`
- 标签行高: 无 → `leading-[1.6]`
- 图标: 添加 `flex-shrink-0` 防止被压缩

**效果**: 统计栏文字完整显示，数字和标签不拥挤。

### 5. 修复 DashboardShell 底部安全区

**文件**: `components/layout/DashboardShell.tsx`

**修改**:
- 容器底部 padding: 无 → `pb-8`（32px）
- footer 底部间距: 无 → `mb-6`（24px）

**效果**: 六大维度和统计栏距离页面底部至少 32px + 24px = 56px，不会被浏览器边缘或任务栏压住。

### 6. 修复全局字体行高

**文件**: `app/globals.css`

**修改**:
- 添加中文专用行高变量: `--line-height-chinese: 1.6`
- `.card-title`: 添加 `line-height: 1.6`
- `.task-label`: `line-height: 1.5` → `line-height: 1.6`
- `.value-statement`: `line-height: 1.5` → `line-height: 1.6`
- `.principles li`: 添加 `line-height: 1.6`
- `.milestone-text`: 添加 `line-height: 1.6`

**效果**: 所有中文文本行高至少 1.6，可读性提升。

---

## 修复前后对比

### ToolboxCard
| 项目 | 修复前 | 修复后 |
|------|--------|--------|
| 按钮 padding | 16px | 20px |
| 按钮最小高度 | 无 | 88px |
| 文字大小 | 12px | 14px |
| 文字行高 | 默认 | 1.6 |

### LifeDimensionDock
| 项目 | 修复前 | 修复后 |
|------|--------|--------|
| 卡片 padding | 24px | 28px |
| 元素间距 | 16px | 20px |
| 百分比文字 | 12px | 14px |
| 文字行高 | 默认 | 1.6 |

### StatsBar
| 项目 | 修复前 | 修复后 |
|------|--------|--------|
| 统计栏 padding | 24px | 28px |
| 统计项间距 | 32px | 40px |
| 统计项内部间距 | 8px | 12px |
| 文字行高 | 默认 | 1.4/1.6 |

### DashboardShell
| 项目 | 修复前 | 修复后 |
|------|--------|--------|
| 容器底部 padding | 0 | 32px |
| footer 底部间距 | 0 | 24px |
| 总底部安全区 | 0 | 56px |

---

## 验证结果

### ESLint 检查
```bash
$ npm run lint
✓ 通过，无错误
```

### TypeScript 类型检查
```bash
$ npm run build
✓ 通过，无类型错误
```

### Next.js 构建
```bash
$ npm run build
✓ 编译成功（7.4s）
✓ TypeScript 检查通过（2.2s）
✓ 静态页面生成成功（780ms）
```

---

## 验收标准检查

- [x] 所有栏目文字完整可见
- [x] 工具箱 6 个按钮文字不被裁切
- [x] 六大维度 6 个卡片完整显示
- [x] 底部统计栏完整显示
- [x] 小字最小 12px，正文最小 14px
- [x] 中文文本 line-height ≥ 1.6
- [x] 底部安全区至少 24px（实际 56px）
- [x] `npm run lint` 通过
- [x] `npm run build` 通过
- [x] 没有引入新功能
- [x] 没有引入 Zustand / Framer Motion

---

## 修改文件清单

1. **app/globals.css**
   - 移除 `.glass-card` 的 `overflow: hidden`
   - 添加 `--line-height-chinese: 1.6` 变量
   - 更新 `.card-title`、`.task-label`、`.value-statement`、`.principles li`、`.milestone-text` 的行高

2. **components/dashboard/ToolboxCard.tsx**
   - 增加按钮 padding、最小高度、文字大小和行高

3. **components/dashboard/LifeDimensionDock.tsx**
   - 增加卡片 padding、元素间距、文字大小和行高

4. **components/dashboard/StatsBar.tsx**
   - 增加统计栏 padding、统计项间距和文字行高

5. **components/layout/DashboardShell.tsx**
   - 增加容器底部 padding 和 footer 底部间距

---

## 技术债务和后续优化

### 已解决
- ✅ 文字裁切问题
- ✅ 布局安全区问题
- ✅ 中文文本行高问题

### 无需优化
- 当前修复已满足所有需求
- 没有引入新的技术债务
- 代码质量符合项目规范

---

## 总结

本次修复成功解决了所有文字裁切和布局安全区问题，主要通过以下手段：

1. **移除全局 `overflow: hidden`**：解决了根本原因
2. **增加 padding 和间距**：为文字预留足够空间
3. **提升字体大小**：12px → 14px，提升可读性
4. **统一行高标准**：中文文本行高 ≥ 1.6
5. **增加底部安全区**：56px 底部空间，避免被遮挡

所有修改都通过了 lint 和 build 验证，没有引入新功能或依赖，符合 L1 级别小改动的要求。

---

**修复完成时间**: 2026/05/21  
**验证状态**: ✅ 全部通过  
**可以进入 Phase 3**: ✅ 是
