<script lang="ts">
  import { TimeEntryStore } from '$lib/stores/TimeEntryStore';
  import { SidePaneStore } from '$lib/stores/SidePaneStore';
  import { onMount } from 'svelte';
  import { formatDuration } from '$lib/helpers/FormatDuration';
  import { formatDateTime } from '$lib/helpers/FormatDateTime';

  import type { Project } from '$lib/stores/ProjectStore';
  import type { Task } from '$lib/stores/TaskStore';

  let taskId: number | undefined;
  let description: string | undefined;
  let startTime: Date | undefined;
  let endTime: Date | undefined | null;
  let startTimeString: string;
  let endTimeString: string;

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

    startTimeString = formatDateTime(timeEntry.startTime);
    endTimeString = formatDateTime(timeEntry.endTime);
  });

  function saveEdit() {
    TimeEntryStore.edit(timeEntryId, taskId, description, startDate, endDate);
    SidePaneStore.closePane();
  }

  function del() {
    TimeEntryStore.del(timeEntryId);
    SidePaneStore.closePane();
  }

  $: startDate = new Date(startTimeString);
  $: endDate = new Date(endTimeString);
</script>

<div class="flex flex-auto flex-col space-y-4">
  <p class="text-2xl">EDIT TIME ENTRY ID:{$SidePaneStore.id}</p>

  <div class="flex flex-col">
    <label for="task-select" class="mb-2 block text-sm font-medium text-gray-900">Task:</label>
    <select
      bind:value={taskId}
      name="tasks"
      id="task-select"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    >
      {#each tasks as task}
        <option value={task.id}>
          {task.projectName} - {task.name}
        </option>
      {/each}
    </select>
  </div>

  <div class="flex flex-col">
    <label for="description" class="mb-2 block text-sm font-medium text-gray-900"
      >Description:</label
    >
    <textarea
      id="description"
      bind:value={description}
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div class="flex flex-col">
    <label for="start-time" class="mb-2 block text-sm font-medium text-gray-900">Start:</label>
    <input
      bind:value={startTimeString}
      type="datetime-local"
      id="start-time"
      name="start-time"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div class="flex flex-col">
    <label for="end-time" class="mb-2 block text-sm font-medium text-gray-900">End:</label>
    <input
      bind:value={endTimeString}
      type="datetime-local"
      id="end-time"
      name="end-time"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div class="flex flex-col">
    <p class="mb-2 block text-sm font-medium text-gray-900">Duration:</p>
    <p>{formatDuration(startDate, endDate)}</p>
  </div>

  <button
    class="rounded bg-green-400 p-1 px-4 py-2 font-bold text-white hover:bg-green-700"
    on:click={saveEdit}>Edit</button
  >
  <button
    class="rounded bg-red-400 p-1 px-4 py-2 font-bold text-white hover:bg-red-700"
    on:click={del}>Delete</button
  >
</div>
