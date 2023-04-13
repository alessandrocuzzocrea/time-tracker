import { writable } from 'svelte/store';
import { get } from 'svelte/store';

type TimeEntry = {
    id: number;
    userId: number;
    projectId: number;
    projectName: string;
    taskId: number;
    taskName: string;
    description: string;
    startTime: Date;
    endTime: Date;
    createdAt: Date;
    updatedAt: Date;
};

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

// debugger;

export let TimeEntriesStore = writable(timeEntries);

// export const loadCurrentTimeEntry = async () => {
//     return fetch('http://localhost:5000/timeentry/current')
//         .then(res => res.json())
//         .then(data => currentTimeEntry.set(data));
//     // currentTimeEntry.set({
//     //     id: 1,
//     //     taskId: 1,
//     //     description: 'desc',
//     //     start: Date.now(),
//     //     end: Date.now()
//     // })
// }


// export const startTimeEntry = async (taskId, description) => {
//     console.log('start');
//     currentTimeEntry.set({
//         id: 1,
//         taskId: 1,
//         description: 'desc',
//         start: Date.now(),
//         end: Date.now()
//     })
// }
// export const stopTimeEntry = async () => {
//     console.log('stop');
//     fetch(`http://localhost:5000/timeentry/${1}`, {
//         method: 'PUT', body: JSON.stringify(get(currentTimeEntry))
//     })
//         .then(res => res.json())
//         .then(data => currentTimeEntry.set(data));
//     currentTimeEntry.set({})
// }
// export const updateTimeEntry = async (id) => { }


// function createCount() {
//     const { subscribe, set, update } = writable({
//         isPlaying: false,
//         taskId: 1,
//     });

//     return {
//         subscribe,
//         // startStop: () => {update(n => ({ ...n, isPlaying: true }))},
//         // stop: () => update(n => ({ ...n, isPlaying: false })),
//         toggle: () => {
//             update(n => ({ ...n, isPlaying: !n.isPlaying }))
//         }
//     };
// }

// export const count = createCount();
