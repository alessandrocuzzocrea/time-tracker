import { writable, get } from 'svelte/store';

type Task = {
  id: number;
  name: string;
  projectId: number;
};

function createTaskStore() {
  const tasks: Task[] = [
    {
      id: 1,
      name: 'Prepare API docs',
      projectId: 1,
    },
    {
      id: 2,
      name: 'Implement database for user authentication',
      projectId: 2,
    },
    {
      id: 3,
      name: 'Build login functionality',
      projectId: 2,
    }
  ];

  const store = writable(tasks);
  const { subscribe } = store;

  function findById(id: number) {
    return get(store).find(e => e.id === id);
  }

  return {
    subscribe,
    findById
  };
}

export const TaskStore = createTaskStore();

