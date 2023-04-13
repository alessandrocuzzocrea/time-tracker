import { writable, derived, get } from 'svelte/store';

type TimeEntry = {
    id: number;
    userId: number;
    projectId: number;
    projectName: string;
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
        {
            "id": 1,
            "userId": 1,
            "projectId": 1,
            "projectName": "Project 1",
            "taskId": 1,
            "taskName": "Backend",
            "description": "Working on backend",
            "startTime": new Date("2022-04-19T10:00:00"),
            "endTime": new Date("2022-04-19T12:00:00"),
            "createdAt": new Date("2022-04-19T10:00:00"),
            "updatedAt": new Date("2022-04-19T12:00:00")
        },
        {
            "id": 2,
            "taskId": 1,
            "userId": 1,
            "projectId": 1,
            "projectName": "Project 1",
            "taskName": "Backend",
            "description": "Working on frontend",
            "startTime": new Date("2022-04-19T13:00:00"),
            "endTime": new Date("2022-04-19T15:00:00"),
            "createdAt": new Date("2022-04-19T13:00:00"),
            "updatedAt": new Date("2022-04-19T15:00:00")
        },
        {
            "id": 3,
            "taskId": 2,
            "userId": 1,
            "projectId": 1,
            "projectName": "Project 1",
            "taskName": "Backend",
            "description": "Debugging backend code",
            "startTime": new Date("2022-04-20T09:00:00"),
            "endTime": new Date("2022-04-20T12:00:00"),
            "createdAt": new Date("2022-04-20T09:00:00"),
            "updatedAt": new Date("2022-04-20T12:00:00")
        },
        {
            "id": 4,
            "taskId": 3,
            "userId": 1,
            "projectId": 1,
            "projectName": "Project 1",
            "taskName": "Backend",
            "description": "Meeting with clients",
            "startTime": new Date("2022-04-20T14:00:00"),
            "endTime": new Date("2022-04-20T16:00:00"),
            "createdAt": new Date("2022-04-20T14:00:00"),
            "updatedAt": new Date("2022-04-20T16:00:00")
        },
        {
            "id": 5,
            "taskId": 1,
            "userId": 1,
            "projectId": 1,
            "projectName": "Project 1",
            "taskName": "Backend",
            "description": "Testing new feature",
            "startTime": new Date("2022-04-21T11:00:00"),
            "endTime": new Date("2022-04-21T13:00:00"),
            "createdAt": new Date("2022-04-21T11:00:00"),
            "updatedAt": new Date("2022-04-21T13:00:00")
        },
        {
            "id": 6,
            "taskId": 1,
            "userId": 1,
            "projectId": 1,
            "projectName": "Project 1",
            "taskName": "Backend",
            "description": "Debugging test results",
            "startTime": new Date("2022-04-21T14:00:00"),
            "endTime": new Date("2022-04-21T16:00:00"),
            "createdAt": new Date("2022-04-21T14:00:00"),
            "updatedAt": new Date("2022-04-21T16:00:00")
        },
        {
            "id": 7,
            "taskId": 1,
            "userId": 1,
            "projectId": 1,
            "projectName": "Project 1",
            "taskName": "Backend",
            "description": "Planning next sprint",
            "startTime": new Date("2022-04-22T10:00:00"),
            "endTime": new Date("2022-04-22T12:00:00"),
            "createdAt": new Date("2022-04-22T10:00:00"),
            "updatedAt": new Date("2022-04-22T12:00:00")
        }
    ];

    const store = writable(timeEntries);
    const { subscribe, set, update } = store;

    return {
        subscribe,
        add: (newEntry) => update((e) => [...e, newEntry]),
        startStop: (entryId) => {
            if (entryId === null || entryId === undefined) {
                const prevEntry = $store[$store.length - 1];
                startTime = Date.now();
                endTime = Date.now();
                clear = setInterval(() => (endTime = Date.now()), 1000);
            } else {
                startTime = new Date();
                endTime = new Date();
                clearInterval(clear);
            }
        }
    }
}

export const TimeEntriesStore = createTimeEntriesStore();

function createCurrentTimeEntryStore() {
    const { subscribe, set, update } = writable();

    return {
        subscribe,
        set,
        update
    }
}

export const TimeEntriesStoreCurrent = createCurrentTimeEntryStore();

export const TimeEntriesStoreByDay = derived(TimeEntriesStore, $TimeEntriesStore => {
    return $TimeEntriesStore
        .reduce((acc, entry) => {
            const date = new Date(entry.startTime).toLocaleDateString();
            const group = acc.find((g) => g.date === date);
            if (group) {
                group.entries.push(entry);
            } else {
                acc.push({ date, entries: [entry] });
            }
            return acc;
        }, [])
        .map(group => {
            group.entries.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
            return group;
        })
        .reverse();
});
