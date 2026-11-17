<script lang="ts">
	import { onMount } from 'svelte';

	let {
		value,
		suffix = '',
		decimals = 0,
		duration = 1400,
		class: cls = ''
	}: { value: number; suffix?: string; decimals?: number; duration?: number; class?: string } =
		$props();

	let el: HTMLElement | undefined = $state();
	let display = $state('0');
	let started = $state(false);

	function format(n: number) {
		return n.toFixed(decimals);
	}

	onMount(() => {
		if (!el) return;
		display = format(0);
		// Reduced motion: show the final value immediately, no animation.
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			display = format(value);
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting && !started) {
						started = true;
						io.disconnect();
						const t0 = performance.now();
						const tick = (t: number) => {
							const p = Math.min(1, (t - t0) / duration);
							const eased = 1 - Math.pow(1 - p, 3);
							display = format(value * eased);
							if (p < 1) requestAnimationFrame(tick);
						};
						requestAnimationFrame(tick);
					}
				}
			},
			{ threshold: 0.4 }
		);
		io.observe(el);
		return () => io.disconnect();
	});
</script>

<span bind:this={el} class={cls}>{display}{suffix}</span>
