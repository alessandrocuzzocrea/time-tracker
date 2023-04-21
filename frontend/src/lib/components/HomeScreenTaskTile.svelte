<script lang="ts">
  import { PauseCircle, PlayCircle } from 'svelte-heros';
  import { TimeEntriesCurrentStore } from '$lib/stores/TimeEntryStore';

  export let taskId: number;
  export let taskColor: string;
  export let projectName: string | undefined;
  export let taskName: string;
  export let taskIcon: string;
  export let ownerName: string;
  export let ownerPic: string;
  export let isActive: boolean;

  function startTask(taskId: number) {
    TimeEntriesCurrentStore.start(taskId);
  }

  function startStop(taskId: number) {
    // TimeEntriesCurrentStore.start(taskId);
  }
</script>

<div
  class="relative flex h-48 w-64 flex-col overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 ease-in-out hover:shadow-xl"
>
  <div class="h-10 w-64 flex-initial bg-{taskColor}-400" />
  <div class="relative flex flex-none justify-center pb-6">
    <div
      on:click={startTask(taskId)}
      class="absolute inset-0 z-10 -m-6 flex h-12 items-center justify-center opacity-0 duration-300 hover:opacity-100"
    >
      {#if isActive}
        <PauseCircle variation="solid" />
      {:else}
        <PlayCircle variation="solid" />
      {/if}
    </div>
    <img alt="..." src={taskIcon} class="absolute -m-6 h-12 border-none align-middle" />
  </div>

  <p class="mx-4 w-full flex-none text-xs text-slate-700">{projectName}</p>
  <p class="mx-4 w-full flex-auto">{taskName}</p>
  <div class="mx-4 mb-2 flex flex-none flex-row">
    <img alt="..." src={ownerPic} class="h-8 rounded-full border-none align-middle shadow-xl" />
    <a
      class="mx-2 flex-none text-center align-baseline text-sm leading-8 text-blue-500 transition duration-300 ease-in-out hover:text-blue-900"
      href="#">{ownerName}</a
    >
    <a
      class="grow text-right align-baseline text-xs leading-8 text-blue-500 transition duration-300 ease-in-out hover:text-blue-900"
      href="#">Details →</a
    >
  </div>
</div>
