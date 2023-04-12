<script>
	import { currentTimeEntry, startTimeEntry, stopTimeEntry } from '../stores/PlayerStore';
	let startTime = new Date();
	let endTime = new Date();
	let duration = 0;
	let clear;

	function handleClick() {
		if ($currentTimeEntry.id) {
			stopTimeEntry(1);
		} else {
			startTimeEntry(1, 'desc');
		}
	}

	function fu(isPlaying) {
		if (isPlaying.id) {
			startTime = Date.now();
			endTime = Date.now();
			clear = setInterval(() => (endTime = Date.now()), 1000);
		} else {
			startTime = new Date();
			endTime = new Date();
			clearInterval(clear);
		}
	}

	$: fu($currentTimeEntry);
	$: duration = endTime - startTime;

	$: hours = String(Math.floor(duration / 3600000)).padStart(2, '0');
	$: minutes = String(Math.floor(duration / 60000) % 60).padStart(2, '0');
	$: seconds = String(Math.floor(duration / 1000) % 60).padStart(2, '0');

	$: buttonLabel = $currentTimeEntry?.id ? 'Stop' : 'Start';
	$: buttonClass = $currentTimeEntry?.id
		? 'bg-red-500 hover:bg-red-700'
		: 'bg-blue-500 hover:bg-blue-700';
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
	<!-- {#if $currentTimeEntry?.id === true} -->
	<p class="mr-2">{hours}:{minutes}:{seconds}</p>
	<!-- {/if} -->
	<button on:click={handleClick} class={`${buttonClass} text-white font-bold py-2 px-4 rounded p-1`}
		>{buttonLabel}</button
	>
</div>
