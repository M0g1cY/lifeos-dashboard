# Life OS 设计系统

从 HTML 原型提取并配置到 Next.js 项目的完整设计系统。

## 颜色系统

### 主色调 - 蓝色系
- `--color-primary-300`: #7dd3fc
- `--color-primary-400`: #60a5fa
- `--color-primary-500`: #3b82f6 (主色)
- `--color-primary-600`: #2563eb

### 紫色系 - 渐变和强调
- `--color-purple-400`: #a78bfa
- `--color-purple-500`: #8b5cf6
- `--color-purple-600`: #7c3aed

### 背景色 - 深色太空主题
- `--color-bg-space-start`: #0a1628
- `--color-bg-space-mid`: #0f1f3a
- `--color-bg-space-end`: #1a2744
- `--color-bg-overlay`: rgba(10, 22, 40, 0.85)

### 玻璃拟态效果
- `--color-bg-glass`: rgba(255, 255, 255, 0.08)
- `--color-bg-glass-hover`: rgba(255, 255, 255, 0.12)
- `--color-border-glass`: rgba(255, 255, 255, 0.18)
- `--color-border-glass-hover`: rgba(59, 130, 246, 0.6)

### 文本色
- `--color-text-primary`: #f8fafc
- `--color-text-secondary`: #cbd5e1
- `--color-text-tertiary`: #94a3b8
- `--color-text-muted`: #64748b

### 状态色
- `--color-success`: #10b981
- `--color-warning`: #f59e0b
- `--color-danger`: #ef4444
- `--color-info`: #06b6d4

## 间距系统（8pt 网格）

- `--spacing-1`: 4px
- `--spacing-2`: 8px
- `--spacing-3`: 12px
- `--spacing-4`: 16px
- `--spacing-5`: 20px
- `--spacing-6`: 24px
- `--spacing-8`: 32px
- `--spacing-10`: 40px
- `--spacing-12`: 48px
- `--spacing-16`: 64px
- `--spacing-20`: 80px
- `--spacing-24`: 96px

## 字体系统

### 字体族
- `--font-family-base`: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", sans-serif
- `--font-family-mono`: "SF Mono", "Consolas", "Monaco", monospace

### 字号
- `--font-size-xs`: 12px
- `--font-size-sm`: 14px
- `--font-size-base`: 16px
- `--font-size-lg`: 18px
- `--font-size-xl`: 20px
- `--font-size-2xl`: 24px
- `--font-size-3xl`: 30px
- `--font-size-4xl`: 36px
- `--font-size-5xl`: 48px

### 字重
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

### 行高
- `--line-height-tight`: 1.25
- `--line-height-normal`: 1.5
- `--line-height-relaxed`: 1.75

## 玻璃拟态效果

### 模糊和阴影
- `--glass-blur`: blur(24px) saturate(180%)
- `--glass-shadow`: 0 8px 32px rgba(0, 0, 0, 0.37)
- `--glass-shadow-hover`: 0 12px 48px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.4)

### 圆角
- `--glass-border-radius-sm`: 12px
- `--glass-border-radius`: 16px
- `--glass-border-radius-lg`: 20px

## 过渡动画

- `--transition-fast`: 150ms cubic-bezier(0.4, 0, 0.2, 1)
- `--transition-normal`: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- `--transition-slow`: 500ms cubic-bezier(0.4, 0, 0.2, 1)

## 阴影系统

- `--shadow-sm`: 0 1px 2px rgba(0, 0, 0, 0.05)
- `--shadow-md`: 0 4px 6px rgba(0, 0, 0, 0.1)
- `--shadow-lg`: 0 10px 15px rgba(0, 0, 0, 0.2)
- `--shadow-xl`: 0 20px 25px rgba(0, 0, 0, 0.3)

## Z-index 层级

- `--z-base`: 1
- `--z-dropdown`: 100
- `--z-sticky`: 200
- `--z-modal`: 300
- `--z-tooltip`: 400

## 使用方法

### 1. 玻璃拟态卡片

```tsx
<div className="glass-card p-6">
  <h3 className="text-lg font-semibold">卡片标题</h3>
  <p className="text-sm text-secondary">卡片内容</p>
</div>
```

### 2. 使用 CSS 变量

```css
.custom-element {
  background: var(--color-bg-glass);
  color: var(--color-text-primary);
  padding: var(--spacing-4);
  border-radius: var(--glass-border-radius);
}
```

### 3. 星空背景

星空背景已自动应用到 `body` 元素，无需额外配置。

### 4. 玻璃卡片变体

- `.glass-card-sm` - 小圆角
- `.glass-card-lg` - 大圆角
- `.glass-card-static` - 无悬停效果

## 配置文件

所有设计系统配置位于：
- `app/globals.css` - CSS 变量定义、Tailwind 主题配置、全局样式

## 验收标准

- [x] Tailwind 配置完成，包含所有设计元素
- [x] 全局样式文件创建完成
- [x] `.glass-card` 类可用
- [x] 星空背景渐变可用
- [x] 所有颜色、间距、圆角、阴影都已配置
- [x] `npm run dev` 可以正常运行
- [x] `npm run build` 构建成功

## 注意事项

1. 本项目使用 **Tailwind CSS v4**，配置方式与 v3 不同
2. 使用 `@theme` 指令而不是 `tailwind.config.ts`
3. 所有 CSS 变量都可以在组件中直接使用
4. 玻璃拟态效果需要浏览器支持 `backdrop-filter`
5. 星空背景使用 CSS 动画，性能友好
