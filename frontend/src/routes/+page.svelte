<script lang="ts">
	import { TimeEntriesStore, TimeEntriesStoreByDay } from '../stores/TimeEntryStore';
	import { formatDuration } from '../helpers/FormatDuration';

	function handleClick() {}
</script>

<!-- <button
	on:click={handleClick()}
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button
> -->

{#each $TimeEntriesStoreByDay as { date, entries } (date)}
	<h2 class="font-bold">{date}</h2>
	{#each entries as { projectName, taskName, description, startTime, endTime }}
		<div class="flex flex-row">
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
