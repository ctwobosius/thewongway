<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import Home from "$lib/asset/home.svg"
	import Code from "$lib/asset/code.svg"
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
</style> 

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" padding="p-3">
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
				class="bg-surface-100-800-token w-full"
				>
					<TabAnchor href="{base}/" target="_self">
						<span class="centered"><img src={Home} alt=""/></span>
						<span>Home</span>
					</TabAnchor>
					<TabAnchor href="{base}/cpp" target="_self">
						<span class="centered"><img src={Code} alt=""/></span>
						<span>C++</span>
					</TabAnchor>
				
				</TabGroup>
			</nav>
			<svelte:fragment slot="trail"></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
