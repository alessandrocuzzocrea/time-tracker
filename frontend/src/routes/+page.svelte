<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>
  
<!-- <h1>{data.Items.title}</h1> -->
<ul>
	{#each data.items as item}
        <li>{item}</li>
	{/each}
</ul>
