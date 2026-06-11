<script lang="ts">
	import { page } from '$app/stores';
	import ErrorPageView from '$lib/components/site/ErrorPageView.svelte';
	import { errorPage } from '$lib/data/error';

	const isNotFound = $derived($page.status === 404);
	const content = $derived(isNotFound ? errorPage.notFound : errorPage.generic);
</script>

<svelte:head>
	<title>{content.title} · Tomáš Škarpa</title>
	<meta name="description" content={errorPage.metaDescription} />
	<meta name="robots" content="noindex" />
</svelte:head>

<ErrorPageView
	title={content.title}
	subtitle={content.subtitle}
	status={isNotFound ? undefined : $page.status}
/>
