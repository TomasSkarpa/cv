<script lang="ts">
	import type { ProjectEntry } from '$lib/data/types';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
	} from '$lib/components/ui/card/index.js';
	import { appHref } from '$lib/utils';
	import { ExternalLink } from '@lucide/svelte';

	let { project }: { project: ProjectEntry } = $props();
	let detailsOpen = $state(false);
	const hasLongDetails = $derived(
		`Context: ${project.context}Contribution: ${project.contribution}`.replaceAll('**', '').length >= 200
	);
	const panelId = $props.id();

	const detailHref = $derived(
		project.slug === 'flagged-it'
			? '/projects/flagged-it'
			: project.slug === 'bata-figurine-generation'
				? '/projects/bata-figurine-generation'
				: project.slug === 'ossa'
					? '/projects/ossa'
					: undefined,
	);
</script>

<Card class="flex h-full flex-col border-border/80 shadow-none">
	<CardHeader>
		<div class="flex flex-wrap items-start justify-between gap-2">
			<div class="space-y-1">
				<p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">
					{project.category}
				</p>
				<CardTitle class="text-xl">
					{#if detailHref}
						<a href={appHref(detailHref)} class="hover:underline">{project.title}</a>
					{:else}
						{project.title}
					{/if}
				</CardTitle>
				{#if project.subtitle}
					<CardDescription>{project.subtitle}</CardDescription>
				{/if}
			</div>
			{#if project.featured}
				<Badge>Featured</Badge>
			{/if}
		</div>
	</CardHeader>
	<CardContent class="flex-1 space-y-4 text-sm">
		{#if project.description}
			<p class="text-foreground/90"><EmphasisText text={project.description} /></p>
		{/if}
		<div class="space-y-2">
			<p><span class="font-medium">Role:</span> <EmphasisText text={project.role} /></p>
			{#if hasLongDetails}
				<p><span class="font-medium">Outcome:</span> <EmphasisText text={project.outcome} /></p>
				<div class="project-disclosure" data-open={detailsOpen}>
					<button class="project-disclosure-trigger" type="button" aria-expanded={detailsOpen} aria-controls={panelId} onclick={() => detailsOpen = !detailsOpen}>
						<span>Context &amp; contribution</span>
						<svg class="project-disclosure-chevron" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5L8 10.5L12 6.5" /></svg>
					</button>
					<div class="project-disclosure-panel" id={panelId} inert={!detailsOpen}>
						<div class="project-disclosure-inner">
							<p><span class="font-medium">Context:</span> <EmphasisText text={project.context} /></p>
							<p><span class="font-medium">Contribution:</span> <EmphasisText text={project.contribution} /></p>
						</div>
					</div>
				</div>
			{:else}
				<p><span class="font-medium">Context:</span> <EmphasisText text={project.context} /></p>
				<p><span class="font-medium">Contribution:</span> <EmphasisText text={project.contribution} /></p>
				<p><span class="font-medium">Outcome:</span> <EmphasisText text={project.outcome} /></p>
			{/if}
		</div>
		<div class="flex flex-wrap gap-1.5">
			{#each project.tags as tag}
				<Badge variant="outline" class="font-normal">{tag}</Badge>
			{/each}
		</div>
	</CardContent>
	{#if project.liveUrl || project.githubUrl || detailHref}
		<CardFooter class="flex flex-wrap gap-2">
			{#if detailHref}
				<Button href={detailHref} variant="secondary" size="sm">Details</Button>
			{/if}
			{#if project.liveUrl}
				<Button href={project.liveUrl} variant="outline" size="sm" target="_blank" rel="noopener">
					<ExternalLink class="size-4" />
					Live
				</Button>
			{/if}
			{#if project.githubUrl}
				<Button href={project.githubUrl} variant="outline" size="sm" target="_blank" rel="noopener">
					GitHub
				</Button>
			{/if}
		</CardFooter>
	{/if}
</Card>

<style>
	.project-disclosure-trigger { display: flex; width: 100%; align-items: center; justify-content: space-between; padding: .8rem 0; border: 0; background: transparent; color: inherit; font: inherit; font-weight: 600; text-align: left; cursor: pointer; }
	.project-disclosure-trigger:hover { text-decoration: underline; text-underline-offset: .2em; }
	.project-disclosure-trigger:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
	.project-disclosure-chevron { flex: none; transition: transform 250ms cubic-bezier(.22, 1, .36, 1); }
	.project-disclosure[data-open='true'] .project-disclosure-chevron { transform: scaleY(-1); }
	.project-disclosure-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 250ms cubic-bezier(.22, 1, .36, 1); }
	.project-disclosure[data-open='true'] .project-disclosure-panel { grid-template-rows: 1fr; }
	.project-disclosure-inner { min-height: 0; overflow: hidden; opacity: 0; filter: blur(2px); transition: opacity 250ms cubic-bezier(.22, 1, .36, 1), filter 250ms cubic-bezier(.22, 1, .36, 1); }
	.project-disclosure-inner p { padding-bottom: .75rem; }
	.project-disclosure[data-open='true'] .project-disclosure-inner { opacity: 1; filter: blur(0); }
	@media (prefers-reduced-motion: reduce) { .project-disclosure-panel, .project-disclosure-inner, .project-disclosure-chevron { transition: none; } }
</style>
