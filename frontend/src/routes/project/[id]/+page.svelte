<script>
  import { page } from '$app/stores';
  import { TaskStore } from '$lib/stores/TaskStore';
  import { ProjectKanbanDerivedStore } from '$lib/stores/ProjectKanbanDerivedStore';

  function dragstart(e, taskId) {
    console.log(`dragstart ${taskId}`);
    e.dataTransfer.setData('taskId', taskId);
  }

  function dragover(e) {
    console.log('dragover');

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function drop(e, newStatus) {
    console.log('drop');

    e.preventDefault();
    var taskId = parseInt(e.dataTransfer.getData('taskId'), 10);
    console.log(`drop: task:${taskId}-newStatus:${newStatus}`);
    TaskStore.updateStatus(taskId, newStatus);
    // var old_g = ev.dataTransfer.getData('group');
    // const item = groups[old_g].items.splice(i, 1)[0];
    // groups[new_g].items.push(item);
    // groups = groups;
  }

  $: console.dir($ProjectKanbanDerivedStore);
</script>

<p>PROJECT {$page.params.id}</p>

<div class="flex justify-between py-4">
  <div
    class="mx-4 w-1/3 bg-white p-4"
    on:dragover={(event) => dragover(event)}
    on:drop={(event) => drop(event, 0)}
  >
    <h2 class="mb-4 text-lg font-medium">To Do</h2>
    {#each $ProjectKanbanDerivedStore as task (task.taskId)}
      {#if task.status === 0}
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

  <div
    class="mx-4 w-1/3 bg-white p-4"
    on:dragover={(event) => dragover(event)}
    on:drop={(event) => drop(event, 1)}
  >
    <h2 class="mb-4 text-lg font-medium">In Progress</h2>
    {#each $ProjectKanbanDerivedStore as task (task.taskId)}
      {#if task.status === 1}
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

  <div
    class="mx-4 w-1/3 bg-white p-4"
    on:dragover={(event) => dragover(event)}
    on:drop={(event) => drop(event, 2)}
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
