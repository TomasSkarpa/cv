<script lang="ts">
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	let {
		sections,
	}: {
		sections: { id: string; label: string }[];
	} = $props();

	let cancelScroll = () => {};

	// transitions.dev's smooth-out curve, cubic-bezier(.22, 1, .36, 1).
	function easeOut(x: number) {
		let low = 0;
		let high = 1;
		let t = x;
		for (let i = 0; i < 12; i++) {
			t = (low + high) / 2;
			const inverse = 1 - t;
			const bezierX = 3 * inverse * inverse * t * .22 + 3 * inverse * t * t * .36 + t * t * t;
			if (bezierX < x) low = t;
			else high = t;
		}
		const inverse = 1 - t;
		return 3 * inverse * inverse * t + 3 * inverse * t * t + t * t * t;
	}

	function scrollToSection(event: MouseEvent, id: string) {
		if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
		cancelScroll();
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const target = document.getElementById(id);
		if (!target) return;
		event.preventDefault();
		const hash = `#${encodeURIComponent(id)}`;
		if (window.location.hash !== hash) pushState(hash, $page.state);

		const start = window.scrollY;
		const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
		const end = Math.max(0, Math.min(document.documentElement.scrollHeight - window.innerHeight, target.getBoundingClientRect().top + start - margin));
		const started = performance.now();
		let frame = 0;
		const onKey = (e: KeyboardEvent) => {
			if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) cancelScroll();
		};
		const stop = () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('wheel', stop);
			window.removeEventListener('touchstart', stop);
			window.removeEventListener('keydown', onKey);
			cancelScroll = () => {};
		};
		cancelScroll = stop;
		window.addEventListener('wheel', stop, { passive: true });
		window.addEventListener('touchstart', stop, { passive: true });
		window.addEventListener('keydown', onKey);
		const tick = (now: number) => {
			const progress = Math.min(1, (now - started) / 750);
			window.scrollTo(0, start + (end - start) * easeOut(progress));
			if (progress < 1) frame = requestAnimationFrame(tick);
			else {
				stop();
				const hadTabindex = target.hasAttribute('tabindex');
				if (!hadTabindex) {
					target.setAttribute('tabindex', '-1');
					target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
				}
				target.focus({ preventScroll: true });
			}
		};
		frame = requestAnimationFrame(tick);
	}

	onDestroy(() => cancelScroll());
</script>

<nav aria-label="On this page" class="mb-8 space-y-3">
	<p class="text-sm font-medium text-muted-foreground">On this page</p>
	<ul class="flex flex-wrap gap-2">
		{#each sections as section (section.id)}
			<li>
				<a
					href={`#${section.id}`}
					onclick={(event) => scrollToSection(event, section.id)}
					class="inline-flex rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
				>
					{section.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
