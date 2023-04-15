<script>
	import { TimeEntriesStore, TimeEntriesStoreCurrent } from '$lib/stores/TimeEntryStore';
	import { formatDuration } from '$lib/helpers/FormatDuration';
	let startTime = new Date();
	let endTime = new Date();
	let duration = 0;
	let clear;

	function handleClick() {
		if ($TimeEntriesStoreCurrent) {
			TimeEntriesStore.add({ ...$TimeEntriesStoreCurrent, endTime: new Date() });
			TimeEntriesStoreCurrent.set(null);
		} else {
			TimeEntriesStoreCurrent.set({
				id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
				taskId: 1,
				userId: 1,
				projectId: 1,
				projectName: 'Project 1',
				taskName: 'Backend',
				description: 'Current desc',
				startTime: startTime,
				endTime: endTime,
				createdAt: startTime,
				updatedAt: new Date('2022-05-22T12:00:00')
			});
		}
	}

	function fu(currentTimeEntry) {
		if (currentTimeEntry) {
			startTime = Date.now();
			endTime = Date.now();
			clear = setInterval(() => (endTime = Date.now()), 1000);
		} else {
			startTime = new Date();
			endTime = new Date();
			clearInterval(clear);
		}
	}

	$: fu($TimeEntriesStoreCurrent);
	$: duration = endTime - startTime;

	$: hours = String(Math.floor(duration / 3600000)).padStart(2, '0');
	$: minutes = String(Math.floor(duration / 60000) % 60).padStart(2, '0');
	$: seconds = String(Math.floor(duration / 1000) % 60).padStart(2, '0');

	$: buttonLabel = $TimeEntriesStoreCurrent ? 'Stop' : 'Start';
	$: buttonClass = $TimeEntriesStoreCurrent
		? 'bg-red-400 hover:bg-red-700'
		: 'bg-blue-400 hover:bg-blue-700';
</script>

<div class="flex flex-row items-center p-4 justify-between bg-white border-t border-slate-200">
	{#await $TimeEntriesStoreCurrent}
		<p>⏳</p>
	{:then}
		<input
			type="text"
			class="flex flex-1 border rounded px-2 py-1 mr-2 p-1"
			placeholder={$TimeEntriesStoreCurrent?.description}
		/>
		<select class="p-1 mr-2">
			<option>Task A</option>
			<option>Task B</option>
			<option>Maybe</option>
		</select>
		<p class="mr-2">Project A</p>
		<p class="mr-2">|</p>
		<p class="mr-2">{formatDuration(startTime, endTime)}</p>
		<button
			on:click={handleClick}
			class={`${buttonClass} text-white font-bold py-2 px-4 rounded p-1`}>{buttonLabel}</button
		>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>
