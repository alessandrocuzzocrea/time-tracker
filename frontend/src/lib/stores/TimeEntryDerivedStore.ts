import { derived } from 'svelte/store';
import { ProjectStore } from './ProjectStore';
import { TaskStore } from './TaskStore';
import { TimeEntryStore } from './TimeEntryStore';

export type TimeEntryViewModel = {
  id: number;
  userId: number;
  projectId: number;
  projectName: string;
  projectColor: string;
  taskId: number;
  taskName: string;
  description: string;
  startTime: Date;
  endTime: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export const TimeEntryDerivedStore = derived(
  [ProjectStore, TaskStore, TimeEntryStore],
  ([$ProjectStore, $TaskStore, $TimeEntryStore]) => {
    return $TimeEntryStore.map((entry) => {
      const task = TaskStore.findById(entry.taskId);
      const project = ProjectStore.findById(task?.projectId);

      return {
        id: entry.id,
        taskId: entry.taskId,
        userId: entry.userId,
        projectId: task?.projectId,
        projectName: project?.projectName,
        projectColor: project?.projectColor,
        taskName: task?.name,
        description: entry.description,
        startTime: entry.startTime,
        endTime: entry.endTime,
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt
      };
    });
  }
);
