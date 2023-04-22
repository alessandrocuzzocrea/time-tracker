<script>
  import '../app.css';
  import { GlobeAlt, CheckCircle, Rss, CalendarDays, ChartPie, Folder } from 'svelte-heros';
  import Player from '$lib/components/Player.svelte';
  import Header from '$lib/components/Header.svelte';
  import SidePane from '$lib/components/SidePane.svelte';
  import { ProjectStore } from '$lib/stores/ProjectStore';
  import { SidePaneStore, SidePaneStateEnum } from '$lib/stores/SidePaneStore';
  import { TimeEntriesCurrentStore } from '$lib/stores/TimeEntryStore';

  import { fly, fade } from 'svelte/transition';
  // let showSidePane, width;
  function toggleSidePane() {
    // showSidePane = !showSidePane;
    SidePaneStore.editTimeEntry(2);
  }
</script>

<body class="bg-gray-200">
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="flex w-48 flex-col bg-electric-indigo p-4 text-gray-custom-1">
      <div class="mb-8">
        <h1 class="mb-2 text-2xl font-semibold">TimeTracker</h1>
      </div>
      <!-- <div>
        <button class="p-3" on:click={toggleSidePane}> Show side panel </button>
      </div> -->
      <nav>
        <p class="mb-2 text-xs">TRACK</p>
        <ul class="mb-10 space-y-2">
          <li class="">
            <a
              href="/"
              class="flex items-center space-x-2 rounded-lg bg-highlight-menu-custom px-3 py-2 text-gray-custom-2 transition-colors hover:bg-highlight-menu-custom-2"
            >
              <CheckCircle />
              <span>Overview</span>
            </a>
          </li>
          <li>
            <a
              href="/explore"
              class="flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors hover:bg-highlight-menu-custom-2 hover:text-gray-custom-2"
            >
              <GlobeAlt />

              <span>Explore</span>
            </a>
          </li>
          <li>
            <a
              href="/feed"
              class="flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors hover:bg-highlight-menu-custom-2 hover:text-gray-custom-2"
            >
              <Rss />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a
              href="/history"
              class="flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors hover:bg-highlight-menu-custom-2 hover:text-gray-custom-2"
            >
              <CalendarDays />
              <span>History</span>
            </a>
          </li>
          <li>
            <a
              href="/report"
              class="flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors hover:bg-highlight-menu-custom-2 hover:text-gray-custom-2"
            >
              <ChartPie />
              <span>Report</span>
            </a>
          </li>
        </ul>
        <p class="mb-2 text-xs">PROJECTS</p>
        <ul class="space-y-2">
          {#each $ProjectStore as { id, projectName } (id)}
            <li>
              <a
                href="/project/{id}"
                class="flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors hover:bg-highlight-menu-custom-2 hover:text-gray-custom-2"
              >
                <Folder />
                <span>{projectName}</span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
    <!-- Content -->
    <div class="main flex-1 flex-col bg-slate-100">
      <div class="header">
        <Header />
      </div>
      <div class="content p-4">
        <slot />
      </div>
      {#if $TimeEntriesCurrentStore}
        <div class="player">
          <Player />
        </div>
      {/if}
    </div>
  </div>
  {#if $SidePaneStore.state != SidePaneStateEnum.Closed}
    ＜<SidePane />
  {/if}
</body>

<style>
  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  }

  .header {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #fff;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .content {
    flex: 1;
  }

  .player {
    position: sticky;
    bottom: 0;
    z-index: 1;
  }
</style>
