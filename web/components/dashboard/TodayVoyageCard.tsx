'use client';

import { mockTodayTasks } from '@/data/mockLifeData';

interface TodayVoyageCardProps {
  taskStatus?: Record<string, boolean>;
  onTaskToggle?: (id: string) => void;
}

export function TodayVoyageCard({ taskStatus, onTaskToggle }: TodayVoyageCardProps) {
  const status = taskStatus ?? Object.fromEntries(mockTodayTasks.map(t => [t.id, t.completed]));

  return (
    <div className="glass-card today-tasks">
      <h3 className="card-title">今日航行</h3>
      <ul className="task-list">
        {mockTodayTasks.map((task) => (
          <li key={task.id} className={`task-item ${status[task.id] ? 'completed' : ''}`}>
            <input
              type="checkbox"
              id={task.id}
              className="task-checkbox"
              checked={status[task.id]}
              onChange={() => onTaskToggle?.(task.id)}
            />
            <label htmlFor={task.id} className="task-label">{task.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
