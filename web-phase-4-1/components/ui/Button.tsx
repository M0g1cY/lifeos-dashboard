'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

/**
 * Button - 按钮组件
 *
 * Variants:
 * - primary: 主要按钮（橙色背景）
 * - secondary: 次要按钮（透明背景 + 边框）
 * - ghost: 幽灵按钮（无背景无边框）
 * - icon: 图标按钮（圆形，用于顶部栏）
 */
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-primary-400',
    ghost: 'bg-transparent text-white hover:bg-white/10',
    icon: 'bg-white/10 text-white hover:bg-white/20 rounded-full p-2',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: variant === 'icon' ? 'w-8 h-8' : 'px-3 py-1.5 text-sm rounded-lg',
    md: variant === 'icon' ? 'w-10 h-10' : 'px-4 py-2 text-base rounded-xl',
    lg: variant === 'icon' ? 'w-12 h-12' : 'px-6 py-3 text-lg rounded-2xl',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
