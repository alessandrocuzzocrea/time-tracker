<script lang="ts">
  export let taskId: number;
  export let taskColor: string;
  export let projectName: string;
  export let taskName: string;
  export let taskPic: string;
  export let ownerName: string;
  export let ownerPic: string;
</script>

<div class="w-64 h-48 bg-white rounded-3xl flex flex-col overflow-hidden shadow-xl relative">
  <div class="flex-initial w-64 h-10 bg-{taskColor}-400" />
  <div class="flex flex-none justify-center relative pb-6">
    <img alt="..." src={taskPic} class="h-12 align-middle border-none absolute -m-6" />
  </div>
  <p class="w-full mx-4 flex-none text-xs text-slate-700">{projectName}</p>
  <p class="w-full mx-4 flex-auto">{taskName}</p>
  <div class="flex flex-row mx-4 mb-2 flex-none">
    <img alt="..." src={ownerPic} class="shadow-xl rounded-full h-8 align-middle border-none" />
    <a
      class="text-sm text-center align-baseline leading-8 mx-2 flex-none text-blue-500 hover:text-blue-900 transition ease-in-out duration-300"
      href="#">{ownerName}</a
    >
    <a
      class="text-xs text-right align-baseline leading-8 grow text-blue-500 hover:text-blue-900 transition ease-in-out duration-300"
      href="#">Details →</a
    >
  </div>
  <div
    class="absolute inset-0 bg-cover bg-center z-0"
    style="background-image: url('https://upload.wikimedia.org/wikipedia/en/3/3c/JumanjiTheNextLevelTeaserPoster.jpg')"
  />
  <div
    class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl"
  >
    TEST
  </div>
</div>
