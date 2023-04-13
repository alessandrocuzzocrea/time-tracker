<script>
	import '../app.css';
	import Player from '../components/Player.svelte';
	import Header from '../components/Header.svelte';
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
							<span>Home</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<span>For You</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<span>Browse</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<span>Project 1</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<span>Project 2</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<!-- Content -->
		<div class="main flex-1 flex-col bg-white">
			<div class="header">
				<Header />
			</div>
			<div class="content p-4">
				<slot />
			</div>
			<div class="player">
				<Player />
			</div>
		</div>
	</div>
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
