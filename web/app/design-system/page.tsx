import { GlassCard } from '@/components/ui/GlassCard';

export default function DesignSystemDemo() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-shadow">
          Life OS 设计系统演示
        </h1>

        {/* 颜色系统 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">颜色系统</h2>
          <div className="grid grid-cols-4 gap-4">
            <GlassCard className="p-6">
              <div className="w-full h-20 rounded-lg mb-3" style={{ background: 'var(--color-primary-500)' }}></div>
              <p className="text-sm">主色 Primary</p>
              <code className="text-xs text-muted">#3b82f6</code>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="w-full h-20 rounded-lg mb-3" style={{ background: 'var(--color-success)' }}></div>
              <p className="text-sm">成功 Success</p>
              <code className="text-xs text-muted">#10b981</code>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="w-full h-20 rounded-lg mb-3" style={{ background: 'var(--color-warning)' }}></div>
              <p className="text-sm">警告 Warning</p>
              <code className="text-xs text-muted">#f59e0b</code>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="w-full h-20 rounded-lg mb-3" style={{ background: 'var(--color-danger)' }}></div>
              <p className="text-sm">危险 Danger</p>
              <code className="text-xs text-muted">#ef4444</code>
            </GlassCard>
          </div>
        </section>

        {/* 玻璃拟态卡片 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">玻璃拟态卡片</h2>
          <div className="grid grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-2">小圆角卡片</h3>
              <p className="text-sm text-secondary">
                使用 glass-card-sm 类，圆角为 12px
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-2">默认卡片</h3>
              <p className="text-sm text-secondary">
                使用 glass-card 类，圆角为 16px
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-2">大圆角卡片</h3>
              <p className="text-sm text-secondary">
                使用 glass-card-lg 类，圆角为 20px
              </p>
            </GlassCard>
          </div>
        </section>

        {/* 间距系统 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">间距系统（8pt 网格）</h2>
          <GlassCard className="p-6">
            <div className="space-y-3">
              {[1, 2, 3, 4, 6, 8, 12].map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <div
                    className="bg-primary-500 rounded"
                    style={{
                      width: `var(--spacing-${size})`,
                      height: `var(--spacing-${size})`,
                    }}
                  ></div>
                  <span className="text-sm">
                    spacing-{size} = {size * (size === 1 ? 4 : size === 2 ? 8 : size === 3 ? 12 : size === 4 ? 16 : size === 6 ? 24 : size === 8 ? 32 : 48)}px
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* 字体系统 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">字体系统</h2>
          <GlassCard className="p-6">
            <div className="space-y-4">
              <p style={{ fontSize: 'var(--font-size-xs)' }}>Extra Small - 12px</p>
              <p style={{ fontSize: 'var(--font-size-sm)' }}>Small - 14px</p>
              <p style={{ fontSize: 'var(--font-size-base)' }}>Base - 16px</p>
              <p style={{ fontSize: 'var(--font-size-lg)' }}>Large - 18px</p>
              <p style={{ fontSize: 'var(--font-size-xl)' }}>Extra Large - 20px</p>
              <p style={{ fontSize: 'var(--font-size-2xl)' }}>2XL - 24px</p>
              <p style={{ fontSize: 'var(--font-size-3xl)' }}>3XL - 30px</p>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
