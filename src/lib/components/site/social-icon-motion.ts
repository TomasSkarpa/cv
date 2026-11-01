/** Let an interrupted hover finish from its current appearance. */
export function socialIconMotion(icon: SVGElement) {
	const link = icon.closest('a');
	if (!link) return () => {};
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	let pointerInside = false;
	let focused = false;
	let active = false;
	let settling: Animation[] = [];

	const start = () => {
		if (active || reducedMotion.matches) return;
		settling.forEach((animation) => animation.cancel());
		settling = [];
		active = true;
		link.dataset.iconActive = 'true';
	};
	const stop = () => {
		if (!active || pointerInside || focused) return;
		active = false;
		const elements: SVGElement[] = [icon, ...icon.querySelectorAll<SVGElement>('path, rect, circle, line')];
		const snapshot = (element: SVGElement) => {
			const style = getComputedStyle(element);
			return { transform: style.transform, opacity: style.opacity, strokeDashoffset: style.strokeDashoffset };
		};
		const from = elements.map(snapshot);
		delete link.dataset.iconActive;
		if (reducedMotion.matches) return;
		settling = elements.flatMap((element, i) => {
			const to = snapshot(element);
			if (from[i].transform === to.transform && from[i].opacity === to.opacity && from[i].strokeDashoffset === to.strokeDashoffset) return [];
			return [element.animate([from[i], to], { duration: 250, easing: 'cubic-bezier(.22, 1, .36, 1)' })];
		});
	};
	const enter = (event: PointerEvent) => { if (event.pointerType !== 'touch') { pointerInside = true; start(); } };
	const leave = (event: PointerEvent) => { if (event.pointerType !== 'touch') { pointerInside = false; stop(); } };
	const focus = () => { focused = true; start(); };
	const blur = (event: FocusEvent) => {
		if (event.relatedTarget instanceof Node && link.contains(event.relatedTarget)) return;
		focused = false;
		stop();
	};
	link.addEventListener('pointerenter', enter);
	link.addEventListener('pointerleave', leave);
	link.addEventListener('focusin', focus);
	link.addEventListener('focusout', blur);
	return () => {
		link.removeEventListener('pointerenter', enter);
		link.removeEventListener('pointerleave', leave);
		link.removeEventListener('focusin', focus);
		link.removeEventListener('focusout', blur);
		settling.forEach((animation) => animation.cancel());
		delete link.dataset.iconActive;
	};
}
