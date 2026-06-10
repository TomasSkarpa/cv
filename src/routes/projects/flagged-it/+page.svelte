<script lang="ts">
	import { flaggedIt } from '$lib/data/flagged-it';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import {
		Breadcrumb,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator,
	} from '$lib/components/ui/breadcrumb/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
</script>

<svelte:head>
	<title>{flaggedIt.title} · Projects · Tomáš Škarpa</title>
	<meta name="description" content={flaggedIt.metaDescription} />
</svelte:head>

<PageShell>
	<Breadcrumb class="mb-6">
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href={flaggedIt.breadcrumb.parentHref}>
					{flaggedIt.breadcrumb.parent}
				</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>{flaggedIt.title}</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<PageHeader title={flaggedIt.title} subtitle={flaggedIt.tagline} />

	<div class="mb-6 flex flex-wrap gap-2">
		<Button href={flaggedIt.url} target="_blank" rel="noopener">Live app</Button>
		<Button href={flaggedIt.githubUrl} variant="outline" target="_blank" rel="noopener">GitHub</Button>
	</div>

	<div class="space-y-8">
		{#each flaggedIt.description as paragraph}
			<p class="leading-relaxed text-foreground/90"><EmphasisText text={paragraph} /></p>
		{/each}

		{#each [
			{ data: flaggedIt.gameModes, key: 'gameModes' },
			{ data: flaggedIt.technicalStack, key: 'technicalStack' },
		] as block (block.key)}
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{block.data.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<ul class="list-disc space-y-2 pl-5 text-sm text-foreground/90">
						{#each block.data.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</CardContent>
			</Card>
		{/each}

		<section class="space-y-2">
			<h2 class="text-xl font-semibold">{flaggedIt.role.title}</h2>
			<p class="text-foreground/90"><EmphasisText text={flaggedIt.role.body} /></p>
		</section>
	</div>

	<ContinueReading links={flaggedIt.continueReading} />
</PageShell>
