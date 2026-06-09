<script lang="ts">
	let {
		sections,
	}: {
		sections: { id: string; label: string }[];
	} = $props();
</script>

<nav aria-label="On this page" class="mb-8 space-y-3">
	<p class="text-sm font-medium text-muted-foreground">On this page</p>
	<ul class="flex flex-wrap gap-2">
		{#each sections as section (section.id)}
			<li>
				<a
					href={`#${section.id}`}
					class="inline-flex rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
				>
					{section.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
