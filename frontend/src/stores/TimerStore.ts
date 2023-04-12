import { writable } from 'svelte/store';

export default function (options = {}) {
    const { interval = 1000 } = options;

    // Create a custom store with an initial state
    const { subscribe, set, update } = writable({
        time: 0,
        intervalId: null,
        isRunning: false,
    });

    // Start the timer
    function start() {
        update(state => {
            if (!state.isRunning) {
                const intervalId = setInterval(() => {
                    update(state => ({ ...state, time: state.time + interval }));
                }, interval);

                return { ...state, intervalId, isRunning: true };
            }

            return state;
        });
    }

    // Stop the timer
    function stop() {
        update(state => {
            if (state.isRunning) {
                clearInterval(state.intervalId);
                return { ...state, intervalId: null, isRunning: false };
            }

            return state;
        });
    }

    // Reset the timer
    function reset() {
        update(state => {
            if (state.isRunning) {
                clearInterval(state.intervalId);
            }

            return { time: 0, intervalId: null, isRunning: false };
        });
    }

    // Return the custom store with subscribe and additional timer methods
    return { subscribe, start, stop, reset };
}
