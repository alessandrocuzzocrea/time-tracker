<script>
	// let isPlaying = false;
	import PlayerStore from '../stores/PlayerStore';
	import { get } from 'svelte/store';
	let elapsedTime = 0;
	let clear;

	// function handleToggleClass() {
	// 	PlayerStore.set(!$PlayerStore);

	// 	if ($PlayerStore) {
	// 		clear = setInterval(() => (elapsedTime += 1), 1000);
	// 	} else {
	// 		elapsedTime = 0;
	// 		clearInterval(clear);
	// 	}
	// }

	function handleClick() {
		$PlayerStore = !$PlayerStore;

		if ($PlayerStore) {
			clear = setInterval(() => (elapsedTime += 1), 1000);
		} else {
			elapsedTime = 0;
			clearInterval(clear);
		}
	}

	$: console.log($PlayerStore);
	$: {
		// PlayerStore.set(!$PlayerStore);
	}

	$: hours = String(Math.floor(elapsedTime / 3600)).padStart(2, '0');
	$: minutes = String(Math.floor(elapsedTime / 60)).padStart(2, '0');
	$: seconds = String(Math.floor(elapsedTime - Math.floor(elapsedTime / 60) * 60)).padStart(2, '0');

	$: buttonLabel = $PlayerStore ? 'Stop' : 'Start';
	$: buttonClass = $PlayerStore ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700';
</script>

<div class="flex flex-row items-center p-2 justify-between bg-slate-200">
	<input
		type="text"
		class="flex flex-1 border rounded px-2 py-1 mr-2 p-1"
		placeholder="What are you doing?"
	/>
	<select class="p-1 mr-2">
		<option>Task A</option>
		<option>Task B</option>
		<option>Maybe</option>
	</select>
	<p class="mr-2">Project A</p>
	<p class="mr-2">|</p>
	<p class="mr-2">{hours}:{minutes}:{seconds}</p>
	<button on:click={handleClick} class={`${buttonClass} text-white font-bold py-2 px-4 rounded p-1`}
		>{buttonLabel}</button
	>
</div>
