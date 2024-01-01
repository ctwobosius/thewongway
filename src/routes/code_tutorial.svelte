<script lang="ts">
	import '$lib/css/background.pcss';
	import '$lib/css/code_tutorial.pcss';

	import { TreeView, TreeViewItem, CodeBlock } from '@skeletonlabs/skeleton';

	let myTreeView: TreeView;

	export let page_suffix = '';
	export let sections = {
		//  Map<string, string[] | Map<string, string[]>>
		'Title 1': ['`The`'],
		'Title 2': {
			'Subtitle 2': ['subparagraph']
		}
	};
	export let default_language = '';
</script>

<svelte:head>
	<title>The Wong Way: {page_suffix}</title>
</svelte:head>

<head>
	<base target="_blank" />
</head>

<div class="text-center">
	<button class="btn variant-filled" on:click={myTreeView.expandAll}>Expand All</button>
	<button class="btn variant-filled" on:click={myTreeView.collapseAll}>Collapse All</button>
</div>
<br />

<div class="with-backdrop">
	<TreeView bind:this={myTreeView}>
		<!-- Main Sections -->
		{#each Object.entries(sections) as [title, array_or_map]}
			<TreeViewItem open>
				<h2>{title}</h2>
				<svelte:fragment slot="children">
					<!-- No Subsections -->
					{#if Array.isArray(array_or_map)}
						<!-- Paragraph or Code Block -->
						{#each Object.entries(array_or_map) as [_index, paragraph]}
							{#if paragraph[0] == '>'}
								<div class="code-with-backdrop">
									<CodeBlock
										class="cursor-default not-prose w-full max-w-full bg-slate-500"
										background="bg-neutral-900"
										language={default_language}
										code={paragraph.substring(1)}
									></CodeBlock>
								</div>
							{:else}
								<p>{@html paragraph}</p>
							{/if}
						{/each}

						<!-- Subsection -->
					{:else}
						{#each Object.entries(array_or_map) as [subtitle, subparagraph]}
							<TreeViewItem open>
								<h3>{subtitle}</h3>
								<svelte:fragment slot="children">
									<!-- Paragraph or Code Block -->
									{#each Object.entries(subparagraph) as [_index, paragraph]}
										{#if paragraph[0] == '>'}
											<div class="code-with-backdrop">
												<CodeBlock
													class="cursor-default not-prose w-full max-w-full"
													language={default_language}
													code={paragraph.substring(1)}
												></CodeBlock>
											</div>
										{:else}
											<p>{@html paragraph}</p>
										{/if}
									{/each}
								</svelte:fragment>
							</TreeViewItem>
						{/each}
					{/if}
				</svelte:fragment>
			</TreeViewItem>
		{/each}
	</TreeView>
</div>

<style lang="postcss">
	h2,
	h3 {
		margin: 0.5em;
	}

	.code-with-backdrop {
		background-color: rgba(16, 24, 34, 0.65);
		border-radius: 1em;
		padding: 1em;
	}

	.with-backdrop {
		background-color: rgba(65, 32, 28, 0.65);
		border-radius: 1em;
		padding: 2em 3em 2em 3em;
	}
</style>
