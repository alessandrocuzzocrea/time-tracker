import { writable, get } from 'svelte/store';

export type Project = {
  id: number;
  projectName: string;
  projectColor: string;
};

function createProjectStore() {
  const store = writable<Project[]>([]);
  const { subscribe, set, update } = store;

  async function loadProjects() {
    const response = await fetch('/api/projects');
    const data = await response.json();
    set(data);
  }

  async function createProject(project: Project) {
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    });
    const data = await response.json();
    update(projects => [...projects, data]);
  }

  async function updateProject(project: Project) {
    const response = await fetch(`/api/projects/${project.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    });
    const data = await response.json();
    update(projects => projects.map(p => (p.id === data.id ? data : p)));
  }

  async function deleteProject(project: Project) {
    const response = await fetch(`/api/projects/${project.id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      update(projects => projects.filter(p => p.id !== project.id));
    }
  }

  function findById(id: number) {
    return get(store).find((e) => e.id === id);
  }

  setTimeout(loadProjects, 0);

  return {
    subscribe,
    createProject,
    updateProject,
    deleteProject,
    findById
  };
}

export const ProjectStore = createProjectStore();
