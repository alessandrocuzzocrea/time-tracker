<script lang="ts">
  import { formatDuration } from '$lib/helpers/FormatDuration';
  import { CurrentTimeEntryDerivedStore } from '$lib/stores/CurrentTimeEntryDerivedStore';
  import { CurrentTimeEntryStore } from '$lib/stores/CurrentTimeEntryStore';
  import { TimeEntryStore } from '$lib/stores/TimeEntryStore';
  import { slide } from 'svelte/transition';

  let startTime: Date | null;
  let endTime: Date | null;
  let duration = 0;
  let description: string = '';
  let clear: Timer;

  function handleClick() {
    if ($CurrentTimeEntryStore) {
      TimeEntryStore.add({
        ...$CurrentTimeEntryStore,
        description: description,
        endTime: new Date()
      });
      CurrentTimeEntryStore.set(null);
      startTime = endTime = null;
    } else {
      CurrentTimeEntryStore.set({
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        taskId: 1,
        userId: 1,
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

  $: updateTimer($CurrentTimeEntryStore);
  $: duration = endTime - startTime;

  $: buttonLabel = $CurrentTimeEntryStore ? 'Stop' : 'Start';
  $: buttonClass = $CurrentTimeEntryStore
    ? 'bg-red-400 hover:bg-red-700'
    : 'bg-blue-400 hover:bg-blue-700';
</script>

<div
  class="flex flex-row items-center justify-between border-t border-slate-200 bg-white p-4"
  transition:slide|local
>
  <div class="h-4 w-4 flex-none rounded-full bg-{$CurrentTimeEntryDerivedStore.projectColor}-400" />

  <input
    type="text"
    class="mx-4 mr-2 flex flex-1 rounded border p-1 px-2 py-1"
    placeholder={"What's cookin'?"}
    bind:value={description}
  />
  <p class="mx-2 text-xs">{$CurrentTimeEntryDerivedStore?.projectName}</p>
  <p class="mx-2">{$CurrentTimeEntryDerivedStore?.taskName}</p>
  {#if startTime}
    <p class="mx-4 mr-2 basis-24 text-xl font-bold">{formatDuration(startTime, endTime)}</p>
  {/if}
  <button
    on:click={handleClick}
    class={`${buttonClass} mx-4 rounded p-1 px-4 py-2 font-bold text-white`}>{buttonLabel}</button
  >
  <!-- <button class="rounded bg-green-400 p-1 px-4 py-2 font-bold text-white hover:bg-green-700"
      >+</button
    > -->
</div>
