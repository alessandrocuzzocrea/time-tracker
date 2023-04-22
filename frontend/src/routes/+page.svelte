<script lang="ts">
  import { TimeEntryByDayDerivedStore } from '$lib/stores/TimeEntryByDayDerivedStore';
  import { TaskViewModelDerivedStore } from '$lib/stores/TaskViewModelDerivedStore';
  import { TimeEntriesCurrentStore } from '$lib/stores/TimeEntryStore';
  import { fade } from 'svelte/transition';
  import HomeScreenTaskTile from '$lib/components/HomeScreenTaskTile.svelte';
  import TimeEntryRow from '$lib/components/TimeEntryRow.svelte';
  import { formatDuration2 } from '$lib/helpers/FormatDuration';
</script>

<div class="mb-10 flex flex-row space-x-8">
  <div class="flex flex-col">
    <div class="mb-2 flex flex-row space-x-3">
      <h2 class="font-bold">For you</h2>
      <h2 class="align-text-bottom text-xs leading-8">View all →</h2>
    </div>
    <div class="flex flex-row space-x-8">
      {#each $TaskViewModelDerivedStore as { projectId, projectName, projectColor, taskId, taskName, taskIcon, ownerName, ownerPic } (taskId)}
        <HomeScreenTaskTile
          {taskId}
          taskColor={projectColor}
          {projectName}
          {taskName}
          {taskIcon}
          {ownerName}
          {ownerPic}
          isActive={taskId === $TimeEntriesCurrentStore?.taskId}
        />
      {/each}
    </div>
  </div>
  <div class="flex"><h2 class="font-bold">.</h2></div>
  <div class="flex flex-col">
    <h2 class="font-bold">Reports</h2>
    <div class="flex flex-row space-x-8">
      <HomeScreenTaskTile />
    </div>
  </div>
</div>

{#each $TimeEntryByDayDerivedStore as { date, totalDuration, entries } (date)}
  <h2 class="mb-4 font-bold" transition:fade|local>{date} - {formatDuration2(totalDuration)}</h2>
  <div class="mx-4 mb-6 overflow-hidden rounded-lg bg-white">
    {#each entries as { id, projectName, projectColor, taskId, taskName, description, startTime, endTime } (id)}
      <TimeEntryRow
        {id}
        {projectName}
        {projectColor}
        {taskId}
        {taskName}
        {description}
        {startTime}
        {endTime}
      />
    {/each}
  </div>
{/each}
