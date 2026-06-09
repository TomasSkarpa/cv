<script lang="ts">
	import { personal } from '$lib/data/personal';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
</script>

<svelte:head>
	<title>{personal.title} · Tomáš Škarpa</title>
</svelte:head>

<PageShell>
	<PageHeader title={personal.title} />

	<div class="space-y-8">
		{#each personal.intro as paragraph}
			<p class="leading-relaxed text-foreground/90">{paragraph}</p>
		{/each}

		<section class="space-y-4">
			<h2 class="text-xl font-semibold">Values</h2>
			<div class="grid gap-4">
				{#each personal.values as value (value.title)}
					<Card>
						<CardHeader class="pb-2">
							<CardTitle class="text-base">{value.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="text-sm text-foreground/90">{value.body}</p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>

		<section class="space-y-4">
			<h2 class="text-xl font-semibold">Interests</h2>
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{personal.interests.sideProjects.title}</CardTitle>
				</CardHeader>
				<CardContent class="space-y-3 text-sm text-foreground/90">
					<p>{personal.interests.sideProjects.body}</p>
					<p>{personal.interests.sideProjects.extra}</p>
					<p class="text-muted-foreground">{personal.interests.sideProjects.note}</p>
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
						<p class="text-sm text-foreground/90">{block.body}</p>
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
							<li>{item}</li>
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
							<li>{item}</li>
						{/each}
					</ul>
				</CardContent>
			</Card>
		</section>

		<section class="space-y-4">
			<h2 class="text-xl font-semibold">{personal.community.title}</h2>
			<p class="text-foreground/90">{personal.community.intro}</p>
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{personal.community.zlinFilm.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<ul class="list-disc space-y-2 pl-5 text-sm text-foreground/90">
						{#each personal.community.zlinFilm.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</CardContent>
			</Card>
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{personal.community.lotConference.title}</CardTitle>
				</CardHeader>
				<CardContent class="space-y-3 text-sm text-foreground/90">
					<p>{personal.community.lotConference.body}</p>
					<div class="flex flex-wrap gap-2">
						<Button href={personal.community.lotConference.figurineHref} variant="secondary" size="sm">
							Project details
						</Button>
						<Button href={personal.community.volunteeringHref} variant="outline" size="sm">
							Volunteering
						</Button>
					</div>
				</CardContent>
			</Card>
		</section>

		<section class="space-y-2">
			<h2 class="text-xl font-semibold">{personal.teaching.title}</h2>
			<p class="text-foreground/90">{personal.teaching.body}</p>
		</section>

		<Card class="border-primary/20 bg-accent/20">
			<CardContent class="space-y-4 py-6">
				<p class="text-foreground/90">{personal.collaboration.body}</p>
				<Button href={personal.collaboration.cta.href}>{personal.collaboration.cta.label}</Button>
			</CardContent>
		</Card>
	</div>

	<ContinueReading links={personal.continueReading} />
</PageShell>
