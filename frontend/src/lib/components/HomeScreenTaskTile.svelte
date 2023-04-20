<script lang="ts">
  export let taskId: number;
  export let taskColor: string;
  export let projectName: string;
  export let taskName: string;
  export let taskPic: string;
  export let ownerName: string;
  export let ownerPic: string;
  export let isActive: boolean;
</script>

<div
  class="relative flex h-48 w-64 flex-col overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 ease-in-out hover:shadow-xl"
>
  <div class="h-10 w-64 flex-initial bg-{taskColor}-400" />
  <div class="relative flex flex-none justify-center pb-6">
    <img alt="..." src={taskPic} class="absolute -m-6 h-12 border-none align-middle" />
  </div>
  <p class="mx-4 w-full flex-none text-xs text-slate-700">{projectName}</p>
  <p class="mx-4 w-full flex-auto">{taskName}</p>
  <div class="mx-4 mb-2 flex flex-none flex-row">
    <img alt="..." src={ownerPic} class="h-8 rounded-full border-none align-middle shadow-xl" />
    <a
      class="mx-2 flex-none text-center align-baseline text-sm leading-8 text-blue-500 transition duration-300 ease-in-out hover:text-blue-900"
      href="#">{ownerName}</a
    >
    <a
      class="grow text-right align-baseline text-xs leading-8 text-blue-500 transition duration-300 ease-in-out hover:text-blue-900"
      href="#">Details →</a
    >
  </div>
  <div
    class="absolute inset-0 z-10 flex items-center justify-center text-6xl opacity-0 duration-300 hover:opacity-100"
  >
    {isActive ? '||' : '|>'}
  </div>
</div>
