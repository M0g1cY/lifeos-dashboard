'use client';

import { useState } from 'react';
import { mockCoreNavigation } from '@/data/mockLifeData';

export function CoreNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="glass-card core-navigation">
      <h3 className="card-title">核心导航</h3>
      <ul className="nav-list">
        {mockCoreNavigation.map((item, index) => (
          <li
            key={index}
            className={`nav-item${index === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            <span className="nav-label">{item.label}</span>
            <svg className="nav-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </li>
        ))}
      </ul>
    </nav>
  );
}
