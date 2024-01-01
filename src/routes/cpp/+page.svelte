<script lang="ts">
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import Stars from '$lib/components/stars.svelte';

	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/monokai.css';

	// Import each language module you require
	import cpp from 'highlight.js/lib/languages/cpp';

	import CodeTutorial from '../code_tutorial.svelte';

	storeHighlightJs.set(hljs);
	hljs.registerLanguage('cpp', cpp);

	const sections_ = {
		'Why does C++ exist?': [
			"The age old question, except you're not asking yourself, and you probably don't want to get into an internet debate. Oversimplified:",
			"- Performance and low level control, but you want <a href='https://en.wikipedia.org/wiki/Object-oriented_programming'>OOP</a> (<a href='https://en.wikipedia.org/wiki/C%2B%2B'>C++ was originally C with classes</a>)",
			"- Has a wide array <small>(aha...)</small> of prebuilt data structures and libraries (eg: <a href='https://en.wikipedia.org/wiki/Standard_Template_Library'>STL</a>)",
			"- The large community, support, and/or <a href='https://madnight.github.io/githut/#/pull_requests/2023/3'>codebases with C++ baked into it</a>"
		],
		'Why does this guide exist?': [
			"Oho, the real question! Coming in as a Python and C programmer, I did not know the C++ way of doing things. So here I am, recording things I learned (definitely not talking to myself), hoping it'll be useful for anyone reading."
		],
		'Le Content': {
			'Memory Management': [
				"You'll be happy (probably) to know that C++ does a lot of the memory management for you, due to how C++ classes work. However, this also means C++ opens a lot more ways of shooting yourself in the foot, <a href='https://www.stroustrup.com/quotes.html'>which I paraphrased from the C++ founder.</a>",
				"To begin with, one of the things to know are that C++ classes are just structs with extra features. Let's see how this is useful:",
				"In C, you use <code class='old_code'>malloc</code> and <code class='old_code'>free</code> for making sure things persist across the program's runtime, eg:",
				`>
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
        "%s has %d possums, and ate %d bones :D\\n",
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
}`,
				'which prints <code>Bob has 5 possums, and ate 0 bones :D</code>',
				"Say goodbye to <code class='old_code'>malloc</code> and <code class='old_code'>free</code>! If you still want to follow the C way of doing things, you should use <code>new</code> and <code>delete</code> instead:",
				`>
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
}
`,
				"What's the difference? C++ will take care of the allocation size boilerplate for you (yay!), <code>new</code> calls the constructor, and <code>delete</code> calls the destructor.",
				"We'll see below why the constructor and destructor calls are nice (basically boilerplate removal)."
			],
			"RAII": [''],
			'Rule of 5': [''],

			'Compile time optimizations': ['if constexpr bool templates'],

			'Template Metaprogramming': ['enum list recursion'],

			'Pseudo C++ to Python': ['CSV, JSON, YAML'],

			'Lockless Containers': ['']
		}
	};
	console.log(hljs);
</script>

<Stars duration=5000></Stars>
<!-- Body -->
<div class="container mx-auto flex justify-center items-center">
	<div class="w-full">
		<!-- Animated Logo -->
		<section class="img-bg" />

		<article class="prose prose-neutral lg:prose-xl prose max-w-full dark:prose-invert">
			<br> <br>
			<h1 class="text-center">"Gee, Yet Another C++ Guide"</h1>
			<CodeTutorial page_suffix="C++" sections={sections_} default_language="cpp"></CodeTutorial>
		</article>


	</div>
</div>
