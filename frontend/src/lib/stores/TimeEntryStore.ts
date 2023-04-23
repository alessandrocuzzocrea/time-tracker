import { writable, derived, get } from 'svelte/store';

export type TimeEntry = {
  id: number;
  userId: number;
  // projectId: number;
  // projectName: string;
  // projectColor: string;
  taskId: number;
  // taskName: string;
  description: string;
  startTime: Date;
  endTime: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

function createTimeEntryStore() {
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: 2,
      userId: 1,
      projectId: 2,
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
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

  function edit(
    timeEntryId: number,
    description: string,
    startTime: Date,
    endTime: Date) {
    update(n => {
      console.log(`edit: ${timeEntryId}`);
      let timeEntry = n.find((e) => e.id === timeEntryId);
      const index = n.findIndex(item => item.id === timeEntryId);
      const newTimeEntry =
      {
        id: timeEntryId,
        description: description,
        userId: 1,
        taskId: 1,
        startTime: new Date('2023-03-20T09:00:00'),
        endTime: new Date('2023-03-20T12:00:00'),
        createdAt: new Date('2023-03-20T09:00:00'),
        updatedAt: new Date('2023-03-20T12:00:00')
      }

      n.splice(index, 1, ...[newTimeEntry]);
      return n;
    })
  }

  return {
    subscribe,
    add: (newEntry: TimeEntry) => update((e) => [...e, newEntry]),
    findById: (id: number) => get(store).find((e) => e.id === id),
    edit
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

export const TimeEntryStore = createTimeEntryStore();

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
    start,

  };
}

export const TimeEntriesCurrentStore = createCurrentTimeEntryStore();
