import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const base = process.env.BASE_PATH ?? '';
const isVercel = !!process.env.VERCEL;

// adapter-static zero-config on Vercel requires adapter() with no options.
// Any option (including fallback) writes to build/ and skips .vercel/output/config.json.
const staticAdapter = isVercel ? adapter() : adapter({ fallback: '404.html' });

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: staticAdapter,
			paths: {
				base
			}
		})
	]
});
