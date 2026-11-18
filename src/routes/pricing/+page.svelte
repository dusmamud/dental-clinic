<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { services } from '#lib/data/services';

	const money = (n: number) => `$${n.toLocaleString('en-US')}`;
</script>

<svelte:head>
	<title>Transparent Pricing | NaviX Technologies</title>
</svelte:head>

<PageHero
	eyebrow="PRICING"
	title="Transparent pricing, no surprises"
	subtitle="Every treatment below shows its starting price — the same figures shown on each service page. Your exact quote follows a personal assessment, and it is always given in writing before we start."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<!-- Desktop table / mobile cards from the same data -->
	<div class="overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-sm" use:reveal>
		<table class="w-full min-w-[720px] text-left text-sm">
			<thead>
				<tr class="border-b border-slate-100 bg-mist text-xs font-bold tracking-wide text-navy uppercase">
					<th scope="col" class="px-5 py-4">Treatment</th>
					<th scope="col" class="px-5 py-4">Starting at</th>
					<th scope="col" class="px-5 py-4">Visits</th>
					<th scope="col" class="px-5 py-4">Duration</th>
					<th scope="col" class="px-5 py-4">What's included</th>
				</tr>
			</thead>
			<tbody>
				{#each services as service (service.slug)}
					<tr class="border-b border-slate-100 last:border-0">
						<td class="px-5 py-4">
							<a href="/services/{service.slug}" class="font-bold text-navy hover:text-brand">
								{service.name}
							</a>
							<span class="mt-0.5 block max-w-xs text-xs leading-relaxed text-[#5B6B74]">
								{service.short}
							</span>
						</td>
						<td class="px-5 py-4 font-bold whitespace-nowrap text-brand">{service.priceLabel}</td>
						<td class="px-5 py-4 whitespace-nowrap text-[#5B6B74]">{service.visits}</td>
						<td class="px-5 py-4 whitespace-nowrap text-[#5B6B74]">{service.duration}</td>
						<td class="px-5 py-4 text-[#5B6B74]">{service.includes.join(' · ')}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<!-- Cards (same data, for small screens the table scrolls; cards give a quick scan) -->
	<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each services as service (service.slug)}
			<article
				class="flex min-w-0 flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
				use:reveal
			>
				<div class="flex items-start justify-between gap-3">
					<h2 class="text-lg font-bold text-navy">{service.name}</h2>
					<p class="shrink-0 text-lg font-extrabold whitespace-nowrap text-brand">
						{money(service.priceFrom)}
						<span class="block text-right text-[11px] font-semibold text-[#5B6B74]">starting at</span>
					</p>
				</div>
				<p class="mt-2 flex-1 text-sm leading-relaxed text-[#5B6B74]">{service.short}</p>
				<ul class="mt-4 space-y-2 border-t border-slate-100 pt-4">
					{#each service.includes.slice(0, 3) as item}
						<li class="flex items-start gap-2 text-sm text-[#5B6B74]">
							<Icon name="check" class="mt-0.5 size-4 shrink-0 text-brand" />
							<span class="min-w-0">{item}</span>
						</li>
					{/each}
				</ul>
				<a
					href="/services/{service.slug}"
					class="mt-5 inline-flex min-h-11 items-center gap-1.5 self-start rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
				>
					Learn more <Icon name="arrow-right" class="size-4" />
				</a>
			</article>
		{/each}
	</div>

	<!-- Notes -->
	<div class="mt-12 grid gap-5 lg:grid-cols-3">
		<div class="min-w-0 rounded-3xl bg-mist p-6" use:reveal>
			<h2 class="font-bold text-navy">What's included</h2>
			<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">
				The "What's included" column shows what each starting price covers. Anything extra — for
				example, additional X-rays or a second visit — is listed on your written estimate first.
			</p>
		</div>
		<div class="min-w-0 rounded-3xl bg-mist p-6" use:reveal>
			<h2 class="font-bold text-navy">Exact quotes follow an assessment</h2>
			<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">
				Starting prices are for straightforward cases. After your assessment we give you an exact,
				written quote — and if your plan changes, the quote changes with it, before any work
				begins.
			</p>
		</div>
		<div class="min-w-0 rounded-3xl bg-mist p-6" use:reveal>
			<h2 class="font-bold text-navy">Insurance &amp; financing</h2>
			<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">
				We accept Delta Dental, Cigna, MetLife, Aetna, UnitedHealthcare and Humana, and offer
				CareCredit and in-house payment plans.
				<a class="font-semibold text-brand hover:underline" href="/insurance">See insurance &amp; financing</a>
			</p>
		</div>
	</div>
	<p class="mt-8 text-xs leading-relaxed text-[#5B6B74]" use:reveal>
		Demo pricing for illustration only. Prices shown are starting prices ("from") and may change;
		your written estimate is the price that applies to your treatment.
	</p>

	<div class="mt-10 rounded-3xl bg-navy px-6 py-10 text-center text-white sm:px-12" use:reveal>
		<h2 class="text-2xl font-bold sm:text-3xl">Want an exact quote?</h2>
		<p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
			Book a smile assessment and we will give you a written estimate with honest options — no
			pressure, no surprises.
		</p>
		<a
			href="/book-appointment"
			class="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white transition hover:opacity-90"
		>
			Book an appointment <Icon name="arrow-right" class="size-4" />
		</a>
	</div>
</section>
