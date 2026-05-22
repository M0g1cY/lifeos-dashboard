# PRD: lifeos - 人生操作系统

**Status**: Draft  
**Author**: Product Agent  
**Last Updated**: 2026-05-21  
**Version**: 1.0  
**Stakeholders**: MagicY（开发者 + 用户）

---

## 1. Problem Statement（问题陈述）

### 核心问题
现有的目标管理工具（Notion、Todoist、Habitica）存在以下痛点：

1. **缺乏整体视角**：只关注任务和习惯，看不到人生全局
2. **缺乏情感连接**：冷冰冰的列表，没有激励感和仪式感
3. **缺乏长期导向**：聚焦短期任务，忽略人生愿景和价值观
4. **视觉体验平庸**：界面设计千篇一律，缺乏个性和美感

### 目标用户
**自己**（张米杨）：
- 2024届临床医学本科，转型跨境电商 + AI 方向
- 全栈开发者，注重代码质量和架构设计
- Claude Code 重度用户，追求精品级个人工具
- 需要一个能够整合人生愿景、目标、习惯、成长记录的系统

### 不解决的代价
- 在琐碎任务中迷失方向，忘记"为什么出发"
- 目标管理碎片化，无法形成系统性的人生操作系统
- 缺乏仪式感和激励感，难以坚持长期目标

### Evidence（证据）

**User research（用户研究）**: 
- 自我访谈：现有工具无法满足"人生全局视角 + 情感连接 + 精品视觉"的需求

**Behavioral data（行为数据）**: 
- 使用 Notion 管理目标，但打开率逐渐降低（从每天 3 次降到每周 1 次）
- 原因：界面缺乏吸引力，没有"想打开看看"的冲动

**Competitive signal（竞争信号）**: 
- Notion：功能强大但视觉平庸，缺乏情感连接
- Habitica：游戏化但幼稚，不适合成年人
- Reflect、Mem：聚焦笔记，缺乏目标管理
- **市场空白**：精品级、视觉震撼、整合人生全局的个人 Life OS

---

## 2. Goals & Success Metrics（目标与成功指标）

| Goal（目标） | Metric（指标） | Current Baseline（当前基线） | Target（目标值） | Measurement Window（度量窗口） |
|------|--------|-----------------|--------|--------------------|
| 提升打开率 | 每日打开次数 | 0.14 次/天（Notion） | 3 次/天 | 上线后 30 天 |
| 提升目标完成率 | 月度目标完成率 | 40% | 70% | 上线后 90 天 |
| 提升使用时长 | 平均停留时长 | 2 分钟 | 10 分钟 | 上线后 60 天 |
| 提升情感连接 | 主观满意度（1-10） | 6 分 | 9 分 | 上线后 30 天 |

---

## 3. Non-Goals（不做的事）

明确说明本次迭代不会涉及的内容：

- ❌ **不做多人协作**：这是个人工具，不需要团队功能
- ❌ **不做移动端 App**：MVP 阶段只做 Web 端（响应式适配移动浏览器即可）
- ❌ **不做社交功能**：不需要分享、点赞、评论
- ❌ **不做 AI 推荐**：V1 专注核心功能，AI 功能延后到 V2
- ❌ **不做复杂的数据分析**：基础统计即可，不做 BI 级别的分析
- ❌ **不做云同步**：MVP 阶段使用 LocalStorage，云同步延后到 V2

---

## 4. User Personas & Stories（用户画像与故事）

### Primary Persona（主要画像）
**张米杨（MagicY）** — 24岁，全栈开发者，跨境电商从业者，追求精品级个人工具

**核心需求**：
- 看到人生全局：六大维度（存在意义、能力成长、财富安全、探索世界、关系连接、身心状态）
- 感受航海隐喻：人生如航海，目标是北极星，任务是航行日志
- 享受视觉美感：深色太空主题 + 玻璃拟态 + 精致动画
- 快速聚焦今日：今日任务清单 + 近期里程碑

---

### 核心用户故事及验收标准

#### Story 1: 查看人生全局
**作为** 用户，**我想要** 在一个页面看到人生六大维度的进度，**以便** 了解自己在哪些方面做得好、哪些方面需要加强。

**Acceptance Criteria（验收标准）**:
- [ ] Given 用户打开首页，when 页面加载完成，then 显示六大维度卡片（存在意义、能力成长、财富安全、探索世界、关系连接、身心状态）
- [ ] Given 每个维度卡片，when 鼠标悬停，then 显示该维度的详细说明和当前进度
- [ ] Given 用户点击维度卡片，when 点击事件触发，then 跳转到该维���的详情页面
- [ ] Performance: 页面加载时间 < 1s（本地 LocalStorage）

#### Story 2: 管理今日任务
**作为** 用户，**我想要** 在右侧栏看到今日任务清单，**以便** 快速聚焦今天要做的事情。

**Acceptance Criteria（验收标准）**:
- [ ] Given 用户打开首页，when 页面加载完成，then 右侧栏显示"今日航行任务"清单
- [ ] Given 任务清单，when 用户点击任务，then 标记为完成/未完成（带动画效果）
- [ ] Given 任务清单，when 用户添加新任务，then 实时更新列表并保存到 LocalStorage
- [ ] Given 任务清单，when 所有任务完成，then 显示庆祝动画

#### Story 3: 查看航行状态
**作为** 用户，**我想要** 在左侧栏看到人生进度（圆形进度环��，**以便** 了解自己已经走过了多少人生旅程。

**Acceptance Criteria（验收标准）**:
- [ ] Given 用户打开首页，when 页面加载完成，then 左侧栏显示圆形进度环（76% 人生进度）
- [ ] Given 圆形进度环，when 鼠标悬停，then 显示详细计算逻辑（基于年龄和预期寿命）
- [ ] Given 圆形进度环，when 页面加载，then 播放进度动画（从 0% 到当前值）
- [ ] Given 三个子指标（已航行、剩余时间、累计成长），when 数据更新，then 实时刷新显示

#### Story 4: 设置人生北极星
**作为** 用户，**我想要** 在右侧栏设置"人生北极星"（核心价值观），**以便** 时刻提醒自己什么是最重要的。

**Acceptance Criteria（验收标准）**:
- [ ] Given 用户打开首页，when 页面加载完成，then 右侧栏显示"人生北极星"卡片
- [ ] Given 人生北极星卡片，when 用户点击编辑，then 弹出编辑弹窗（支持 Markdown）
- [ ] Given 编辑弹窗，when 用户保存，then 更新显示并保存到 LocalStorage
- [ ] Given 人生北极星卡片，when 内容超过 3 行，then 显示"展开"按钮

#### Story 5: 查看近期里程碑
**作为** 用户，**我想要** 在右侧栏看到近期里程碑，**以便** 了解接下来的重要节点。

**Acceptance Criteria（验收标准）**:
- [ ] Given 用户打开首页，when 页面加载完成，then 右侧栏显示"近期里程碑"列表
- [ ] Given 里程碑列表，when 用户添加新里程碑，then 实时更新列表并保存到 LocalStorage
- [ ] Given 里程碑列表，when 里程碑到期，then 高亮显示并发送通知
- [ ] Given 里程碑列表，when 用户完成里程碑，then 播放庆祝动画并归档

---

## 5. Solution Overview（方案概述）

### 整体布局
采用**三栏布局**（左侧栏 25% + 中央区域 50% + 右侧栏 25%）：

**左侧栏**：
- 航行状态卡片（圆形进度环 + 三个子指标）
- 核心导航（人生愿景、目标管理、习惯系统、成长记录）
- 工具箱（6个图标按钮：设置、数据导出、主题切换、帮助、反馈、关于）

**中央区域**：
- 帆船背景图（全屏，深色太空主题）
- 六大维度卡片（3x2 网格布局，玻璃拟态效果）
  - 存在意义、能力成长、财富安全
  - 探索世界、关系连接、身心状态
- 底部数据统计栏（5个指标：航行天数、完成任务数、成长指数、健康指数、幸福指数）

**右侧栏**：
- 今日航行任务清单（可勾选、可添加、可删除）
- 人生北极星（核心价值观，可编辑）
- 近期里程碑（时间线展示，可添加、可完成）

### 视觉设计
- **背景**：深蓝色星空渐变（#0a1628 → #1a2744）+ 星星粒子动画
- **卡片**：玻璃拟态效果（backdrop-filter: blur(20px) + 半透明白色边框）
- **字体**：Inter（英文）+ 思源黑体（中文），Body ≥ 24px
- **配色**：60-30-10 法则
  - 主色 60%：深蓝色（#0a1628）
  - 辅助色 30%：浅蓝色（#3b82f6）
  - 强调色 10%：橙色（#f59e0b，用于 CTA 和重要提示）
- **动画**：Framer Motion 实现页面加载、卡片悬停、任务完成等动画

### Key Design Decisions（关键设计决策）

**Decision 1**: 采用三栏布局而非单栏布局
- **理由**：三栏布局可以同时展示"全局视角（中央）+ 当前状态（左侧）+ 今日聚焦（右侧）"，符合"人生操作系统"的定位
- **取舍**：牺牲了移动端的原生体验（需要响应式适配），但桌面端体验更好

**Decision 2**: 使用 LocalStorage 而非云同步
- **理由**：MVP 阶段快速验证核心功能，避免后端开发的复杂度
- **取舍**：无法跨设备同步，但可以通过"数据导出/导入"功能缓解

**Decision 3**: 航海隐喻而非其他隐喻（如游戏、花园）
- **理由**：航海隐喻更符合"长期主义 + 探索未知 + 应对风浪"的人生哲学
- **取舍**：隐喻可能不被所有人理解，但对目标用户（自己）来说是最合适的

**Decision 4**: 六大维度而非其他维度划分
- **理由**：参考《人生算法》《掌控习惯》等书籍，六大维度覆盖了人生的核心领域
- **取舍**：维度划分是主观的，但对目标用户（自己）来说是经过深思熟虑的

---

## 6. Technical Considerations（技术考量）

### Dependencies（依赖）
| 依赖 | 用途 | Owner | Timeline Risk |
|------|------|-------|---------------|
| Next.js 14 | 核心框架 | Frontend Agent | Low |
| Tailwind CSS | 样式系统 | Frontend Agent | Low |
| Framer Motion | 动画库 | Frontend Agent | Low |
| Zustand | 状态管理 | Frontend Agent | Low |
| Recharts | 数据可视化 | Frontend Agent | Medium（学习曲线） |

### Known Risks（已知风险）
| Risk（风险） | Likelihood（可能性） | Impact（影响） | Mitigation（缓解措施） |
|------|------------|--------|------------|
| 玻璃拟态效果在低端设备上性能差 | Medium | Medium | 提供"性能模式"关闭动画和模糊效果 |
| LocalStorage 数据丢失 | Low | High | 提供"数据导出"功能，定期提醒备份 |
| 响应式适配复杂度高 | High | Medium | 先做桌面端，移动端采用简化布局 |
| 动画过多影响性能 | Medium | Low | 使用 Framer Motion 的性能优化 API |

### Open Questions（待解决问题，开发前必须解决）
- [ ] 圆形进度环的计算逻辑：基于年龄（需要用户输入生日）还是基于固定值？ — Owner: Product Agent — Deadline: 2026-05-23
- [ ] 六大维度的进度如何计算：手动输入还是基于任务完成情况自动计算？ — Owner: Product Agent — Deadline: 2026-05-23
- [ ] 数据导出格式：JSON 还是 CSV？ — Owner: Frontend Agent — Deadline: 2026-05-25

---

## 7. 页面路由规划

### MVP 版本（V1.0）
- `/` - Dashboard 首页（核心）
- `/vision` - 人生愿景（核心）
- `/goals` - 目标管理（核心）

### V2.0 版本
- `/habits` - 习惯系统
- `/growth` - 成长记录
- `/knowledge` - 知识库

### V3.0 版本
- `/finance` - 财务管理
- `/health` - 健康管理
- `/settings` - 系统设置

### 路由结构
```
/                    首页仪表盘
├── /vision          人生愿景
├── /goals           目标管理
│   ├── /goals/:id   目标详情
│   └── /goals/new   新建目标
├── /habits          习惯系统
├── /growth          成长记录
├── /knowledge       知识库
├── /finance         财务管理
├── /health          健康管理
└── /settings        系统设置
```

---

## 8. Launch Plan（发布计划）

| Phase（阶段） | Date（日期） | Audience（受众） | Success Gate（通过标准） |
|-------|------|----------|-------------|
| Phase 0: 项目规划 | 2026-05-21 | 自己 | 规划文档完成并确认 |
| Phase 1: HTML 原型 | 2026-05-22 - 05-25 | 自己 | 视觉效果满意，动画流畅 |
| Phase 2: Next.js 框架 | 2026-05-26 - 06-01 | 自己 | 基础组件库完成，设计���统���建 |
| Phase 3: 核心功能 | 2026-06-02 - 06-15 | 自己 | 所有核心功能可用，数据持久化正常 |
| Phase 4: 视觉增强 | 2026-06-16 - 06-30 | 自己 | 动画完善，响应式适配完成 |
| V1.0 发布 | 2026-07-01 | 自己 | 所有功能完整，无 P0 Bug |

**Rollback Criteria（回滚标准）**: 
- 如果核心功能（任务管理、数据持久化）出现 Bug，立即回滚到上一个稳定版本
- 如果性能问题导致页面加载时间 > 3s，关闭动画效果

---

## 8. Launch Plan（发布计划）

| Phase（阶段） | Date（日期） | Audience（受众） | Success Gate（通过标准） |
|-------|------|----------|-------------|
| Phase 0: 项目规划 | 2026-05-21 | 自己 | 规划文档完成并确认 |
| Phase 1: HTML 原型 | 2026-05-22 - 05-25 | 自己 | 视觉效果满意，动画流畅 |
| Phase 2: Next.js 框架 | 2026-05-26 - 06-01 | 自己 | 基础组件库完成，设计系统搭建 |
| Phase 3: 核心功能 | 2026-06-02 - 06-15 | 自己 | 所有核心功能可用，数据持久化正常 |
| Phase 4: 视觉增强 | 2026-06-16 - 06-30 | 自己 | 动画完善，响应式适配完成 |
| V1.0 发布 | 2026-07-01 | 自己 | 所有功能完整，无 P0 Bug |

**Rollback Criteria（回滚标准）**: 
- 如果核心功能（任务管理、数据持久化）出现 Bug，立即回滚到上一个稳定版本
- 如果性能问题导致页面加载时间 > 3s，关闭动画效果

---

## 9. Appendix（附录）

### 设计稿
- 概念图：`C:\Users\张德帅\Desktop\人生操作系统.png`
- Figma 链接：待创建

### 竞品分析
| 产品 | 优势 | 劣势 | 借鉴点 |
|------|------|------|--------|
| Notion | 功能强大、灵活 | 视觉平庸、学习曲线陡峭 | 数据结构设计 |
| Habitica | 游戏化、有趣 | 幼稚、不适合成年人 | 激励机制 |
| Reflect | 视觉精美、快速 | 只做笔记，缺乏目标管理 | 视觉设计 |
| Mem | AI 驱动、智能 | 价格昂贵、功能单一 | AI 功能（V2） |

### 参考资料
- 《人生算法》：六大维度的理论基础
- 《掌控习惯》：习惯系统的设计灵感
- Dribbble：玻璃拟态设计参考
- Awwwards：动画效果参考

### 数据模型（初步）
```typescript
interface LifeOS {
  user: User;
  dimensions: Dimension[];
  goals: Goal[];
  habits: Habit[];
  tasks: Task[];
  milestones: Milestone[];
  northStar: string;
}

interface User {
  id: string;
  name: string;
  birthday: Date;
  lifeExpectancy: number; // 预期寿命
}

interface Dimension {
  id: string;
  name: string; // 存在意义、能力成长、财富安全、探索世界、关系连接、身心状态
  progress: number; // 0-100
  description: string;
}

interface Goal {
  id: string;
  dimensionId: string;
  title: string;
  description: string;
  progress: number;
  deadline: Date | null;
  status: 'active' | 'completed' | 'archived';
}

interface Task {
  id: string;
  goalId: string | null;
  title: string;
  completed: boolean;
  dueDate: Date | null;
  priority: 'high' | 'medium' | 'low';
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
}
```
