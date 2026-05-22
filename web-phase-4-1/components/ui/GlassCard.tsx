'use client';

import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * GlassCard - 玻璃拟态卡片组件
 *
 * 用于所有卡片容器，提供统一的玻璃拟态效果
 * 样式基于 globals.css 中的 .glass-card 类
 */
export function GlassCard({ children, className, onClick }: GlassCardProps) {
  return (
    <div
      className={cn('glass-card', className)}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
