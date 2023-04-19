<script lang="ts">
  // import SidePanel from '$lib/components/SidePanel.svelte';

  // import type { Configuration } from '../../../../generated';
  import { Configuration, TestApi } from '$lib/generated';

  // const configurationParams: Configuration = {
  //   baseServer: {
  //     scheme: 'https',
  //     host: 'api.example.com',
  //     basePath: '/v1'
  //   }
  // };

  const configuration = new Configuration({
    basePath: 'http://localhost:5000'
  });

  // const config = createConfiguration(configurationParams);
  const cool = new TestApi(configuration);
  let loller = cool.apiTestGet();
  // console.log(loller);
</script>

<!-- <h1>Test Page</h1>
<SidePanel toggleSidePanel /> -->
<h1 class="text-xl">Tasks</h1>
{#await loller}
  <p>...waiting</p>
{:then tasks}
  {#each tasks as task}
    <ul>
      <li>{task.name}</li>
    </ul>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
