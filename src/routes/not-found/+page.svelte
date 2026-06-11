<script lang="ts">
	import ErrorPageView from '$lib/components/site/ErrorPageView.svelte';
	import { errorPage } from '$lib/data/error';
</script>

<svelte:head>
	<title>{errorPage.notFound.title} · Tomáš Škarpa</title>
	<meta name="description" content={errorPage.metaDescription} />
	<meta name="robots" content="noindex" />
</svelte:head>

<ErrorPageView title={errorPage.notFound.title} subtitle={errorPage.notFound.subtitle} />
