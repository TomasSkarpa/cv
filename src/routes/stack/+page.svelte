<script lang="ts">
	import { stack } from '$lib/data/stack';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { ExternalLink } from '@lucide/svelte';
</script>

<svelte:head>
	<title>{stack.title} · Tomáš Škarpa</title>
</svelte:head>

<PageShell>
	<PageHeader title={stack.title} />

	<div class="space-y-8">
		{#each stack.intro as paragraph}
			<p class="leading-relaxed text-foreground/90">{paragraph}</p>
		{/each}

		<section class="space-y-4">
			<h2 class="text-xl font-semibold">Technology areas</h2>
			<div class="grid gap-4">
				{#each stack.areas as area (area.title)}
					<Card class="h-full">
						<CardHeader class="pb-2">
							<CardTitle class="text-base">{area.title}</CardTitle>
							{#if area.description}
								<p class="text-sm text-muted-foreground">{area.description}</p>
							{/if}
						</CardHeader>
						<CardContent>
							<ul class="flex flex-wrap gap-2">
								{#each area.items as item}
									<li>
										<Badge variant="outline" class="font-normal">{item}</Badge>
									</li>
								{/each}
							</ul>
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>

		<Card>
			<CardHeader class="pb-2">
				<CardTitle class="text-base">{stack.sideProject.title}</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				<p class="text-sm text-foreground/90">{stack.sideProject.body}</p>
				<div class="flex flex-wrap gap-2">
					<Button href={stack.sideProject.href} variant="secondary" size="sm">Project details</Button>
					<Button href={stack.sideProject.url} variant="outline" size="sm" target="_blank" rel="noopener">
						{stack.sideProject.url.replace('https://', '')}
						<ExternalLink class="size-3.5" />
					</Button>
					<Button href={stack.skillsHref} variant="outline" size="sm">LinkedIn skills</Button>
				</div>
			</CardContent>
		</Card>
	</div>

	<ContinueReading links={stack.continueReading} />
</PageShell>
