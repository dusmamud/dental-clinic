<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';

	const cases = [
		{
			image: '/images/hero.webp',
			position: 'object-[50%_20%]',
			procedure: 'Teeth Whitening',
			title: 'Brighter smile in one visit',
			detail: 'Professional in-clinic whitening. One 60-minute visit; shade lifted several tones with sensitivity care throughout.',
			timeline: '1 visit · 60 minutes'
		},
		{
			image: '/images/about.webp',
			position: 'object-center',
			procedure: 'Clear Aligners',
			title: 'Straighter teeth, no brackets',
			detail: 'Invisalign clear aligners planned from a 3D scan, with a smile preview shown before treatment began.',
			timeline: '12 months · Check-ups every 6–8 weeks'
		},
		{
			image: '/images/dr-anderson.webp',
			position: 'object-[50%_15%]',
			procedure: 'Cosmetic Dentistry',
			title: 'Veneers for a confident smile',
			detail: 'Natural-looking veneers designed with the patient, matched to their tooth shade for a result that looks like their own smile.',
			timeline: '2 visits · Smile design consultation first'
		},
		{
			image: '/images/clinic.webp',
			position: 'object-center',
			procedure: 'Dental Implants',
			title: 'A missing tooth, replaced',
			detail: 'A single implant with a natural-looking crown, planned with 3D scans and fitted after healing.',
			timeline: '2–3 visits · 90-minute appointments'
		},
		{
			image: '/images/hero.webp',
			position: 'object-[50%_80%]',
			procedure: 'Crowns & Fillings',
			title: 'Damaged tooth restored',
			detail: 'A tooth-coloured crown repaired a cracked tooth and restored the bite, with a careful check and polish to finish.',
			timeline: '2 visits · 45–90 minutes each'
		},
		{
			image: '/images/about.webp',
			position: 'object-[50%_70%]',
			procedure: 'Smile Assessment',
			title: 'A full smile plan, first',
			detail: 'A relaxed first assessment with a written plan — cleaning, whitening and bonding agreed step by step, with transparent pricing.',
			timeline: '1 visit · 45 minutes'
		}
	];
</script>

<svelte:head>
	<title>Smile Gallery | NaviX Technologies</title>
	<meta
		name="description"
		content="Illustrative smile results from NaviX Technologies in Austin — whitening, clear aligners, veneers, implants and crowns. Demo examples, not real patients."
	/>
</svelte:head>

<PageHero
	eyebrow="SMILE GALLERY"
	title="Smiles we are proud of"
	subtitle="Illustrative examples of the treatments we offer — what each procedure involves and how long it typically takes."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<p
		class="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900"
		use:reveal
	>
		<span class="font-bold">Please note:</span> every case on this page is an illustrative example —
		not a real patient. Photos are reused clinic imagery with procedure labels; results vary from
		person to person and no outcome is guaranteed. This is a demo site with mock content.
	</p>

	<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each cases as item}
			<article
				class="min-w-0 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
				use:reveal
			>
				<div class="relative">
					<img
						src={item.image}
						alt="Illustrative example of {item.procedure} at NaviX Technologies"
						loading="lazy"
						class="aspect-[4/3] w-full object-cover {item.position}"
					/>
					<span
						class="absolute top-4 left-4 rounded-full bg-navy/90 px-3 py-1.5 text-xs font-bold text-white"
					>
						{item.procedure}
					</span>
				</div>
				<div class="p-6">
					<h2 class="text-lg font-bold text-navy">{item.title}</h2>
					<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">{item.detail}</p>
					<p class="mt-4 flex items-center gap-2 text-xs font-semibold text-brand">
						<Icon name="clock" class="size-4 shrink-0" /> {item.timeline}
					</p>
					<p class="mt-3 border-t border-slate-100 pt-3 text-xs font-semibold text-[#5B6B74]">
						Illustrative example — not a real patient
					</p>
				</div>
			</article>
		{/each}
	</div>

	<div class="mt-12 rounded-3xl bg-mist px-6 py-10 text-center sm:px-12" use:reveal>
		<h2 class="text-2xl font-bold text-navy sm:text-3xl">Want to talk about your smile?</h2>
		<p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#5B6B74] sm:text-base">
			Book a smile assessment and we will show you what is possible for your teeth — with a clear
			plan and honest pricing.
		</p>
		<div class="mt-7 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/book-appointment"
				class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90"
			>
				Book an appointment <Icon name="arrow-right" class="size-4" />
			</a>
			<a
				href="/pricing"
				class="inline-flex min-h-11 items-center rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-brand transition hover:bg-white"
			>
				See pricing
			</a>
		</div>
	</div>
</section>
