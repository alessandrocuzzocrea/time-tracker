import { writable } from 'svelte/store';
import type { TimeEntry } from '$lib/stores/TimeEntryStore';

function createCurrentTimeEntryStore() {
  const { subscribe, set, update } = writable<TimeEntry>();

  function start(taskId: number, description: string = '') {
    set({
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: taskId,
      userId: 1,
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
