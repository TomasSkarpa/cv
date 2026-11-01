/** Sliding indication for navigation links; links keep their normal behavior. */
export function slidingNavigation(nav: HTMLElement) {
	const pill = nav.querySelector<HTMLElement>('.desktop-nav-highlight');
	if (!pill) return;

	const activeLink = () => nav.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
	let pointed: HTMLAnchorElement | null = null;
	let focused: HTMLAnchorElement | null = null;

	function move(link: HTMLAnchorElement | null, animate = true) {
		if (!pill) return;
		if (!link || !link.offsetWidth) {
			pill.style.opacity = '0';
			return;
		}
		if (!animate) pill.style.transition = 'none';
		pill.style.width = `${link.offsetWidth}px`;
		pill.style.height = `${link.offsetHeight}px`;
		pill.style.transform = `translate(${link.offsetLeft}px, ${link.offsetTop}px)`;
		pill.style.opacity = '1';
		if (!animate) {
			void pill.offsetWidth;
			pill.style.transition = '';
		}
		nav.dataset.slideReady = '';
	}
	const update = (animate = true) => move(focused || pointed || activeLink(), animate);
	const onPointerOver = (event: PointerEvent) => {
		if (event.pointerType === 'touch') return;
		const link = (event.target as Element).closest<HTMLAnchorElement>('a');
		if (link && nav.contains(link)) { pointed = link; update(); }
	};
	const onPointerLeave = () => { pointed = null; update(); };
	const onFocusIn = (event: FocusEvent) => {
		const link = (event.target as Element).closest<HTMLAnchorElement>('a');
		if (link && nav.contains(link)) { focused = link; update(); }
	};
	const onFocusOut = (event: FocusEvent) => {
		if (!(event.relatedTarget instanceof Node) || !nav.contains(event.relatedTarget)) {
			focused = null; update();
		}
	};
	const onResize = () => update(false);
	const observer = new MutationObserver(() => update());
	observer.observe(nav, { subtree: true, attributes: true, attributeFilter: ['aria-current'] });
	nav.addEventListener('pointerover', onPointerOver);
	nav.addEventListener('pointerleave', onPointerLeave);
	nav.addEventListener('focusin', onFocusIn);
	nav.addEventListener('focusout', onFocusOut);
	window.addEventListener('resize', onResize);
	requestAnimationFrame(() => update(false));
	return { destroy() {
		observer.disconnect();
		nav.removeEventListener('pointerover', onPointerOver);
		nav.removeEventListener('pointerleave', onPointerLeave);
		nav.removeEventListener('focusin', onFocusIn);
		nav.removeEventListener('focusout', onFocusOut);
		window.removeEventListener('resize', onResize);
	} };
}
