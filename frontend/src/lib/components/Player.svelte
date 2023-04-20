<script lang="ts">
  import { TimeEntriesStore, TimeEntriesStoreCurrent } from '$lib/stores/TimeEntryStore';
  import { formatDuration } from '$lib/helpers/FormatDuration';
  import { slide } from 'svelte/transition';

  let startTime: Date | null;
  let endTime: Date | null;
  let duration = 0;
  let description: string;
  let clear: Timer;

  function handleClick() {
    if ($TimeEntriesStoreCurrent) {
      TimeEntriesStore.add({
        ...$TimeEntriesStoreCurrent,
        description: description,
        endTime: new Date()
      });
      TimeEntriesStoreCurrent.set(null);
      startTime = endTime = null;
    } else {
      TimeEntriesStoreCurrent.set({
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        taskId: 1,
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
      description = 'Current desc';
    }
  }

  function updateTimer(currentTimeEntry) {
    if (currentTimeEntry) {
      startTime = new Date();
      endTime = new Date();
      clear = setInterval(() => (endTime = new Date()), 1000);
    } else {
      // startTime = new Date();
      // endTime = new Date();
      clearInterval(clear);
    }
  }

  $: updateTimer($TimeEntriesStoreCurrent);
  $: duration = endTime - startTime;

  $: buttonLabel = $TimeEntriesStoreCurrent ? 'Stop' : 'Start';
  $: buttonClass = $TimeEntriesStoreCurrent
    ? 'bg-red-400 hover:bg-red-700'
    : 'bg-blue-400 hover:bg-blue-700';
</script>

{#if $TimeEntriesStoreCurrent}
  <div
    class="flex flex-row items-center justify-between border-t border-slate-200 bg-white p-4"
    transition:slide|local
  >
    <input
      type="text"
      class="mr-2 flex flex-1 rounded border p-1 px-2 py-1"
      placeholder={"What's cookin'?"}
      bind:value={description}
    />
    {#if startTime}
      <p class="mr-2">{formatDuration(startTime, endTime)}</p>
    {/if}
    <button
      on:click={handleClick}
      class={`${buttonClass} rounded p-1 px-4 py-2 font-bold text-white`}>{buttonLabel}</button
    >
    <!-- <button class="rounded bg-green-400 p-1 px-4 py-2 font-bold text-white hover:bg-green-700"
      >+</button
    > -->
  </div>
{:else}
  <div />
{/if}
