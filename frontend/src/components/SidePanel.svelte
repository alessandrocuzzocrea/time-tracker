<script>
	import { fade, fly } from 'svelte/transition';

	let width;
	// let showSidePanel = true;
	export let toggleSidePanel;
</script>

<aside class="relative z-10">
	<div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" transition:fade />
	<div class="fixed inset-0 overflow-hidden">
		<div class="absolute inset-0 overflow-hidden">
			<div class="absolute inset-y-0 right-0 mt-0 flex max-w-full pl-10">
				<div class="my-auto h-full w-screen max-w-2xl">
					<div
						bind:clientWidth={width}
						transition:fly={{ x: width }}
						class="m-auto flex h-[100%] flex-col overflow-y-scroll bg-white py-6 shadow-xl"
					>
						<div class="px-4 sm:px-6">
							<div class="flex items-start justify-between">
								<h2 class="text-lg font-medium text-gray-900">Panel title</h2>
								<div class="ml-3 flex h-7 items-center">
									<button
										class="rounded-md bg-white font-bold text-gray-400 hover:text-gray-500"
										on:click={toggleSidePanel}
									>
										close
									</button>
								</div>
							</div>
						</div>
						<div class="relative mt-6 flex-1 px-4 sm:px-6">
							<div class="absolute inset-0 px-4 sm:px-6">
								<div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
									Some content
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</aside>
