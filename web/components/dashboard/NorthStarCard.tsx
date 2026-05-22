'use client';

import { useState } from 'react';
import { mockNorthStar } from '@/data/mockLifeData';

export function NorthStarCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card north-star" onClick={() => setExpanded(prev => !prev)} style={{ cursor: 'pointer' }}>
      <h3 className="card-title">人生北极星</h3>
      <div className="north-star-content">
        <svg className="north-star-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <p className="value-statement">{mockNorthStar.title}</p>
        {expanded && (
          <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '16px', lineHeight: '1.5' }}>
            {mockNorthStar.description}
          </p>
        )}
        <ul className="principles">
          {mockNorthStar.principles.map((principle, index) => (
            <li key={index}>{principle}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
