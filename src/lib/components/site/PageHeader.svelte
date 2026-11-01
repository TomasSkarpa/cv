<script lang="ts">
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';

	let {
		title,
		subtitle,
		lead,
	}: {
		title: string;
		subtitle?: string;
		lead?: string;
	} = $props();
</script>

<header class="mb-10 space-y-3">
	<h1 class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
	{#if subtitle}
		<p class="max-w-2xl text-lg text-muted-foreground"><EmphasisText text={subtitle} /></p>
	{/if}
	{#if lead}
		<p class="max-w-2xl text-lg leading-relaxed text-foreground/90"><EmphasisText text={lead} /></p>
	{/if}
</header>
