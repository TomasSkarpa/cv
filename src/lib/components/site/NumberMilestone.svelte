<script lang="ts">
	let { value, label, detail, divider = false }: { value: string; label: string; detail: string; divider?: boolean } = $props();

	function revealDigits(node: HTMLElement) {
		if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		node.classList.add('is-waiting');
		let timer: ReturnType<typeof setTimeout> | undefined;
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.intersectionRatio >= 1) && timer === undefined) {
				timer = setTimeout(() => {
					node.classList.remove('is-waiting');
					node.classList.add('is-animating');
					observer.disconnect();
				}, 350);
			} else if (entries.some((entry) => entry.intersectionRatio < 1)) {
				clearTimeout(timer);
				timer = undefined;
			}
		}, { threshold: 1 });
		observer.observe(node);
		return { destroy: () => { observer.disconnect(); clearTimeout(timer); } };
	}
</script>

<div class="milestone" class:divider>
	<span class="t-digit-group" role="img" aria-label={value} use:revealDigits>
		{#each [...value] as digit, index}
			<span class="t-digit" aria-hidden="true" style:--digit-index={index}>{digit}</span>
		{/each}
	</span>
	<span class="milestone-copy"><strong>{label}</strong><span>{detail}</span></span>
</div>

<style>
	.milestone { display: flex; align-items: center; gap: 1rem; padding: .8rem 0; }
	.milestone.divider { border-bottom: 1px solid var(--border); }
	.milestone-copy { display: grid; gap: .12rem; font-size: .875rem; line-height: 1.3; }
	.milestone-copy strong { font-weight: 600; }
	.milestone-copy > span { color: var(--muted-foreground); font-size: .75rem; }
	.t-digit-group { display: inline-flex; align-items: baseline; font-size: 2.5rem; font-weight: 650; letter-spacing: -.06em; line-height: 1; font-variant-numeric: tabular-nums; }
	.t-digit { display: inline-block; }
	.t-digit-group:global(.is-waiting) .t-digit { opacity: 0; }
	.t-digit-group:global(.is-animating) .t-digit { animation: digit-pop-in 900ms cubic-bezier(.34, 1.45, .64, 1) both; animation-delay: calc(var(--digit-index) * 160ms); }
	@keyframes digit-pop-in { from { transform: translateY(8px); opacity: 0; filter: blur(2px); } to { transform: translateY(0); opacity: 1; filter: blur(0); } }
	@media (prefers-reduced-motion: reduce) { .t-digit-group:global(.is-animating) .t-digit { animation: none; } .t-digit-group:global(.is-waiting) .t-digit { opacity: 1; } }
</style>
