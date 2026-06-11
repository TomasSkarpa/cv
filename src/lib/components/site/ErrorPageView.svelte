<script lang="ts">
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { errorPage } from '$lib/data/error';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';

	let {
		title,
		subtitle,
		status,
	}: {
		title: string;
		subtitle: string;
		status?: number;
	} = $props();
</script>

<PageShell>
	<PageHeader {title} {subtitle} />

	<div class="space-y-6">
		{#if status !== undefined && status !== 404}
			<p class="text-sm text-muted-foreground">Error {status}</p>
		{/if}

		<div class="flex flex-wrap gap-3">
			<Button href={errorPage.actions[0].href}>{errorPage.actions[0].label}</Button>
			<Button href={errorPage.actions[1].href} variant="outline">
				{errorPage.actions[1].label}
			</Button>
		</div>

		<Card>
			<CardContent class="pt-6">
				<p class="text-sm text-muted-foreground">
					Not sure where to go?
					<Button
						href={errorPage.actions[2].href}
						variant="link"
						class="inline h-auto p-0 text-sm font-medium"
					>
						{errorPage.actions[2].label}
					</Button>
					lists every page on this site.
				</p>
			</CardContent>
		</Card>
	</div>
</PageShell>
