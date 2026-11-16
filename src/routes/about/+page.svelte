<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';

	const stats = [
		{ value: '98%', label: 'Patients who recommend us' },
		{ value: '2K+', label: 'Happy smiles cared for' },
		{ value: '4.9/5', label: 'Average patient rating' },
		{ value: '15+', label: 'Years serving Austin' }
	];

	const values = [
		{
			icon: 'smile',
			title: 'Gentle care',
			text: 'Unhurried appointments, clear explanations and a calm chair-side manner — especially for nervous patients.'
		},
		{
			icon: 'sparkle',
			title: 'Modern technology',
			text: 'Digital X-rays, 3D scans and same-day crowns mean faster, more comfortable and more precise treatment.'
		},
		{
			icon: 'check',
			title: 'Honest pricing',
			text: 'A written estimate before we start, every time. No hidden fees and no treatment you do not need.'
		},
		{
			icon: 'user',
			title: 'Family first',
			text: 'From a child’s first checkup to grandparents’ dentures — one friendly practice for the whole family.'
		}
	];

	const milestones = [
		{
			year: '2010',
			title: 'Founded in Austin',
			text: 'NaviX Technologies opened its doors on Smile Avenue with one chair, one dentist and a simple promise: treat every patient like family.'
		},
		{
			year: '2018',
			title: 'Digital dentistry',
			text: 'We moved to fully digital X-rays, 3D scanning and same-day crowns — shorter visits and more accurate results for our patients.'
		},
		{
			year: '2024',
			title: '2,000+ smiles',
			text: 'Our 2,000th patient joined the practice, and our team grew to four dentists, hygienists and a dedicated care-coordination team.'
		}
	];
</script>

<svelte:head>
	<title>About Us | NaviX Technologies</title>
	<meta
		name="description"
		content="Care with compassion and advanced technology — meet the team behind NaviX Technologies, Austin's family dental clinic since 2010."
	/>
</svelte:head>

<PageHero
	eyebrow="ABOUT US"
	title="Care with compassion and advanced technology"
	subtitle="A family dental clinic in the heart of Austin — where modern dentistry meets old-fashioned kindness."
/>

<!-- Mission + image -->
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
		<div class="min-w-0" use:reveal>
			<h2 class="text-2xl font-bold text-navy sm:text-3xl">Our mission</h2>
			<p class="mt-5 text-base leading-relaxed text-[#5B6B74]">
				We believe a visit to the dentist should feel easy. That means listening first,
				explaining every option in plain language, and never rushing a patient out of
				the chair. Our job is not just to fix teeth — it is to help you feel confident
				about your smile for life.
			</p>
			<p class="mt-4 text-base leading-relaxed text-[#5B6B74]">
				From preventive checkups to implants and smile makeovers, everything happens
				under one roof at 123 Smile Avenue, with transparent pricing and same-week
				appointments for most treatments.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href="/team"
					class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
				>
					Meet our team <Icon name="arrow-right" class="size-4" />
				</a>
				<a
					href="/services"
					class="inline-flex min-h-11 items-center rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-brand transition hover:bg-mist"
				>
					Explore services
				</a>
			</div>
		</div>
		<div class="relative min-w-0" use:reveal>
			<img
				src="/images/about.webp"
				alt="The NaviX Technologies dental team welcoming a patient in the bright Austin clinic"
				loading="lazy"
				class="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
			/>
			<span
				class="absolute inset-0 grid place-items-center"
				aria-hidden="true"
			>
				<span
					class="grid size-16 place-items-center rounded-full bg-brand/90 text-white shadow-xl ring-4 ring-white/60"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" class="ml-1 size-6" aria-hidden="true"
						><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg
					>
				</span>
			</span>
		</div>
	</div>

	<!-- Stats -->
	<div class="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4" use:reveal>
		{#each stats as stat}
			<div class="min-w-0 rounded-3xl bg-mist p-6 text-center">
				<p class="text-3xl font-extrabold text-brand sm:text-4xl">{stat.value}</p>
				<p class="mt-2 text-xs font-semibold text-[#5B6B74] sm:text-sm">{stat.label}</p>
			</div>
		{/each}
	</div>

	<!-- Values -->
	<h2 class="mt-16 text-center text-2xl font-bold text-navy sm:text-3xl" use:reveal>
		What we stand for
	</h2>
	<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each values as value}
			<div
				class="min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
				use:reveal
			>
				<span class="grid size-12 place-items-center rounded-2xl bg-brand text-white">
					<Icon name={value.icon} class="size-6" />
				</span>
				<h3 class="mt-4 text-lg font-bold text-navy">{value.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">{value.text}</p>
			</div>
		{/each}
	</div>

	<!-- Our story -->
	<h2 class="mt-16 text-center text-2xl font-bold text-navy sm:text-3xl" use:reveal>Our story</h2>
	<div class="mt-8 grid gap-5 md:grid-cols-3">
		{#each milestones as milestone}
			<div class="min-w-0 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100" use:reveal>
				<p class="text-2xl font-extrabold text-brand">{milestone.year}</p>
				<h3 class="mt-2 text-lg font-bold text-navy">{milestone.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">{milestone.text}</p>
			</div>
		{/each}
	</div>

	<!-- Team preview -->
	<div
		class="mt-16 flex min-w-0 flex-col items-start gap-6 rounded-3xl bg-navy px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10"
		use:reveal
	>
		<div class="min-w-0">
			<p class="text-xs font-bold tracking-[0.25em] text-white/70 uppercase">Our team</p>
			<h2 class="mt-2 text-2xl font-bold sm:text-3xl">Four dentists, one promise</h2>
			<p class="mt-2 max-w-xl text-sm leading-relaxed text-white/85">
				Meet Dr. Anderson, Dr. Chen, Dr. Patel and Dr. Rodriguez — 15+ years of combined
				experience, and a 4.9/5 rating from our patients.
			</p>
		</div>
		<a
			href="/team"
			class="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition hover:bg-mist"
		>
			Meet the team <Icon name="arrow-right" class="size-4" />
		</a>
	</div>

	<!-- CTA -->
	<div class="mt-6 rounded-3xl bg-mist px-6 py-10 text-center sm:px-12" use:reveal>
		<h2 class="text-2xl font-bold text-navy sm:text-3xl">Ready to smile with confidence?</h2>
		<p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#5B6B74] sm:text-base">
			Book your first visit today — Mon–Fri 8am–6pm, Sat 9am–2pm at 123 Smile Avenue, Austin.
		</p>
		<a
			href="/book-appointment"
			class="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90"
		>
			Book an appointment <Icon name="arrow-right" class="size-4" />
		</a>
	</div>
</section>
