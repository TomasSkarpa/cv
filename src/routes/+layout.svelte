<script lang="ts">
	import './layout.css';
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import { base, resolve } from '$app/paths';
	import { canonicalUrl } from '$lib/seo';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={`${base}/favicon.ico`} sizes="any" />
	<link rel="icon" href={`${base}/favicon.svg`} type="image/svg+xml" />
	<link rel="icon" href={`${base}/favicon-dark.svg`} type="image/svg+xml" media="(prefers-color-scheme: dark)" />
	<link rel="canonical" href={canonicalUrl($page.url.pathname)} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<a href={resolve('/not-found')} class="sr-only">Page not found</a>
	<SiteHeader />
	<main class="flex-1">
		{@render children()}
	</main>
	<SiteFooter />
</div>
