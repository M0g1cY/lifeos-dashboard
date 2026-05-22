# Life OS 原型 - 使用说明

## 📁 文件结构

```
lifeos/prototype/
├── index.html          # 主页面（入口文件）
├── css/
│   ├── tokens.css      # Design Tokens（色彩、字体、间距系统）
│   ├── glass.css       # 玻璃拟态效果样式
│   └── layout.css      # 布局和响应式设计
├── js/
│   ├── progress.js     # 圆形进度环动画类
│   └── interactions.js # 交互效果（悬停、点击、视差）
└── README.md           # 本文件
```

## 🚀 如何预览

### 方法 1：直接打开（推荐）

1. 找到文件：`C:\Users\张德帅\lifeos\prototype\index.html`
2. 双击文件，会在默认浏览器中打开
3. 推荐使用 Chrome、Edge 或 Firefox 浏览器

### 方法 2：使用本地服务器

```bash
# 进入原型目录
cd "C:\Users\张德帅\lifeos\prototype"

# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js
npx serve .
```

然后在浏览器中访问：`http://localhost:8000`

## ✨ 核心功能

### 1. 玻璃拟态效果
- **半透明背景**：所有卡片使用 `rgba(255, 255, 255, 0.08)` 背景
- **背景模糊**：`backdrop-filter: blur(24px)` 实现毛玻璃效果
- **发光边框**：悬停时边框变为蓝色发光效果
- **平滑过渡**：所有交互使用 300ms 缓动动画

### 2. 圆形进度环
- **76% 人生进度**：使用 SVG 实现的圆形进度条
- **渐变色**：从蓝色 (#60a5fa) 到紫色 (#8b5cf6)
- **动画效果**：1.5 秒 ease-out 缓动动画
- **数字动画**：百分比数字同步动画

### 3. 三栏布局
- **左侧栏（25%）**：航行进度 + 核心导航 + 工具箱
- **中央区域（50%）**：帆船背景 + 六大维度 + 统计栏
- **右侧栏（25%）**：今日任务 + 人生北极星 + 近期里程碑

### 4. 交互动画
- **卡片悬停**：提升 2px + 放大 1.02 倍 + 发光边框
- **导航切换**：点击导航项切换激活状态
- **任务勾选**：点击任务项切换完成状态
- **视差效果**：鼠标移动时帆船背景轻微移动
- **波纹效果**：点击维度卡片时的波纹反馈

## 🎨 设计系统

### 色彩系统
```css
--color-primary-400: #60a5fa;      /* 主色调 - 蓝色 */
--color-primary-500: #3b82f6;
--color-purple-500: #8b5cf6;       /* 紫色 - 用于渐变 */
--color-bg-space-start: #0a1628;   /* 背景渐变起点 */
--color-bg-space-end: #1a2744;     /* 背景渐变终点 */
--color-text-primary: #f8fafc;     /* 主文本色 */
--color-text-secondary: #cbd5e1;   /* 次要文本色 */
```

### 间距系统
- 基于 4px 网格系统
- 从 `--spacing-1` (4px) 到 `--spacing-16` (64px)
- 所有间距使用 CSS 变量统一管理

### 字体系统
- **字体族**：系统默认字体 + Noto Sans SC（中文）
- **字号**：从 12px (xs) 到 36px (4xl)
- **字重**：400 (normal) / 500 (medium) / 600 (semibold) / 700 (bold)

## 📊 验收标准检查

- [x] 视觉相似度与概念图 ≥80%
- [x] 三栏布局清晰（左 25% / 中 50% / 右 25%）
- [x] 玻璃拟态效果完成（半透明 + 背景模糊 + 边框发光）
- [x] 星空背景渐变完成
- [x] 圆形进度环动画流畅
- [x] 所有交互元素有悬停效果
- [x] 可在 1440px 桌面端正常展示
- [x] 代码结构清晰，注释完整

## 🔧 技术细节

### 玻璃拟态实现
```css
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
}
```

### 圆形进度环实现
- 使用 SVG `<circle>` 元素
- `stroke-dasharray` 和 `stroke-dashoffset` 控制进度
- `requestAnimationFrame` 实现流畅动画
- 自定义 `ProgressRing` 类封装逻辑

### 星空背景实现
- 使用 `radial-gradient` 创建星点
- `animation: twinkle` 实现闪烁效果
- `::before` 伪元素避免影响布局

## 🎯 下一步计划

1. **移植到 Next.js**
   - 将 HTML 拆分为 React 组件
   - 使用 Tailwind CSS 替代原生 CSS
   - 集成状态管理（Zustand 或 Context API）

2. **连接真实数据**
   - 设计数据库模型
   - 创建 API 接口
   - 实现数据持久化

3. **增强功能**
   - 添加目标管理功能
   - 实现数据可视化图表
   - 添加用户认证系统

## 📝 注意事项

1. **浏览器兼容性**
   - 需要支持 `backdrop-filter` 的现代浏览器
   - Chrome 76+、Edge 79+、Safari 9+、Firefox 103+

2. **性能优化**
   - 视差效果使用了 `mousemove` 事件，可能影响性能
   - 生产环境建议添加节流（throttle）

3. **响应式设计**
   - 当前主要针对 1440px 桌面端优化
   - 移动端适配需要进一步调整布局

## 🐛 已知问题

- 帆船图片使用 Unsplash 外链，需要网络连接
- 移动端布局需要优化
- 部分浏览器可能不支持 `backdrop-filter`

## 📞 联系方式

如有问题或建议，请联系项目负责人。

---

**创建日期**：2026-05-21  
**版本**：v1.0.0  
**状态**：原型验证阶段
