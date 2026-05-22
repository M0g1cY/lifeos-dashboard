'use client';

import { useState } from 'react';
import { mockSailingStatus } from '@/data/mockLifeData';

export function VoyageStatusCard() {
  const [mode, setMode] = useState<'basic' | 'extended'>('basic');
  const remainingYears = mockSailingStatus.lifeExpectancy - mockSailingStatus.age;

  return (
    <div className="glass-card sailing-status">
      <h3 className="card-title">航行状态</h3>

      {/* 圆形进度环 */}
      <div className="progress-ring-container">
        <svg className="progress-ring" width="180" height="180">
          <circle className="progress-ring-bg" cx="90" cy="90" r="75"></circle>
          <circle className="progress-ring-fill" cx="90" cy="90" r="75"></circle>
        </svg>
        <div className="progress-center">
          <span className="progress-value">{mockSailingStatus.lifeProgress}%</span>
          <span className="progress-label">人生进度</span>
        </div>
      </div>

      {/* 子指标（可切换） */}
      <div className="sub-metrics" onClick={() => setMode(prev => prev === 'basic' ? 'extended' : 'basic')} style={{ cursor: 'pointer' }}>
        {mode === 'basic' ? (
          <>
            <div className="metric-item">
              <span className="metric-label">已航行</span>
              <span className="metric-value">{mockSailingStatus.age} 年</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">预计寿命</span>
              <span className="metric-value">{mockSailingStatus.lifeExpectancy} 年</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">剩余航程</span>
              <span className="metric-value">{remainingYears} 年</span>
            </div>
          </>
        ) : (
          <>
            <div className="metric-item">
              <span className="metric-label">航行天数</span>
              <span className="metric-value">{mockSailingStatus.sailingDays}</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">探索地点</span>
              <span className="metric-value">{mockSailingStatus.placesExplored}</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">克服风浪</span>
              <span className="metric-value">{mockSailingStatus.challengesOvercome}</span>
            </div>
          </>
        )}
      </div>

      <p className="status-message">优秀，继续前行！</p>
    </div>
  );
}
