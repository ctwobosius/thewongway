<script lang="ts">
	import { TreeView, TreeViewItem, type TreeViewNode, CodeBlock } from '@skeletonlabs/skeleton';

	let myTreeView: TreeView;

	// myTreeView.expandAll();
	// myTreeView.collapseAll();
</script>

<head>
	<base target="_blank" />
</head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 flex flex-col">
		<!-- Animated Logo -->
		<section class="img-bg" />

		<article class="prose prose-neutral lg:prose-xl prose max-w-full dark:prose-invert">
			<h1 class="text-center">Gee, Yet Another C++ Guide</h1>
			<div class="text-center">
				<button class="btn variant-filled" on:click={myTreeView.expandAll}>Expand All</button>
				<button class="btn variant-filled" on:click={myTreeView.collapseAll}>Collapse All</button>
			</div>
			<br>

			<TreeView bind:this={myTreeView}>
				<TreeViewItem>
					<h2>Why does C++ exist?</h2>
					<svelte:fragment slot="children">
						<TreeViewItem>
							<p>
								The age old question, except you're not asking yourself, and you probably don't want
								to get into an internet debate. Oversimplified:
							</p>
							<ul>
								<li>
									Performance and low level control, but you want
									<a href="https://en.wikipedia.org/wiki/Object-oriented_programming">OOP</a>
									(<a href="https://en.wikipedia.org/wiki/C%2B%2B"
										>C++ was originally C with classes</a
									>)
								</li>
								<li>
									Has a wide array <small>(aha...)</small> of prebuilt data structures and libraries
									(eg: <a href="https://en.wikipedia.org/wiki/Standard_Template_Library">STL</a>)
								</li>
								<li>
									The large community, support, and/or <a
										href="https://madnight.github.io/githut/#/pull_requests/2023/3"
										>codebases with C++ baked into it</a
									>
								</li>
							</ul>
						</TreeViewItem>
					</svelte:fragment>
				</TreeViewItem>
				<TreeViewItem>
					<h2>Why does this guide exist?</h2>
					<svelte:fragment slot="children">
						<TreeViewItem>
							<p>
								Oho, the real question! Coming in as a C programmer, I did not know the C++ way of
								doing things. So here I am, recording things I learned, and hoping it'll be useful
								for myself and others.
							</p>
						</TreeViewItem>
					</svelte:fragment>
				</TreeViewItem>
				<TreeViewItem>
					<h2>The Content</h2>
					<svelte:fragment slot="children">
						<TreeViewItem>
							<h3>Memory Management</h3>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>

									</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<h3>RAII</h3>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>

									</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<h3>Rule of 5</h3>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>

									</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<h3>Compile time optimizations</h3>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>
										if constexpr bool templates
									</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<h3>Template Metaprogramming</h3>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>
										enum list
									</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<h3>C++ to Python</h3>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>
										CSV, JSON, YAML
									</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
						<TreeViewItem>
							<h3>Lockless Containers</h3>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>

									</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>
					</svelte:fragment>
				</TreeViewItem>
			</TreeView>
		</article>
		<CodeBlock
			language="cpp"
			code={`This is code
Your mom`}
		></CodeBlock>
		<article class="prose prose-neutral lg:prose-xl prose max-w-full dark:prose-invert">
			<p> Lol  </p>
		</article>
		<br>
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
		animation:
			pulse 30s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 30s linear infinite;
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

	h2,
	h3 {
		margin: auto;
	}
</style>
