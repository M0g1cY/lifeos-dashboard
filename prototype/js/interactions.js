/**
 * Interactions - 交互效果
 * 处理悬停、点击等用户交互
 */

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initProgressRing();
  initNavigationItems();
  initDimensionCards();
  initTaskItems();
  initToolboxItems();
  initParallaxEffect();
});

/**
 * 初始化进度环
 */
function initProgressRing() {
  const progressRing = new ProgressRing('sailing-progress', {
    size: 180,
    strokeWidth: 14,
    progress: 76,
    duration: 1500,
    colors: ['#60a5fa', '#8b5cf6'],
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  });

  // 延迟 300ms 后开始动画
  setTimeout(() => {
    progressRing.setProgress(76);
  }, 300);
}

/**
 * 初始化导航项交互
 */
function initNavigationItems() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item, index) => {
    // 点击切换激活状态
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // 添加点击反馈动画
      item.style.transform = 'scale(0.95)';
      setTimeout(() => {
        item.style.transform = '';
      }, 150);
    });

    // 默认激活第一个
    if (index === 0) {
      item.classList.add('active');
    }
  });
}

/**
 * 初始化维度卡片交互
 */
function initDimensionCards() {
  const dimensionCards = document.querySelectorAll('.dimension-card');

  dimensionCards.forEach(card => {
    // 悬停时显示详细信息
    card.addEventListener('mouseenter', () => {
      const detail = card.querySelector('.dimension-detail');
      if (detail) {
        detail.style.opacity = '1';
        detail.style.transform = 'translateY(0)';
      }
    });

    card.addEventListener('mouseleave', () => {
      const detail = card.querySelector('.dimension-detail');
      if (detail) {
        detail.style.opacity = '0';
        detail.style.transform = 'translateY(10px)';
      }
    });

    // 点击卡片
    card.addEventListener('click', () => {
      const title = card.querySelector('.dimension-title')?.textContent;
      console.log(`Clicked dimension: ${title}`);

      // 添加点击波纹效果
      createRipple(card, event);
    });
  });
}

/**
 * 初始化任务项交互
 */
function initTaskItems() {
  const taskItems = document.querySelectorAll('.task-item');

  taskItems.forEach(item => {
    const checkbox = item.querySelector('.task-checkbox');

    // 点击任务项切换完成状态
    item.addEventListener('click', (e) => {
      if (e.target === checkbox) return;

      checkbox.checked = !checkbox.checked;
      item.classList.toggle('completed', checkbox.checked);

      // 添加完成动画
      if (checkbox.checked) {
        item.style.animation = 'taskComplete 0.5s ease';
        setTimeout(() => {
          item.style.animation = '';
        }, 500);
      }
    });

    // 复选框变化
    checkbox.addEventListener('change', () => {
      item.classList.toggle('completed', checkbox.checked);
    });
  });
}

/**
 * 初始化工具箱项交互
 */
function initToolboxItems() {
  const toolItems = document.querySelectorAll('.tool-item');

  toolItems.forEach(item => {
    item.addEventListener('click', () => {
      const toolName = item.getAttribute('data-tool');
      console.log(`Clicked tool: ${toolName}`);

      // 添加点击动画
      item.style.transform = 'scale(0.9)';
      setTimeout(() => {
        item.style.transform = '';
      }, 150);
    });
  });
}

/**
 * 初始化视差效果
 */
function initParallaxEffect() {
  const sailingBg = document.querySelector('.sailing-background');
  if (!sailingBg) return;

  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPercent = (clientX / innerWidth - 0.5) * 2;
    const yPercent = (clientY / innerHeight - 0.5) * 2;

    const translateX = xPercent * 20;
    const translateY = yPercent * 20;

    sailingBg.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.1)`;
  });
}

/**
 * 创建波纹效果
 */
function createRipple(element, event) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');

  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

/**
 * 格式化日期
 */
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('zh-CN', options);
}

/**
 * 格式化时间
 */
function formatTime(date) {
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleTimeString('zh-CN', options);
}

// 添加任务完成动画的 CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes taskComplete {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
