# UI Components

基础 UI 组件库，从 HTML 原型提取并实现。

## 组件列表

### 1. GlassCard

玻璃拟态卡片组件，用于所有卡片容器。

**Props:**
- `children: React.ReactNode` - 卡片内容
- `className?: string` - 自定义样式类
- `onClick?: () => void` - 点击事件处理

**使用示例:**
```tsx
import { GlassCard } from '@/components/ui';

<GlassCard className="p-6">
  <h3>卡片标题</h3>
  <p>卡片内容</p>
</GlassCard>
```

### 2. CircularProgress

圆形进度环组件，用于显示百分比进度。

**Props:**
- `progress: number` - 进度值（0-100）
- `size?: number` - 直径（px），默认 180
- `strokeWidth?: number` - 描边宽度（px），默认 8
- `className?: string` - 自定义样式类
- `label?: string` - 中心主标签
- `sublabel?: string` - 中心副标签

**使用示例:**
```tsx
import { CircularProgress } from '@/components/ui';

<CircularProgress
  progress={76}
  label="人生进度"
  sublabel="已航行 28 年"
/>
```

### 3. Button

按钮组件，支持多种变体和尺寸。

**Props:**
- `children: React.ReactNode` - 按钮内容
- `variant?: 'primary' | 'secondary' | 'ghost' | 'icon'` - 按钮变体
- `size?: 'sm' | 'md' | 'lg'` - 按钮尺寸
- `disabled?: boolean` - 是否禁用
- `onClick?: () => void` - 点击事件处理
- `className?: string` - 自定义样式类

**Variants:**
- `primary` - 主要按钮（橙色背景）
- `secondary` - 次要按钮（透明背景 + 边框）
- `ghost` - 幽灵按钮（无背景无边框）
- `icon` - 图标按钮（圆形，用于顶部栏）

**使用示例:**
```tsx
import { Button } from '@/components/ui';

// 主要按钮
<Button variant="primary" onClick={() => console.log('clicked')}>
  保存
</Button>

// 图标按钮
<Button variant="icon" size="md">
  <SearchIcon />
</Button>
```

## 测试页��

访问 `/components-test` 查看所有组件的展示和测试。

## 设计规范

所有组件遵循 LifeOS 设计系统：
- 玻璃拟态效果（Glassmorphism）
- 深色太空主题（Deep Space Theme）
- 8pt 网格系统
- 渐变色（蓝色到紫色）
- 平滑过渡动画（300ms cubic-bezier）
