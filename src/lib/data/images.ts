// Responsive image variants (see static/images/*-480/800/1200/1600.webp).
// The original file stays the `src` fallback; srcset lists every variant
// plus the original at its full width, so the browser can pick the smallest
// candidate that still looks crisp (web.dev Responsive images: without
// `sizes` the browser assumes 100vw and over-downloads).
export function imgSrcset(src: string): string {
	const base = src.replace(/\.webp$/, '');
	const widths = src.includes('hero') ? [480, 800, 1200, 1600] : [480, 800, 1200];
	const candidates = widths.map((w) => `${base}-${w}.webp ${w}w`);
	const originalWidth = src.includes('dr-anderson') ? 1280 : 1920;
	candidates.push(`${src} ${originalWidth}w`);
	return candidates.join(', ');
}
