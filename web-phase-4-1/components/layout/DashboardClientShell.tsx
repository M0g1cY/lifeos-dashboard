'use client';

import { DashboardCanvas } from '@/components/layout/DashboardCanvas';
import { VoyageStatusCard } from '@/components/dashboard/VoyageStatusCard';
import { CoreNavigation } from '@/components/dashboard/CoreNavigation';
import { ToolboxCard } from '@/components/dashboard/ToolboxCard';
import { TodayVoyageCard } from '@/components/dashboard/TodayVoyageCard';
import { NorthStarCard } from '@/components/dashboard/NorthStarCard';
import { MilestoneTimeline } from '@/components/dashboard/MilestoneTimeline';
import { LifeDimensionDock } from '@/components/dashboard/LifeDimensionDock';
import { StatsBar } from '@/components/dashboard/StatsBar';
import { mockDimensions, mockTodayTasks } from '@/data/mockLifeData';
import { useLocalStorageState } from '@/lib/useLocalStorageState';

const defaultTaskStatus: Record<string, boolean> = Object.fromEntries(
  mockTodayTasks.map(t => [t.id, t.completed]),
);

export function DashboardClientShell() {
  const [selectedDimensionId, setSelectedDimensionId] = useLocalStorageState<string | null>(
    'lifeos:v1:selectedDimensionId',
    null,
  );
  const [taskStatus, setTaskStatus] = useLocalStorageState<Record<string, boolean>>(
    'lifeos:v1:taskStatus',
    defaultTaskStatus,
  );
  const selectedDimension = mockDimensions.find(d => d.id === selectedDimensionId);

  const handleTaskToggle = (id: string) => {
    setTaskStatus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <DashboardCanvas
      leftSidebar={
        <>
          <VoyageStatusCard />
          <CoreNavigation />
          <ToolboxCard />
        </>
      }
      mainContent={
        <div className="hero-quote">
          {selectedDimension ? (
            <>
              <h2>{selectedDimension.name}</h2>
              <p>{selectedDimension.description}</p>
            </>
          ) : (
            <p>&ldquo;不必追赶所有的浪潮，你只需成为自己的舵手。&rdquo;</p>
          )}
        </div>
      }
      rightSidebar={
        <>
          <TodayVoyageCard taskStatus={taskStatus} onTaskToggle={handleTaskToggle} />
          <NorthStarCard />
          <MilestoneTimeline />
        </>
      }
      dimensionsSection={
        <LifeDimensionDock
          activeDimensionId={selectedDimensionId}
          onDimensionSelect={(id) => setSelectedDimensionId(prev => prev === id ? null : id)}
        />
      }
      statsBar={
        <StatsBar
          completedTaskCount={Object.values(taskStatus).filter(Boolean).length}
          totalTaskCount={mockTodayTasks.length}
        />
      }
    />
  );
}
