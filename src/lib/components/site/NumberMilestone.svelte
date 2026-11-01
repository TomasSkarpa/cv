<script lang="ts">
	let { value, label, detail, divider = false }: { value: string; label: string; detail: string; divider?: boolean } = $props();

	function revealDigits(node: HTMLElement) {
		if (!('IntersectionObserver' in window)) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				node.classList.add('is-animating');
				observer.disconnect();
			}
		}, { threshold: 0.3 });
		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}
</script>

<div class="milestone" class:divider>
	<span class="t-digit-group" role="img" aria-label={value} use:revealDigits>
		{#each [...value] as digit, index}
			<span class="t-digit" aria-hidden="true" data-stagger={value.length > 1 && index === value.length - 2 ? '1' : value.length > 1 && index === value.length - 1 ? '2' : undefined}>{digit}</span>
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
	.t-digit-group:global(.is-animating) .t-digit { animation: digit-pop-in 500ms cubic-bezier(.34, 1.45, .64, 1) both; }
	.t-digit-group:global(.is-animating) .t-digit[data-stagger="1"] { animation-delay: 70ms; }
	.t-digit-group:global(.is-animating) .t-digit[data-stagger="2"] { animation-delay: 140ms; }
	@keyframes digit-pop-in { from { transform: translateY(8px); opacity: 0; filter: blur(2px); } to { transform: translateY(0); opacity: 1; filter: blur(0); } }
	@media (prefers-reduced-motion: reduce) { .t-digit-group:global(.is-animating) .t-digit { animation: none; } }
</style>
