<script lang="ts">
  import { onMount } from 'svelte';

  import type { Project } from '$lib/stores/ProjectStore';
  import type { Task } from '$lib/stores/TaskStore';

  let taskSelected = 1;
  let tasks = [];

  onMount(async () => {
    tasks = [
      {
        id: 1,
        name: 'Prepare API docs',
        projectId: 1,
        projectName: 'Project 1'
      },
      {
        id: 2,
        name: 'Implement database for user authentication',
        projectId: 2,
        projectName: 'Project 2'
      },
      {
        id: 3,
        name: 'Build login functionality',
        projectId: 2,
        projectName: 'Project 2'
      }
    ];
  });
</script>

<div class="flex flex-col">
  <!-- <label for="project-select">Project:</label>
  <select name="pets" id="project-select">
    <option value="1">Project1</option>
    <option value="2">Project2</option>
  </select> -->

  <label for="task-select">Task:</label>
  <select bind:value={taskSelected} name="tasks" id="task-select">
    {#each tasks as task}
      <option value={task.id}>
        {task.projectName} - {task.name}
      </option>
    {/each}
  </select>

  <label for="description">Description:</label>
  <textarea id="description">Desc</textarea>

  <label for="start-time">Start:</label>
  <input
    type="datetime-local"
    id="start-time"
    name="start-time"
    value="2018-06-12T19:30"
    min="2018-06-07T00:00"
    max="2018-06-14T00:00"
  />

  <label for="end-time">End:</label>
  <input
    type="datetime-local"
    id="end-time"
    name="end-time"
    value="2018-06-12T19:30"
    min="2018-06-07T00:00"
    max="2018-06-14T00:00"
  />

  <button>OK</button>
</div>
