/**
 * BackgroundScene - 星空背景层
 *
 * 功能：
 * - 固定定位，覆盖整个视口
 * - 深色太空渐变背景（#0a1628 → #1a2744）
 * - z-index: -1（在所有内容下方）
 * - 使用 stars-background CSS 类（已在 globals.css 中定义）
 */

export function BackgroundScene() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: 'url(/images/lifeos-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 深蓝色渐变遮罩，保证文字可读 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(10, 22, 40, 0.7) 0%, rgba(26, 39, 68, 0.8) 100%)',
        }}
      />
    </div>
  );
}
