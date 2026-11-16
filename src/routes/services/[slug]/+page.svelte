<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { services } from '#lib/data/services';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const service = $derived(data.service);
	const others = $derived(services.filter((s) => s.slug !== service.slug));
</script>

<svelte:head>
	<title>{service.name} | NaviX Technologies</title>
	<meta name="description" content={service.short} />
</svelte:head>

<PageHero eyebrow="OUR SERVICES" title={service.name} subtitle={service.short} />

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<div class="grid gap-10 lg:grid-cols-[1fr_360px]">
		<!-- Main content -->
		<div class="min-w-0">
			<div use:reveal>
				<p class="text-base leading-relaxed text-[#5B6B74] sm:text-lg">{service.description}</p>
			</div>

			<h2 class="mt-10 text-2xl font-bold text-navy" use:reveal>What happens at your visit</h2>
			<ol class="mt-6 space-y-5">
				{#each service.steps as step, i}
					<li class="flex min-w-0 gap-4 rounded-3xl bg-mist p-5 sm:p-6" use:reveal>
						<span
							class="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-base font-bold text-white"
						>
							{i + 1}
						</span>
						<div class="min-w-0">
							<h3 class="font-bold text-navy">{step.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-[#5B6B74]">{step.text}</p>
						</div>
					</li>
				{/each}
			</ol>

			<h2 class="mt-10 text-2xl font-bold text-navy" use:reveal>What's included</h2>
			<ul class="mt-6 grid gap-3 sm:grid-cols-2">
				{#each service.includes as item}
					<li
						class="flex min-w-0 items-start gap-2.5 rounded-2xl border border-slate-100 bg-white p-4 text-sm text-[#5B6B74] shadow-sm"
						use:reveal
					>
						<Icon name="check" class="mt-0.5 size-5 shrink-0 text-brand" />
						<span class="min-w-0">{item}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Sidebar -->
		<aside class="min-w-0">
			<div
				class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:sticky lg:top-24"
				use:reveal
			>
				<p class="text-xs font-bold tracking-[0.2em] text-[#5B6B74] uppercase">Starting at</p>
				<p class="mt-2 text-3xl font-extrabold text-navy">{service.priceLabel}</p>
				<ul class="mt-5 space-y-3 text-sm text-[#5B6B74]">
					<li class="flex items-center gap-2.5">
						<Icon name="clock" class="size-5 shrink-0 text-brand" />
						<span><span class="font-semibold text-navy">Duration:</span> {service.duration}</span>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon name="calendar" class="size-5 shrink-0 text-brand" />
						<span><span class="font-semibold text-navy">Visits:</span> {service.visits}</span>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon name="check" class="size-5 shrink-0 text-brand" />
						<span>Transparent pricing — no hidden fees</span>
					</li>
				</ul>
				<a
					href="/book-appointment?service={service.slug}"
					class="mt-6 flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
				>
					Book this service <Icon name="arrow-right" class="size-4" />
				</a>
				<a
					href="tel:+15125550148"
					class="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-brand transition hover:bg-mist"
				>
					<Icon name="phone" class="size-4" /> +1 (512) 555-0148
				</a>
				<a
					href="/services"
					class="mt-4 flex min-h-11 items-center justify-center gap-1.5 text-sm font-bold text-brand"
				>
					All services <Icon name="arrow-right" class="size-4" />
				</a>
			</div>
		</aside>
	</div>

	<!-- Other services -->
	<h2 class="mt-16 text-2xl font-bold text-navy sm:text-3xl" use:reveal>Other services</h2>
	<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each others as other (other.slug)}
			<a
				href="/services/{other.slug}"
				class="group flex min-w-0 items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				use:reveal
			>
				<span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-mist text-brand">
					<Icon name={other.icon} class="size-5" />
				</span>
				<span class="min-w-0 flex-1">
					<span class="block truncate font-bold text-navy group-hover:text-brand">{other.name}</span>
					<span class="mt-0.5 block text-xs font-semibold text-[#5B6B74]">{other.priceLabel}</span>
				</span>
				<Icon
					name="arrow-right"
					class="size-5 shrink-0 text-brand transition group-hover:translate-x-1"
				/>
			</a>
		{/each}
	</div>
</section>
