import { join } from 'path'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			}
		},
	},
	plugins: [
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'vintage',
						enhancements: true,
					},
					{
						name: 'seafoam',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;
