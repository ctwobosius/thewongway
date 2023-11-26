<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import UserCheck from '$lib/asset/user-check.svg';
	import Hipster from '$lib/asset/hipster_625710.png';

	// Class representing a fixed message and its reply.
	class FixedMessage {
		msg: string;
		reply: string;

		constructor(msg: string, reply: string) {
			this.msg = msg;
			this.reply = reply;
		}
	}

	// Series of fixed dialogue.
	const chat = [
		new FixedMessage(
			'Hello!',
			"You must've come to the Wong place, because I don't know your name!"
		),
		new FixedMessage(
			'...Dad? Is that you?',
			"Well, you never know who you're talking to on the internet! I could be your dad in disguise, who knows!"
		),
		new FixedMessage(
			'...ha...',
			'Yeah, no laughter, I guess dad jokes are kind of old. Well, dads in general are kind of old.'
		),
		new FixedMessage(
			'Do you always crack bad jokes?',
			'Well, I try. Not to make bad ones, that is! Ah, where are my manners? My name is Mr. Wong!'
		),
		new FixedMessage(
			'Why would I tell my name to a random stranger on the internet?',
			"Nice job, listening to your mother! Or your common sense, anyways, you're in luck! I respect your privacy, so no need to tell me! Please don't."
		),
		new FixedMessage(
			'Good.',
			'Well, I like turning thoughts into reality, whether that be written on paper or in code, digital or physical. This website happened to pop into my brain one day, so now here it is!'
		),
		new FixedMessage(
			'TLDR, keep your backstory to 10 words or less.',
			'Uh, read about me, see some art, play a game or two, and enjoy your stay here?'
		),
		new FixedMessage(
			"For someone who codes, you really can't count.",
			"You youngsters just can't pay attention these days..."
		),
		new FixedMessage('Ok boomer', '>:(')
	];

	let fixed_msg_idx = 0;

	function getCurrentTimestamp(): string {
		return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	}

	let elemChat: HTMLElement;
	let currentMessage = chat[fixed_msg_idx].msg;

	function is_send_disabled(msg: string): boolean {
		return msg == '';
	}

	let messageFeed = [
		{
			id: 0,
			host: false,
			name: 'Calvin',
			timestamp: getCurrentTimestamp(),
			message: 'Hi!',
			color: 'variant-soft-primary'
		}
	];

	// Runs through fixed conversation
	function advanceMessage(): void {
		if (fixed_msg_idx >= chat.length) {
			return;
		}
		const newMessage = {
			id: messageFeed.length,
			host: true,
			name: 'You',
			timestamp: getCurrentTimestamp(),
			message: chat[fixed_msg_idx].msg,
			color: 'variant-soft-primary'
		};
		const newReply = {
			id: messageFeed.length,
			host: false,
			name: 'Calvin',
			timestamp: getCurrentTimestamp(),
			message: chat[fixed_msg_idx].reply,
			color: 'variant-soft-primary'
		};
		fixed_msg_idx++;

		// Immediately send our fixed message
		messageFeed = [...messageFeed, newMessage];
		currentMessage = '';
		setTimeout(() => {
			scrollChatBottom('smooth');
		}, 10);

		// Have delayed reply
		setTimeout(() => {
			messageFeed = [...messageFeed, newReply];
		}, 1000);
		setTimeout(() => {
			scrollChatBottom('smooth');
		}, 1050);

		// If we have more messages left, put them in the input field
		if (fixed_msg_idx >= chat.length) {
			return;
		}
		setTimeout(() => {
			currentMessage = chat[fixed_msg_idx].msg;
		}, 1250);
	}

	function scrollChatBottom(behavior?: ScrollBehavior): void {
		elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
	}
</script>

<svelte:head>
	<title>The Wong Way</title>
</svelte:head>

<div class="container w-full mx-auto flex justify-center items-center">
	<div
		class="prose lg:prose-xl prose max-w-full dark:prose-invert space-y-10 text-center flex flex-col items-center"
	>
		<br>
		<h1>Welcome!</h1>
		<!-- Animated BG -->
		<section class="img-bg" />

		<div class="space-y-2">
			<p></p>
			<p>
				I'm on break, so I decided now would be a good time to consolidate learnings, and also learn
				a little bit of Svelte :D
			</p>
			<p>Icons designed by Freepik and FeatherIcons</p>
			<p>
				<strong> UNDER CONSTRUCTION </strong>
			</p>
		</div>
	</div>
	<br />
</div>
<div bind:this={elemChat} class="max-h-[500px] min-h-[500px] p-4 overflow-y-auto space-y-4">
	{#each messageFeed as bubble, i}
		{#if bubble.host === false}
			<!-- Host Message Bubble -->
			<div class="grid grid-cols-[auto_1fr] gap-2">
				<Avatar src={Hipster} width="w-12" />
				<div class="card p-4 variant-soft rounded-tl-none space-y-2">
					<header class="flex justify-between items-center">
						<p class="font-bold">{bubble.name}</p>
						<small class="opacity-50">{bubble.timestamp}</small>
					</header>
					<p>{bubble.message}</p>
				</div>
			</div>
		{:else}
			<!-- Nonhost Message Bubble -->
			<div class="grid grid-cols-[1fr_auto] gap-2">
				<div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
					<header class="flex justify-between items-center">
						<p class="font-bold">{bubble.name}</p>
						<small class="opacity-50">{bubble.timestamp}</small>
					</header>
					<p>{bubble.message}</p>
				</div>
				<Avatar src={UserCheck} width="w-12" />
			</div>
		{/if}
		<br />
	{/each}
</div>

<footer class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
	<div class="input-group-shim"></div>
	<input
		style="vertical-align: middle; padding-left: 0.75vw;"
		readonly="true"
		name="prompt"
		id="prompt"
		placeholder="Free will? This chat isn't having any of that... ;)"
		bind:value={currentMessage}
	/>

	<button class="variant-filled-primary" disabled={is_send_disabled(currentMessage)} on:click={advanceMessage}
		>Send</button
	>
</footer>

<style lang="postcss">
	footer {
		position: fixed;
		height: 5svh;
		top: 95svh;
	}

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
