'use client';

import { mockDimensions } from '@/data/mockLifeData';

interface LifeDimensionDockProps {
  activeDimensionId?: string | null;
  onDimensionSelect?: (id: string) => void;
}

// 图标映射
const iconMap: Record<string, React.ReactElement> = {
  Compass: (
    <svg className="dimension-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
  ),
  TrendingUp: (
    <svg className="dimension-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  ),
  DollarSign: (
    <svg className="dimension-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  MapPin: (
    <svg className="dimension-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  Users: (
    <svg className="dimension-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  Heart: (
    <svg className="dimension-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  ),
};

export function LifeDimensionDock({ activeDimensionId, onDimensionSelect }: LifeDimensionDockProps) {
  const activeDimension = mockDimensions.find(d => d.id === activeDimensionId);

  return (
    <div className="dimensions-section">
      {mockDimensions.map((dimension) => (
        <div
          key={dimension.id}
          className={`glass-card dimension-card ${dimension.id === activeDimensionId ? 'active' : ''}`}
          onClick={() => onDimensionSelect?.(dimension.id)}
        >
          {iconMap[dimension.icon]}
          <h4>{dimension.name}</h4>
          <p>{dimension.subtitle}</p>
          <div className="progress-bar">
            <div className="progress" style={{width: `${dimension.progress}%`}}></div>
          </div>
        </div>
      ))}
      {activeDimension && (
        <div className="dimension-detail">
          <p>{activeDimension.description}</p>
        </div>
      )}
    </div>
  );
}
