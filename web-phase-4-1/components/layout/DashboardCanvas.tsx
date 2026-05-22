/**
 * DashboardCanvas - Dashboard 整体布局骨架
 *
 * 负责三栏 Grid 布局
 * 接收子组件作为 props
 * 保持原 DOM 结构和 class
 */

interface DashboardCanvasProps {
  leftSidebar: React.ReactNode;
  mainContent: React.ReactNode;
  rightSidebar: React.ReactNode;
  dimensionsSection: React.ReactNode;
  statsBar: React.ReactNode;
}

export function DashboardCanvas({
  leftSidebar,
  mainContent,
  rightSidebar,
  dimensionsSection,
  statsBar,
}: DashboardCanvasProps) {
  return (
    <div className="container">
      {/* 左侧栏 */}
      <aside className="sidebar-left">{leftSidebar}</aside>

      {/* 中央区域 */}
      <main className="main-content">{mainContent}</main>

      {/* 右侧栏 */}
      <aside className="sidebar-right">{rightSidebar}</aside>

      {/* 六大维度 */}
      {dimensionsSection}

      {/* 统计栏 */}
      {statsBar}
    </div>
  );
}
