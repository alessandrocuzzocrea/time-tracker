<script>
	import { count } from '../stores/PlayerStore';
	let startTime = new Date();
	let endTime = new Date();
	let duration = 0;
	let clear;

	function handleClick() {
		// $PlayerStore = !$PlayerStore;
		count.toggle();
	}

	function fu(isPlaying) {
		if (isPlaying) {
			startTime = Date.now();
			endTime = Date.now();
			clear = setInterval(() => (endTime = Date.now()), 1000);
		} else {
			// startTime = new Date();
			// endTime = new Date();
			clearInterval(clear);
		}
	}

	$: fu($count.isPlaying);
	$: duration = endTime - startTime;

	$: console.log(duration);

	$: hours = String(Math.floor(duration / 3600000)).padStart(2, '0');
	$: minutes = String(Math.floor(duration / 60000) % 60).padStart(2, '0');
	$: seconds = String(Math.floor(duration / 1000) % 60).padStart(2, '0');

	$: buttonLabel = $count ? 'Stop' : 'Start';
	$: buttonClass = $count ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700';
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
	{#if $count.isPlaying}
		<p class="mr-2">{hours}:{minutes}:{seconds}</p>
	{/if}
	<button on:click={handleClick} class={`${buttonClass} text-white font-bold py-2 px-4 rounded p-1`}
		>{buttonLabel}</button
	>
</div>
