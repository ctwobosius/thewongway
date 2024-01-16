<script lang="ts">
	import Disapprove from '$lib/asset/disapprove_pixabay.svg';
	import ThumbsUpHarold from '$lib/asset/thumbs_up_harold.jpg'
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import Stars from '$lib/components/stars.svelte';

	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/monokai.css';

	// Import each language module you require
	import python from 'highlight.js/lib/languages/python';

  import CodeTutorial from '../code_tutorial.svelte'
  import Spoiler from '../text_spoiler.svelte'
  import ImageSpoiler from '../img_spoiler.svelte'

	storeHighlightJs.set(hljs);
	hljs.registerLanguage('python', python);

	const sections_ = {
		"Programming? Some kind of brainwashing?" : [
			"Programming boils down to you giving a collection of special rocks instructions on doing something cool (or maybe stupid, or stupidly cool).",
			"Obviously, I'm oversimplifying, but first, let's let you yeet some words onto the screen."
		],
		"Yeeting Words onto a Screen": [
			"We're gonna use a language called Python."
		],
		'Title 2': {
			'Subtitle 4': ['test']
		},
	};

  import { onMount } from 'svelte';

  let targetElements: HTMLElement[] = [];
  let inViewStates: boolean[] = [];

  const handleIntersection = (index: number, entry: IntersectionObserverEntry) => {
    inViewStates[index] = entry.isIntersecting;

    if (entry.isIntersecting) {
      targetElements[index].classList.add('fade-in');
    } else {
      targetElements[index].classList.remove('fade-in');
    }
  };

  onMount(() => {
    const observers = targetElements.map((element, index) => {
      const observer = new IntersectionObserver((entries) => handleIntersection(index, entries[0]));
      observer.observe(element);
      return observer;
    });

    // Cleanup the observers when the component is destroyed
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  });
</script>

<Stars duration=5000></Stars>
<!-- Body -->
<div class="container mx-auto flex justify-center items-center">
	<div class="space-y-10 w-full">
		<br>

		<article class="prose prose-neutral lg:prose-xl prose max-w-full dark:prose-invert">
			<h1 class="text-center">So You Want To Code (in Python)</h1>
			<h2 class="text-center">IN CONSTRUCTION</h2>

			<p class="inline"><b>Warning:</b> There may be <u><b>many words</b></u>. This your reaction?</p>
			<div class="inline"><ImageSpoiler src={Disapprove} alt={'Disapproval'} isVisible={false}/></div>
			
			<Spoiler content={"Didn't your mom tell you not to trust strangers?"}/>
			<Spoiler content={"Didn't your mom also tell you not to click strange links? Anyways,"}/>
			<p>Skill issue. Be better. Develop attention span.</p>
			<p>...</p>
			<p>Just kidding (mostly).</p>
			<p>Don't worry, I'll have more funny pictures! Like this one of me coding this website:</p>
			<img src={ThumbsUpHarold}>
			<Spoiler content={"Am I happy? No this took way too much time and effort, I'm clearly hiding the pain"}/>
			<p>Anyways, you want to learn how to code.<br>
				I thought this rather ok website would be fun to share with friends.<br>
				Win win!
			</p>
			<p>Now let me shove some coding lessons down your head.</p>
			<br>
			
			<!-- <div bind:this={targetElements[0]}>
				<p class={inViewStates[0] ? 'fade-in' : ''}>
				</p>
			</div> -->

			<CodeTutorial page_suffix="Python" sections={sections_} default_language="python"></CodeTutorial>
		</article>

	</div>
</div>



<!-- <span bind:this={targetElements[1]}>
	<p class={inViewStates[1] ? 'fade-in' : ''}>{inViewStates[1] ? 'Element 1 is in view' : 'Element is out of view'}</p>
</span> -->

<style lang="postcss">
	.inline {
		display: inline-block;
    padding: 10px;
    margin: 5px;
		bottom:0;
		vertical-align: middle;
	}

	@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Apply the fade-in animation to the target element */
  .fade-in {
    animation: fadeIn 1.5s ease-in-out;
  }

</style>