import { derived } from 'svelte/store';
import { ProjectStore } from './ProjectStore';
import { TaskStore } from './TaskStore';

type Task = {
  id: number;
  name: string;
  projectId: number;
  ownerId: number;
  assigneeIds?: number[];
};

type TaskViewModel = {
  // id: number;
  // userId: number;
  projectId: number;
  projectName: string;
  projectColor: string;
  taskId: number;
  taskName: string;
  ownerName: string;
  // description: string;
  // startTime: Date;
  // endTime: Date | null;
  // createdAt: Date;
  // updatedAt: Date;
};

export const TaskStoreViewModelDerived = derived(
  [ProjectStore, TaskStore],
  ([$ProjectStore, $TaskStore]) => {
    console.log('TaskStoreViewModelDerived update');
    return $TaskStore.map((task: Task) => {
      const project = ProjectStore.findById(task.projectId);

      return {
        projectId: project?.id,
        projectName: project?.projectName,
        projectColor: project?.projectColor,
        taskId: task.id,
        taskName: task.name,
        ownerName: 'ownerName'
      };
    });
  }
);
