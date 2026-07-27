<script lang="ts">
	import { ossa } from '$lib/data/ossa';
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
	<title>{ossa.title} · Projects · Tomáš Škarpa</title>
	<meta name="description" content={ossa.metaDescription} />
</svelte:head>

<PageShell>
	<Breadcrumb class="mb-6">
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href={ossa.breadcrumb.parentHref}>
					{ossa.breadcrumb.parent}
				</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>{ossa.title}</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<PageHeader title={ossa.title} subtitle={ossa.tagline} />

	<div class="mb-6 flex flex-wrap gap-2">
		<Button href={ossa.url} target="_blank" rel="noopener">Live demo</Button>
		<Button href={ossa.githubUrl} variant="outline" target="_blank" rel="noopener">GitHub</Button>
		<Button href="https://ecom.skarpa.dev/bones" variant="outline" target="_blank" rel="noopener"
			>Store skeleton</Button
		>
		<Button href="https://ecom.skarpa.dev/admin" variant="outline" target="_blank" rel="noopener"
			>Admin demo</Button
		>
	</div>

	<div class="space-y-8">
		{#each ossa.description as paragraph}
			<p class="leading-relaxed text-foreground/90"><EmphasisText text={paragraph} /></p>
		{/each}

		{#each [
			{ data: ossa.highlights, key: 'highlights' },
			{ data: ossa.technicalStack, key: 'technicalStack' },
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
			<h2 class="text-xl font-semibold">{ossa.role.title}</h2>
			<p class="text-foreground/90"><EmphasisText text={ossa.role.body} /></p>
		</section>
	</div>

	<ContinueReading links={ossa.continueReading} />
</PageShell>
