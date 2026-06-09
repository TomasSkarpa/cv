<script lang="ts">
	import type { ExperienceEntry } from '$lib/data/types';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';

	let { entry }: { entry: ExperienceEntry } = $props();
</script>

<Card class="border-border/80 shadow-none">
	<CardHeader class="pb-3">
		<CardTitle class="text-xl">{entry.company}</CardTitle>
		<p class="text-sm text-muted-foreground">{entry.meta}</p>
	</CardHeader>
	<CardContent class="space-y-6">
		{#each entry.roles as role (role.title + role.period)}
			<article class="space-y-3 border-l-2 border-border pl-4">
				<div>
					<h3 class="font-semibold text-foreground">{role.title}</h3>
					<p class="text-sm text-muted-foreground">{role.period}</p>
					<p class="text-sm text-muted-foreground">{role.location}</p>
				</div>
				<ul class="list-disc space-y-1.5 pl-4 text-sm text-foreground/90">
					{#each role.details as detail}
						<li><EmphasisText text={detail} /></li>
					{/each}
				</ul>
				{#if role.skills}
					<Badge variant="secondary" class="font-normal">{role.skills}</Badge>
				{/if}
			</article>
		{/each}
	</CardContent>
</Card>
