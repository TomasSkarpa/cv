<script lang="ts">
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';

	let {
		title,
		subtitle,
	}: {
		title: string;
		subtitle?: string;
	} = $props();
</script>

<header class="mb-10 space-y-2">
	<h1 class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
	{#if subtitle}
		<p class="max-w-2xl text-lg text-muted-foreground"><EmphasisText text={subtitle} /></p>
	{/if}
</header>
