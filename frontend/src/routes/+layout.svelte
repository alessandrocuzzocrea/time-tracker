<script>
	import '../app.css';
	import Player from '../components/Player.svelte';
</script>

<body class="bg-gray-200">
	<div class="flex h-screen">
		<!-- Sidebar -->
		<div class="bg-blue-600 w-48 flex flex-col p-4 text-white">
			<div class="mb-8">
				<h1 class="text-2xl font-semibold mb-2">TimeTracker</h1>
			</div>
			<nav>
				<ul class="space-y-2">
					<li>
						<a
							href="/"
							class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<!-- <span class="material-icons">dashboard</span> -->
							<span>Home</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<!-- <span class="material-icons">dashboard</span> -->
							<span>For You</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<!-- <span class="material-icons">inbox</span> -->
							<span>Browse</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<!-- <span class="material-icons">people</span> -->
							<span>Project 1</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<!-- <span class="material-icons">settings</span> -->
							<span>Project 2</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<!-- Content -->
		<div class="flex-1 flex-col bg-white">
			<Player />
			<div class="p-4">
				<slot />
			</div>
		</div>
	</div>
</body>
