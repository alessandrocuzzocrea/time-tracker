<script>
  import { page } from '$app/stores';
  import { TaskStore } from '$lib/stores/TaskStore';
  import { ProjectKanbanDerivedStore } from '$lib/stores/ProjectKanbanDerivedStore';

  function dragstart(ev, group, item) {
    console.log('dragstart');
    // ev.dataTransfer.setData('group', group);
    // ev.dataTransfer.setData('item', item);
  }

  function dragover(ev) {
    console.log('dragover');

    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
  }

  function drop(ev, new_g) {
    console.log('drop');

    ev.preventDefault();
    // var i = ev.dataTransfer.getData('item');
    // var old_g = ev.dataTransfer.getData('group');
    // const item = groups[old_g].items.splice(i, 1)[0];
    // groups[new_g].items.push(item);
    // groups = groups;
  }
</script>

<p>PROJECT {$page.params.id}</p>

<div class="flex justify-between py-4">
  <div class="mx-4 w-1/3 bg-white p-4">
    <h2 class="mb-4 text-lg font-medium">To Do</h2>
    {#each $ProjectKanbanDerivedStore as task (task.taskId)}
      {#if task.status == 0}
        <div
          class="mb-2 rounded-lg bg-gray-100 p-2"
          draggable={true}
          on:dragstart={(event) => dragstart(event)}
        >
          {task.taskName}
        </div>
      {/if}
    {/each}
  </div>

  <div
    class="mx-4 w-1/3 bg-white p-4"
    on:dragover={(event) => dragover(event)}
    on:drop={(event) => drop(event)}
  >
    <h2 class="mb-4 text-lg font-medium">In Progress</h2>
    {#each $ProjectKanbanDerivedStore as task (task.taskId)}
      {#if task.status == 1}
        <div
          class="mb-2 rounded-lg bg-gray-100 p-2"
          draggable={true}
          on:dragstart={(event) => dragstart(event)}
        >
          {task.taskName}
        </div>
      {/if}
    {/each}
  </div>

  <div class="mx-4 w-1/3 bg-white p-4">
    {#each $ProjectKanbanDerivedStore as task (task.taskId)}
      {#if task.status == 2}
        <div
          class="mb-2 rounded-lg bg-gray-100 p-2"
          draggable={true}
          on:dragstart={(event) => dragstart(event)}
        >
          {task.taskName}
        </div>
      {/if}
    {/each}
  </div>
</div>
