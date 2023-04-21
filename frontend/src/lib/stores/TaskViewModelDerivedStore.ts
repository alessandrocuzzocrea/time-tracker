import { derived } from 'svelte/store';
import { ProjectStore } from './ProjectStore';
import { TaskStore } from './TaskStore';
import { UserStore } from './UserStore';
import type { Task } from './TaskStore';
import type { User } from './UserStore';

export const TaskViewModelDerivedStore = derived(
  [UserStore, ProjectStore, TaskStore],
  ([$UserStore, $ProjectStore, $TaskStore]) => {
    console.log('TaskViewModelDerivedStore update');
    return $TaskStore.map((task: Task) => {
      const owner = UserStore.findById(task.ownerId);
      const project = ProjectStore.findById(task.projectId);

      return {
        projectId: project?.id,
        projectName: project?.projectName,
        projectColor: project?.projectColor,
        taskId: task.id,
        taskName: task.name,
        taskIcon: task?.icon,
        ownerName: owner?.name,
        ownerPic: owner?.avi
      };
    });
  }
);
