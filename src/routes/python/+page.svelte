<script lang="ts">
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';

	// Import each language module you require
	import python from 'highlight.js/lib/languages/python';

  import CodeTutorial from '../code_tutorial.svelte'

	storeHighlightJs.set(hljs);
	hljs.registerLanguage('python', python);

	const sections_ = {
		"Coding?" : ["At the most basic level, programming is you giving a collection of special rocks instructions on how to do something cool (or maybe stupid, or stupidly cool)."],
		'Title 1': ["`def for():"],
		'Title 2': {
			'Subtitle 4': ['test']
		},
	};
</script>

<CodeTutorial page_suffix="Python" title="So You Want To Code (in Python)" sections={sections_} default_language="python"></CodeTutorial>
