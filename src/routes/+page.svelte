<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { services } from '#lib/data/services';
	import { team } from '#lib/data/team';
	import { testimonials } from '#lib/data/testimonials';
	import { blogPosts } from '#lib/data/blog';
	import { faqs } from '#lib/data/faqs';

	const tabServices = services.slice(0, 5);
	let activeTab = $state('smile-assessment');
	const activeService = $derived(services.find((s) => s.slug === activeTab) ?? services[0]);

	const lead = team[0];
	const previewFaqs = faqs.slice(0, 4);
	let openFaq = $state<number | null>(0);

	const faqJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: previewFaqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};

	const trustItems = [
		{ icon: 'smile', title: 'Painless Treatment', text: 'Gentle, unhurried care' },
		{ icon: 'sparkle', title: 'Modern Technology', text: 'Digital X-rays & 3D scans' },
		{ icon: 'user', title: 'Experienced Dentists', text: '15+ years of care' },
		{ icon: 'shield', title: 'Affordable Care', text: 'Transparent pricing' }
	];

	const whyItems = [
		{
			icon: 'smile',
			title: 'Painless-first care',
			text: 'Effective numbing, gentle technique and breaks whenever you need one — so treatment feels easy, not stressful.'
		},
		{
			icon: 'sparkle',
			title: 'Digital X-rays & 3D scanning',
			text: 'Low-dose digital imaging and 3D scans mean faster, more accurate diagnosis and treatment planned to the millimetre.'
		},
		{
			icon: 'check',
			title: 'Transparent pricing',
			text: 'You always know the cost before treatment begins. No hidden fees, no surprises — just honest, upfront prices.'
		},
		{
			icon: 'heart',
			title: 'Family-friendly for all ages',
			text: 'From first check-ups for kids to implants for grandparents, the whole family is welcome under one roof.'
		}
	];

	const steps = [
		{ n: '1', title: 'Book online or call', text: 'Pick a time that suits you online, or call +1 (512) 555-0148 — same-day appointments available.' },
		{ n: '2', title: 'Visit & smile assessment', text: 'A relaxed first visit: we examine your teeth and gums, take X-rays only if needed, and listen.' },
		{ n: '3', title: 'Personalized treatment plan', text: 'A clear plan with options and honest pricing, tailored to your smile, health and budget.' }
	];
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>`}
</svelte:head>

<!-- ============ HERO ============ -->
<section class="relative overflow-hidden bg-mist">
	<div class="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-16 lg:pb-24">
		<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
			<div class="min-w-0" use:reveal>
				<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">NaviX Technologies · Austin, TX</p>
				<h1 class="mt-4 text-[42px] leading-[1.05] font-bold sm:text-6xl lg:text-[64px]">
					<span class="text-navy">Family-Friendly</span><br />
					<span class="text-brand">Dental Care</span>
				</h1>
				<p class="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
					Gentle care for every smile. Advanced technology for a healthier tomorrow.
				</p>
				<div class="mt-7 flex flex-wrap items-center gap-3">
					<a
						href="/book-appointment"
						class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-700/25 transition hover:bg-brand-dark"
					>
						Book an Appointment <Icon name="arrow-right" class="size-4" />
					</a>
					<a
						href="/services"
						class="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3 text-sm font-bold text-brand transition hover:bg-mist"
					>
						Explore services
					</a>
				</div>
				<p class="mt-5 flex items-center gap-2 text-sm font-semibold text-navy">
					<span class="flex text-gold" aria-label="Rated 4.9 out of 5">
						{#each Array(5) as _}<Icon name="star" class="size-4" />{/each}
					</span>
					4.9/5 · 280+ reviews · New patients welcome
				</p>
			</div>

			<div class="min-w-0" use:reveal>
				<div class="overflow-hidden rounded-3xl shadow-2xl shadow-teal-900/20">
					<img
						src="/images/hero.webp"
						alt="Bright, modern NaviX dental clinic treatment room"
						class="aspect-[4/3] w-full object-cover"
						fetchpriority="high"
					/>
				</div>
			</div>
		</div>

		<!-- Trust pill bar overlapping hero bottom -->
		<div
			class="relative z-10 mt-10 grid grid-cols-2 gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-teal-900/10 lg:-mt-2 lg:grid-cols-4 lg:p-6"
			use:reveal
		>
			{#each trustItems as t}
				<div class="flex min-w-0 items-center gap-3">
					<span class="grid size-11 shrink-0 place-items-center rounded-full bg-mist text-brand">
						<Icon name={t.icon} class="size-5" />
					</span>
					<span class="min-w-0">
						<span class="block text-sm font-bold text-navy">{t.title}</span>
						<span class="block text-xs text-muted">{t.text}</span>
					</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============ SERVICE TABS ============ -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
		<div class="text-center" use:reveal>
			<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">What we do</p>
			<h2 class="mt-3 text-3xl font-bold text-navy sm:text-4xl">Care for every smile</h2>
			<p class="mx-auto mt-3 max-w-xl text-base text-muted">
				From your first assessment to implants and whitening — choose a service to see what it includes.
			</p>
		</div>

		<div
			class="mt-8 flex gap-1 overflow-x-auto border-b border-slate-200 pb-px"
			role="tablist"
			aria-label="Services"
			use:reveal
		>
			{#each tabServices as s}
				<button
					type="button"
					role="tab"
					aria-selected={activeTab === s.slug}
					class="flex min-h-11 shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-bold whitespace-nowrap transition {activeTab ===
					s.slug
						? 'border-brand text-brand'
						: 'border-transparent text-muted hover:text-navy'}"
					onclick={() => (activeTab = s.slug)}
				>
					<Icon name={s.icon} class="size-5" /> {s.name}
				</button>
			{/each}
		</div>

		<div class="mx-auto mt-8 max-w-4xl rounded-3xl bg-mist p-6 sm:p-8" use:reveal>
			<div class="flex flex-wrap items-start justify-between gap-4">
				<div class="min-w-0">
					<h3 class="text-2xl font-bold text-navy">{activeService.name}</h3>
					<p class="mt-3 max-w-2xl text-base leading-relaxed text-muted">{activeService.description}</p>
				</div>
				<span class="shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white">{activeService.priceLabel}</span>
			</div>
			<div class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-navy">
				<span class="flex items-center gap-2"><Icon name="clock" class="size-4 text-brand" /> {activeService.duration}</span>
				<span class="flex items-center gap-2"><Icon name="calendar" class="size-4 text-brand" /> {activeService.visits}</span>
			</div>
			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href="/services/{activeService.slug}"
					class="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-brand bg-white px-5 py-2.5 text-sm font-bold text-brand transition hover:bg-mist"
				>
					Learn more <Icon name="arrow-right" class="size-4" />
				</a>
				<a
					href="/book-appointment?service={activeService.slug}"
					class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
				>
					<Icon name="calendar" class="size-4" /> Book this service
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ============ ABOUT ============ -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
		<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
			<div class="min-w-0" use:reveal>
				<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">About Us</p>
				<h2 class="mt-3 text-3xl leading-tight font-bold text-navy sm:text-4xl">
					We deliver personalized dental care with <span class="text-brand">compassion</span> and advanced technology.
				</h2>
				<p class="mt-4 max-w-lg text-base leading-relaxed text-muted">
					Our mission is to provide exceptional dental care in a comfortable environment using the latest
					technology and a personalized approach.
				</p>
				<div class="mt-6 flex items-center gap-3">
					<div class="flex -space-x-2">
						<span class="grid size-11 place-items-center rounded-full bg-brand text-xs font-bold text-white ring-2 ring-white">RM</span>
						<span class="grid size-11 place-items-center rounded-full bg-navy text-xs font-bold text-white ring-2 ring-white">DK</span>
						<span class="grid size-11 place-items-center rounded-full bg-gold text-xs font-bold text-white ring-2 ring-white">PS</span>
					</div>
					<p class="text-sm font-semibold text-navy">
						Trusted by Thousands<br /><span class="font-normal text-muted">of Happy Patients</span>
					</p>
				</div>
				<a
					href="/about"
					class="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
				>
					More about us <Icon name="arrow-right" class="size-4" />
				</a>
			</div>
			<div class="relative min-w-0" use:reveal>
				<div class="overflow-hidden rounded-3xl shadow-xl shadow-teal-900/15">
					<img src="/images/about.webp" alt="The NaviX dental team welcoming a patient" class="aspect-[4/3] w-full object-cover" loading="lazy" />
				</div>
				<button
					type="button"
					aria-label="Watch our clinic tour (demo)"
					class="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-xl transition hover:scale-105"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" class="size-6 translate-x-0.5" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
				</button>
			</div>
		</div>
	</div>
</section>

<!-- ============ STATS ============ -->
<section class="border-y border-slate-200 bg-mist">
	<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" use:reveal>
		<div class="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
			<div class="min-w-0 text-center">
				<span class="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="smile" class="size-6" /></span>
				<p class="mt-3 text-3xl font-bold text-navy sm:text-4xl">98%</p>
				<p class="mt-1 text-sm font-semibold text-muted">Patient Satisfaction</p>
			</div>
			<div class="min-w-0 text-center">
				<span class="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="user" class="size-6" /></span>
				<p class="mt-3 text-3xl font-bold text-navy sm:text-4xl">2K+</p>
				<p class="mt-1 text-sm font-semibold text-muted">Smiles Transformed</p>
			</div>
			<div class="min-w-0 text-center">
				<span class="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="star" class="size-6 text-gold" /></span>
				<p class="mt-3 text-3xl font-bold text-navy sm:text-4xl">4.9/5</p>
				<p class="mt-1 text-sm font-semibold text-muted">Average Rating</p>
			</div>
			<div class="min-w-0 text-center">
				<span class="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="tooth" class="size-6" /></span>
				<p class="mt-3 text-3xl font-bold text-navy sm:text-4xl">15+</p>
				<p class="mt-1 text-sm font-semibold text-muted">Years of Excellence</p>
			</div>
		</div>
	</div>
</section>

<!-- ============ EXPERT + CLINIC ============ -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
		<div class="grid gap-6 lg:grid-cols-2">
			<!-- Expert card -->
			<article class="grid min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-mist sm:grid-cols-[220px_1fr]" use:reveal>
				<img
					src="/images/dr-anderson.webp"
					alt="Dr. Michael Anderson, Lead Dental Specialist"
					class="h-56 w-full object-cover object-top sm:h-full"
					loading="lazy"
				/>
				<div class="min-w-0 p-6 sm:p-7">
					<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">Our Expert</p>
					<h3 class="mt-2 text-2xl font-bold text-navy">{lead.name}</h3>
					<p class="text-sm font-semibold text-muted">{lead.role}</p>
					<p class="mt-3 flex items-center gap-2 text-sm font-semibold text-navy">
						<span class="flex text-gold" aria-label="Rated 4.9 out of 5">
							{#each Array(5) as _}<Icon name="star" class="size-4" />{/each}
						</span>
						4.9 (280+ reviews)
					</p>
					<ul class="mt-4 space-y-2 text-sm text-navy">
						<li class="flex items-start gap-2"><Icon name="check" class="mt-0.5 size-4 shrink-0 text-brand" /> 15+ Years of Experience</li>
						<li class="flex items-start gap-2"><Icon name="check" class="mt-0.5 size-4 shrink-0 text-brand" /> Specialist in Cosmetic &amp; Restorative Dentistry</li>
						<li class="flex items-start gap-2"><Icon name="check" class="mt-0.5 size-4 shrink-0 text-brand" /> Advanced Implant Expert</li>
					</ul>
					<a
						href="/team/dr-michael-anderson"
						class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
					>
						Meet Dr. Anderson <Icon name="arrow-right" class="size-4" />
					</a>
				</div>
			</article>

			<!-- Clinic card -->
			<article class="relative min-w-0 overflow-hidden rounded-3xl shadow-lg shadow-teal-900/10" use:reveal>
				<img src="/images/clinic.webp" alt="Inside the state-of-the-art NaviX clinic" class="h-full min-h-[320px] w-full object-cover" loading="lazy" />
				<div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/75 to-navy/10 p-6 pt-28">
					<h3 class="text-2xl font-bold text-white">State-of-the-Art Clinic</h3>
					<p class="mt-1 text-sm text-slate-200">Modern treatment rooms, digital imaging and a calm, comfortable space.</p>
					<div class="mt-4 rounded-2xl bg-white p-4 shadow-lg">
						<p class="text-sm font-bold text-navy">Today&rsquo;s Appointments</p>
						<div class="mt-2 flex gap-6 text-sm">
							<span><strong class="text-brand">12</strong> <span class="text-muted">Completed</span></span>
							<span><strong class="text-brand">28</strong> <span class="text-muted">Remaining</span></span>
						</div>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

<!-- ============ SERVICES GRID ============ -->
<section class="bg-mist">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
		<div class="text-center" use:reveal>
			<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">Our Services</p>
			<h2 class="mt-3 text-3xl font-bold text-navy sm:text-4xl">Complete care, under one roof</h2>
			<p class="mx-auto mt-3 max-w-xl text-base text-muted">
				From six-month check-ups to implants — honest pricing, gentle care, and a plan that fits you.
			</p>
		</div>

		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as s}
				<article class="flex min-w-0 flex-col rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-lg" use:reveal>
					<span class="grid size-12 place-items-center rounded-2xl bg-mist text-brand"><Icon name={s.icon} class="size-6" /></span>
					<h3 class="mt-4 text-xl font-bold text-navy">{s.name}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
					<div class="mt-4 flex items-center justify-between gap-3">
						<span class="text-sm font-bold text-brand">{s.priceLabel}</span>
						<a href="/services/{s.slug}" class="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-navy hover:text-brand">
							Learn more <Icon name="arrow-right" class="size-4" />
						</a>
					</div>
				</article>
			{/each}
		</div>

		<div
			class="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl bg-navy p-6 text-white sm:flex-row sm:items-center sm:p-7"
			use:reveal
		>
			<p class="min-w-0 text-base font-semibold sm:text-lg">
				Dental emergency? Call <a class="text-teal-300 underline hover:text-white" href="tel:+15125550148">+1 (512) 555-0148</a> — same-day appointments available.
			</p>
			<a
				href="tel:+15125550148"
				class="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
			>
				<Icon name="phone" class="size-4" /> Call now
			</a>
		</div>
	</div>
</section>

<!-- ============ WHY CHOOSE US ============ -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
		<div class="text-center" use:reveal>
			<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">Why Choose Us</p>
			<h2 class="mt-3 text-3xl font-bold text-navy sm:text-4xl">Dental care that puts you first</h2>
		</div>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each whyItems as w}
				<article class="min-w-0 rounded-3xl border border-slate-200 p-6" use:reveal>
					<span class="grid size-12 place-items-center rounded-2xl bg-mist text-brand"><Icon name={w.icon} class="size-6" /></span>
					<h3 class="mt-4 text-lg font-bold text-navy">{w.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-muted">{w.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ============ HOW IT WORKS ============ -->
<section class="bg-mist">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
		<div class="text-center" use:reveal>
			<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">How It Works</p>
			<h2 class="mt-3 text-3xl font-bold text-navy sm:text-4xl">Your visit, in three easy steps</h2>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each steps as s}
				<article class="min-w-0 rounded-3xl bg-white p-6 text-center shadow-sm" use:reveal>
					<span class="mx-auto grid size-12 place-items-center rounded-full bg-brand text-lg font-bold text-white">{s.n}</span>
					<h3 class="mt-4 text-lg font-bold text-navy">{s.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
		<div class="text-center" use:reveal>
			<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">Patient Stories</p>
			<h2 class="mt-3 text-3xl font-bold text-navy sm:text-4xl">Smiles that say it best</h2>
		</div>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each testimonials as t}
				<figure class="flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-mist p-6" use:reveal>
					<span class="flex text-gold" aria-label="Rated {t.rating} out of 5">
						{#each Array(t.rating) as _}<Icon name="star" class="size-4" />{/each}
					</span>
					<blockquote class="mt-3 flex-1 text-sm leading-relaxed text-navy">&ldquo;{t.text}&rdquo;</blockquote>
					<figcaption class="mt-4 flex items-center gap-3">
						<span class="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">{t.initials}</span>
						<span class="min-w-0">
							<span class="block text-sm font-bold text-navy">{t.name}</span>
							<span class="block text-xs text-muted">{t.service}</span>
						</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<!-- ============ FAQ PREVIEW ============ -->
<section class="bg-mist">
	<div class="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
		<div class="text-center" use:reveal>
			<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">FAQ</p>
			<h2 class="mt-3 text-3xl font-bold text-navy sm:text-4xl">Questions, answered</h2>
		</div>
		<div class="mt-8 space-y-3" use:reveal>
			{#each previewFaqs as f, i}
				<div class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
					<button
						type="button"
						class="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-navy"
						aria-expanded={openFaq === i}
						onclick={() => (openFaq = openFaq === i ? null : i)}
					>
						<span class="min-w-0">{f.q}</span>
						<Icon
							name="chevron-down"
							class="size-5 shrink-0 text-brand transition-transform duration-500 {openFaq === i ? 'rotate-180' : ''}"
						/>
					</button>
					<div
						class="grid transition-all duration-500 ease-in-out {openFaq === i
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0'}"
					>
						<div class="overflow-hidden">
							<p class="px-5 pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-6 text-center">
			<a
				href="/faq"
				class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
			>
				See all FAQs <Icon name="arrow-right" class="size-4" />
			</a>
		</div>
	</div>
</section>

<!-- ============ BLOG TEASER ============ -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
		<div class="flex flex-wrap items-end justify-between gap-4" use:reveal>
			<div class="min-w-0">
				<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">From the Blog</p>
				<h2 class="mt-3 text-3xl font-bold text-navy sm:text-4xl">Smile care, explained simply</h2>
			</div>
			<a href="/blog" class="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark">
				View all articles <Icon name="arrow-right" class="size-4" />
			</a>
		</div>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each blogPosts as p}
				<article class="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg" use:reveal>
					<img src={p.image} alt={p.title} class="aspect-[16/9] w-full object-cover" loading="lazy" />
					<div class="p-6">
						<p class="text-xs font-bold tracking-wide text-brand uppercase">{p.category} · {p.date}</p>
						<h3 class="mt-2 text-lg leading-snug font-bold text-navy">{p.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
						<a href="/blog/{p.slug}" class="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark">
							Read article <Icon name="arrow-right" class="size-4" />
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ============ CTA BANNER ============ -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
		<div
			class="rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-6 py-12 text-center text-white shadow-xl shadow-teal-900/20 sm:px-12"
			use:reveal
		>
			<h2 class="text-3xl font-bold sm:text-4xl">Ready for a healthier smile?</h2>
			<p class="mx-auto mt-3 max-w-xl text-base text-teal-100">Book your visit today — new patients welcome.</p>
			<div class="mt-7 flex flex-wrap items-center justify-center gap-3">
				<a
					href="/book-appointment"
					class="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand transition hover:bg-mist"
				>
					<Icon name="calendar" class="size-4" /> Book an Appointment
				</a>
				<a
					href="tel:+15125550148"
					class="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
				>
					<Icon name="phone" class="size-4" /> +1 (512) 555-0148
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ============ CONTACT STRIP ============ -->
<section class="border-t border-slate-200 bg-mist">
	<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
		<div class="grid gap-6 sm:grid-cols-3" use:reveal>
			<div class="flex min-w-0 items-start gap-3">
				<span class="grid size-11 shrink-0 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="pin" class="size-5" /></span>
				<span class="min-w-0">
					<span class="block text-sm font-bold text-navy">Visit us</span>
					<span class="block text-sm text-muted">123 Smile Avenue, Austin, TX 78701</span>
				</span>
			</div>
			<div class="flex min-w-0 items-start gap-3">
				<span class="grid size-11 shrink-0 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="phone" class="size-5" /></span>
				<span class="min-w-0">
					<span class="block text-sm font-bold text-navy">Call us</span>
					<a class="block text-sm text-muted hover:text-brand" href="tel:+15125550148">+1 (512) 555-0148</a>
				</span>
			</div>
			<div class="flex min-w-0 items-start gap-3">
				<span class="grid size-11 shrink-0 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="clock" class="size-5" /></span>
				<span class="min-w-0">
					<span class="block text-sm font-bold text-navy">Opening hours</span>
					<span class="block text-sm text-muted">Mon–Fri 8am–6pm · Sat 9am–2pm</span>
				</span>
			</div>
		</div>
	</div>
</section>
