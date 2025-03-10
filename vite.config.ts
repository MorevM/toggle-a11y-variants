import { defineConfig } from 'vite';

export default defineConfig({
	root: 'src',
	base: '/toggle-a11y-variants/',
	build: {
		outDir: '../dist',
	},
});
