<script lang="ts">
	// Highlight JS Boilerplate
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js/lib/core';
	storeHighlightJs.set(hljs);
	import bash from 'highlight.js/lib/languages/bash';
	hljs.registerLanguage('bash', bash);

	import Stars from '$lib/components/stars.svelte';

	import CodeTutorial from '../code_tutorial.svelte';

	const sections_ = {
		'Google Docs for Coders': [
			"Yeah, this is basically Google docs for coders, with extra steps, such as:",
			"- version control", 
			"- forcefully deleting your (and maybe others') bad code,",
			"- etc.",
			"I'll assume you're somewhat used to git, but the following are a few common confusing commands for beginners, that I'll provide summaries and a basic example of how to use it."
		],
		"Terminology" : [
			"Repository/Repo - Place where code is stored, can be on computer, on server, etc. You can think of it like a folder.",
			"Branch - Within a repo, the name of a specific version (snapshot) of code.",
			"Commit - Within a branch, the name of a snapshot of code, also known as the code changes since the last commit.",
		],
		'Commands': {
			'Pulling (Rebase)': [
				"When you need to grab code from the server:",
				`>
# Command skeleton:
git pull --rebase REPO_NAME BRANCH_NAME

# Example: ----------------------------
git pull --rebase origin main
`,
				"Typically, you'll want to pull from <code>origin</code> (default name of remote repo), and then the branch name of whatever code you want in your current branch. The example above is pulling from the server's main branch.",
				"Sometimes, you'll need to do merge conflicts, I like to do that in VSCode, but you can also use <code>git diff</code> from the terminal."
			],
			'Squashing': [
				"When you need to make a bunch of commits (eg: <code>'Commit 1: Why doesn't this work', 'Commit 2: Maybe works?', 'Commit 3: FINALLY'</code>) and put them into one (eg: <code>'Commit 1: Now boss won't see my bugs'</code>):",
				`>
# Command skeleton:
git log
# Select the commit ID right after the one you want to squash
git rebase -i COMMIT_ID
# Change all the "pick" to "s" for the ones you want to squash

# Example: ---------------------------------------------------
> git log
# Log
commit 4523hjlk4523hk425hk42h5kjh425khjk (HEAD -> main, origin/main, origin/HEAD)
Author: Rick Astley <rick@roll.com>
Date:   Fri January 3 21:47:22 2024 -0700

    Troll people

commit 928347982347923478792347234gdfgff
Author: Rick Astley <rick@roll.com>
Date:   Fri January 3 21:42:16 2024 -0700

    Never gonna

commit j2k34hkj234hkj234khkjhkj245243234     # I am choosing this one to squash the ones above
Author: Rick Astley <rick@roll.com>
Date:   Fri January 3 21:28:17 2024 -0700

    Give you down

# Rebase
> git rebase -i j2k34hkj234hkj234khkjhkj245243234
pick 4523hjl Troll people
s 9283479 Never gonna      # Changed this to s
`,
			],
			'Force pushing (with lease)': [
				"When you need to push but you need to overwrite your (bad) code/commits (maybe your coworkers')",
				`>
# Command skeleton:
git push --force REPO_NAME BRANCH_NAME
# You can omit REPO_NAME BRANCH_NAME if you're sure it'll push to the right branch/repo.

# Safer version:
git push --force-with-lease
`,
				"<code>--force</code> will overwrite anything on the repo that you're pushing to.",
				"<code>--force-with-lease</code> will do the same except stop if more commits were added to the remote branch (usually by a coworker), so it's safer in general.",
			],
		}
	};
</script>

<Stars duration="5000"></Stars>
<!-- Body -->
<div class="container mx-auto flex justify-center items-center">
	<div class="w-full">
		<!-- Animated Logo -->
		<section class="img-bg" />

		<article class="prose prose-neutral lg:prose-xl prose max-w-full dark:prose-invert">
			<br /> <br />
			<h1 class="text-center">Common Git Thingies</h1>
			<CodeTutorial page_suffix="Git" sections={sections_} default_language="bash"></CodeTutorial>
		</article>
	</div>
</div>
