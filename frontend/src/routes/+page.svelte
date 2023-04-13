<script lang="ts">
	// import { currentTimeEntry } from '../stores/PlayerStore';
	import { TimeEntriesStore } from '../stores/TimeEntryStore';
	// import type { PageData } from './$types';
	// export let data: PageData;

	const groups = $TimeEntriesStore
		.reduce((acc, entry) => {
			const date = new Date(entry.startTime).toLocaleDateString();
			const group = acc.find((g) => g.date === date);
			if (group) {
				group.entries.push(entry);
			} else {
				acc.push({ date, entries: [entry] });
			}
			return acc;
		}, [])
		.reverse();

	function handleClick() {
		// $PlayerStore = !$PlayerStore;
		// .toggle();
	}
</script>

{#each groups as group}
	<h2 class="font-bold">{group.date}</h2>
	{#each group.entries as { projectName, taskName, description, startTime, endTime }}
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
