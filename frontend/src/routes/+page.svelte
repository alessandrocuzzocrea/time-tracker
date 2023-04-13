<script lang="ts">
	import { TimeEntriesStore, TimeEntriesStoreByDay } from '../stores/TimeEntryStore';
	function handleClick() {
		// TimeEntriesStore.StartStop();
	}
</script>

<button
	on:click={handleClick()}
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button
>

{#each $TimeEntriesStoreByDay as { date, entries }}
	<h2 class="font-bold">{date}</h2>
	{#each entries as { projectName, taskName, description, startTime, endTime }}
		<div class="flex flex-row">
			<div class="p-1">{projectName}</div>
			<div class="p-1">{taskName}</div>
			<div class="p-1">{description}</div>
			<div class="p-1">{startTime}</div>
			<div class="p-1">{endTime}</div>
			<div class="p-1">{endTime - startTime}</div>
			<!-- {#if currentTimeEntry?.id === false} -->
			<!-- <button class="p-1" on:click={handleClick}>Edit</button> -->
			<!-- <button class="p-1" on:click={handleClick}>Play</button> -->
			<!-- {/if} -->
		</div>
	{/each}
{/each}
