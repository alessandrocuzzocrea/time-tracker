<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const groups = data.timeEntries
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

	import CartItemsStore from '../stores/CartItemsStore';
	import PlayerStore from '../stores/PlayerStore';
	import TimerStore from '../stores/TimerStore';
	const timer = TimerStore({ interval: 1000 });

	function handleClick() {
		PlayerStore.set(true);
	}
</script>

<button on:click={() => $timer.start()}>Start</button>
<button on:click={() => $timer.stop()}>Stop</button>
<button on:click={() => $timer.reset()}>Reset</button>

<p>Time: {$timer.time} ms</p>

{JSON.stringify($CartItemsStore)}

{#each groups as group}
	<h2 class="font-bold">{group.date}</h2>
	{#each group.entries as timeEntry}
		<div class="flex flex-row">
			<div class="p-1">{timeEntry.projectName}</div>
			<div class="p-1">{timeEntry.taskName}</div>
			<div class="p-1">{timeEntry.description}</div>
			<div class="p-1">{timeEntry.startTime}</div>
			<div class="p-1">{timeEntry.endTime}</div>
			<div class="p-1">{timeEntry.endTime - timeEntry.startTime}</div>
			{#if !$PlayerStore}
				<button class="p-1" on:click={handleClick}>Edit</button>
				<button class="p-1" on:click={handleClick}>Play</button>
			{/if}
		</div>
	{/each}
{/each}
