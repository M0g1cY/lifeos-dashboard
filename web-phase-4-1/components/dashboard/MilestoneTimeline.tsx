'use client';

import { useState } from 'react';
import { mockMilestones } from '@/data/mockLifeData';

export function MilestoneTimeline() {
  const [status, setStatus] = useState<Record<string, boolean>>(
    () => Object.fromEntries(mockMilestones.map(m => [m.id, m.completed]))
  );

  return (
    <div className="glass-card milestones">
      <h3 className="card-title">航行里程碑</h3>
      <ul className="milestone-list">
        {mockMilestones.map((milestone) => (
          <li
            key={milestone.id}
            className={`milestone-item ${status[milestone.id] ? 'completed' : ''}`}
            onClick={() => setStatus(prev => ({ ...prev, [milestone.id]: !prev[milestone.id] }))}
          >
            <div className="milestone-dot"></div>
            <span className="milestone-text">{milestone.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
