import { writable, get } from 'svelte/store';
import task1pic from '$lib/assets/task-1.png';
import task2pic from '$lib/assets/task-2.png';
import task3pic from '$lib/assets/task-3.png';

export type Task = {
  id: number;
  name: string;
  icon: string;
  projectId: number;
  ownerId: number;
  assigneeIds?: number[];
  status: number;
};

function createTaskStore() {
  const tasks: Task[] = [
    {
      id: 1,
      name: 'Prepare API docs',
      icon: task1pic,
      projectId: 1,
      ownerId: 3,
      assigneeIds: [1],
      status: 0
    },
    {
      id: 2,
      name: 'Implement database for user authentication',
      icon: task2pic,
      projectId: 2,
      ownerId: 2,
      assigneeIds: [1],
      status: 0
    },
    {
      id: 3,
      name: 'Build login functionality',
      icon: task3pic,
      projectId: 2,
      ownerId: 2,
      assigneeIds: [1],
      status: 0
    }
  ];

  const store = writable<Task[]>([]);
  const { subscribe, set, update } = store;

  setTimeout(() => set(tasks), 0);

  function findById(id: number) {
    return get(store).find((e) => e.id === id);
  }

  return {
    subscribe,
    findById,
    updateStatus: (taskId: number, newStatus: number) => {
      update((n) => {
        return n.map((e) => {
          if (e.id === taskId) {
            e.status = newStatus;
          }
          return e;
        });
      });
    }
  };
}

export const TaskStore = createTaskStore();
