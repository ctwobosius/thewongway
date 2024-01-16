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


  let rows = [
    { items: ['Item 1', 'Item 2', 'Item 3'] },
    { items: ['Item 4', 'Item 5'] },
    { items: ['Item ', 'Item 7', 'Item 8', 'Item 9'] },
    // Add more rows with different numbers of columns as needed
  ];
</script>

<style>
  .grid {
    /* gap: 10px; */
  }

  .row {
    display: flex;
    width: 100%;
    /* flex: 1 0 calc(33.33% - 10px); */
    /* gap: 10px; */
  }

  .column {
    flex: 1;
    /* background-color: lightblue; */
    padding: 1em;
    border: 1px solid #ccc;
    /* border-radius: 1em; */
  }
</style>

<div class="grid">
  {#each rows as { items }, rowIndex (items)}
    <div class="row" key={rowIndex}>
      {#each items as column (column)}
        <div class="column" key={column}>{column}</div>
      {/each}
    </div>
  {/each}
</div>
