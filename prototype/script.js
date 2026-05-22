// ========================================
// 人生操作系统 - Life OS
// 交互逻辑和动画
// ========================================

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {

  // ========== 初始化 ==========
  initProgressRing();
  initTaskCheckboxes();
  initNavigationItems();
  initToolButtons();
  initDimensionCards();
  initMilestones();
  initTopBarButtons();

  // ========== 圆形进度环动画 ==========
  function initProgressRing() {
    const progressRing = document.querySelector('.progress-ring-fill');
    if (!progressRing) return;

    // 76% 进度对应的 stroke-dashoffset
    // 圆周长 = 2 * π * r = 2 * 3.14159 * 75 ≈ 471
    // 76% 进度 = 471 * (1 - 0.76) ≈ 113
    const circumference = 2 * Math.PI * 75;
    const progress = 0.76;
    const offset = circumference * (1 - progress);

    progressRing.style.strokeDasharray = circumference;
    progressRing.style.strokeDashoffset = offset;
  }

  // ========== 任务复选框交互 ==========
  function initTaskCheckboxes() {
    const taskItems = document.querySelectorAll('.task-item');

    taskItems.forEach(item => {
      const checkbox = item.querySelector('.task-checkbox');
      const label = item.querySelector('.task-label');

      if (!checkbox || !label) return;

      // 点击整个任务项切换状态
      item.addEventListener('click', function(e) {
        if (e.target === checkbox) return; // 避免重复触发

        checkbox.checked = !checkbox.checked;
        toggleTaskCompletion(item, checkbox.checked);
      });

      // 复选框变化时更新状态
      checkbox.addEventListener('change', function() {
        toggleTaskCompletion(item, this.checked);
      });
    });
  }

  function toggleTaskCompletion(taskItem, isCompleted) {
    if (isCompleted) {
      taskItem.classList.add('completed');
    } else {
      taskItem.classList.remove('completed');
    }
  }

  // ========== 导航项交互 ==========
  function initNavigationItems() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
      item.addEventListener('click', function() {
        // 移除所有 active 状态
        navItems.forEach(nav => nav.classList.remove('active'));
        // 添加当前 active 状态
        this.classList.add('active');

        // 这里可以添加页面跳转或内容切换逻辑
        console.log('导航到:', this.querySelector('.nav-label').textContent);
      });
    });
  }

  // ========== 工具按钮交互 ==========
  function initToolButtons() {
    const toolButtons = document.querySelectorAll('.tool-btn');

    toolButtons.forEach(button => {
      button.addEventListener('click', function() {
        const toolName = this.querySelector('.tool-label').textContent;
        console.log('打开工具:', toolName);

        // 添加点击反馈动画
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      });
    });
  }

  // ========== 维度卡片交互 ==========
  function initDimensionCards() {
    const dimensionCards = document.querySelectorAll('.dimension-card');

    dimensionCards.forEach(card => {
      card.addEventListener('click', function() {
        const title = this.querySelector('h4').textContent;
        console.log('查看维度详情:', title);

        // 这里可以添加弹窗或页面跳转逻辑
      });
    });
  }

  // ========== 顶部栏按钮交互 ==========
  function initTopBarButtons() {
    const iconButtons = document.querySelectorAll('.top-bar .icon-btn');

    iconButtons.forEach(button => {
      button.addEventListener('click', function() {
        console.log('顶部栏按钮点击');

        // 添加点击反馈动画
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      });
    });
  }

  // ========== 里程碑交互 ==========
  function initMilestones() {
    const milestoneItems = document.querySelectorAll('.milestone-item');

    milestoneItems.forEach(item => {
      item.addEventListener('click', function() {
        const text = this.querySelector('.milestone-text').textContent;
        console.log('查看里程碑:', text);

        // 这里可以添加详情展示逻辑
      });
    });
  }

  // ========== 平滑滚动 ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========== 性能优化：懒加载图片 ==========
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ========== 控制台输出 ==========
  console.log('%c人生操作系统 Life OS', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
  console.log('%c已加载完成 ✓', 'font-size: 14px; color: #10b981;');

});
