<script lang="ts">
	import { recommendations } from '$lib/data/recommendations';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
</script>

<svelte:head>
	<title>{recommendations.title} · Tomáš Škarpa</title>
</svelte:head>

<PageShell>
	<PageHeader title={recommendations.title} subtitle={recommendations.intro} />

	<div class="space-y-4">
		{#each recommendations.items as item (item.name)}
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{item.name}</CardTitle>
					<p class="text-sm text-muted-foreground">{item.title}</p>
					<p class="text-sm text-muted-foreground">{item.relationship}</p>
				</CardHeader>
				<CardContent>
					<blockquote class="border-l-2 border-border pl-4 text-sm italic text-foreground/90">
						"{item.quote}"
					</blockquote>
				</CardContent>
			</Card>
		{/each}
	</div>

	<ContinueReading links={recommendations.continueReading} />
</PageShell>
