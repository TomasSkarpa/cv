<script lang="ts">
	import { contact } from '$lib/data/contact';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { ExternalLink } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Contact · Tomáš Škarpa</title>
</svelte:head>

<PageShell>
	<PageHeader title="Contact" subtitle={contact.locationNote} />

	<Card>
		<CardHeader>
			<CardTitle class="text-lg">Direct links</CardTitle>
		</CardHeader>
		<CardContent class="space-y-4">
			{#each Object.values(contact.directLinks) as link (link.href)}
				<div class="space-y-1">
					<p class="text-sm font-medium text-muted-foreground">{link.label}</p>
					<Button href={link.href} variant="link" class="h-auto p-0 text-base" target="_blank" rel="noopener">
						{link.value}
						<ExternalLink class="size-3.5" />
					</Button>
				</div>
			{/each}
		</CardContent>
	</Card>
</PageShell>
