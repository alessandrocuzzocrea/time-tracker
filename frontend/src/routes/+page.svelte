<script lang="ts">
  import { TimeEntriesStoreByDay } from '$lib/stores/TimeEntryStore';
  import { fade } from 'svelte/transition';
  import HomeScreenTaskTile from '$lib/components/HomeScreenTaskTile.svelte';
  import TimeEntryRow from '$lib/components/TimeEntryRow.svelte';
  import task1pic from '$lib/assets/task-1.png';
  import task2pic from '$lib/assets/task-2.png';
  import task3pic from '$lib/assets/task-3.png';
  import avi2 from '$lib/assets/avi-2.jpg';
  import avi3 from '$lib/assets/avi-3.jpg';
</script>

<div class="mb-10 flex flex-row space-x-8">
  <div class="flex flex-col">
    <div class="mb-2 flex flex-row space-x-3">
      <h2 class="font-bold">Assigned to me</h2>
      <h2 class="align-text-bottom text-xs leading-8">View all →</h2>
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
  <h2 class="mb-4 font-bold" transition:fade|local>{date}</h2>
  <div class="overflow-hidden rounded-lg bg-white">
    {#each entries as { id, projectName, taskName, description, startTime, endTime } (id)}
      <TimeEntryRow {id} {projectName} {taskName} {description} {startTime} {endTime} />
    {/each}
  </div>
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
