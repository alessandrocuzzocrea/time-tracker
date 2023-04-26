import { derived } from 'svelte/store';
import type { TimeEntry } from '$lib/stores/TimeEntryStore';
import { ProjectStore } from './ProjectStore';
import { TaskStore } from './TaskStore';
import { CurrentTimeEntryStore } from './CurrentTimeEntryStore';

export const CurrentTimeEntryDerivedStore = derived(
  [ProjectStore, TaskStore, CurrentTimeEntryStore],
  ([$ProjectStore, $TaskStore, $CurrentTimeEntryStore]) => {
    if ($CurrentTimeEntryStore) {
      const task = TaskStore.findById($CurrentTimeEntryStore.taskId);
      const project = ProjectStore.findById(task?.projectId);

      return {
        id: $CurrentTimeEntryStore.id,
        taskId: $CurrentTimeEntryStore.taskId,
        userId: $CurrentTimeEntryStore.userId,
        projectId: task?.projectId,
        projectName: project?.projectName,
        projectColor: project?.projectColor,
        taskName: task?.name,
        description: $CurrentTimeEntryStore.description,
        startTime: $CurrentTimeEntryStore.startTime,
        endTime: $CurrentTimeEntryStore.endTime,
        createdAt: $CurrentTimeEntryStore.createdAt,
        updatedAt: $CurrentTimeEntryStore.updatedAt
      };
    }
  }
);
