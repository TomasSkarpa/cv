<script lang="ts">
	import { allRoutes, site } from '$lib/data/site';
	import { appHref } from '$lib/utils';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';
</script>

<svelte:head>
	<title>Sitemap · Tomáš Škarpa</title>
	<meta name="description" content={site.sitemapMetaDescription} />
</svelte:head>

<PageShell>
	<PageHeader title="Sitemap" subtitle="All routes on this site." />

	<Card>
		<CardContent class="pt-6">
			<ul class="space-y-2">
				{#each allRoutes as route (route.href)}
					<li>
						<a
							href={appHref(route.href)}
							class="text-sm font-medium text-primary underline-offset-4 hover:underline"
						>
							{route.label}
						</a>
						<span class="ml-2 text-sm text-muted-foreground">{route.href}</span>
					</li>
				{/each}
			</ul>
		</CardContent>
	</Card>
</PageShell>
