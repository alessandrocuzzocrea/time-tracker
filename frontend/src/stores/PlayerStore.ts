import { writable } from 'svelte/store';

function createCount() {
    const { subscribe, set, update } = writable({
        isPlaying: false,
        taskId: 1,
    });

    return {
        subscribe,
        // startStop: () => {update(n => ({ ...n, isPlaying: true }))},
        // stop: () => update(n => ({ ...n, isPlaying: false })),
        toggle: () => {
            update(n => ({ ...n, isPlaying: !n.isPlaying }))
        }
    };
}

export const count = createCount();
