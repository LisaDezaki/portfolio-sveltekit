import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {
			colors: {
				magenta: {
					50:  '#fbd7df',
					100: '#f7aeba',
					200: '#f59daf',
					300: '#f1637e',
					400: '#ef446e',
					500: '#ee2262',
					600: '#af1444',
					700: '#93193e',
					800: '#70112e',
					900: '#4f1322',
				}
			}
		}
	},
	plugins: [typography, forms, containerQueries, aspectRatio]
};
