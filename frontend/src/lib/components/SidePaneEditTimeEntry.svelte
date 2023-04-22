<script lang="ts">
  import { TimeEntryStore } from '$lib/stores/TimeEntryStore';
  import { onMount } from 'svelte';
  import { formatDuration } from '$lib/helpers/FormatDuration';

  import type { Project } from '$lib/stores/ProjectStore';
  import type { Task } from '$lib/stores/TaskStore';

  let taskId: number | undefined;
  let description: string | undefined;
  let startTime: Date | undefined;
  let endTime: Date | undefined | null;

  let tasks: any[] = [];

  export let timeEntryId: number;

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

    const timeEntry = TimeEntryStore.findById(timeEntryId);
    taskId = timeEntry?.taskId;
    description = timeEntry?.description;
    startTime = timeEntry?.startTime;
    endTime = timeEntry?.endTime;

    console.log(timeEntry?.startTime);
    console.log(startTime);
  });

  $: startTimeString = startTime?.toISOString().slice(0, 16);
  $: endTimeString = endTime?.toISOString().slice(0, 16);
</script>

<div class="flex flex-col">
  <label for="task-select">Task:</label>
  <select bind:value={taskId} name="tasks" id="task-select">
    {#each tasks as task}
      <option value={task.id}>
        {task.projectName} - {task.name}
      </option>
    {/each}
  </select>

  <label for="description">Description:</label>
  <textarea id="description" bind:value={description} />

  <label for="start-time">Start:</label>
  <input bind:value={startTimeString} type="datetime-local" id="start-time" name="start-time" />

  <label for="end-time">End:</label>
  <input bind:value={endTimeString} type="datetime-local" id="end-time" name="end-time" />

  <p>Duration:</p>
  <p>{formatDuration(startTime, endTime)}</p>

  <button>OK</button>
</div>
