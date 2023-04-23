import { writable } from 'svelte/store';

export class SidePaneState {
  id: number = 0;
  state: SidePaneStateEnum = SidePaneStateEnum.Closed;
}

export enum SidePaneStateEnum {
  Closed,
  EditTimeEntry
}

function createStore() {
  const initialState: SidePaneState = {
    id: 0,
    state: SidePaneStateEnum.Closed
  };

  const { subscribe, set } = writable<SidePaneState>(initialState);

  return {
    subscribe,
    editTimeEntry: (timeEntryId: number) => {
      set({
        id: timeEntryId,
        state: SidePaneStateEnum.EditTimeEntry
      });
    },
    closePane: () => {
      set({
        id: 0,
        state: SidePaneStateEnum.Closed
      });
    }
  };
}

export const SidePaneStore = createStore();
