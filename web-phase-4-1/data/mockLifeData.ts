import {
  User,
  LifeDimension,
  Goal,
  Task,
  Milestone,
  SailingStatus,
  NorthStar,
} from '@/types/lifeos';

// 用户信息
export const mockUser: User = {
  id: 'user-1',
  name: '张米杨',
  birthday: new Date('1998-01-15'),
  lifeExpectancy: 80,
};

// 六大维度
export const mockDimensions: LifeDimension[] = [
  {
    id: 'meaning',
    name: '存在意义',
    subtitle: '探索生命的意义与价值',
    icon: 'Compass',
    color: '#8b5cf6',
    progress: 68,
    description: '通过哲学思考、价值观澄清和人生使命探索，找到生命的意义',
    linkedGoals: ['goal-1', 'goal-2'],
  },
  {
    id: 'growth',
    name: '能力成长',
    subtitle: '持续学习与精进',
    icon: 'TrendingUp',
    color: '#3b82f6',
    progress: 72,
    description: '通过阅读、学习、实践和反思，不断提升个人能力',
    linkedGoals: ['goal-3', 'goal-4'],
  },
  {
    id: 'wealth',
    name: '财富安全',
    subtitle: '经济独立与财务自由',
    icon: 'DollarSign',
    color: '#10b981',
    progress: 65,
    description: '通过理财、投资和创业，实现经济独立',
    linkedGoals: ['goal-5'],
  },
  {
    id: 'exploration',
    name: '探索世界',
    subtitle: '体验不同的文化与风景',
    icon: 'MapPin',
    color: '#f59e0b',
    progress: 58,
    description: '通过旅行、阅读和交流，拓展视野',
    linkedGoals: ['goal-6'],
  },
  {
    id: 'connection',
    name: '关系连接',
    subtitle: '建立深度的人际关系',
    icon: 'Users',
    color: '#ec4899',
    progress: 70,
    description: '通过真诚沟通和陪伴，建立有意义的关系',
    linkedGoals: ['goal-7'],
  },
  {
    id: 'wellbeing',
    name: '身心状态',
    subtitle: '保持健康的身心平衡',
    icon: 'Heart',
    color: '#ef4444',
    progress: 75,
    description: '通过运动、冥想和休息，保持身心健康',
    linkedGoals: ['goal-8'],
  },
];

// 目标（示例数据）
export const mockGoals: Goal[] = [
  {
    id: 'goal-1',
    dimensionId: 'meaning',
    title: '完成人生使命探索',
    description: '通过阅读和思考，明确人生使命',
    progress: 60,
    deadline: new Date('2026-12-31'),
    status: 'active',
    createdAt: new Date('2026-01-01'),
  },
  {
    id: 'goal-2',
    dimensionId: 'meaning',
    title: '建立个人价值观体系',
    description: '梳理核心价值观，形成行为准则',
    progress: 45,
    deadline: new Date('2026-09-30'),
    status: 'active',
    createdAt: new Date('2026-02-15'),
  },
  {
    id: 'goal-3',
    dimensionId: 'growth',
    title: '掌握 Next.js 14',
    description: '深入学习 Next.js 14 的 App Router 和 Server Components',
    progress: 75,
    deadline: new Date('2026-06-30'),
    status: 'active',
    createdAt: new Date('2026-03-01'),
  },
  {
    id: 'goal-4',
    dimensionId: 'growth',
    title: '提升 TypeScript 能力',
    description: '掌握高级类型系统和泛型编程',
    progress: 68,
    deadline: new Date('2026-08-31'),
    status: 'active',
    createdAt: new Date('2026-03-15'),
  },
  {
    id: 'goal-5',
    dimensionId: 'wealth',
    title: '建立被动收入渠道',
    description: '通过产品和内容创作，建立稳定的被动收入',
    progress: 52,
    deadline: new Date('2026-12-31'),
    status: 'active',
    createdAt: new Date('2026-01-10'),
  },
  {
    id: 'goal-6',
    dimensionId: 'exploration',
    title: '完成日本深度旅行',
    description: '探索日本文化、美食和自然风光',
    progress: 30,
    deadline: new Date('2026-10-31'),
    status: 'active',
    createdAt: new Date('2026-04-01'),
  },
  {
    id: 'goal-7',
    dimensionId: 'connection',
    title: '深化家人关系',
    description: '每周至少与父母通话一次，定期回家探望',
    progress: 82,
    deadline: null,
    status: 'active',
    createdAt: new Date('2026-01-01'),
  },
  {
    id: 'goal-8',
    dimensionId: 'wellbeing',
    title: '建立健身习惯',
    description: '每周健身 3 次，保持身体健康',
    progress: 78,
    deadline: null,
    status: 'active',
    createdAt: new Date('2026-02-01'),
  },
];

// 今日任务
export const mockTodayTasks: Task[] = [
  {
    id: 'task-1',
    goalId: 'goal-3',
    title: '完成 LifeOS Dashboard 组件开发',
    completed: false,
    dueDate: new Date('2026-05-21'),
    completedAt: null,
    priority: 'high',
  },
  {
    id: 'task-2',
    goalId: 'goal-1',
    title: '阅读《人生算法》第 3 章',
    completed: true,
    dueDate: new Date('2026-05-21'),
    completedAt: new Date('2026-05-21T10:30:00'),
    priority: 'medium',
  },
  {
    id: 'task-3',
    goalId: 'goal-8',
    title: '健身房训练 30 分钟',
    completed: false,
    dueDate: new Date('2026-05-21'),
    completedAt: null,
    priority: 'medium',
  },
  {
    id: 'task-4',
    goalId: 'goal-7',
    title: '给父母打电话',
    completed: false,
    dueDate: new Date('2026-05-21'),
    completedAt: null,
    priority: 'high',
  },
  {
    id: 'task-5',
    goalId: 'goal-4',
    title: '学习 TypeScript 泛型编程',
    completed: false,
    dueDate: new Date('2026-05-21'),
    completedAt: null,
    priority: 'low',
  },
];

// 近期里程碑
export const mockMilestones: Milestone[] = [
  {
    id: 'milestone-1',
    goalId: 'goal-3',
    title: '完成 LifeOS 项目交付',
    completed: false,
    completedAt: null,
    order: 1,
  },
  {
    id: 'milestone-2',
    goalId: 'goal-4',
    title: '获得 TypeScript 专业认证',
    completed: false,
    completedAt: null,
    order: 2,
  },
  {
    id: 'milestone-3',
    goalId: 'goal-6',
    title: '完成京都深度旅行',
    completed: true,
    completedAt: new Date('2026-05-15'),
    order: 3,
  },
  {
    id: 'milestone-4',
    goalId: 'goal-8',
    title: '连续健身 30 天',
    completed: false,
    completedAt: null,
    order: 4,
  },
  {
    id: 'milestone-5',
    goalId: 'goal-5',
    title: '发布第一个付费产品',
    completed: false,
    completedAt: null,
    order: 5,
  },
];

// 航行状态
export const mockSailingStatus: SailingStatus = {
  lifeProgress: 35, // 28岁 / 80岁 ≈ 35%
  age: 28,
  lifeExpectancy: 80,
  sailingDays: 10227, // 28 年 × 365 天
  placesExplored: 36, // 探索过的城市数量
  challengesOvercome: 128, // 克服的重大挑战
  peopleInspired: 56, // 影响过的人数
};

// 人生北极星
export const mockNorthStar: NorthStar = {
  id: 'north-star-1',
  title: '成为有影响力的创造者',
  description: '通过创造有价值的产品和内容，帮助更多人实现自我成长',
  principles: [
    '保持好奇心，持续学习',
    '追求卓越，注重细节',
    '真诚待人，建立信任',
    '长期主义，延迟满足',
  ],
};

// 核心导航
export const mockCoreNavigation = [
  {
    label: '人生愿景',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.72-2.77 0-2.21-1.78-2.96-3.65-3.42z',
    active: true,
  },
  {
    label: '目标管理',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
    active: false,
  },
  {
    label: '习惯系统',
    iconPath: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
    active: false,
  },
  {
    label: '成长记录',
    iconPath: 'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z',
    active: false,
  },
];

// 工具箱
export const mockToolboxItems = [
  {
    label: '时间管理',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
  },
  {
    label: '情绪管理',
    iconPath: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  },
  {
    label: '知识库',
    iconPath: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
  },
  {
    label: '健康管理',
    iconPath: 'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z',
  },
  {
    label: '财务管理',
    iconPath: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
  },
  {
    label: '更多工具',
    iconPath: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
  },
];

