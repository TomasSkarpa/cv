<script lang="ts">
	import { personal } from '$lib/data/personal';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import PageTOC from '$lib/components/site/PageTOC.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';

	const tocSections = [
		{ id: 'values', label: 'Values' },
		{ id: 'interests', label: 'Interests' },
		{ id: 'community', label: 'Community' },
		{ id: 'teaching', label: 'Teaching' },
	];
</script>

<svelte:head>
	<title>{personal.title} · Tomáš Škarpa</title>
</svelte:head>

<PageShell>
	<PageHeader title={personal.title} />
	<PageTOC sections={tocSections} />

	<div class="space-y-8">
		{#each personal.intro as paragraph}
			<p class="leading-relaxed text-foreground/90"><EmphasisText text={paragraph} /></p>
		{/each}

		<section id="values" class="scroll-mt-36 space-y-4">
			<h2 class="text-xl font-semibold">Values</h2>
			<div class="grid gap-4">
				{#each personal.values as value (value.title)}
					<Card>
						<CardHeader class="pb-2">
							<CardTitle class="text-base">{value.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-sm text-foreground/90"><EmphasisText text={value.body} /></p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>

		<section id="interests" class="scroll-mt-36 space-y-4">
			<h2 class="text-xl font-semibold">Interests</h2>
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{personal.interests.sideProjects.title}</CardTitle>
				</CardHeader>
				<CardContent class="space-y-3 text-sm text-foreground/90">
					<p><EmphasisText text={personal.interests.sideProjects.body} /></p>
					<p><EmphasisText text={personal.interests.sideProjects.extra} /></p>
					<p class="text-muted-foreground"><EmphasisText text={personal.interests.sideProjects.note} /></p>
					<Button href={personal.interests.sideProjects.flaggedItHref} variant="secondary" size="sm">
						Flagged It
					</Button>
				</CardContent>
			</Card>
			{#each [
				{ title: personal.interests.homelab.title, body: personal.interests.homelab.body },
				{ title: personal.interests.gameServers.title, body: personal.interests.gameServers.body },
			] as block (block.title)}
				<Card>
					<CardHeader class="pb-2">
						<CardTitle class="text-base">{block.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-foreground/90"><EmphasisText text={block.body} /></p>
					</CardContent>
				</Card>
			{/each}
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{personal.interests.sport.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<ul class="list-disc space-y-2 pl-5 text-sm text-foreground/90">
						{#each personal.interests.sport.items as item}
							<li><EmphasisText text={item} /></li>
						{/each}
					</ul>
				</CardContent>
			</Card>
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{personal.interests.downtime.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<ul class="list-disc space-y-2 pl-5 text-sm text-foreground/90">
						{#each personal.interests.downtime.items as item}
							<li><EmphasisText text={item} /></li>
						{/each}
					</ul>
				</CardContent>
			</Card>
		</section>

		<section id="community" class="scroll-mt-36 space-y-4">
			<h2 class="text-xl font-semibold">{personal.community.title}</h2>
			<p class="text-foreground/90"><EmphasisText text={personal.community.body} /></p>
			<div class="flex flex-wrap gap-2">
				<Button href={personal.community.volunteeringHref} variant="secondary" size="sm">
					Volunteering & events
				</Button>
				<Button href={personal.community.figurineHref} variant="outline" size="sm">
					Figurine project
				</Button>
			</div>
		</section>

		<section id="teaching" class="scroll-mt-36 space-y-2">
			<h2 class="text-xl font-semibold">{personal.teaching.title}</h2>
			<p class="text-foreground/90"><EmphasisText text={personal.teaching.body} /></p>
		</section>

		<Card class="border-primary/20 bg-accent/20">
			<CardContent class="space-y-4 py-6">
				<p class="text-foreground/90"><EmphasisText text={personal.collaboration.body} /></p>
				<Button href={personal.collaboration.cta.href}>{personal.collaboration.cta.label}</Button>
			</CardContent>
		</Card>
	</div>

	<ContinueReading links={personal.continueReading} />
</PageShell>
