<script lang="ts">
	let {
		eyebrow,
		title,
		subtitle
	}: { eyebrow: string; title: string; subtitle: string } = $props();
</script>

<section class="bg-mist">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">{eyebrow}</p>
		<h1 class="mt-3 max-w-3xl text-4xl leading-tight font-bold text-navy sm:text-5xl">{title}</h1>
		{#if subtitle}
			<p class="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
		{/if}
		<p class="mt-6 text-xs font-semibold tracking-wide text-muted uppercase">
			<a class="hover:text-brand" href="/">Home</a>
			<span class="mx-2 text-slate-400">/</span>
			<span class="text-navy">{title}</span>
		</p>
	</div>
</section>
