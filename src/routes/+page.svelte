<script lang="ts">
	import {
		bataEvents,
		exploreCards,
		exploreIntro,
		home,
		openToConversations,
		sideProject,
		startHerePaths,
	} from '$lib/data/home';
	import { site } from '$lib/data/site';
	import { appHref } from '$lib/utils';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle,
	} from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { ArrowRight, ExternalLink } from '@lucide/svelte';
</script>

<svelte:head>
	<title>{site.name} · {home.role}</title>
</svelte:head>

<PageShell>
	<section class="space-y-8">
		<div class="space-y-4">
			<p class="text-sm font-medium uppercase tracking-widest text-muted-foreground">{home.role}</p>
			<h1 class="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
				{home.name}
			</h1>
			<p class="text-lg text-muted-foreground">{home.intro}</p>
			<p class="text-base font-medium text-foreground/80">{home.tagline}</p>
			<div class="flex flex-wrap gap-3 pt-2">
				<Button href={home.ctaPrimary.href}>{home.ctaPrimary.label}</Button>
				<Button href={home.ctaSecondary.href} variant="outline">{home.ctaSecondary.label}</Button>
			</div>
		</div>

		<div class="grid gap-4">
			{#each startHerePaths as path (path.title)}
				<Card>
					<CardHeader>
						<CardTitle class="text-lg">{path.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<ol class="flex flex-wrap items-center gap-2 text-sm">
							{#each path.steps as step, index (step.href)}
								{#if index > 0}
									<ArrowRight class="size-4 text-muted-foreground" aria-hidden="true" />
								{/if}
								<li>
									<a
										href={appHref(step.href)}
										class="font-medium text-primary underline-offset-4 hover:underline"
									>
										{step.label}
									</a>
								</li>
							{/each}
						</ol>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<Separator class="my-12" />

	<section class="space-y-6">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold tracking-tight">Explore</h2>
			<p class="text-muted-foreground">{exploreIntro}</p>
		</div>
		<div class="grid gap-4">
			{#each exploreCards as card (card.href)}
				<Card class="h-full transition-colors hover:bg-accent/30">
					<CardHeader>
						<p class="text-xs font-medium text-muted-foreground">{card.mark}</p>
						<CardTitle>
							<a href={appHref(card.href)} class="hover:underline">{card.title}</a>
						</CardTitle>
						<CardDescription>{card.description}</CardDescription>
					</CardHeader>
				</Card>
			{/each}
		</div>
	</section>

	<Separator class="my-12" />

	<section class="grid gap-6">
		<Card>
			<CardHeader>
				<CardTitle>{sideProject.title}</CardTitle>
				<CardDescription>
					<a
						href={sideProject.url}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 hover:underline"
					>
						{sideProject.url}
						<ExternalLink class="size-3.5" />
					</a>
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<p class="text-sm text-foreground/90">{sideProject.description}</p>
				<Button href={sideProject.href} variant="secondary" size="sm">Project details</Button>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Baťa events</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4 text-sm text-foreground/90">
				<p>{bataEvents.volunteering}</p>
				<p>{bataEvents.lotConference}</p>
				<div class="flex flex-wrap gap-2">
					<Button href={bataEvents.figurineHref} variant="secondary" size="sm">Figurine project</Button>
					<Button href={bataEvents.volunteeringHref} variant="outline" size="sm">Volunteering</Button>
					<Button href={bataEvents.githubUrl} variant="outline" size="sm" target="_blank" rel="noopener">
						GitHub
					</Button>
				</div>
			</CardContent>
		</Card>
	</section>

	<Card class="mt-12 border-primary/20 bg-accent/20">
		<CardContent class="flex flex-col gap-4 py-6">
			<p class="text-foreground/90">{openToConversations.text}</p>
			<Button href={openToConversations.cta.href}>{openToConversations.cta.label}</Button>
		</CardContent>
	</Card>
</PageShell>
