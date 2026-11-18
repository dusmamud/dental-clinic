<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';

	const plans = [
		{
			name: 'Delta Dental',
			cover: 'Most Delta Dental PPO plans are accepted. Routine check-ups and cleanings are often covered in full; fillings, crowns and other work usually attract a co-payment that depends on your plan.'
		},
		{
			name: 'Cigna',
			cover: 'Cigna Dental PPO and DHMO plans accepted. Preventive care is typically covered, with set co-payments for basic and major work — we will confirm your exact benefits before treatment.'
		},
		{
			name: 'MetLife',
			cover: 'MetLife dental plans accepted. Most plans cover preventive visits, with partial cover for restorative work such as fillings and crowns, subject to your annual maximum.'
		},
		{
			name: 'Aetna',
			cover: 'Aetna Dental PPO plans accepted. Check-ups and cleanings are usually covered; other treatments are covered at the percentage set by your plan, up to your annual limit.'
		},
		{
			name: 'UnitedHealthcare',
			cover: 'UnitedHealthcare dental plans accepted. Preventive care is typically covered in full in-network, with co-insurance applying to fillings, crowns, root canals and other procedures.'
		},
		{
			name: 'Humana',
			cover: 'Humana dental plans accepted, including PPO and HMO options. Routine preventive care is commonly covered, with benefits for basic and major services depending on your plan tier.'
		}
	];

	const financing = [
		{
			icon: 'shield',
			title: 'CareCredit',
			text: 'CareCredit is a healthcare credit card that lets you spread the cost of treatment over monthly payments. Short-term plans may be interest-free if paid in full within the promotional period; longer plans carry interest. Terms are set by CareCredit — ask us and we will help you apply.'
		},
		{
			icon: 'calendar',
			title: 'In-house payment plans',
			text: 'For larger treatments such as implants or aligners, we can split the cost into monthly instalments agreed before treatment starts. There are no hidden fees, and the plan is written down in your treatment estimate.'
		},
		{
			icon: 'check',
			title: 'Pay as you go',
			text: 'You can also pay per visit by card or bank transfer. Every treatment starts with a written estimate, so you always know the cost before we begin.'
		}
	];
</script>

<svelte:head>
	<title>Dental Insurance &amp; Financing | NaviX Technologies</title>
</svelte:head>

<PageHero
	eyebrow="INSURANCE & FINANCING"
	title="Insurance, made simple"
	subtitle="We work with most major dental insurance plans — and if you do not have cover, we have clear self-pay pricing and payment plans. Call us and we will verify your benefits for you."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<!-- Accepted plans -->
	<h2 class="text-2xl font-bold text-navy sm:text-3xl" use:reveal>Accepted insurance plans</h2>
	<p class="mt-3 max-w-3xl text-sm leading-relaxed text-[#5B6B74] sm:text-base" use:reveal>
		The cover described below is general information about how these plans usually work — your
		exact benefits depend on your individual plan, your annual maximum and any waiting periods.
		Bring your insurance card to your visit, or call us and we will check your benefits before
		treatment begins.
	</p>
	<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each plans as plan}
			<article
				class="flex min-w-0 flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
				use:reveal
			>
				<span class="grid size-12 place-items-center rounded-2xl bg-mist text-brand">
					<Icon name="shield" class="size-6" />
				</span>
				<h3 class="mt-4 text-lg font-bold text-navy">{plan.name}</h3>
				<p class="mt-2 flex-1 text-sm leading-relaxed text-[#5B6B74]">{plan.cover}</p>
			</article>
		{/each}
	</div>
	<p class="mt-6 text-sm text-[#5B6B74]" use:reveal>
		Your plan is not listed? We work with most major dental insurance plans — call
		<a class="font-semibold text-brand hover:underline" href="tel:+15125550148">+1 (512) 555-0148</a>
		and we will check whether we can accept yours.
	</p>

	<!-- Verify CTA -->
	<div
		class="mt-12 flex min-w-0 flex-col items-start gap-4 rounded-3xl bg-navy px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8"
		use:reveal
	>
		<div class="min-w-0">
			<p class="text-lg font-bold">Not sure what your plan covers?</p>
			<p class="mt-1 text-sm leading-relaxed text-white/85">
				Call us with your plan details and we will verify your benefits before your visit — free.
			</p>
		</div>
		<a
			href="tel:+15125550148"
			class="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition hover:bg-mist"
		>
			<Icon name="phone" class="size-4" /> Verify my benefits
		</a>
	</div>

	<!-- Financing -->
	<h2 class="mt-16 text-2xl font-bold text-navy sm:text-3xl" use:reveal>Financing options</h2>
	<div class="mt-8 grid gap-5 md:grid-cols-3">
		{#each financing as item}
			<div class="min-w-0 rounded-3xl bg-mist p-6" use:reveal>
				<span class="grid size-12 place-items-center rounded-2xl bg-brand text-white">
					<Icon name={item.icon} class="size-6" />
				</span>
				<h3 class="mt-4 text-lg font-bold text-navy">{item.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">{item.text}</p>
			</div>
		{/each}
	</div>

	<!-- Uninsured + GFE -->
	<div class="mt-12 grid gap-5 lg:grid-cols-2">
		<div class="min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8" use:reveal>
			<h2 class="text-xl font-bold text-navy sm:text-2xl">No insurance? No problem.</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Many of our patients have no dental insurance. You are welcome here either way. You pay
				our clear self-pay prices — see our
				<a class="font-semibold text-brand hover:underline" href="/pricing">pricing page</a>
				for the starting price of every treatment — and we will always give you a written
				estimate before any work begins. Ask us about in-house payment plans for larger
				treatments.
			</p>
		</div>
		<div class="min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8" use:reveal>
			<h2 class="text-xl font-bold text-navy sm:text-2xl">Good-faith estimate</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Under US law (the No Surprises Act), uninsured and self-pay patients are entitled to a
				good-faith estimate of the expected cost of their care before treatment. We give every
				patient a written estimate as standard — if the final bill is at least $400 more than
				the estimate, you may have the right to dispute it. This is a demo page, not legal
				advice; ask us if you have questions.
			</p>
		</div>
	</div>

	<!-- CTA -->
	<div class="mt-12 rounded-3xl bg-mist px-6 py-10 text-center sm:px-12" use:reveal>
		<h2 class="text-2xl font-bold text-navy sm:text-3xl">Questions about cost or cover?</h2>
		<p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#5B6B74] sm:text-base">
			Call the clinic and we will talk through your plan, your options and the exact cost — before
			you commit to anything.
		</p>
		<a
			href="/book-appointment"
			class="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90"
		>
			Book an appointment <Icon name="arrow-right" class="size-4" />
		</a>
	</div>
</section>
