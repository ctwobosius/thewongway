<svelte:head>
	<title>The Wong Way: C++</title>
</svelte:head>

<script lang="ts">
	import { TreeView, TreeViewItem, CodeBlock } from '@skeletonlabs/skeleton';

	let myTreeView: TreeView;



	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';

	// Import each language module you require
	import cpp from 'highlight.js/lib/languages/cpp'; // for C++


	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);

	// Register each imported language module
	hljs.registerLanguage('cpp', cpp); // for HTML
</script>

<head>
	<base target="_blank" />
</head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10  w-full">
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
								Oho, the real question! Coming in as a Python and C programmer, I did not know the C++ way of
								doing things. So here I am, recording things I learned (definitely not talking to myself), hoping it'll be useful
								for anyone reading.
							</p>
						</TreeViewItem>
					</svelte:fragment>
				</TreeViewItem>
				<TreeViewItem open>
					<h2>The Content</h2>
					<svelte:fragment slot="children">
						<TreeViewItem open>
							<h3>Memory Management</h3>
							<svelte:fragment slot="children">
								<TreeViewItem open>
									<p>
										You'll be happy (probably) to know that C++ does a lot of the memory management for you, due to how C++ classes work.
										However, this also means C++ opens a lot more ways of shooting yourself in the foot, <a href="https://www.stroustrup.com/quotes.html">which I paraphrased from the C++ founder.</a>
									</p>
									<p>
										To begin with, one of the things to know are that C++ classes are just structs with extra features. Let's see how this is useful:
									</p>
									<p>
										In C, you use <code class="c">malloc</code> and <code class="c">free</code> for making sure things persist across the program's runtime, eg:
										<CodeBlock language="cpp" code={`
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct BoneEaterStruct {
    int possums_collected;
    int bones_eaten;
    char name[32];
} BoneEater;

void print_bone_eater_stats(const BoneEater* bonter)
{
    printf(
        "%s has %d possums, and ate %d bones :D\n",
        bonter->name,
        bonter->possums_collected,
        bonter->bones_eaten
    );
}

int main()
{
	BoneEater* bob = (BoneEater*) malloc(sizeof(BoneEater));
	
	// Set Bob's name
	char bob_name_stack[] = "Bob";
    strcpy(bob->name, bob_name_stack);
    
    // Set Bob's stats	
	bob->possums_collected = 5;
	bob->bones_eaten = 0;
	
	// See what Bob has been up to
	print_bone_eater_stats(bob);
	
	// Free my guy Bob, or he'll leak our secret (memory)
	free(bob);
}`
																					} class="not-prose"
																							></CodeBlock>
										which prints <code>Bob has 5 possums, and ate 0 bones :D</code>
									</p>
									<p>
										Say goodbye to <code class="c">malloc</code> and <code class="c">free</code>!
										If you still want to follow the C way of doing things, you should use <code>new</code> and <code>delete</code> instead:
									</p>
									<CodeBlock language="cpp" code={`
#include <iostream>

// Note: DO NOT put the following line in a header file
using namespace std;

class BoneEater {
    public:
        int possums_collected;
        int bones_eaten;
        string name;
};

void print_bone_eater_stats(const BoneEater* bonter)
{
    cout << bonter->name << " has " << bonter->possums_collected << " possums, and ate " << bonter->bones_eaten << " bones :D" << endl;
}

int main()
{
	BoneEater* bob = new BoneEater;
	
	// Set Bob's name
	bob->name = "Bob";
    
    // Set Bob's stats	
	bob->possums_collected = 5;
	bob->bones_eaten = 0;
	
	// See what Bob has been up to
	print_bone_eater_stats(bob);
	
	// Free my guy Bob, or he'll leak our secret (memory)
	delete bob;
}`
										} class="not-prose"
												></CodeBlock>

									<p>
										What's the difference? Now, in C++, memory size boilerplate is automatically taken care of (yay!),
										<code>new</code> calls the class constructor, and <code>delete</code> calls the destructor.
									</p>
									<p>
										We'll see below why this is nice, but the gist is now all your allocation
										boilerplate can go into the constructor, and deallocation boilerplate into the destructor.
									</p>
								</TreeViewItem>
							</svelte:fragment>
						</TreeViewItem>

						<TreeViewItem>
							<h3>RAII</h3>
							<svelte:fragment slot="children">
								<TreeViewItem>
									<p>
										<a href="https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization">Resource Acquisition Is Initialization (RAII)</a>
										is related to memory management - specifically, the stack.
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


		<br>
	</div>
</div>

<style lang="postcss">
	p .c {
		color:rgb(255, 128, 128);
	}
	p, CodeBlock {
		cursor: text;
	}
	.test {
		color:rgb(255, 128, 128);
	}
	code {
		color:greenyellow;
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
