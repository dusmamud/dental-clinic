import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Inline the ~48 KB built CSS in a <style> block (default threshold 0
			// leaves it as a render-blocking stylesheet link, ~120-140 ms per
			// PSI). Trade-off per SvelteKit docs: larger HTML + weaker caching,
			// acceptable here — single 48 KB stylesheet, 36 static pages.
			inlineStyleThreshold: 100000,
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: true
			})
		})
	]
});
