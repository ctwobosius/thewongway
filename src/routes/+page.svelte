<svelte:head>
	<title>The Wong Way</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="prose lg:prose-xl prose max-w-full dark:prose-invert space-y-10 text-center flex flex-col items-center">
		<h1>Welcome!</h1>
		<!-- Animated BG -->
		<section class="img-bg" />
	
		<div class="space-y-2">
			<p>I'm on break, so I decided now would be a good time to consolidate learnings, and also learn a little bit of Svelte :D</p>
			<p><strong>
				UNDER CONSTRUCTION
			</strong></p>
		</div>

	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
