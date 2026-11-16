<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { services } from '#lib/data/services';
</script>

<svelte:head>
	<title>Our Services | NaviX Technologies</title>
	<meta
		name="description"
		content="Dental services for every smile — checkups, cleanings, cosmetic dentistry, restorative treatment, implants and whitening at NaviX Technologies in Austin, TX."
	/>
</svelte:head>

<PageHero
	eyebrow="OUR SERVICES"
	title="Dental services for every smile"
	subtitle="From routine checkups to complete smile makeovers — gentle care, modern technology and honest, upfront pricing."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each services as service (service.slug)}
			<article
				class="flex min-w-0 flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				use:reveal
			>
				<span class="grid size-12 place-items-center rounded-2xl bg-brand text-white">
					<Icon name={service.icon} class="size-6" />
				</span>
				<h2 class="mt-5 text-xl font-bold text-navy">{service.name}</h2>
				<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">{service.short}</p>
				<p class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-navy">
					<span class="inline-flex items-center gap-1.5">
						<Icon name="check" class="size-4 text-brand" />{service.priceLabel}
					</span>
					<span class="inline-flex items-center gap-1.5">
						<Icon name="calendar" class="size-4 text-brand" />{service.visits}
					</span>
					<span class="inline-flex items-center gap-1.5">
						<Icon name="clock" class="size-4 text-brand" />{service.duration}
					</span>
				</p>
				<ul class="mt-4 space-y-2 border-t border-slate-100 pt-4">
					{#each service.includes.slice(0, 3) as item}
						<li class="flex items-start gap-2 text-sm text-[#5B6B74]">
							<Icon name="check" class="mt-0.5 size-4 shrink-0 text-brand" />
							<span class="min-w-0">{item}</span>
						</li>
					{/each}
				</ul>
				<div class="mt-6 flex flex-wrap items-center gap-3 pt-1">
					<a
						href="/services/{service.slug}"
						class="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
					>
						Learn more <Icon name="arrow-right" class="size-4" />
					</a>
					<a
						href="/book-appointment?service={service.slug}"
						class="inline-flex min-h-11 items-center rounded-full border-2 border-brand px-5 py-2.5 text-sm font-bold text-brand transition hover:bg-mist"
					>
						Book
					</a>
				</div>
			</article>
		{/each}
	</div>

	<!-- Emergency strip -->
	<div
		class="mt-12 flex min-w-0 flex-col items-start gap-4 rounded-3xl bg-navy px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8"
		use:reveal
	>
		<div class="min-w-0">
			<p class="text-lg font-bold">Dental emergency?</p>
			<p class="mt-1 text-sm leading-relaxed text-white/85">
				Call +1 (512) 555-0148 — same-day appointments.
			</p>
		</div>
		<a
			href="tel:+15125550148"
			class="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition hover:bg-mist"
		>
			<Icon name="phone" class="size-4" /> +1 (512) 555-0148
		</a>
	</div>

	<!-- CTA card -->
	<div class="mt-6 rounded-3xl bg-mist px-6 py-10 text-center sm:px-12" use:reveal>
		<h2 class="text-2xl font-bold text-navy sm:text-3xl">Not sure which service you need?</h2>
		<p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#5B6B74] sm:text-base">
			Book a smile assessment and our dentists will build a clear, honest plan for you —
			no pressure, no surprises.
		</p>
		<a
			href="/book-appointment"
			class="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90"
		>
			Book an appointment <Icon name="arrow-right" class="size-4" />
		</a>
	</div>
</section>
