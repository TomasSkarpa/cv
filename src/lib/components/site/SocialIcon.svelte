<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import './social-icons.css';

	let { name }: { name: string } = $props();
	let githubHost = $state<HTMLSpanElement>();

	onMount(() => {
		if (name !== 'GitHub' || !githubHost) return;
		let active = true;
		const mount = async () => {
			try {
				// Load the reference's original icon runtime only near the footer.
				const icons = await import(/* @vite-ignore */ `${base}/vendor/lukas-icons.js`);
				if (active) icons.m(githubHost);
			} catch {
				// The inline outline remains visible if the optional animation fails to load.
			}
		};
		if (!('IntersectionObserver' in window)) { void mount(); return; }
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				observer.disconnect();
				void mount();
			}
		}, { rootMargin: '300px' });
		observer.observe(githubHost);
		return () => { active = false; observer.disconnect(); };
	});
</script>

{#if name === 'GitHub'}
	<span class="social-icon" bind:this={githubHost} aria-hidden="true">
		<span data-animate-icon="github" data-icon-size="16">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
		</span>
	</span>
{:else}
	<svg class="social-icon social-icon-{name.toLowerCase()}" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		{#if name === 'LinkedIn'}
			<path pathLength="1" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect pathLength="1" width="4" height="12" x="2" y="9"/><circle pathLength="1" cx="4" cy="4" r="2"/>
		{:else if name === 'Instagram'}
			<rect pathLength="1" width="20" height="20" x="2" y="2" rx="5" ry="5"/><path pathLength="1" class="instagram-lens" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line pathLength="1" x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
		{:else if name === 'Facebook'}
			<path pathLength="1" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
		{:else if name === 'Discord'}
			<path pathLength="1" d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path pathLength="1" d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path pathLength="1" d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"/><path pathLength="1" d="M7 16.5c3.5 1 6.5 1 10 0"/>
		{/if}
	</svg>
{/if}
