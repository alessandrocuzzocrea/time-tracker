<script lang="ts">
  import { TimeEntriesStoreCurrent } from '$lib/stores/TimeEntryStore';
  import { fade } from 'svelte/transition';
  import { formatDuration } from '$lib/helpers/FormatDuration';
  import { Play, Pause, PencilSquare } from 'svelte-heros';

  export let id: number;
  export let projectName: string;
  export let projectColor: string;
  export let taskId: number;
  export let taskName: string;
  export let description: string;
  export let startTime: Date;
  export let endTime: Date;

  function start(taskId: number) {
    console.log(`start task: ${taskId}`);
    TimeEntriesStoreCurrent.set({
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      taskId: taskId,
      userId: 1,
      projectId: 1,
      projectName: 'Project 1',
      projectColor: 'blue',
      taskName: 'Backend',
      description: 'Current desc',
      startTime: new Date(),
      endTime: null,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  function edit(entryId: number) {
    console.log(`edit entry: ${entryId}`);
  }

  let formattedStartTime = startTime.toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  });

  let formattedEndTime = endTime.toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric'
  });
</script>

<div
  class="group flex flex-row items-center border-b-slate-300 p-4 [&:not(:last-child)]:border-b"
  transition:fade|local
>
  <div class="h-4 w-4 flex-none rounded-full bg-{projectColor}-400" />
  <div class="mx-4 flex-none p-1 text-xs">{projectName}</div>
  <div class="mx-4 flex-none p-1">{taskName}</div>
  <div class="mx-4 grow p-1 text-slate-500">{description}</div>
  <div class="ml-4 flex-none p-1">{formattedStartTime}</div>
  <div class="flex-none p-1">-</div>
  <div class="mr-4 flex-none p-1">{formattedEndTime}</div>
  <div class="mx-4 flex-none p-1">{formatDuration(startTime, endTime)}</div>
  <button
    on:click={start(taskId)}
    class="mx-4 flex-none p-1 opacity-0 duration-300 group-hover:opacity-100"
  >
    <Play class="duration-300 hover:text-blue-500" />
  </button>
  <button
    on:click={edit(id)}
    class="mx-4 flex-none p-1 opacity-0 duration-300 group-hover:opacity-100"
  >
    <PencilSquare class="duration-300 hover:text-blue-500" />
  </button>
</div>
