<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import PageTOC from '$lib/components/site/PageTOC.svelte';
	import ProjectCard from '$lib/components/site/ProjectCard.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { ExternalLink } from '@lucide/svelte';

	const tocSections = [
		{ id: 'side-projects', label: 'Side projects' },
		{ id: 'enterprise', label: 'Enterprise' },
		{ id: 'client-delivery', label: 'Client delivery' },
	];
</script>

<svelte:head>
	<title>{projects.title} · Tomáš Škarpa</title>
</svelte:head>

<PageShell>
	<PageHeader title={projects.title} subtitle={projects.intro} />
	<PageTOC sections={tocSections} />

	<div class="space-y-12">
				<section id="side-projects" class="scroll-mt-36 space-y-4">
					<h2 class="text-xl font-semibold">{projects.sideProjects.title}</h2>
					<div class="grid gap-4">
						{#each projects.sideProjects.items as project (project.title)}
							<ProjectCard {project} />
						{/each}
					</div>
				</section>

				<section id="enterprise" class="scroll-mt-36 space-y-4">
					<h2 class="text-xl font-semibold">{projects.enterprise.title}</h2>
					<div class="grid gap-4">
						{#each projects.enterprise.items as project (project.title)}
							<ProjectCard {project} />
						{/each}
					</div>
				</section>

				<section id="client-delivery" class="scroll-mt-36 space-y-4">
					<h2 class="text-xl font-semibold">{projects.clientDelivery.title}</h2>
					<p class="text-foreground/90"><EmphasisText text={projects.clientDelivery.intro} /></p>
					<Card class="border-border/80 shadow-none">
						<CardHeader class="pb-2">
							<CardTitle class="text-base">Shipped client sites</CardTitle>
						</CardHeader>
						<CardContent class="space-y-4 text-sm">
							<p class="text-foreground/90">
								<EmphasisText text={projects.clientDelivery.summary} />
							</p>
							<ul class="divide-y divide-border">
								{#each projects.clientDelivery.sites as site (site.title)}
									<li class="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
										<div class="min-w-0">
											{#if site.url}
												<a
													href={site.url}
													target="_blank"
													rel="noopener noreferrer"
													class="inline-flex items-center gap-1 font-medium text-foreground hover:underline"
												>
													{site.title}
													<ExternalLink class="size-3.5 shrink-0 text-muted-foreground" />
												</a>
											{:else}
												<span class="font-medium text-foreground">{site.title}</span>
											{/if}
											<p class="text-muted-foreground">{site.subtitle}</p>
										</div>
									</li>
								{/each}
							</ul>
							<div class="flex flex-wrap gap-1.5">
								{#each projects.clientDelivery.stack as tag}
									<Badge variant="outline" class="font-normal">{tag}</Badge>
								{/each}
							</div>
						</CardContent>
					</Card>
				</section>
			</div>

	<ContinueReading links={projects.continueReading} />
</PageShell>
