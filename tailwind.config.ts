import { join } from 'path'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { DarkTheme } from './dark-theme'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		colors: {
			'dark-pink': '#3d1f2c',
			'dark-blue' : '#1a2633',
			'medium-pink' : '#542a3d',
			'light-orange': '#d63200',
			'medium-light-orange': '#de1e00',
			'medium-orange': '#4a3524',
			'medium-red' : '#482222',
			'dark-orange' : '#2e2215',
			'dark-red' : '#291212',
		},
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
				custom: [
					DarkTheme
				],
			},
		}),
	],
} satisfies Config;
