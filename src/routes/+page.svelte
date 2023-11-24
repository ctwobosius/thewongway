<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	let currentMessage = '';

	let messageFeed = [
		{
			id: 0,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: 'Hello!',
			color: 'variant-soft-primary'
		},
		{
			id: 1,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: "You must've come to the Wong place, because I don't know your name!",
			color: 'variant-soft-primary'
		},
		{
			id: 2,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: '...Dad? Is that you?',
			color: 'variant-soft-primary'
		},
		{
			id: 3,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message:
				"Well, you never know who you're talking to on the internet! I could be your dad in disguise, who knows!",
			color: 'variant-soft-primary'
		},
		{
			id: 4,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: '...ha...',
			color: 'variant-soft-primary'
		},
		{
			id: 5,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message:
				'Yeah, no laughter, I guess dad jokes are kind of old. Well, dads in general are kind of old.',
			color: 'variant-soft-primary'
		},
		{
			id: 6,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: 'Do you always crack bad jokes?',
			color: 'variant-soft-primary'
		},
		{
			id: 7,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message:
				'Well, I try. Not to make bad ones, that is! Ah, where are my manners? My name is Mr. Wong!',
			color: 'variant-soft-primary'
		},
		{
			id: 8,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: 'Why would I tell my name to a random stranger on the internet?',
			color: 'variant-soft-primary'
		},
		{
			id: 9,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message:
				"Nice job, listening to your mother! Or your common sense, anyways, you're in luck! I respect your privacy, so no need to tell me! Please don't.",
			color: 'variant-soft-primary'
		},
		{
			id: 10,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: 'Good.',
			color: 'variant-soft-primary'
		},
		{
			id: 11,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message:
				'Well, I like turning thoughts into reality, whether that be written on paper or in code, digital or physical. This website happened to pop into my brain one day, so now here it is!',
			color: 'variant-soft-primary'
		},
		{
			id: 12,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: 'TLDR, keep your backstory to 10 words or less.',
			color: 'variant-soft-primary'
		},
		{
			id: 13,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: 'Uh, read about me, see some art, play a game or two, and enjoy your stay here?',
			color: 'variant-soft-primary'
		},
		{
			id: 14,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: "For someone who codes, you really can't count.",
			color: 'variant-soft-primary'
		},
		{
			id: 15,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: "You youngsters just can't pay attention these days...",
			color: 'variant-soft-primary'
		},
		{
			id: 16,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: 'Ok boomer',
			color: 'variant-soft-primary'
		},
		{
			id: 17,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: '>:(',
			color: 'variant-soft-primary'
		}
	];
</script>

<svelte:head>
	<title>The Wong Way</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div
		class="prose lg:prose-xl prose max-w-full dark:prose-invert space-y-10 text-center flex flex-col items-center"
	>
		<h1>Welcome!</h1>
		<!-- Animated BG -->
		<section class="img-bg" />

		<div class="space-y-2">
			<p>
				I'm on break, so I decided now would be a good time to consolidate learnings, and also learn
				a little bit of Svelte :D
			</p>
			<p><strong> UNDER CONSTRUCTION </strong></p>
		</div>
	</div>


<br>
<div class="grid grid-cols-[auto_1fr] gap-2 w-full">
	{#each messageFeed as bubble, i}
		
		{#if bubble.host === false}
			<!-- Host Message Bubble -->
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
				<div class="card p-4 variant-soft rounded-tl-none space-y-2">
					<header class="flex justify-between items-center">
						<p class="font-bold">{bubble.name}</p>
						<small class="opacity-50">{bubble.timestamp}</small>
					</header>
					<p>{bubble.message}</p>
				</div>
			</div>
		{:else}
		<div class="grid grid-cols-[1fr_auto] gap-2">
			<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
				<header class="flex justify-between items-center">
					<p class="font-bold">{bubble.name}</p>
					<small class="opacity-50">{bubble.timestamp}</small>
				</header>
				<p>{bubble.message}</p>
			</div>
			<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
		</div>
		{/if}
		<br>
	{/each}
</div>


</div>

<div
	class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token h-32 m-4"
>
	<div class="input-group-shim"></div>
	<textarea
		bind:value={currentMessage}
		class="bg-transparent border-0 ring-0"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
		rows="1"
	/>
	<button class="variant-filled-primary">Send</button>
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
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
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
