/**
 * DashboardShell - Dashboard 主容器
 *
 * 完全对齐 HTML 原型（prototype/styles.css）的布局结构：
 * - 居中画布容器：width: min(1440px, calc(100vw - 96px)), margin: 0 auto
 * - 三栏 Grid：grid-template-columns: 320px 1fr 320px（固定宽度）
 * - 间距：gap: 24px
 * - 六大维度和统计栏：grid-column: 1 / -1（跨满整行）
 * - 高度策略：min-height: 1080px
 * - 临时调试：outline: 2px solid red（验证居中后移除）
 */

interface DashboardShellProps {
  leftSidebar: React.ReactNode;
  centerArea: React.ReactNode;
  rightSidebar: React.ReactNode;
  footer?: React.ReactNode;
}

export function DashboardShell({
  leftSidebar,
  centerArea,
  rightSidebar,
  footer,
}: DashboardShellProps) {
  return (
    <div
      className="relative z-[1] grid"
      style={{
        width: 'min(1440px, calc(100vw - 96px))',
        margin: '0 auto', // 强制居中
        gridTemplateColumns: '320px 1fr 320px',
        gridTemplateRows: 'auto auto auto',
        gap: '24px',
        paddingTop: '88px',
        paddingBottom: '48px',
        minHeight: '1080px',
      }}
    >
      {/* 左侧栏 */}
      <aside className="flex flex-col gap-[14px]">
        {leftSidebar}
      </aside>

      {/* 中央区域 */}
      <main className="flex items-center justify-center">
        {centerArea}
      </main>

      {/* 右侧栏 */}
      <aside className="flex flex-col gap-[14px]">
        {rightSidebar}
      </aside>

      {/* 全宽 footer（六大维度 + 统计栏） */}
      {footer && (
        <div
          className="flex flex-col gap-[14px]"
          style={{ gridColumn: '1 / -1' }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
