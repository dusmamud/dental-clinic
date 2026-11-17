<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';

	const situations = [
		{
			icon: 'tooth',
			title: 'Cracked or broken tooth',
			steps: [
				'Rinse your mouth gently with warm water.',
				'If there is swelling, hold a cold compress on the outside of your cheek.',
				'Keep any broken piece — bring it with you if you can.',
				'Do not chew on that side, and avoid very hot or cold food and drink.'
			]
		},
		{
			icon: 'heart',
			title: 'Severe tooth pain',
			steps: [
				'Rinse with warm salt water and floss gently — food caught between teeth is a common cause.',
				'Take pain relief as directed on the packet, if it is safe for you.',
				'Do not put aspirin directly on the tooth or gum — it can burn the tissue.',
				'Call us straight away; severe pain usually needs same-day care.'
			]
		},
		{
			icon: 'smile',
			title: 'Knocked-out tooth',
			steps: [
				'Hold the tooth by the crown (the top), never by the root.',
				'If it is dirty, rinse it briefly with water — do not scrub it.',
				'Try to put it back in its socket, or keep it moist in milk or inside your cheek.',
				'Come in immediately — a tooth has the best chance of being saved within an hour.'
			]
		},
		{
			icon: 'shield',
			title: 'Lost filling or crown',
			steps: [
				'Keep the crown or filling if you still have it.',
				'If the tooth is sensitive, cover it with a small piece of sugar-free chewing gum or dental wax.',
				'Do not try to glue it back yourself.',
				'Book the next available appointment — a lost crown leaves the tooth unprotected.'
			]
		},
		{
			icon: 'phone',
			title: 'Bleeding from the mouth',
			steps: [
				'Press a clean piece of gauze or cloth firmly on the area for 10–15 minutes.',
				'Do not keep checking — leave the pressure on so a clot can form.',
				'If bleeding does not stop, or you feel faint, call 911 or go to an emergency department.',
				'Call us as soon as the bleeding is under control so we can check the cause.'
			]
		}
	];
</script>

<svelte:head>
	<title>Dental Emergency | NaviX Technologies</title>
	<meta
		name="description"
		content="Dental emergency in Austin? Call NaviX Technologies on +1 (512) 555-0148 for same-day emergency appointments — cracked tooth, severe pain, knocked-out tooth and more."
	/>
</svelte:head>

<PageHero
	eyebrow="DENTAL EMERGENCY"
	title="In pain? Call us now"
	subtitle="Same-day emergency appointments when you need them most. If you have severe pain, heavy bleeding, swelling that affects breathing, or a knocked-out tooth, call 911 or go to an emergency department."
/>

<!-- Emergency number at the very top of the page content -->
<section class="bg-navy">
	<div class="mx-auto max-w-7xl px-4 py-8 text-center text-white sm:px-6 lg:px-8" use:reveal>
		<p class="text-xs font-bold tracking-[0.24em] text-white/70 uppercase">Dental emergency line</p>
		<a
			href="tel:+15125550148"
			class="mt-3 inline-flex min-h-14 flex-wrap items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 text-2xl font-extrabold text-white transition hover:bg-[#0B5E5D] sm:text-3xl"
		>
			<Icon name="phone" class="size-7" /> +1 (512) 555-0148
		</a>
		<p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85">
			Call now — we do our best to see emergency patients the same day. Mon–Fri 8am–6pm, Sat
			9am–2pm. This is a demo phone number, not a real emergency line.
		</p>
	</div>
</section>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<!-- Same-day promise -->
	<div class="rounded-3xl bg-mist px-6 py-8 text-center sm:px-12" use:reveal>
		<h2 class="text-2xl font-bold text-navy sm:text-3xl">Our same-day promise</h2>
		<p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#5B6B74] sm:text-base">
			If you call before noon with a dental emergency, we will do our best to see you the same
			day. Pain relief comes first — we deal with the cause, explain your options, and only then
			talk about longer-term treatment.
		</p>
	</div>

	<!-- What to do -->
	<h2 class="mt-16 text-2xl font-bold text-navy sm:text-3xl" use:reveal>What to do right now</h2>
	<div class="mt-8 grid gap-5 md:grid-cols-2">
		{#each situations as item}
			<article
				class="min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7"
				use:reveal
			>
				<div class="flex items-center gap-3">
					<span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white">
						<Icon name={item.icon} class="size-6" />
					</span>
					<h3 class="text-lg font-bold text-navy">{item.title}</h3>
				</div>
				<ol class="mt-5 space-y-2.5">
					{#each item.steps as step, i}
						<li class="flex items-start gap-2.5 text-sm leading-relaxed text-[#5B6B74]">
							<span
								class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mist text-xs font-bold text-brand"
							>
								{i + 1}
							</span>
							<span class="min-w-0">{step}</span>
						</li>
					{/each}
				</ol>
			</article>
		{/each}
		<article
			class="flex min-w-0 flex-col justify-center rounded-3xl bg-navy p-6 text-white shadow-sm sm:p-7"
			use:reveal
		>
			<h3 class="text-lg font-bold">Still unsure?</h3>
			<p class="mt-2 text-sm leading-relaxed text-white/85">
				If you are in doubt, call us and describe what happened — we will tell you honestly
				whether you need to come in today or whether it can safely wait.
			</p>
			<a
				href="tel:+15125550148"
				class="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy"
			>
				<Icon name="phone" class="size-4" /> +1 (512) 555-0148
			</a>
		</article>
	</div>

	<!-- Out of hours -->
	<div class="mt-12 grid gap-5 lg:grid-cols-2">
		<div class="min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8" use:reveal>
			<h2 class="text-xl font-bold text-navy sm:text-2xl">Out of hours</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Outside our opening hours (Mon–Fri 8am–6pm, Sat 9am–2pm, Sun closed), leave a message on
				<a class="font-semibold text-brand hover:underline" href="tel:+15125550148">+1 (512) 555-0148</a>
				and we will call you back first thing the next working day. For severe pain, heavy
				bleeding, swelling that affects breathing, or a serious injury, call 911 or go to your
				nearest emergency department — do not wait for us to open.
			</p>
		</div>
		<div class="min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8" use:reveal>
			<h2 class="text-xl font-bold text-navy sm:text-2xl">What an emergency visit costs</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				An emergency assessment starts from $49, the same as a smile assessment, and we will
				give you a written estimate before any treatment. See our
				<a class="font-semibold text-brand hover:underline" href="/pricing">pricing page</a>
				for starting prices, and our
				<a class="font-semibold text-brand hover:underline" href="/insurance">insurance page</a>
				if you have cover.
			</p>
			<a
				href="/book-appointment"
				class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
			>
				Book an appointment <Icon name="arrow-right" class="size-4" />
			</a>
		</div>
	</div>
</section>
