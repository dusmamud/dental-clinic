<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { testimonials } from '#lib/data/testimonials';

	const total = testimonials.length;
	const fiveStar = testimonials.filter((t) => t.rating === 5).length;
	const avg = (testimonials.reduce((sum, t) => sum + t.rating, 0) / total).toFixed(1);
</script>

<svelte:head>
	<title>Patient Reviews | NaviX Technologies</title>
</svelte:head>

<PageHero
	eyebrow="PATIENT REVIEWS"
	title="What our patients say"
	subtitle="Real feedback from the people we look after — gentle care, honest pricing and smiles patients are proud of."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<!-- Rating summary -->
	<div
		class="flex min-w-0 flex-col items-center gap-6 rounded-3xl bg-mist px-6 py-10 text-center sm:flex-row sm:justify-center sm:gap-12 sm:text-left"
		use:reveal
	>
		<div class="min-w-0">
			<p class="text-5xl font-extrabold text-navy sm:text-6xl">4.9<span class="text-3xl text-[#5B6B74]">/5</span></p>
			<div class="mt-2 flex items-center justify-center gap-1 text-gold sm:justify-start" role="img" aria-label="Rated 4.9 out of 5 stars">
				{#each Array(5) as _}
					<Icon name="star" class="size-5" />
				{/each}
			</div>
			<p class="mt-2 text-sm font-semibold text-[#5B6B74]">280+ patient reviews (demo)</p>
		</div>
		<div class="min-w-0 space-y-2 text-sm text-[#5B6B74]">
			<p><span class="font-bold text-navy">{fiveStar} of {total}</span> reviews shown here are 5 stars</p>
			<p><span class="font-bold text-navy">98%</span> of patients say they would recommend us</p>
			<p><span class="font-bold text-navy">2K+</span> smiles cared for since 2010</p>
			<p class="text-xs">Average shown on this page ({avg}/5) is calculated from the {total} demo reviews below.</p>
		</div>
		<a
			href="https://www.google.com/maps/search/NaviX+Technologies+Austin"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
		>
			Find us on Google <Icon name="external" class="size-4" />
		</a>
	</div>
	<p class="mt-4 text-center text-xs text-[#5B6B74]" use:reveal>
		Patient stories shared with permission (demo). All reviews on this site are mock/demo content
		for demonstration — the clinic and patients are not real.
	</p>

	<!-- Reviews -->
	<div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each testimonials as t}
			<article
				class="flex min-w-0 flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
				use:reveal
			>
				<div class="flex items-center gap-1 text-gold" role="img" aria-label="Rated {t.rating} out of 5 stars">
					{#each Array(5) as _, i}
						<Icon name="star" class="size-4 {i < t.rating ? '' : 'opacity-30'}" />
					{/each}
				</div>
				<p class="mt-4 flex-1 text-sm leading-relaxed text-[#5B6B74]">"{t.text}"</p>
				<div class="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
					<span
						class="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white"
					>
						{t.initials}
					</span>
					<div class="min-w-0">
						<p class="truncate font-bold text-navy">{t.name}</p>
						<p class="truncate text-xs font-semibold text-[#5B6B74]">{t.service}</p>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<!-- CTA -->
	<div class="mt-12 rounded-3xl bg-navy px-6 py-10 text-center text-white sm:px-12" use:reveal>
		<h2 class="text-2xl font-bold sm:text-3xl">Ready to join them?</h2>
		<p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
			Book your first visit today and see why our patients rate us 4.9/5.
		</p>
		<div class="mt-7 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book-appointment"
				class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
			>
				Book an appointment <Icon name="arrow-right" class="size-4" />
			</a>
			<a
				href="/new-patients"
				class="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white"
			>
				First visit guide
			</a>
		</div>
	</div>
</section>
