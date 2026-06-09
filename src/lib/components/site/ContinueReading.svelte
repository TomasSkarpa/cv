<script lang="ts">
	import type { ContinueReadingLink } from '$lib/data/types';
	import { appHref } from '$lib/utils';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let { links }: { links: ContinueReadingLink[] } = $props();
</script>

<aside class="mt-16 space-y-4">
	<Separator />
	<div class="space-y-3">
		<p class="text-sm font-medium text-muted-foreground">Continue reading</p>
		<nav aria-label="Continue reading">
			<ul class="flex flex-wrap gap-2">
				{#each links as link (link.href)}
					<li>
						<a
							href={appHref(link.href)}
							class="inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</aside>
