<script lang="ts">
  import { page } from '$app/stores';
  import { ProjectKanbanDerivedStore } from '$lib/stores/ProjectKanbanDerivedStore';
  import { TaskStore } from '$lib/stores/TaskStore';

  function dragstart(e: DragEvent, taskId: number) {
    e.dataTransfer.setData('taskId', taskId);
  }

  function dragover(e: DragEvent) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
  }

  function drop(e: DragEvent, newStatus) {
    var taskId = parseInt(e.dataTransfer.getData('taskId'), 10);
    TaskStore.updateStatus(taskId, newStatus);
  }

  $: console.dir($ProjectKanbanDerivedStore);
</script>

<p>PROJECT {$page.params.id}</p>

<div class="flex justify-between py-4">
  <div
    class="mx-4 w-1/3 bg-white p-4"
    on:dragover|preventDefault={(e) => dragover(e)}
    on:drop|preventDefault={(e) => drop(e, 0)}
  >
    <h2 class="mb-4 text-lg font-medium">To Do</h2>
    {#each $ProjectKanbanDerivedStore as task (task.taskId)}
      {#if task.status === 0}
        <div
          class="mb-2 rounded-lg bg-gray-100 p-2 shadow-sm transition duration-100 ease-in-out hover:shadow-md"
          draggable={true}
          on:dragstart={(e) => dragstart(e, task.taskId)}
        >
          {task.taskName}
        </div>
      {/if}
    {/each}
  </div>

  <div
    class="mx-4 w-1/3 bg-white p-4"
    on:dragover|preventDefault={(e) => dragover(e)}
    on:drop|preventDefault={(e) => drop(e, 1)}
  >
    <h2 class="mb-4 text-lg font-medium">In Progress</h2>
    {#each $ProjectKanbanDerivedStore as task (task.taskId)}
      {#if task.status === 1}
        <div
          class="mb-2 rounded-lg bg-gray-100 p-2"
          draggable={true}
          on:dragstart={(e) => dragstart(e, task.taskId)}
        >
          {task.taskName}
        </div>
      {/if}
    {/each}
  </div>

  <div
    class="mx-4 w-1/3 bg-white p-4"
    on:dragover|preventDefault={(event) => dragover(event)}
    on:drop|preventDefault={(event) => drop(event, 2)}
  >
    <h2 class="mb-4 text-lg font-medium">Done</h2>
    {#each $ProjectKanbanDerivedStore as task (task.taskId)}
      {#if task.status === 2}
        <div
          class="mb-2 rounded-lg bg-gray-100 p-2"
          draggable={true}
          on:dragstart={(event) => dragstart(event, task.taskId)}
        >
          {task.taskName}
        </div>
      {/if}
    {/each}
  </div>
</div>
