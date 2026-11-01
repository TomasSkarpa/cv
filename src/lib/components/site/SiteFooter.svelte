<script lang="ts">
	import { footerQuickLinks, footerSocial, site } from '$lib/data/site';
	import { appHref } from '$lib/utils';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import SocialIcon from './SocialIcon.svelte';
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
								class="social-link inline-flex min-h-10 items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
							>
								<SocialIcon name={link.label} />
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<Separator />
		<p class="text-sm text-muted-foreground">
			{site.copyright} · {site.location} ·
			<a
				href={appHref('/privacy')}
				class="underline-offset-4 hover:text-foreground hover:underline"
			>
				Privacy
			</a>
			·
			<a
				href={site.sourceRepo}
				target="_blank"
				rel="noopener noreferrer"
				class="underline-offset-4 hover:text-foreground hover:underline"
			>
				Source
			</a>
		</p>
	</div>
</footer>
