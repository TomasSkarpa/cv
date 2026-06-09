<script lang="ts">
	import { footerQuickLinks, footerSocial, site } from '$lib/data/site';
	import { appHref } from '$lib/utils';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<footer class="mt-auto border-t border-border/80 bg-muted/30">
	<div class="site-container mx-auto min-w-0 space-y-8 px-4 py-10 sm:px-6">
		<div class="grid gap-8">
			<div class="space-y-3">
				<p class="text-sm font-semibold text-foreground">Quick links</p>
				<nav aria-label="Footer">
					<ul class="flex flex-wrap gap-x-4 gap-y-2">
						{#each footerQuickLinks as link (link.href)}
							<li>
								<a
									href={appHref(link.href)}
									class="text-sm text-muted-foreground transition-colors hover:text-foreground"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
			<div class="space-y-3">
				<p class="text-sm font-semibold text-foreground">Social</p>
				<ul class="flex flex-wrap gap-3">
					{#each footerSocial as link (link.href)}
						<li>
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<Separator />
		<p class="text-sm text-muted-foreground">
			{site.copyright} · {site.location}
		</p>
	</div>
</footer>
