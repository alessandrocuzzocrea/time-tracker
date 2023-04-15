<script lang="ts">
	export let taskId: number;
	export let taskColor: string;
	export let projectName: string;
	export let taskName: string;
	export let taskPic: string;
	export let ownerName: string;
	export let ownerPic: string;
</script>

<div class="w-64 h-48 bg-white rounded-3xl flex flex-col overflow-hidden shadow-xl">
	<div class="flex-initial w-64 h-10 bg-{taskColor}-400" />
	<div class="flex flex-none justify-center relative pb-6">
		<img alt="..." src={taskPic} class="h-12 align-middle border-none absolute -m-6" />
	</div>
	<div class="w-full mx-4 flex-none text-xs text-slate-700">{projectName}</div>
	<div class="w-full mx-4 flex-auto">{taskName}</div>
	<div class="flex flex-row mx-4 mb-2 flex-none">
		<img alt="..." src={ownerPic} class="shadow-xl rounded-full h-8 align-middle border-none" />
		<div class="text-sm text-center align-baseline leading-8 mx-4 flex-none text-blue-700">
			{ownerName}
		</div>
		<div class="text-xs text-right align-baseline leading-8 grow text-blue-700">Details →</div>
	</div>
</div>
