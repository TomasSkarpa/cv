<script lang="ts">
	import { page } from '$app/stores';
	import { headerNav, site } from '$lib/data/site';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { appHref, cn, isAppPathActive } from '$lib/utils';
	import {
		Sheet,
		SheetContent,
		SheetHeader,
		SheetTitle,
		SheetTrigger,
	} from '$lib/components/ui/sheet/index.js';
	import { Menu } from '@lucide/svelte';

	let mobileOpen = $state(false);

</script>

{#snippet primaryNavLinks(buttonClass?: string)}
	{#each headerNav as item (item.href)}
		<Button
			href={item.href}
			variant={isAppPathActive(item.href, $page.url.pathname) ? 'secondary' : 'ghost'}
			size="sm"
			class={cn('text-sm', buttonClass)}
		>
			{item.label}
		</Button>
	{/each}
{/snippet}

<header class="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
	<div class="relative flex h-16 items-center gap-2 px-4 sm:px-6">
		<a
			href={appHref('/')}
			class="group relative z-20 flex shrink-0 flex-col overflow-visible bg-background/95 py-1 backdrop-blur-sm"
		>
			<span class="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground group-hover:text-primary">
				{site.name}
			</span>
			<span class="whitespace-nowrap text-xs text-muted-foreground">{site.title}</span>
		</a>

		<nav
			class="relative z-10 ml-auto hidden min-w-0 items-center gap-0.5 md:flex lg:hidden"
			aria-label="Primary"
		>
			{@render primaryNavLinks()}
		</nav>

		<div
			class="pointer-events-none absolute inset-x-0 z-0 hidden h-full items-center justify-center px-4 sm:px-6 lg:flex"
		>
			<nav class="pointer-events-auto flex items-center gap-1" aria-label="Primary">
				{@render primaryNavLinks()}
			</nav>
		</div>

		<div class="relative z-10 ml-auto md:hidden">
			<Sheet bind:open={mobileOpen}>
				<SheetTrigger
					class={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
					aria-label="Open navigation menu"
				>
					<Menu class="size-4" />
				</SheetTrigger>
				<SheetContent side="right" class="w-72">
					<SheetHeader>
						<SheetTitle>{site.name}</SheetTitle>
					</SheetHeader>
					<nav class="mt-6 flex flex-col gap-1" aria-label="Primary mobile">
						{#each headerNav as item (item.href)}
							<Button
								href={item.href}
								variant={isAppPathActive(item.href, $page.url.pathname) ? 'secondary' : 'ghost'}
								class="justify-start"
								onclick={() => (mobileOpen = false)}
							>
								{item.label}
							</Button>
						{/each}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	</div>
</header>
