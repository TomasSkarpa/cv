<script lang="ts">
	import { volunteering } from '$lib/data/volunteering';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
</script>

<svelte:head>
	<title>{volunteering.title} · Tomáš Škarpa</title>
	<meta name="description" content={volunteering.metaDescription} />
</svelte:head>

<PageShell>
	<PageHeader title={volunteering.title} />

	<div class="space-y-8">
		<Card>
			<CardHeader class="pb-2">
				<CardTitle class="text-base">{volunteering.bataChildren.title}</CardTitle>
				<p class="text-sm text-muted-foreground">{volunteering.bataChildren.meta}</p>
			</CardHeader>
			<CardContent>
				<p class="text-sm text-foreground/90"><EmphasisText text={volunteering.bataChildren.body} /></p>
			</CardContent>
		</Card>

		<section class="space-y-4">
			<h2 class="text-xl font-semibold">{volunteering.connectedEvents.title}</h2>
			<p class="text-foreground/90"><EmphasisText text={volunteering.connectedEvents.intro} /></p>
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{volunteering.connectedEvents.zlinFilm.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<ul class="list-disc space-y-2 pl-5 text-sm text-foreground/90">
						{#each volunteering.connectedEvents.zlinFilm.items as item}
							<li><EmphasisText text={item} /></li>
						{/each}
					</ul>
				</CardContent>
			</Card>
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{volunteering.connectedEvents.lotConference.title}</CardTitle>
				</CardHeader>
				<CardContent class="space-y-3 text-sm text-foreground/90">
					<p><EmphasisText text={volunteering.connectedEvents.lotConference.body} /></p>
					<div class="flex flex-wrap gap-2">
						<Button href={volunteering.connectedEvents.lotConference.figurineHref} variant="secondary" size="sm">
							Project details
						</Button>
						<Button
							href={volunteering.connectedEvents.lotConference.githubUrl}
							variant="outline"
							size="sm"
							target="_blank"
							rel="noopener"
						>
							GitHub
						</Button>
					</div>
				</CardContent>
			</Card>
		</section>

		<section class="space-y-2">
			<h2 class="text-xl font-semibold">{volunteering.throughLine.title}</h2>
			<p class="text-foreground/90"><EmphasisText text={volunteering.throughLine.body} /></p>
		</section>
	</div>

	<ContinueReading links={volunteering.continueReading} />
</PageShell>
