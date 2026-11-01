<script lang="ts">
	import type { ExperienceEntry } from '$lib/data/types';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';

	let { entry }: { entry: ExperienceEntry } = $props();
	let expanded = $state<Record<number, boolean>>({});
	const id = $props.id();
</script>

<Card class="border-border/80 shadow-none">
	<CardHeader class="pb-3">
		<CardTitle class="text-xl">{entry.company}</CardTitle>
		<p class="text-sm text-muted-foreground">{entry.meta}</p>
	</CardHeader>
	<CardContent class="space-y-5">
		{#each entry.roles as role, index (role.title + role.period)}
			<article class="space-y-2 border-l-2 border-border pl-4">
				<div>
					<h3 class="font-semibold text-foreground">{role.title}</h3>
					<p class="text-sm text-muted-foreground">
						{role.period}{#if role.location} · {role.location}{/if}
					</p>
				</div>
				<ul class="list-disc space-y-1.5 pl-4 text-sm text-foreground/90">
					{#each role.details.length >= 3 ? role.details.slice(0, 1) : role.details as detail}
						<li><EmphasisText text={detail} /></li>
					{/each}
				</ul>
				{#if role.details.length >= 3}
					<div class="experience-disclosure" data-open={!!expanded[index]}>
						<button type="button" class="experience-trigger" aria-expanded={!!expanded[index]} aria-controls={`${id}-${index}`} onclick={() => expanded[index] = !expanded[index]}>
							<span>More highlights ({role.details.length - 1})</span>
							<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5L8 10.5L12 6.5" /></svg>
						</button>
						<div class="experience-panel" id={`${id}-${index}`} inert={!expanded[index]}>
							<div class="experience-inner">
								<ul class="list-disc space-y-1.5 pl-4 text-sm text-foreground/90">
									{#each role.details.slice(1) as detail}
										<li><EmphasisText text={detail} /></li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				{/if}
			</article>
		{/each}
	</CardContent>
</Card>

<style>
	.experience-trigger { display: flex; width: 100%; align-items: center; justify-content: space-between; padding: .65rem 0; border: 0; background: transparent; color: inherit; font: inherit; font-size: .875rem; font-weight: 600; text-align: left; cursor: pointer; }
	.experience-trigger:hover { text-decoration: underline; text-underline-offset: .2em; }
	.experience-trigger:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
	.experience-trigger svg { flex: none; transition: transform 250ms cubic-bezier(.22, 1, .36, 1); }
	.experience-disclosure[data-open='true'] .experience-trigger svg { transform: scaleY(-1); }
	.experience-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 250ms cubic-bezier(.22, 1, .36, 1); }
	.experience-disclosure[data-open='true'] .experience-panel { grid-template-rows: 1fr; }
	.experience-inner { min-height: 0; overflow: hidden; opacity: 0; filter: blur(2px); transition: opacity 250ms cubic-bezier(.22, 1, .36, 1), filter 250ms cubic-bezier(.22, 1, .36, 1); }
	.experience-inner ul { padding-bottom: .5rem; }
	.experience-disclosure[data-open='true'] .experience-inner { opacity: 1; filter: blur(0); }
	@media (prefers-reduced-motion: reduce) { .experience-trigger svg, .experience-panel, .experience-inner { transition: none; } }
</style>
