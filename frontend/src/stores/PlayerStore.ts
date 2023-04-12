import { writable } from 'svelte/store';
import { get } from 'svelte/store';

export let currentTimeEntry = writable({})

export const loadCurrentTimeEntry = async () => {
    fetch('http://localhost:5000/timeentry/current')
        .then(res => res.json())
        .then(data => currentTimeEntry.set(data));
    // currentTimeEntry.set({
    //     id: 1,
    //     taskId: 1,
    //     description: 'desc',
    //     start: Date.now(),
    //     end: Date.now()
    // })
}

loadCurrentTimeEntry();

export const startTimeEntry = async (taskId, description) => {
    console.log('start');
    currentTimeEntry.set({
        id: 1,
        taskId: 1,
        description: 'desc',
        start: Date.now(),
        end: Date.now()
    })
}
export const stopTimeEntry = async () => {
    console.log('stop');
    fetch(`http://localhost:5000/timeentry/${1}`, {
        method: 'PUT', body: JSON.stringify(get(currentTimeEntry))
    })
        .then(res => res.json())
        .then(data => currentTimeEntry.set(data));
    currentTimeEntry.set({})
}
export const updateTimeEntry = async (id) => { }


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
