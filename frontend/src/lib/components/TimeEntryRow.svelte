<script lang="ts">
  import { fade } from 'svelte/transition';
  import { formatDuration } from '$lib/helpers/FormatDuration';

  export let id: number;
  export let projectName: string;
  export let taskName: string;
  export let description: string;
  export let startTime: Date;
  export let endTime: Date;

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
  class="flex flex-row items-center border-b-slate-300 p-4 [&:not(:last-child)]:border-b"
  transition:fade|local
>
  <div class="h-4 w-4 flex-none rounded-full bg-red-400" />
  <div class="mx-4 flex-none p-1 text-xs">{projectName}</div>
  <div class="mx-4 flex-none p-1">{taskName}</div>
  <div class="mx-4 grow p-1 text-slate-500">{description}</div>
  <div class="ml-4 flex-none p-1">{formattedStartTime}</div>
  <div class="flex-none p-1">–</div>
  <div class="mr-4 flex-none p-1">{formattedEndTime}</div>
  <div class="mx-4 flex-none p-1">{formatDuration(startTime, endTime)}</div>
</div>
