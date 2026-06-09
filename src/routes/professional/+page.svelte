<script lang="ts">
	import { professional } from '$lib/data/professional';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import PageTOC from '$lib/components/site/PageTOC.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';

	const tocSections = [
		{ id: 'current-focus', label: 'Current focus' },
		{ id: 'principles', label: 'Principles' },
		{ id: 'impact-signals', label: 'Impact signals' },
		{ id: 'how-i-work', label: 'How I work' },
	];
</script>

<svelte:head>
	<title>{professional.title} · Tomáš Škarpa</title>
</svelte:head>

<PageShell>
	<PageHeader title={professional.title} />
	<PageTOC sections={tocSections} />

	<div class="prose-width space-y-8">
		{#each professional.intro as paragraph}
			<p class="leading-relaxed text-foreground/90"><EmphasisText text={paragraph} /></p>
		{/each}

		<section id="current-focus" class="scroll-mt-36 space-y-4">
			<h2 class="text-xl font-semibold">{professional.currentFocus.title}</h2>
			<ul class="list-disc space-y-2 pl-5 text-foreground/90">
				{#each professional.currentFocus.items as item}
					<li><EmphasisText text={item} /></li>
				{/each}
			</ul>
		</section>

		<section id="principles" class="scroll-mt-36 space-y-4">
			<h2 class="text-xl font-semibold">Principles</h2>
			<div class="grid gap-4">
				{#each professional.principles as principle (principle.title)}
					<Card>
						<CardHeader class="pb-2">
							<CardTitle class="text-base">{principle.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-sm text-foreground/90"><EmphasisText text={principle.body} /></p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>

		<section id="impact-signals" class="scroll-mt-36 space-y-4">
			<h2 class="text-xl font-semibold">Impact signals</h2>
			<ul class="list-disc space-y-2 pl-5 text-foreground/90">
				{#each professional.impactSignals as signal}
					<li><EmphasisText text={signal} /></li>
				{/each}
			</ul>
		</section>

		<section id="how-i-work" class="scroll-mt-36 space-y-4">
			<h2 class="text-xl font-semibold">How I work</h2>
			<div class="grid gap-4">
				{#each professional.howIWork as step (step.title)}
					<Card>
						<CardHeader class="pb-2">
							<CardTitle class="text-base">{step.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-sm text-foreground/90"><EmphasisText text={step.body} /></p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>
	</div>

	<ContinueReading links={professional.continueReading} />
</PageShell>
