<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import PageTOC from '$lib/components/site/PageTOC.svelte';
	import ProjectCard from '$lib/components/site/ProjectCard.svelte';

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
					<div class="grid gap-4">
						{#each projects.clientDelivery.items as project (project.title)}
							<ProjectCard {project} />
						{/each}
					</div>
				</section>
			</div>

	<ContinueReading links={projects.continueReading} />
</PageShell>
