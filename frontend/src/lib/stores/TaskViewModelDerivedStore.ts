import { derived } from 'svelte/store';
import { ProjectStore } from './ProjectStore';
import { TimeEntryStore } from './TimeEntryStore';
import { TaskStore } from './TaskStore';
import { UserStore } from './UserStore';
import type { Task } from './TaskStore';
import type { User } from './UserStore';

export const TaskViewModelDerivedStore = derived(
  [UserStore, ProjectStore, TaskStore, TimeEntryStore],
  ([$UserStore, $ProjectStore, $TaskStore, $TimeEntryStore]) => {
    console.log('TaskViewModelDerivedStore update');
    return $TaskStore.map((task: Task) => {
      const owner = UserStore.findById(task.ownerId);
      const project = ProjectStore.findById(task.projectId);
      const lastUpdated = TimeEntryStore.lastUpdated(task.id);

      return {
        projectId: project?.id,
        projectName: project?.projectName,
        projectColor: project?.projectColor,
        taskId: task.id,
        taskName: task.name,
        taskIcon: task?.icon,
        ownerName: owner?.name,
        ownerPic: owner?.avi,
        lastUpdated
      };
    }).sort((a, b) => {
      const dateA = new Date(a.lastUpdated).getTime();
      const dateB = new Date(b.lastUpdated).getTime();
      return dateB - dateA;
    });
  }
);
