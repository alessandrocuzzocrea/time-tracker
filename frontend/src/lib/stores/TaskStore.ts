import { writable, get } from 'svelte/store';

export type Task = {
  id: number;
  name: string;
  projectId: number;
  ownerId: number;
  assigneeIds?: number[];
};

function createTaskStore() {
  const tasks: Task[] = [
    {
      id: 1,
      name: 'Prepare API docs',
      projectId: 1,
      ownerId: 3,
      assigneeIds: [1]
    },
    {
      id: 2,
      name: 'Implement database for user authentication',
      projectId: 2,
      ownerId: 2,
      assigneeIds: [1]
    },
    {
      id: 3,
      name: 'Build login functionality',
      projectId: 2,
      ownerId: 2,
      assigneeIds: [1]
    }
  ];

  const store = writable<Task[]>([]);
  const { subscribe, set } = store;

  setTimeout(() => set(tasks), 0);

  function findById(id: number) {
    return get(store).find((e) => e.id === id);
  }

  return {
    subscribe,
    findById
  };
}

export const TaskStore = createTaskStore();
