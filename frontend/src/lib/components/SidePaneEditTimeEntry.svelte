<script lang="ts">
  import { TimeEntryStore } from '$lib/stores/TimeEntryStore';
  import { SidePaneStore } from '$lib/stores/SidePaneStore';
  import { onMount } from 'svelte';
  import { formatDuration } from '$lib/helpers/FormatDuration';

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
    // startTime = timeEntry?.startTime;
    // endTime = timeEntry?.endTime;

    startTimeString = timeEntry?.startTime?.toISOString().slice(0, 16);
    endTimeString = timeEntry?.endTime?.toISOString().slice(0, 16);
    // console.log(timeEntry?.startTime);
    // console.log(startTime);
  });

  function saveEdit() {
    TimeEntryStore.edit(
      timeEntryId,
      taskId,
      description,
      new Date(startTimeString),
      new Date(endTimeString)
    );
    SidePaneStore.closePane();
  }

  // $: startTimeString = startTime?.toISOString().slice(0, 16);
  // $: endTimeString = endTime?.toISOString().slice(0, 16);
  $: startDate = new Date(startTimeString);
  $: endDate = new Date(endTimeString);

  $: console.log(`start: ${startDate} - end: ${endDate}`);

  // let now = new Date(),
  //   month = '' + (now.getMonth() + 1),
  //   day = '' + now.getDate(),
  //   year = now.getFullYear(),
  //   dateString;

  // $: if (month.length < 2) month = '0' + month;

  // $: if (day.length < 2) day = '0' + day;

  // $: console.log(dateString);
  // $: dateString = [year, month, day].join('-');
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
  <!-- 
  <label>
    <input type="date" bind:value={dateString} />
  </label> -->

  <label for="start-time">Start:</label>
  <input bind:value={startTimeString} type="datetime-local" id="start-time" name="start-time" />

  <label for="end-time">End:</label>
  <input bind:value={endTimeString} type="datetime-local" id="end-time" name="end-time" />

  <p>Duration:</p>
  <p>{formatDuration(startDate, endDate)}</p>

  <button on:click={saveEdit}>OK</button>
</div>
