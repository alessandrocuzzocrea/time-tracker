<script>
	import avatar1 from '$lib/assets/1.jpg';
</script>

<header class="bg-white text-gray-800 py-4">
	<div class="container mx-auto flex justify-between items-center px-4">
		<div class="flex items-center flex-grow">
			<form class="w-full">
				<div class="flex items-center mr-16">
					<input
						class="bg-gray-100 text-gray-800 border border-gray-200 py-2 px-4 rounded-l-full rounded-r-full block w-full focus:outline-none focus:ring focus:border-blue-300"
						type="text"
						placeholder="Search..."
					/>
					<svg
						class="h-6 w-6 text-blue-400 mr-4 -ml-12"
						fill="#AB7C94"
						width="800px"
						height="800px"
						viewBox="0 0 32 32"
						enable-background="new 0 0 32 32"
						id="Glyph"
						version="1.1"
						xml:space="preserve"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						><path
							d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
							id="XMLID_223_"
						/></svg
					>
				</div>
			</form>
		</div>
		<div class="flex items-center">
			<svg
				class="h-12 w-12 text-blue-400 mr-8 -mb-3"
				fill="none"
				width="800px"
				height="800px"
				viewBox="0 0 32 32"
				enable-background="new 0 0 32 32"
				id="Glyph"
				version="1.1"
				xml:space="preserve"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<path
					d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z"
					stroke="#292D32"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
				/>
				<path
					d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
					stroke="#292D32"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
					stroke="#292D32"
					stroke-width="1.5"
					stroke-miterlimit="10"
				/>
			</svg>
			<div class="flex items-center">
				<img class="h-12 rounded-full mr-4" src={avatar1} alt="Profile" />
				<div class="mr-4">
					<div class="font-bold">Pompompurin</div>
					<div class="text-sm text-gray-500">Team Sanrio</div>
				</div>
			</div>
		</div>
	</div>
</header>
