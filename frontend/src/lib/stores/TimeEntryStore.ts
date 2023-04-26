import { writable, get } from 'svelte/store';

export type TimeEntry = {
  id: number;
  userId: number;
  taskId: number;
  description: string;
  startTime: Date;
  endTime: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

function createTimeEntryStore() {
  const timeEntries: TimeEntry[] = [
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 2,
      userId: 1,
      description: 'Working on frontend',
      startTime: new Date('2023-03-19T13:00:00'),
      endTime: new Date('2023-03-19T15:00:00'),
      createdAt: new Date('2023-03-19T13:00:00'),
      updatedAt: new Date('2023-03-19T15:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 2,
      userId: 1,
      description: 'Debugging backend code',
      startTime: new Date('2023-03-20T09:00:00'),
      endTime: new Date('2023-03-20T12:00:00'),
      createdAt: new Date('2023-03-20T09:00:00'),
      updatedAt: new Date('2023-03-20T12:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 3,
      userId: 1,
      description: 'Meeting with clients',
      startTime: new Date('2023-03-20T14:00:00'),
      endTime: new Date('2023-03-20T16:00:00'),
      createdAt: new Date('2023-03-20T14:00:00'),
      updatedAt: new Date('2023-03-20T16:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 1,
      userId: 1,
      description: 'Testing new feature',
      startTime: new Date('2023-03-21T11:00:00'),
      endTime: new Date('2023-03-21T13:00:00'),
      createdAt: new Date('2023-03-21T11:00:00'),
      updatedAt: new Date('2023-03-21T13:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 1,
      userId: 1,
      description: 'Debugging test results',
      startTime: new Date('2023-03-21T14:00:00'),
      endTime: new Date('2023-03-21T16:00:00'),
      createdAt: new Date('2023-03-21T14:00:00'),
      updatedAt: new Date('2023-03-21T16:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 1,
      userId: 1,
      description: 'Debugging test results',
      startTime: new Date('2023-03-21T16:30:00'),
      endTime: new Date('2023-03-21T17:10:00'),
      createdAt: new Date('2023-03-21T14:00:00'),
      updatedAt: new Date('2023-03-21T16:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 1,
      userId: 1,
      description: 'Planning next sprint',
      startTime: new Date('2023-03-22T10:00:00'),
      endTime: new Date('2023-03-22T12:00:00'),
      createdAt: new Date('2023-03-22T10:00:00'),
      updatedAt: new Date('2023-03-22T12:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 1,
      userId: 1,
      description: 'Planning next sprint',
      startTime: new Date('2023-04-05T10:00:00'),
      endTime: new Date('2023-04-05T12:00:00'),
      createdAt: new Date('2023-04-05T10:00:00'),
      updatedAt: new Date('2023-04-05T12:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 1,
      userId: 2,
      description: 'Implementing new API',
      startTime: new Date('2023-04-05T13:00:00'),
      endTime: new Date('2023-04-05T15:00:00'),
      createdAt: new Date('2023-04-05T13:00:00'),
      updatedAt: new Date('2023-04-05T15:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 1,
      userId: 3,
      description: 'Refactoring code',
      startTime: new Date('2023-04-05T15:30:00'),
      endTime: new Date('2023-04-05T17:00:00'),
      createdAt: new Date('2023-04-05T15:30:00'),
      updatedAt: new Date('2023-04-05T17:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 1,
      userId: 4,
      description: 'Writing unit tests',
      startTime: new Date('2023-04-05T10:00:00'),
      endTime: new Date('2023-04-05T12:00:00'),
      createdAt: new Date('2023-04-05T10:00:00'),
      updatedAt: new Date('2023-04-05T12:00:00')
    },
    {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 1,
      userId: 5,
      description: 'Debugging code',
      startTime: new Date('2023-04-05T13:30:00'),
      endTime: new Date('2023-04-05T15:00:00'),
      createdAt: new Date('2023-04-05T13:30:00'),
      updatedAt: new Date('2023-04-05T15:00:00')
    }
  ];

  const store = writable(timeEntries);
  const { subscribe, set, update } = store;

  function add2(taskId: number,
    description: string,
    startTime: Date,
    endTime: Date) {
    update((e) => [...e, {
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId,
      userId: 1,
      description,
      startTime,
      endTime,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  }

  function edit(
    timeEntryId: number,
    taskId: number,
    description: string,
    startTime: Date,
    endTime: Date
  ) {
    update((n) => {
      return n.map((element) => {
        if (element.id === timeEntryId) {
          element.taskId = taskId;
          element.description = description;
          element.startTime = startTime;
          element.endTime = endTime;
        }
        return element;
      });
    });
  }

  function del(timeEntryId: number) {
    update((n) => {
      const i = n.findIndex((e) => e.id === timeEntryId);
      n.splice(i, 1);
      return n;
    });
  }

  function lastUpdated(taskId: number) {
    return get(store).filter(e => e.taskId === taskId).map(e => e.endTime).reduce((a, b) => a > b ? a : b);
  }

  return {
    subscribe,
    add: (newEntry: TimeEntry) => update((e) => [...e, newEntry]),
    add2,
    findById: (id: number) => get(store).find((e) => e.id === id),
    edit,
    del,
    lastUpdated
  };
}

export const TimeEntryStore = createTimeEntryStore();
