<script lang="ts">
	import { tick } from 'svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-svelte';
	import { reveal } from '#lib/actions/reveal';
	import CountUp from '#lib/components/CountUp.svelte';
	import { services } from '#lib/data/services';
	import { team } from '#lib/data/team';
	import { testimonials } from '#lib/data/testimonials';
	import { blogPosts } from '#lib/data/blog';
	import { faqs } from '#lib/data/faqs';
	import { imgSrcset } from '#lib/data/images';

	const tabServices = services.slice(0, 5);
	let activeTab = $state('smile-assessment');
	const activeService = $derived(services.find((s) => s.slug === activeTab) ?? services[0]);

	// Sliding tab underline: measure the active button's position.
	// Composited-only: the span has a fixed 100px base width; position is
	// translateX and width is scaleX, so only transform animates (no
	// layout-triggering left/width). Visually identical to the old animation.
	let tablistEl: HTMLDivElement | undefined = $state();
	let indicator = $state({ left: 0, scaleX: 0 });
	function updateIndicator() {
		const btn = tablistEl?.querySelector<HTMLButtonElement>(`[data-tab="${activeTab}"]`);
		if (btn) indicator = { left: btn.offsetLeft, scaleX: btn.offsetWidth / 100 };
	}
	$effect(() => {
		activeTab;
		void tick().then(updateIndicator);
	});

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

	const insurers = ['Delta Dental', 'Cigna', 'MetLife', 'Aetna', 'UnitedHealthcare', 'Humana', 'CareCredit'];

	// Testimonial slider: auto-advances ~5s, pauses on hover, never
	// auto-advances under reduced motion.
	let tIndex = $state(0);
	let tPaused = $state(false);
	const featured = $derived(testimonials[tIndex]);
	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = setInterval(() => {
			if (!tPaused) tIndex = (tIndex + 1) % testimonials.length;
		}, 5000);
		return () => clearInterval(id);
	});
</script>

<svelte:window onresize={updateIndicator} />

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>`}
</svelte:head>

<!-- ============ HERO ============ -->
<section class="relative overflow-hidden bg-mist">
	<div class="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8 lg:pt-16 lg:pb-32">
		<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
			<div class="min-w-0">
				<p
					class="hero-anim inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-white px-3.5 py-1.5 text-xs font-bold text-brand shadow-sm"
					style="--delay: 0ms"
				>
					<span class="relative flex size-2">
						<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60"></span>
						<span class="relative inline-flex size-2 rounded-full bg-brand"></span>
					</span>
					Accepting new patients · Austin, TX
				</p>
				<!-- H1 is STATIC for LCP — never hidden by reveal/entrance -->
				<h1 class="mt-4 text-[42px] leading-[1.05] font-bold sm:text-6xl lg:text-[64px]">
					<span class="text-navy">Family-Friendly</span><br />
					<span class="text-brand">Dental Care</span>
				</h1>
				<p class="hero-anim mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg" style="--delay: 100ms">
					Gentle care for every smile. Advanced technology for a healthier tomorrow.
				</p>
				<div class="hero-anim mt-7 flex flex-wrap items-center gap-3" style="--delay: 200ms">
					<a
						href="/book-appointment"
						class="btn-arrow inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-700/25 transition hover:bg-[#0B5E5D] hover:shadow-xl hover:shadow-teal-900/30"
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
				<p class="hero-anim mt-5 flex items-center gap-2 text-sm font-semibold text-navy" style="--delay: 300ms">
					<span class="flex text-gold" role="img" aria-label="Rated 4.9 out of 5">
						{#each Array(5) as _}<Icon name="star" class="size-4" />{/each}
					</span>
					4.9/5 · 280+ reviews · New patients welcome
				</p>
				<div class="hero-anim mt-6 border-t border-teal-900/10 pt-5" style="--delay: 400ms">
					<p class="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted">
						<span class="text-navy">Insurance accepted:</span>
						{#each ['Delta Dental', 'Cigna', 'MetLife', 'Aetna'] as ins}
							<a
								href="/insurance"
								class="rounded-full border border-teal-700/20 bg-white px-2.5 py-1 text-xs font-bold text-brand transition hover:bg-brand hover:text-white"
								>{ins}</a
							>
						{/each}
					</p>
					<p class="mt-3 flex items-center gap-2 text-xs font-semibold text-muted">
						<Icon name="clock" class="size-4 text-brand" /> Mon–Fri 8am–6pm · Sat 9am–2pm
					</p>
				</div>
			</div>

			<!-- Mobile / tablet hero image: rounded card -->
			<div class="min-w-0 lg:hidden">
				<div class="overflow-hidden rounded-3xl shadow-2xl shadow-teal-900/20">
					<img
						src="/images/hero.webp"
						srcset="/images/hero-480.webp 480w, /images/hero-800.webp 800w, /images/hero-1200.webp 1200w, /images/hero-1600.webp 1600w, /images/hero.webp 1920w"
						sizes="100vw"
						width="1920"
						height="1280"
						alt="Bright, modern NaviX dental clinic treatment room"
						class="aspect-[4/3] w-full object-cover"
						fetchpriority="high"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Desktop hero image: bleeds to the viewport right edge -->
	<div
		class="hero-anim-img absolute inset-y-0 right-0 hidden w-[46%] lg:block"
		style="--delay: 150ms"
		aria-hidden="false"
	>
		<img
			src="/images/hero.webp"
			srcset="/images/hero-480.webp 480w, /images/hero-800.webp 800w, /images/hero-1200.webp 1200w, /images/hero-1600.webp 1600w, /images/hero.webp 1920w"
			sizes="46vw"
			width="1920"
			height="1280"
			alt="Bright, modern NaviX dental clinic treatment room"
			class="h-full w-full object-cover"
			fetchpriority="high"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-mist via-mist/10 to-transparent" aria-hidden="true"></div>
	</div>
</section>

<!-- Trust pill bar OVERLAPPING the hero bottom edge -->
<div class="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:-mt-14 lg:px-8">
	<div
		class="hero-anim grid grid-cols-2 gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-teal-900/10 lg:grid-cols-4 lg:p-6"
		style="--delay: 450ms"
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

		<div class="mt-8 overflow-x-auto border-b border-slate-200" role="tablist" aria-label="Services" use:reveal>
			<div class="relative flex w-max min-w-full gap-1" bind:this={tablistEl}>
				{#each tabServices as s}
					<button
						type="button"
						role="tab"
						data-tab={s.slug}
						aria-selected={activeTab === s.slug}
						class="flex min-h-11 shrink-0 items-center gap-2 px-4 py-3 text-sm font-bold whitespace-nowrap transition {activeTab ===
						s.slug
							? 'text-brand'
							: 'text-muted hover:text-navy'}"
						onclick={() => (activeTab = s.slug)}
					>
						<Icon name={s.icon} class="size-5" /> {s.name}
					</button>
				{/each}
				<span
					class="absolute bottom-0 left-0 h-[3px] w-[100px] origin-left rounded-full bg-brand transition-transform duration-300 ease-out"
					style="transform: translateX({indicator.left}px) scaleX({indicator.scaleX})"
					aria-hidden="true"
				></span>
			</div>
		</div>

		{#key activeTab}
			<div class="tab-panel mx-auto mt-8 max-w-4xl rounded-3xl bg-mist p-6 sm:p-8">
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
						class="btn-arrow inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-brand bg-white px-5 py-2.5 text-sm font-bold text-brand transition hover:bg-mist"
					>
						Learn more <span class="sr-only">about {activeService.name}</span> <Icon name="arrow-right" class="size-4" />
					</a>
					<a
						href="/book-appointment?service={activeService.slug}"
						class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
					>
						<Icon name="calendar" class="size-4" /> Book this service
					</a>
				</div>
			</div>
		{/key}
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
						<span class="grid size-11 place-items-center rounded-full bg-gold text-xs font-bold text-navy ring-2 ring-white">PS</span>
					</div>
					<p class="text-sm font-semibold text-navy">
						Trusted by Thousands<br /><span class="font-normal text-muted">of Happy Patients</span>
					</p>
				</div>
				<a
					href="/about"
					class="btn-arrow mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
				>
					More about us <Icon name="arrow-right" class="size-4" />
				</a>
			</div>
			<div class="relative min-w-0" use:reveal>
				<div class="zoom-img overflow-hidden rounded-3xl shadow-xl shadow-teal-900/15">
					<img src="/images/about.webp" srcset="/images/about-480.webp 480w, /images/about-800.webp 800w, /images/about-1200.webp 1200w, /images/about.webp 1920w" sizes="(max-width: 1024px) 100vw, 580px" width="1920" height="1280" alt="The NaviX dental team welcoming a patient" class="aspect-[4/3] w-full object-cover" loading="lazy" />
				</div>
				<button
					type="button"
					aria-label="Watch our clinic tour (demo)"
					class="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-xl transition hover:scale-105"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" class="size-6 translate-x-0.5" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
				</button>
				<div class="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-navy shadow-lg">
					<span class="flex text-gold" aria-hidden="true">
						{#each Array(5) as _}<Icon name="star" class="size-4" />{/each}
					</span>
					4.9 · 280+ reviews
				</div>
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
				<p class="mt-3 text-3xl font-bold text-navy sm:text-4xl"><CountUp value={98} suffix="%" /></p>
				<p class="mt-1 text-sm font-semibold text-muted">Patient Satisfaction</p>
			</div>
			<div class="min-w-0 text-center">
				<span class="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="user" class="size-6" /></span>
				<p class="mt-3 text-3xl font-bold text-navy sm:text-4xl"><CountUp value={2} suffix="K+" /></p>
				<p class="mt-1 text-sm font-semibold text-muted">Smiles Transformed</p>
			</div>
			<div class="min-w-0 text-center">
				<span class="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="star" class="size-6 text-gold" /></span>
				<p class="mt-3 text-3xl font-bold text-navy sm:text-4xl"><CountUp value={4.9} decimals={1} suffix="/5" /></p>
				<p class="mt-1 text-sm font-semibold text-muted">Average Rating</p>
			</div>
			<div class="min-w-0 text-center">
				<span class="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand shadow-sm"><Icon name="tooth" class="size-6" /></span>
				<p class="mt-3 text-3xl font-bold text-navy sm:text-4xl"><CountUp value={15} suffix="+" /></p>
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
			<article class="lift-card grid min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-mist sm:grid-cols-[220px_1fr]" use:reveal>
				<img
					src="/images/dr-anderson.webp"
					srcset="/images/dr-anderson-320.webp 320w, /images/dr-anderson-480.webp 480w, /images/dr-anderson-800.webp 800w, /images/dr-anderson-1200.webp 1200w, /images/dr-anderson.webp 1280w"
					sizes="(max-width: 640px) 100vw, 220px"
					width="1280"
					height="1920"
					alt="Dr. Michael Anderson, Lead Dental Specialist"
					class="h-56 w-full object-cover object-top sm:h-full"
					loading="lazy"
				/>
				<div class="min-w-0 p-6 sm:p-7">
					<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">Our Expert</p>
					<h3 class="mt-2 text-2xl font-bold text-navy">{lead.name}</h3>
					<p class="text-sm font-semibold text-muted">{lead.role}</p>
					<p class="mt-3 flex items-center gap-2 text-sm font-semibold text-navy">
						<span class="flex text-gold" role="img" aria-label="Rated 4.9 out of 5">
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
						class="btn-arrow mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
					>
						Meet Dr. Anderson <Icon name="arrow-right" class="size-4" />
					</a>
				</div>
			</article>

			<!-- Clinic card -->
			<article class="lift-card relative min-w-0 overflow-hidden rounded-3xl shadow-lg shadow-teal-900/10" use:reveal>
				<img src="/images/clinic.webp" srcset="/images/clinic-480.webp 480w, /images/clinic-600.webp 600w, /images/clinic-800.webp 800w, /images/clinic-1200.webp 1200w, /images/clinic.webp 1920w" sizes="(max-width: 1024px) 100vw, 596px" width="1920" height="1280" alt="Inside the state-of-the-art NaviX clinic" class="h-full min-h-[320px] w-full object-cover" loading="lazy" />
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
				<article class="lift-card flex min-w-0 flex-col rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-lg" use:reveal>
					<span class="grid size-12 place-items-center rounded-2xl bg-mist text-brand"><Icon name={s.icon} class="size-6" /></span>
					<h3 class="mt-4 text-xl font-bold text-navy">{s.name}</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
					<div class="mt-4 flex items-center justify-between gap-3">
						<span class="text-sm font-bold text-brand">{s.priceLabel}</span>
						<a href="/services/{s.slug}" class="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-navy hover:text-brand">
							Learn more <span class="sr-only">about {s.name}</span> <Icon name="arrow-right" class="size-4" />
						</a>
					</div>
				</article>
			{/each}
		</div>

		<!-- Emergency strip -->
		<div
			class="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl bg-navy p-6 text-white sm:flex-row sm:items-center sm:p-7"
			use:reveal
		>
			<div class="min-w-0">
				<p class="flex flex-wrap items-center gap-2 text-base font-bold sm:text-lg">
					Dental emergency?
					<span class="rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold text-white">Same-day appointments</span>
				</p>
				<p class="mt-1 text-sm text-slate-300">
					Severe pain, a broken tooth or a knocked-out tooth — call
					<a class="font-semibold text-teal-300 underline hover:text-white" href="tel:+15125550148">+1 (512) 555-0148</a>
					and we will do our best to see you today.
					<a class="font-semibold text-teal-300 underline hover:text-white" href="/emergency">What counts as an emergency?</a>
				</p>
			</div>
			<a
				href="tel:+15125550148"
				class="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
			>
				<Icon name="phone" class="size-4" /> Call now
			</a>
		</div>
	</div>
</section>

<!-- ============ INSURANCE MARQUEE ============ -->
<section class="border-y border-slate-200 bg-white py-8" aria-label="Insurance plans we accept">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<p class="text-center text-xs font-bold tracking-[0.24em] text-brand uppercase" use:reveal>
			We accept most major insurance plans
		</p>
	</div>
	<div class="marquee mt-5" use:reveal>
		<div class="marquee-track gap-3 pr-3">
			{#each [...insurers, ...insurers] as ins, i}
				<a
					href="/insurance"
					aria-hidden={i >= insurers.length ? 'true' : undefined}
					tabindex={i >= insurers.length ? -1 : undefined}
					class="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-mist px-5 py-2.5 text-sm font-bold whitespace-nowrap text-navy transition hover:border-brand hover:text-brand"
				>
					<ShieldCheck class="size-4 text-brand" /> {ins}
				</a>
			{/each}
		</div>
	</div>
	<p class="mt-4 text-center text-sm text-muted">
		Not sure your plan is covered? <a class="font-bold text-brand underline hover:text-brand-dark" href="/insurance">Check your coverage</a>
	</p>
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
				<article class="lift-card min-w-0 rounded-3xl border border-slate-200 p-6" use:reveal>
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
				<article class="lift-card min-w-0 rounded-3xl bg-white p-6 text-center shadow-sm" use:reveal>
					<span class="mx-auto grid size-12 place-items-center rounded-full bg-brand text-lg font-bold text-white">{s.n}</span>
					<h3 class="mt-4 text-lg font-bold text-navy">{s.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ============ TESTIMONIALS (SLIDER) ============ -->
<section class="bg-white">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
		<div class="text-center" use:reveal>
			<p class="text-xs font-bold tracking-[0.24em] text-brand uppercase">Patient Stories</p>
			<h2 class="mt-3 text-3xl font-bold text-navy sm:text-4xl">Smiles that say it best</h2>
			<p class="mx-auto mt-3 max-w-xl text-base text-muted">
				<span class="flex items-center justify-center gap-2 font-semibold text-navy">
					<span class="flex text-gold" role="img" aria-label="Rated 4.9 out of 5">
						{#each Array(5) as _}<Icon name="star" class="size-4" />{/each}
					</span>
					4.9/5 · 280+ verified reviews
				</span>
				<a class="mt-1 inline-block font-bold text-brand underline hover:text-brand-dark" href="/reviews">Read all patient reviews</a>
			</p>
		</div>

		<div
			class="relative mx-auto mt-10 max-w-3xl"
			role="region"
			aria-label="Patient testimonials"
			use:reveal
			onmouseenter={() => (tPaused = true)}
			onmouseleave={() => (tPaused = false)}
		>
			{#key tIndex}
				<figure class="slide-fade rounded-3xl border border-slate-200 bg-mist p-8 text-center sm:p-10">
					<span class="flex justify-center text-gold" role="img" aria-label="Rated {featured.rating} out of 5">
						{#each Array(featured.rating) as _}<Icon name="star" class="size-5" />{/each}
					</span>
					<blockquote class="mt-4 text-lg leading-relaxed font-medium text-navy sm:text-xl">
						&ldquo;{featured.text}&rdquo;
					</blockquote>
					<figcaption class="mt-6 flex items-center justify-center gap-3">
						<span class="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white">{featured.initials}</span>
						<span class="text-left">
							<span class="block text-sm font-bold text-navy">{featured.name}</span>
							<span class="block text-xs text-muted">{featured.service}</span>
						</span>
					</figcaption>
				</figure>
			{/key}

			<button
				type="button"
				aria-label="Previous testimonial"
				class="absolute top-1/2 -left-2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-navy shadow-md transition hover:bg-mist sm:-left-6"
				onclick={() => (tIndex = (tIndex - 1 + testimonials.length) % testimonials.length)}
			>
				<ChevronLeft class="size-5" />
			</button>
			<button
				type="button"
				aria-label="Next testimonial"
				class="absolute top-1/2 -right-2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-navy shadow-md transition hover:bg-mist sm:-right-6"
				onclick={() => (tIndex = (tIndex + 1) % testimonials.length)}
			>
				<ChevronRight class="size-5" />
			</button>

			<div class="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Choose testimonial">
				{#each testimonials as _, i}
					<button
						type="button"
						role="tab"
						aria-selected={tIndex === i}
						aria-label="Show testimonial {i + 1}"
						class="group grid min-h-6 min-w-6 place-items-center"
						onclick={() => (tIndex = i)}
					>
						<span
							class="h-2.5 w-8 origin-center rounded-full transition-transform duration-300 {tIndex === i
								? 'scale-x-100 bg-brand'
								: 'scale-x-[0.3125] bg-slate-300 group-hover:bg-brand/50'}"
						></span>
					</button>
				{/each}
			</div>
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
				class="btn-arrow inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
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
			<a href="/blog" class="btn-arrow inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark">
				View all articles <Icon name="arrow-right" class="size-4" />
			</a>
		</div>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each blogPosts as p}
				<article class="lift-card zoom-img min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg" use:reveal>
					<img src={p.image} srcset={imgSrcset(p.image)} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" width={p.image.includes('dr-anderson') ? 1280 : 1920} height={p.image.includes('dr-anderson') ? 1920 : 1280} alt={p.title} class="aspect-[16/9] w-full object-cover" loading="lazy" />
					<div class="p-6">
						<p class="text-xs font-bold tracking-wide text-brand uppercase">{p.category} · {p.date}</p>
						<h3 class="mt-2 text-lg leading-snug font-bold text-navy">{p.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
						<a href="/blog/{p.slug}" class="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark">
							Read article <span class="sr-only">about {p.title}</span> <Icon name="arrow-right" class="size-4" />
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
			<p class="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-white">
				<span class="flex text-gold" role="img" aria-label="Rated 4.9 out of 5">
					{#each Array(5) as _}<Icon name="star" class="size-4" />{/each}
				</span>
				4.9/5 from 280+ patients ·
				<a class="underline hover:text-teal-100" href="/reviews">Read patient reviews</a>
			</p>
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
