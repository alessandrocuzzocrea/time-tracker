import { derived } from 'svelte/store';
import { ProjectStore } from './ProjectStore';
import { TaskStore } from './TaskStore';
import { UserStore } from './UserStore';
import type { Task } from './TaskStore';
import type { User } from './UserStore';

// type Task = {
//   id: number;
//   name: string;
//   projectId: number;
//   ownerId: number;
//   assigneeIds?: number[];
// };

// type TaskViewModel = {
//   // id: number;
//   // userId: number;
//   projectId: number;
//   projectName: string;
//   projectColor: string;
//   taskId: number;
//   taskName: string;
//   ownerName: string;
//   ownerPic: string;
//   // description: string;
//   // startTime: Date;
//   // endTime: Date | null;
//   // createdAt: Date;
//   // updatedAt: Date;
// };

export const TaskStoreViewModelDerived = derived(
  [UserStore, ProjectStore, TaskStore],
  ([$UserStore, $ProjectStore, $TaskStore]) => {
    console.log('TaskStoreViewModelDerived update');
    return $TaskStore.map((task: Task) => {
      const owner = UserStore.findById(task.ownerId);
      const project = ProjectStore.findById(task.projectId);

      return {
        projectId: project?.id,
        projectName: project?.projectName,
        projectColor: project?.projectColor,
        taskId: task.id,
        taskName: task.name,
        ownerName: owner?.name,
        ownerPic: owner?.avi
      };
    });
  }
);
