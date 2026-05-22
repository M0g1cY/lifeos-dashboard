'use client';

import { mockSailingStatus } from '@/data/mockLifeData';

interface StatsBarProps {
  completedTaskCount?: number;
  totalTaskCount?: number;
}

export function StatsBar({ completedTaskCount, totalTaskCount }: StatsBarProps) {
  return (
    <div className="stats-bar glass-card">
      <div className="stat-item">
        <svg className="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span className="stat-value">{mockSailingStatus.sailingDays.toLocaleString()}</span>
        <span className="stat-label">航行天数</span>
      </div>
      <div className="stat-item">
        <svg className="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span className="stat-value">{mockSailingStatus.placesExplored}</span>
        <span className="stat-label">探索地点</span>
      </div>
      <div className="stat-item">
        <svg className="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        <span className="stat-value">{mockSailingStatus.challengesOvercome}</span>
        <span className="stat-label">克服风浪</span>
      </div>
      <div className="stat-item">
        <svg className="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <span className="stat-value">{mockSailingStatus.peopleInspired}</span>
        <span className="stat-label">帮助他人</span>
      </div>
      <div className="stat-item">
        <svg className="stat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
        <span className="stat-value">
          {completedTaskCount != null ? `${completedTaskCount}/${totalTaskCount}` : '晴朗'}
        </span>
        <span className="stat-label">{completedTaskCount != null ? '今日完成' : '今日天气'}</span>
      </div>
    </div>
  );
}
