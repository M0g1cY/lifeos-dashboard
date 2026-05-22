/**
 * Progress Ring - 圆形进度环
 * 用于显示人生进度（76%）
 */

class ProgressRing {
  constructor(elementId, options = {}) {
    this.element = document.getElementById(elementId);
    if (!this.element) {
      console.error(`Element with id "${elementId}" not found`);
      return;
    }

    // 配置参数
    this.config = {
      size: options.size || 200,
      strokeWidth: options.strokeWidth || 12,
      progress: options.progress || 0,
      duration: options.duration || 1500,
      colors: options.colors || ['#60a5fa', '#8b5cf6'],
      backgroundColor: options.backgroundColor || 'rgba(255, 255, 255, 0.1)',
      ...options
    };

    this.init();
  }

  init() {
    const { size, strokeWidth } = this.config;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // 创建 SVG 结构
    this.element.innerHTML = `
      <svg width="${size}" height="${size}" class="progress-ring">
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${this.config.colors[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${this.config.colors[1]};stop-opacity:1" />
          </linearGradient>
        </defs>

        <!-- 背景圆环 -->
        <circle
          class="progress-ring-bg"
          cx="${size / 2}"
          cy="${size / 2}"
          r="${radius}"
          fill="none"
          stroke="${this.config.backgroundColor}"
          stroke-width="${strokeWidth}"
        />

        <!-- 进度圆环 -->
        <circle
          class="progress-ring-circle"
          cx="${size / 2}"
          cy="${size / 2}"
          r="${radius}"
          fill="none"
          stroke="url(#progress-gradient)"
          stroke-width="${strokeWidth}"
          stroke-linecap="round"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${circumference}"
          transform="rotate(-90 ${size / 2} ${size / 2})"
        />

        <!-- 中心文本 -->
        <text
          class="progress-ring-text"
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          fill="${this.config.colors[0]}"
          font-size="${size * 0.25}px"
          font-weight="700"
        >
          0%
        </text>
      </svg>
    `;

    this.circle = this.element.querySelector('.progress-ring-circle');
    this.text = this.element.querySelector('.progress-ring-text');
    this.circumference = circumference;
  }

  /**
   * 设置进度（带动画）
   * @param {number} progress - 进度值（0-100）
   */
  setProgress(progress) {
    const targetProgress = Math.min(Math.max(progress, 0), 100);
    const offset = this.circumference - (targetProgress / 100) * this.circumference;

    // 动画进度环
    this.animateCircle(offset);

    // 动画数字
    this.animateNumber(targetProgress);
  }

  /**
   * 动画圆环
   */
  animateCircle(targetOffset) {
    const startOffset = parseFloat(this.circle.style.strokeDashoffset || this.circumference);
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.config.duration, 1);

      // 使用 ease-out 缓动函数
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const currentOffset = startOffset + (targetOffset - startOffset) * easeProgress;
      this.circle.style.strokeDashoffset = currentOffset;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  /**
   * 动画数字
   */
  animateNumber(targetNumber) {
    const startNumber = parseFloat(this.text.textContent) || 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.config.duration, 1);

      // 使用 ease-out 缓动函数
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const currentNumber = startNumber + (targetNumber - startNumber) * easeProgress;
      this.text.textContent = Math.round(currentNumber) + '%';

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  /**
   * 立即设置进度（无动画）
   */
  setProgressInstant(progress) {
    const targetProgress = Math.min(Math.max(progress, 0), 100);
    const offset = this.circumference - (targetProgress / 100) * this.circumference;

    this.circle.style.strokeDashoffset = offset;
    this.text.textContent = Math.round(targetProgress) + '%';
  }
}

// 导出供全局使用
window.ProgressRing = ProgressRing;
