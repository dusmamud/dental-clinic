<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { faqs } from '#lib/data/faqs';

	let openIndex = $state<number | null>(0);

	const faqJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};
</script>

<svelte:head>
	<title>Frequently Asked Questions | NaviX Technologies</title>
	{@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>`}
</svelte:head>

<PageHero
	eyebrow="FAQ"
	title="Questions, answered"
	subtitle="Everything patients usually ask before their first visit. Can't find your answer? Call us at +1 (512) 555-0148."
/>

<section class="bg-mist py-12 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="space-y-3" use:reveal>
			{#each faqs as faq, i (faq.q)}
				<div class="overflow-hidden rounded-2xl bg-white shadow-sm">
					<button
						type="button"
						onclick={() => (openIndex = openIndex === i ? null : i)}
						aria-expanded={openIndex === i}
						aria-controls={`faq-panel-${i}`}
						class="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left"
					>
						<span class="text-sm font-bold text-navy sm:text-base">{faq.q}</span>
						<svg
							class="size-5 shrink-0 text-brand transition-transform duration-500 {openIndex === i
								? 'rotate-180'
								: ''}"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="m6 9 6 6 6-6" />
						</svg>
					</button>
					<div
						id={`faq-panel-${i}`}
						class="grid transition-all duration-500 ease-in-out {openIndex === i
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0'}"
					>
						<div class="min-h-0 overflow-hidden">
							<p class="px-5 pb-5 text-sm leading-relaxed text-[#5B6B74] sm:text-base">{faq.a}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="mt-10 rounded-3xl bg-navy p-8 text-center text-white shadow-sm sm:p-10" use:reveal>
			<h2 class="text-2xl font-bold sm:text-3xl">Still have a question?</h2>
			<p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
				Book a visit and ask us in person — or call the clinic and we'll be happy to help.
			</p>
			<div class="mt-6 flex flex-wrap items-center justify-center gap-3">
				<a
					href="/book-appointment"
					class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B5E5D]"
				>
					Book an appointment <Icon name="arrow-right" class="size-4" />
				</a>
				<a
					href="tel:+15125550148"
					class="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-white"
				>
					<Icon name="phone" class="size-4" /> +1 (512) 555-0148
				</a>
			</div>
		</div>
	</div>
</section>
