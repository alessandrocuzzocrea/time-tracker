<script lang="ts">
  import { SidePaneStore, SidePaneStateEnum } from '$lib/stores/SidePaneStore';
  import SidePaneEditTimeEntry from './SidePaneEditTimeEntry.svelte';
  import SidePaneNewTimeEntry from './SidePaneNewTimeEntry.svelte';
  import { XCircle } from 'svelte-heros';
  import { fade, fly } from 'svelte/transition';

  let width;
</script>

<aside class="relative z-10">
  <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" transition:fade />
  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-y-0 right-0 mt-0 flex max-w-full pl-10">
        <div class="my-auto h-full w-screen max-w-2xl">
          <!-- CONTENT -->
          <div
            bind:clientWidth={width}
            transition:fly={{ x: width }}
            class="m-auto flex h-[100%] flex-col overflow-y-scroll bg-white py-0 shadow-xl"
          >
            <div class="h-28 bg-blue-400 px-4 sm:px-6">
              <div class="relative flex h-full items-center justify-center">
                <div class="absolute bottom-0 translate-y-1/2 transform text-4xl">🧳</div>
                <button
                  class="-translate-x-64 text-white"
                  on:click={() => {
                    SidePaneStore.closePane();
                  }}
                >
                  <XCircle size="40" />
                </button>
              </div>
            </div>
            <div class="relative mt-6 flex-1 px-4 sm:px-6">
              <div class="absolute inset-0 px-4 sm:px-6">
                <div class="h-full">
                  {#if $SidePaneStore.state !== SidePaneStateEnum.Closed}
                    {#if $SidePaneStore.state === SidePaneStateEnum.NewTimeEntry}
                      <SidePaneNewTimeEntry />
                    {:else if $SidePaneStore.state === SidePaneStateEnum.EditTimeEntry}
                      <SidePaneEditTimeEntry timeEntryId={$SidePaneStore.id} />
                    {:else}
                      <div>UNHANDLED</div>
                    {/if}
                  {/if}
                </div>
              </div>
            </div>
          </div>
          <!-- /CONTENT -->
        </div>
      </div>
    </div>
  </div>
</aside>
