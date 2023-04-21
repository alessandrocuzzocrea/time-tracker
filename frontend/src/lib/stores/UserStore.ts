import { writable, get } from 'svelte/store';

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
      avi: '/src/lib/assets/avi-1.jpg'
    },
    {
      id: 2,
      name: 'Nagisa',
      avi: '/src/lib/assets/avi-2.jpg'
    },
    {
      id: 3,
      name: 'Cinnamon',
      avi: '/src/lib/assets/avi-3.jpg'
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
