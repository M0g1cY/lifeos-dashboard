'use client';

import { useState } from 'react';
import { mockToolboxItems } from '@/data/mockLifeData';

const descriptionMap: Record<string, string> = {
  '时间管理': '番茄钟、日程规划、时间记录',
  '情绪管理': '情绪日记、冥想练习、呼吸训练',
  '知识库': '笔记整理、知识图谱、阅读清单',
  '健康管理': '运动记录、睡眠追踪、饮食日志',
  '财务管理': '收支记录、预算规划、投资追踪',
  '更多工具': '习惯打卡、目标分解、复盘模板',
};

export function ToolboxCard() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="glass-card toolbox">
      <h3 className="card-title">工具箱</h3>
      <div className="tool-grid">
        {mockToolboxItems.map((item, index) => (
          <button
            key={index}
            className={`tool-btn ${index === expandedIndex ? 'expanded' : ''}`}
            onClick={() => setExpandedIndex(prev => prev === index ? null : index)}
          >
            <svg className="tool-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={item.iconPath}></path>
            </svg>
            <span className="tool-label">{item.label}</span>
            {index === expandedIndex && (
              <span className="tool-description">{descriptionMap[item.label]}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
