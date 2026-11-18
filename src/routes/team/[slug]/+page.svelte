<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { SITE_URL } from '#lib/data/seo';
	import { imgSrcset } from '#lib/data/images';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const member = $derived(data.member);
	const firstName = $derived(member.name.replace(/^Dr\.\s*/, '').split(' ')[0]);
	const canonical = $derived(`${SITE_URL}/team/${member.slug}`);

	const personJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: member.name,
		jobTitle: member.role,
		url: canonical,
		description: member.bio,
		worksFor: {
			'@type': 'Dentist',
			'@id': `${SITE_URL}/#dentist`,
			name: 'NaviX Technologies',
			url: SITE_URL
		},
		...(member.image ? { image: `${SITE_URL}${member.image}` } : {})
	});
</script>

<svelte:head>
	<title>{member.name} | NaviX Technologies</title>
	{@html `<script type="application/ld+json">${JSON.stringify(personJsonLd)}</script>`}
</svelte:head>

<PageHero eyebrow="OUR TEAM" title={member.name} subtitle={member.role} />

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<div class="grid gap-10 lg:grid-cols-[360px_1fr]">
		<!-- Photo / initials -->
		<div class="min-w-0" use:reveal>
			{#if member.image}
				<img
					src={member.image}
					srcset={imgSrcset(member.image)}
					sizes="(max-width: 1024px) 100vw, 360px"
					width={member.image.includes('dr-anderson') ? 1280 : 1920}
					height={member.image.includes('dr-anderson') ? 1920 : 1280}
					alt="Portrait of {member.name}"
					class="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-xl"
				/>
			{:else}
				<div class="grid aspect-[4/5] w-full place-items-center rounded-3xl bg-brand shadow-xl">
					<span
						class="grid size-32 place-items-center rounded-full bg-white/20 text-5xl font-extrabold text-white ring-4 ring-white/30"
					>
						{member.initials}
					</span>
				</div>
			{/if}
			<div class="mt-5 rounded-3xl bg-mist p-5 text-center">
				<p class="flex items-center justify-center gap-1.5 text-sm text-[#5B6B74]">
					<span class="flex text-amber-400" aria-label="Rated {member.rating} out of 5">
						{#each Array(5) as _}<Icon name="star" class="size-4" />{/each}
					</span>
					<span class="font-bold text-navy">{member.rating}</span>
					<span>· {member.reviews} patient reviews</span>
				</p>
				<p class="mt-2 text-sm font-semibold text-navy">{member.experience} experience</p>
			</div>
		</div>

		<!-- Details -->
		<div class="min-w-0">
			<div use:reveal>
				<p class="text-xs font-bold tracking-[0.25em] text-brand uppercase">{member.role}</p>
				<h2 class="mt-2 text-2xl font-bold text-navy sm:text-3xl">About {firstName}</h2>
				<p class="mt-4 text-base leading-relaxed text-[#5B6B74]">{member.bio}</p>
			</div>

			<h3 class="mt-10 text-xl font-bold text-navy" use:reveal>Specialties</h3>
			<ul class="mt-4 grid gap-3 sm:grid-cols-2">
				{#each member.specialties as specialty}
					<li
						class="flex min-w-0 items-start gap-2.5 rounded-2xl border border-slate-100 bg-white p-4 text-sm text-[#5B6B74] shadow-sm"
						use:reveal
					>
						<Icon name="check" class="mt-0.5 size-5 shrink-0 text-brand" />
						<span class="min-w-0">{specialty}</span>
					</li>
				{/each}
			</ul>

			<h3 class="mt-10 text-xl font-bold text-navy" use:reveal>Education &amp; training</h3>
			<ul class="mt-4 space-y-3">
				{#each member.education as item}
					<li class="flex min-w-0 items-start gap-3 text-sm leading-relaxed text-[#5B6B74]" use:reveal>
						<Icon name="check" class="mt-0.5 size-5 shrink-0 text-brand" />
						<span class="min-w-0">{item}</span>
					</li>
				{/each}
			</ul>

			<div class="mt-10 flex flex-wrap items-center gap-3" use:reveal>
				<a
					href="/book-appointment"
					class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90"
				>
					Book with {firstName} <Icon name="arrow-right" class="size-4" />
				</a>
				<a
					href="/team"
					class="inline-flex min-h-11 items-center rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-brand transition hover:bg-mist"
				>
					Back to all dentists
				</a>
			</div>
		</div>
	</div>
</section>
