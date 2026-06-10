<script lang="ts">
	import { bataFigurine } from '$lib/data/bata-figurine';
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
	<title>{bataFigurine.title} · Projects · Tomáš Škarpa</title>
	<meta name="description" content={bataFigurine.metaDescription} />
</svelte:head>

<PageShell>
	<Breadcrumb class="mb-6">
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href={bataFigurine.breadcrumb.parentHref}>
					{bataFigurine.breadcrumb.parent}
				</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>{bataFigurine.title}</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<PageHeader title={bataFigurine.title} subtitle={bataFigurine.subtitle} />

	<Button href={bataFigurine.githubUrl} class="mb-6" target="_blank" rel="noopener">GitHub</Button>

	<div class="space-y-8">
		{#each bataFigurine.description as paragraph}
			<p class="leading-relaxed text-foreground/90"><EmphasisText text={paragraph} /></p>
		{/each}

		<Card>
			<CardHeader class="pb-2">
				<CardTitle class="text-base">{bataFigurine.usage.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<ol class="list-decimal space-y-2 pl-5 text-sm text-foreground/90">
					{#each bataFigurine.usage.steps as step}
						<li>{step}</li>
					{/each}
				</ol>
			</CardContent>
		</Card>

		{#each [
			{ data: bataFigurine.technicalStack, key: 'technicalStack' },
			{ data: bataFigurine.prerequisites, key: 'prerequisites' },
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
			<h2 class="text-xl font-semibold">{bataFigurine.role.title}</h2>
			<p class="text-foreground/90"><EmphasisText text={bataFigurine.role.body} /></p>
		</section>
	</div>

	<ContinueReading links={bataFigurine.continueReading} />
</PageShell>
