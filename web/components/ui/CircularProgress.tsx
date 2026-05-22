'use client';

import { cn } from '@/lib/utils';

interface CircularProgressProps {
  progress: number; // 0-100
  size?: number; // 直径（px），默认 180
  strokeWidth?: number; // 描边宽度（px），默认 8
  className?: string;
  label?: string; // 中心文字
  sublabel?: string; // 副标题
}

/**
 * CircularProgress - 圆形进度环组件
 *
 * 用于航行状态卡片，显示人生进度百分比
 * 使用 SVG circle 元素和 stroke-dasharray 实现进度动画
 */
export function CircularProgress({
  progress,
  size = 180,
  strokeWidth = 8,
  className,
  label,
  sublabel,
}: CircularProgressProps) {
  // 计算圆形参数
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  // 计算进度偏移量（逆时针方向）
  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      {/* SVG 圆形进度环 */}
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        aria-label={`进度 ${progress}%`}
      >
        {/* 背景圆环 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
        />

        {/* 进度圆环（渐变色：蓝色到紫色） */}
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary-400)" />
            <stop offset="100%" stopColor="var(--color-purple-500)" />
          </linearGradient>
        </defs>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="url(#progress-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </svg>

      {/* 中心文字 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-white">{progress}%</span>
        {label && (
          <span className="mt-1 text-sm text-slate-300">{label}</span>
        )}
        {sublabel && (
          <span className="mt-0.5 text-xs text-slate-400">{sublabel}</span>
        )}
      </div>
    </div>
  );
}
