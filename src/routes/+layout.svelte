<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import CPP from "$lib/asset/cplusplus.svg"
	import Bonfire from "$lib/asset/bonfire-pixabay.jpg"
	import { base } from '$app/paths';
</script>

<style>
  .centered {
		display: flex; /* or grid */
		justify-content: center;
		align-items: center;
	}

	#lead-app-bar {
		margin-left: 1em;
	}

	span svg, span img{
		height: 3vh;
		max-height: 3vh;
	}

	#footer {
		margin-bottom: 4em;
	}

	:global(body) {
		background-image: linear-gradient(-42deg, #63331664, #642b1853) !important;
		/* background-image: linear-gradient(-42deg, #de1e00, #d63200) !important; */
		background-color: rgb(7, 14, 23) !important;
		transition: background-color 0.3s;
		animation: gradient 32s cubic-bezier(.31,0,.69,.99) infinite;
		z-index: 0;
	}


	@keyframes gradient {
		0%, 100% {
			background-size: 200% 200%;
			background-position: 0% 0%;
		}
		50% {
			background-size: 100% 100%;
			background-position: 90% 100%;
		}
	}

	.bg-image {
		position: fixed;
		top: 0;
		left: 0;
		opacity: 5%;
		width: 100%;
		z-index: -1 !important;
	}
</style> 

<!-- App Shell -->
<AppShell>
	<img class="bg-image" src={Bonfire} alt="Background">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-gradient-to-r from-medium-light-orange/[.1] to-medium-orange/[.3]" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" padding="p-3">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase" id="lead-app-bar">Crash Can</strong>
			</svelte:fragment>
			<nav>
				<TabGroup 
				justify="justify-center"
				active="variant-filled-primary"
				hover="hover:variant-soft-primary"
				flex="flex-1 lg:flex-none"
				rounded=""
				border=""
				class="w-full"
				>
					<TabAnchor href="{base}/" target="_self">
						<span class="centered">
							<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
							<svg xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512">
								<path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
							</svg>	
						</span>
						<span>Home</span>
					</TabAnchor>
					<TabAnchor href="{base}/git" target="_self">
						<span class="centered">
							<svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M439.6 236.1L244 40.5a28.9 28.9 0 0 0 -40.8 0l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3L240.2 199v121.9c25.3 12.5 22.3 41.9 9.1 55a34.3 34.3 0 0 1 -48.6 0c-17.6-17.6-11.1-46.9 11.3-56v-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1a28.9 28.9 0 0 0 0 40.8l195.6 195.6a28.9 28.9 0 0 0 40.8 0l194.7-194.7a28.9 28.9 0 0 0 0-40.8z"/></svg>
						</span>
						<span>Git</span>
					</TabAnchor>
					<TabAnchor href="{base}/python" target="_self">
						<span class="centered"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
							<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
							<path fill="#ffffff" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
						</svg>
						</span>
						<span>Python</span>
					</TabAnchor>
					<TabAnchor href="{base}/cpp" target="_self">
						<span class="centered"><img src={CPP} alt=""/></span>
						<span>C++</span>
					</TabAnchor>
					<TabAnchor href="{base}/game" target="_self">
						<span class="centered"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg></span>
						<span>Secret</span>
					</TabAnchor>
				
				</TabGroup>
			</nav>
			<svelte:fragment slot="trail"></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<div id="footer" class="centered">© 2023 Calvin Wong. All Laughs Reserved.<div>

</AppShell>
