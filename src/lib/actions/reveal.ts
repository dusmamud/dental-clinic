/**
 * Scroll reveal action — Tier 1 motion (0 KB animation lib).
 * IntersectionObserver threshold 0.15, one-shot: adds .is-visible once
 * the element enters the viewport, then unobserves it.
 * Visibility is gated behind .motion-ok in app.css, so without JS or
 * with reduced-motion preference the content is fully visible by default.
 */
export function reveal(node: HTMLElement) {
	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					e.target.classList.add('is-visible');
					io.unobserve(e.target);
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
}
