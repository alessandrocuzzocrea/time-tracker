import { writable, get } from 'svelte/store';
import avi1 from '$lib/assets/avi-1.jpg';
import avi2 from '$lib/assets/avi-2.jpg';
import avi3 from '$lib/assets/avi-3.jpg';

export type User = {
  id: number;
  name: string;
  avi: string;
};

function createUserStore() {
  const users: User[] = [
    {
      id: 1,
      name: 'Purin',
      avi: avi1
    },
    {
      id: 2,
      name: 'Nagisa',
      avi: avi2
    },
    {
      id: 3,
      name: 'Cinnamon',
      avi: avi3
    }
  ];

  const store = writable<User[]>([]);
  const { subscribe, set } = store;

  function findById(id: number) {
    return get(store).find((e) => e.id === id);
  }

  setTimeout(() => set(users), 0);

  return {
    subscribe,
    findById
  };
}

export const UserStore = createUserStore();
