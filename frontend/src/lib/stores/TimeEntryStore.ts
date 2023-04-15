import { writable, derived, get } from 'svelte/store';

type TimeEntry = {
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

function createTimeEntriesStore() {
  const timeEntries: TimeEntry[] = [
    // {
    //   id: 1,
    //   userId: 1,
    //   projectId: 1,
    //   projectName: 'Project 1',
    //   projectColor: 'red',
    //   taskId: 1,
    //   taskName: 'Backend',
    //   description: 'Working on backend',
    //   startTime: new Date('2023-06-19T10:00:00'),
    //   endTime: new Date('2023-06-19T12:00:00'),
    //   createdAt: new Date('2023-06-19T10:00:00'),
    //   updatedAt: new Date('2023-06-19T12:00:00')
    // },
    {
      id: 2,
      taskId: 1,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Working on frontend',
      startTime: new Date('2023-03-19T13:00:00'),
      endTime: new Date('2023-03-19T15:00:00'),
      createdAt: new Date('2023-03-19T13:00:00'),
      updatedAt: new Date('2023-03-19T15:00:00')
    },
    {
      id: 3,
      taskId: 2,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Debugging backend code',
      startTime: new Date('2023-03-20T09:00:00'),
      endTime: new Date('2023-03-20T12:00:00'),
      createdAt: new Date('2023-03-20T09:00:00'),
      updatedAt: new Date('2023-03-20T12:00:00')
    },
    {
      id: 4,
      taskId: 3,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Meeting with clients',
      startTime: new Date('2023-03-20T14:00:00'),
      endTime: new Date('2023-03-20T16:00:00'),
      createdAt: new Date('2023-03-20T14:00:00'),
      updatedAt: new Date('2023-03-20T16:00:00')
    },
    {
      id: 5,
      taskId: 1,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Testing new feature',
      startTime: new Date('2023-03-21T11:00:00'),
      endTime: new Date('2023-03-21T13:00:00'),
      createdAt: new Date('2023-03-21T11:00:00'),
      updatedAt: new Date('2023-03-21T13:00:00')
    },
    {
      id: 6,
      taskId: 1,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Debugging test results',
      startTime: new Date('2023-03-21T14:00:00'),
      endTime: new Date('2023-03-21T16:00:00'),
      createdAt: new Date('2023-03-21T14:00:00'),
      updatedAt: new Date('2023-03-21T16:00:00')
    },
    {
      id: 7,
      taskId: 1,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Debugging test results',
      startTime: new Date('2023-03-21T16:30:00'),
      endTime: new Date('2023-03-21T17:10:00'),
      createdAt: new Date('2023-03-21T14:00:00'),
      updatedAt: new Date('2023-03-21T16:00:00')
    },
    {
      id: 8,
      taskId: 1,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Planning next sprint',
      startTime: new Date('2023-03-22T10:00:00'),
      endTime: new Date('2023-03-22T12:00:00'),
      createdAt: new Date('2023-03-22T10:00:00'),
      updatedAt: new Date('2023-03-22T12:00:00')
    },
    {
      id: 9,
      taskId: 1,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Planning next sprint',
      startTime: new Date('2023-04-05T10:00:00'),
      endTime: new Date('2023-04-05T12:00:00'),
      createdAt: new Date('2023-04-05T10:00:00'),
      updatedAt: new Date('2023-04-05T12:00:00')
    },
    {
      id: 10,
      taskId: 1,
      userId: 2,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Implementing new API',
      startTime: new Date('2023-04-05T13:00:00'),
      endTime: new Date('2023-04-05T15:00:00'),
      createdAt: new Date('2023-04-05T13:00:00'),
      updatedAt: new Date('2023-04-05T15:00:00')
    },
    {
      id: 11,
      taskId: 1,
      userId: 3,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Refactoring code',
      startTime: new Date('2023-04-05T15:30:00'),
      endTime: new Date('2023-04-05T17:00:00'),
      createdAt: new Date('2023-04-05T15:30:00'),
      updatedAt: new Date('2023-04-05T17:00:00')
    },
    {
      id: 12,
      taskId: 1,
      userId: 4,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'red',
      taskName: 'Backend',
      description: 'Writing unit tests',
      startTime: new Date('2023-04-05T10:00:00'),
      endTime: new Date('2023-04-05T12:00:00'),
      createdAt: new Date('2023-04-05T10:00:00'),
      updatedAt: new Date('2023-04-05T12:00:00')
    },
    {
      id: 13,
      taskId: 1,
      userId: 5,
      projectId: 1,
      projectName: 'Project 2',
      projectColor: 'blue',
      taskName: 'Backend',
      description: 'Debugging code',
      startTime: new Date('2023-04-05T13:30:00'),
      endTime: new Date('2023-04-05T15:00:00'),
      createdAt: new Date('2023-04-05T13:30:00'),
      updatedAt: new Date('2023-04-05T15:00:00')
    }
  ];

  const store = writable(timeEntries);
  const { subscribe, set, update } = store;

  return {
    subscribe,
    add: (newEntry) => update((e) => [...e, newEntry])
    // startStop: (entryId) => {
    //     if (entryId === null || entryId === undefined) {
    //         const prevEntry = $store[$store.length - 1];
    //         startTime = Date.now();
    //         endTime = Date.now();
    //         clear = setInterval(() => (endTime = Date.now()), 1000);
    //     } else {
    //         startTime = new Date();
    //         endTime = new Date();
    //         clearInterval(clear);
    //     }
    // }
  };
}

export const TimeEntriesStore = createTimeEntriesStore();

function createCurrentTimeEntryStore() {
  const { subscribe, set, update } = writable();

  return {
    subscribe,
    set,
    update
  };
}

export const TimeEntriesStoreCurrent = createCurrentTimeEntryStore();

export const TimeEntriesStoreByDay = derived(TimeEntriesStore, ($TimeEntriesStore) => {
  return $TimeEntriesStore
    .reduce((acc, entry) => {
      const date = new Date(entry.startTime).toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      });
      const group = acc.find((g) => g.date === date);
      group ? group.entries.push(entry) : acc.push({ date, entries: [entry] });
      return acc;
    }, [])
    .map((group) => {
      group.entries.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
      return group;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});
