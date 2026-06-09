<script lang="ts">
	import type { ProjectEntry } from '$lib/data/types';
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

	const detailHref = $derived(
		project.slug === 'flagged-it'
			? '/projects/flagged-it'
			: project.slug === 'bata-figurine-generation'
				? '/projects/bata-figurine-generation'
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
			<p class="text-foreground/90">{project.description}</p>
		{/if}
		<div class="space-y-2">
			<p><span class="font-medium">Role:</span> {project.role}</p>
			<p><span class="font-medium">Context:</span> {project.context}</p>
			<p><span class="font-medium">Contribution:</span> {project.contribution}</p>
			<p><span class="font-medium">Outcome:</span> {project.outcome}</p>
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
