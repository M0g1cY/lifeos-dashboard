// LifeOS 核心类型定义

// 用户信息
export interface User {
  id: string;
  name: string;
  birthday: Date;
  lifeExpectancy: number; // 预期寿命
}

// 人生维度
export interface LifeDimension {
  id: string;
  name: string; // 存在意义、能力成长、财富安全、探索世界、关系连接、身心状态
  subtitle: string;
  icon: string; // Lucide icon 名称
  color: string; // 十六进制颜色
  progress: number; // 0-100
  description: string;
  linkedGoals: string[]; // 关联的目标 ID
}

// 目标
export interface Goal {
  id: string;
  dimensionId: string;
  title: string;
  description: string;
  progress: number; // 0-100
  deadline: Date | null;
  status: 'active' | 'completed' | 'archived';
  createdAt: Date;
}

// 任务
export interface Task {
  id: string;
  goalId: string | null;
  title: string;
  completed: boolean;
  dueDate: Date | null;
  completedAt: Date | null;
  priority: 'high' | 'medium' | 'low';
}

// 里程碑
export interface Milestone {
  id: string;
  goalId: string;
  title: string;
  completed: boolean;
  completedAt: Date | null;
  order: number;
}

// 航行状态
export interface SailingStatus {
  lifeProgress: number; // 人生进度 0-100
  age: number; // 当前年龄
  lifeExpectancy: number; // 预期寿命
  sailingDays: number; // 航行天数
  placesExplored: number; // 探索地点
  challengesOvercome: number; // 克服风浪
  peopleInspired: number; // 启发他人
}

// 人生北极星（价值观）
export interface NorthStar {
  id: string;
  title: string;
  description: string;
  principles: string[]; // 核心原则
}
