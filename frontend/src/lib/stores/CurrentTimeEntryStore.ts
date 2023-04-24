import { writable } from 'svelte/store';

function createCurrentTimeEntryStore() {
  const { subscribe, set, update } = writable();

  function start(taskId: number, description: string = '') {
    set({
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: taskId,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'blue',
      taskName: 'Backend',
      description: description,
      startTime: new Date(),
      endTime: null,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  return {
    subscribe,
    set,
    update,
    start
  };
}

export const CurrentTimeEntryStore = createCurrentTimeEntryStore();
