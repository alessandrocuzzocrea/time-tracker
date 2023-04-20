import { writable, get } from 'svelte/store';

type Project = {
  id: number;
  projectName: string;
  projectColor: string;
};

function createProjectStore() {
  const projects: Project[] = [
    {
      id: 1,
      projectName: 'Project 1',
      projectColor: 'red',
    },
    {
      id: 2,
      projectName: 'Project 2',
      projectColor: 'blue',
    }
  ];

  const store = writable(projects);
  const { subscribe } = store;

  function findById(id: number) {
    return get(store).find(e => e.id === id);
  }

  return {
    subscribe,
    findById
  };
}

export const ProjectStore = createProjectStore();

