<script lang="ts">
	import { page } from '$app/stores';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { errorPage } from '$lib/data/error';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';

	const isNotFound = $derived($page.status === 404);
	const content = $derived(isNotFound ? errorPage.notFound : errorPage.generic);
</script>

<svelte:head>
	<title>{content.title} · Tomáš Škarpa</title>
	<meta name="description" content={errorPage.metaDescription} />
	<meta name="robots" content="noindex" />
</svelte:head>

<PageShell>
	<PageHeader title={content.title} subtitle={content.subtitle} />

	<div class="space-y-6">
		{#if !isNotFound}
			<p class="text-sm text-muted-foreground">Error {$page.status}</p>
		{/if}

		<div class="flex flex-wrap gap-3">
			<Button href={errorPage.actions[0].href}>{errorPage.actions[0].label}</Button>
			<Button href={errorPage.actions[1].href} variant="outline">
				{errorPage.actions[1].label}
			</Button>
		</div>

		<Card>
			<CardContent class="pt-6">
				<p class="text-sm text-muted-foreground">
					Not sure where to go?
					<Button
						href={errorPage.actions[2].href}
						variant="link"
						class="inline h-auto p-0 text-sm font-medium"
					>
						{errorPage.actions[2].label}
					</Button>
					lists every page on this site.
				</p>
			</CardContent>
		</Card>
	</div>
</PageShell>
