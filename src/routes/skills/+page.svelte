<script lang="ts">
	import { skills } from '$lib/data/skills';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
</script>

<svelte:head>
	<title>{skills.title} · Tomáš Škarpa</title>
	<meta name="description" content={skills.metaDescription} />
</svelte:head>

<PageShell>
	<PageHeader title={skills.title} subtitle={skills.intro} />

	<div class="mb-6">
		<Button href={skills.linkedinUrl} variant="outline" target="_blank" rel="noopener">
			LinkedIn profile
		</Button>
	</div>

	<section class="mb-8 space-y-3">
		<h2 class="text-xl font-semibold">{skills.topSkills.title}</h2>
		<div class="flex flex-wrap gap-2">
			{#each skills.topSkills.items as skill}
				<Badge>{skill}</Badge>
			{/each}
		</div>
	</section>

	<div class="space-y-4">
		{#each skills.categories as category (category.title)}
			<Card>
				<CardHeader class="pb-2">
					<CardTitle class="text-base">{category.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<ul class="flex flex-wrap gap-2">
						{#each category.items as item}
							<li>
								<Badge variant="outline" class="font-normal">{item}</Badge>
							</li>
						{/each}
					</ul>
				</CardContent>
			</Card>
		{/each}
	</div>

	<p class="mt-8 text-sm text-muted-foreground"><EmphasisText text={skills.note} /></p>
	<Button href={skills.stackHref} variant="secondary" class="mt-4">Stack</Button>

	<ContinueReading links={skills.continueReading} />
</PageShell>
