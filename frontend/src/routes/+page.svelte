<script lang="ts">
  import { TimeEntriesStore, TimeEntriesStoreByDay } from '$lib/stores/TimeEntryStore';
  import { formatDuration } from '$lib/helpers/FormatDuration';
  import { fade } from 'svelte/transition';
  import HomeScreenTaskTile from '$lib/components/HomeScreenTaskTile.svelte';
  import task1pic from '$lib/assets/task-1.png';
  import task2pic from '$lib/assets/task-2.png';
  import task3pic from '$lib/assets/task-3.png';
  import avi2 from '$lib/assets/avi-2.jpg';
  import avi3 from '$lib/assets/avi-3.jpg';

  function handleClick() {}
</script>

<!-- <button
	on:click={handleClick()}
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button
> -->

<div class="flex flex-row mb-10 space-x-8">
  <div class="flex flex-col">
    <div class="flex flex-row space-x-3 mb-2">
      <h2 class="font-bold">Assigned to me</h2>
      <h2 class="text-xs align-text-bottom leading-8">View all →</h2>
    </div>
    <div class="flex flex-row space-x-8">
      <HomeScreenTaskTile
        taskId={3}
        taskColor="blue"
        projectName="Project 2"
        taskName="Build login functionality"
        taskPic={task3pic}
        ownerName="Nagisa"
        ownerPic={avi2}
      />
      <HomeScreenTaskTile
        taskId={2}
        taskColor="red"
        projectName="Project 1"
        taskName="Prepare API docs"
        taskPic={task2pic}
        ownerName="Cinnamon"
        ownerPic={avi3}
      />
      <HomeScreenTaskTile
        taskId={1}
        taskColor="blue"
        projectName="Project 2"
        taskName="Implement database for user authentication"
        taskPic={task1pic}
        ownerName="Nagisa"
        ownerPic={avi2}
      />
    </div>
  </div>
  <div class="flex"><h2 class="font-bold">.</h2></div>
  <div class="flex flex-col">
    <h2 class="font-bold">Reports</h2>
    <div class="flex flex-row space-x-8">
      <HomeScreenTaskTile projectPic={task1pic} fullName="Nagisa" avi={avi2} />
    </div>
  </div>
</div>

{#each $TimeEntriesStoreByDay as { date, entries } (date)}
  <h2 class="font-bold" transition:fade|local>{date}</h2>
  {#each entries as { id, projectName, taskName, description, startTime, endTime } (id)}
    <div class="flex flex-row" transition:fade|local>
      <div class="p-1">{projectName}</div>
      <div class="p-1">{taskName}</div>
      <div class="p-1">{description}</div>
      <div class="p-1">
        {startTime.toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric'
        })}
      </div>
      <div>–</div>
      <div class="p-1">
        {endTime.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' })}
      </div>
      <div class="p-1">{formatDuration(startTime, endTime)}</div>
      <!-- {#if currentTimeEntry?.id === false} -->
      <!-- <button class="p-1" on:click={handleClick}>Edit</button> -->
      <!-- <button class="p-1" on:click={handleClick}>Play</button> -->
      <!-- {/if} -->
    </div>
  {/each}
{/each}

<img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/>
<img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/><img
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  alt=""
/>
