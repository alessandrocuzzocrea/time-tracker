import { page } from '$app/stores';
import { derived } from 'svelte/store';
import { ProjectStore } from './ProjectStore';
import { TaskStore } from './TaskStore';


export const ProjectKanbanDerivedStore = derived(
  [page, ProjectStore, TaskStore],
  ([$page, $ProjectStore, $TaskStore]) => {
    return $TaskStore.filter(task => task.projectId === parseInt($page.params.id, 10)).map((task) => {
      const project = ProjectStore.findById(task?.projectId);
      // debugger;
      return {
        taskId: task.id,
        projectId: task?.projectId,
        projectName: project?.projectName,
        projectColor: project?.projectColor,
        taskName: task?.name,
        status: task?.status
      };
    });
  }
);

// export const ProjectKanbanDerivedStore = derived(
//   [ProjectStore, TaskStore],
//   ([$ProjectStore, $TaskStore]) => {
//     return $TaskStore.map((task) => {
//       const project = ProjectStore.findById(task?.projectId);

//       return {
//         taskId: task.id,
//         projectId: task?.projectId,
//         projectName: project?.projectName,
//         projectColor: project?.projectColor,
//         taskName: task?.name,
//         status: task?.status
//       };
//     });
//   }
// );
