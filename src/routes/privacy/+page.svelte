<script lang="ts">
	import { privacy } from '$lib/data/privacy';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { ExternalLink } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Privacy · Tomáš Škarpa</title>
	<meta name="description" content={privacy.metaDescription} />
</svelte:head>

<PageShell>
	<PageHeader title={privacy.title} subtitle={privacy.subtitle} />

	<div class="prose-width space-y-6">
		{#each privacy.intro as paragraph}
			<p class="leading-relaxed text-foreground/90"><EmphasisText text={paragraph} /></p>
		{/each}

		{#each privacy.sections as section (section.id)}
			<Card id={section.id} class="scroll-mt-36">
				<CardHeader class="pb-2">
					<CardTitle class="text-lg">{section.title}</CardTitle>
				</CardHeader>
				<CardContent class="space-y-4">
					{#each section.paragraphs as paragraph}
						<p class="text-sm leading-relaxed text-foreground/90">
							<EmphasisText text={paragraph} />
						</p>
					{/each}

					{#if 'links' in section && section.links}
						<ul class="space-y-2">
							{#each section.links as link (link.href)}
								<li>
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
									>
										{link.label}
										<ExternalLink class="size-3.5" />
									</a>
								</li>
							{/each}
						</ul>
					{/if}

					{#if 'note' in section && section.note}
						<p class="text-sm text-muted-foreground"><EmphasisText text={section.note} /></p>
					{/if}
				</CardContent>
			</Card>
		{/each}
	</div>
</PageShell>
