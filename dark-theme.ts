
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const DarkTheme: CustomThemeConfig = {
	name: 'dark-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "0px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #FFBB98 
		"--color-primary-50": "255 245 240", // #fff5f0
		"--color-primary-100": "255 241 234", // #fff1ea
		"--color-primary-200": "255 238 229", // #ffeee5
		"--color-primary-300": "255 228 214", // #ffe4d6
		"--color-primary-400": "255 207 183", // #ffcfb7
		"--color-primary-500": "255 187 152", // #FFBB98
		"--color-primary-600": "230 168 137", // #e6a889
		"--color-primary-700": "191 140 114", // #bf8c72
		"--color-primary-800": "153 112 91", // #99705b
		"--color-primary-900": "125 92 74", // #7d5c4a
		// secondary | #ffa58a 
		"--color-secondary-50": "255 242 237", // #fff2ed
		"--color-secondary-100": "255 237 232", // #ffede8
		"--color-secondary-200": "255 233 226", // #ffe9e2
		"--color-secondary-300": "255 219 208", // #ffdbd0
		"--color-secondary-400": "255 192 173", // #ffc0ad
		"--color-secondary-500": "255 165 138", // #ffa58a
		"--color-secondary-600": "230 149 124", // #e6957c
		"--color-secondary-700": "191 124 104", // #bf7c68
		"--color-secondary-800": "153 99 83", // #996353
		"--color-secondary-900": "125 81 68", // #7d5144
		// tertiary | #FBE0C3 
		"--color-tertiary-50": "254 250 246", // #fefaf6
		"--color-tertiary-100": "254 249 243", // #fef9f3
		"--color-tertiary-200": "254 247 240", // #fef7f0
		"--color-tertiary-300": "253 243 231", // #fdf3e7
		"--color-tertiary-400": "252 233 213", // #fce9d5
		"--color-tertiary-500": "251 224 195", // #FBE0C3
		"--color-tertiary-600": "226 202 176", // #e2cab0
		"--color-tertiary-700": "188 168 146", // #bca892
		"--color-tertiary-800": "151 134 117", // #978675
		"--color-tertiary-900": "123 110 96", // #7b6e60
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #ff5757 
		"--color-error-50": "255 230 230", // #ffe6e6
		"--color-error-100": "255 221 221", // #ffdddd
		"--color-error-200": "255 213 213", // #ffd5d5
		"--color-error-300": "255 188 188", // #ffbcbc
		"--color-error-400": "255 137 137", // #ff8989
		"--color-error-500": "255 87 87", // #ff5757
		"--color-error-600": "230 78 78", // #e64e4e
		"--color-error-700": "191 65 65", // #bf4141
		"--color-error-800": "153 52 52", // #993434
		"--color-error-900": "125 43 43", // #7d2b2b
		// surface | #b62a00 
		"--color-surface-50": "244 223 217", // #f4dfd9
		"--color-surface-100": "240 212 204", // #f0d4cc
		"--color-surface-200": "237 202 191", // #edcabf
		"--color-surface-300": "226 170 153", // #e2aa99
		"--color-surface-400": "204 106 77", // #cc6a4d
		"--color-surface-500": "182 42 0", // #b62a00
		"--color-surface-600": "164 38 0", // #a42600
		"--color-surface-700": "137 32 0", // #892000
		"--color-surface-800": "109 25 0", // #6d1900
		"--color-surface-900": "89 21 0", // #591500

	}
}