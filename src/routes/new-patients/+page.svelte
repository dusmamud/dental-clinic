<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { services } from '#lib/data/services';

	const steps = [
		{
			title: 'Book your first visit',
			text: 'Use the form below, book online, or call us at +1 (512) 555-0148. Tell us it is your first visit and we will allow extra time — about 45 minutes.'
		},
		{
			title: 'Arrive 10 minutes early',
			text: 'Come to 123 Smile Avenue, Austin, TX 78701. There is free parking outside and step-free access. Arriving a little early gives you time to complete your new-patient forms.'
		},
		{
			title: 'Meet your dentist',
			text: 'A relaxed chat about your dental history, any concerns, and what you would like from your smile. No judgement — many of our patients have not visited a dentist in years.'
		},
		{
			title: 'Smile assessment',
			text: 'A gentle exam of your teeth and gums, with digital X-rays only if needed. We check for decay, gum disease and anything that needs attention.'
		},
		{
			title: 'Your clear plan',
			text: 'You leave with a written plan, honest options and transparent pricing. There is no pressure to book anything you do not need.'
		}
	];

	const bring = [
		{ icon: 'user', title: 'Photo ID', text: 'A driving licence or other photo ID so we can set up your patient record.' },
		{ icon: 'shield', title: 'Insurance card', text: 'Your dental insurance card or plan details, if you have cover — see our insurance page for the plans we accept.' },
		{ icon: 'heart', title: 'Medication list', text: 'A list of any medications you take, and any allergies — especially to medicines or latex.' },
		{ icon: 'calendar', title: 'Previous dental records', text: 'If you have recent X-rays or records from a previous dentist, bring them or ask your old practice to send them to us.' }
	];

	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let service = $state('smile-assessment');
	let date = $state('');
	let errors = $state<Record<string, string>>({});
	let submitted = $state(false);

	const todayStr = $derived(
		(() => {
			const d = new Date();
			const m = String(d.getMonth() + 1).padStart(2, '0');
			const day = String(d.getDate()).padStart(2, '0');
			return `${d.getFullYear()}-${m}-${day}`;
		})()
	);

	const serviceName = $derived(services.find((s) => s.slug === service)?.name ?? '');

	const dateLabel = $derived(
		(() => {
			if (!date) return '';
			const [y, m, d] = date.split('-').map(Number);
			return new Date(y, m - 1, d).toLocaleDateString('en-US', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			});
		})()
	);

	function validate(): boolean {
		const next: Record<string, string> = {};
		if (name.trim().length < 2) next.name = 'Please enter your full name (at least 2 characters).';
		if (phone.replace(/\D/g, '').length < 7)
			next.phone = 'Please enter a valid phone number (at least 7 digits).';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
			next.email = 'Please enter a valid email address.';
		if (!date) next.date = 'Please pick a preferred date.';
		else if (date < todayStr) next.date = 'Please pick a date that is today or in the future.';
		errors = next;
		return Object.keys(next).length === 0;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!validate()) return;
		try {
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(
					'navix-new-patient-form',
					JSON.stringify({ name: name.trim(), phone: phone.trim(), email: email.trim(), service, date, createdAt: new Date().toISOString() })
				);
			}
		} catch {
			// localStorage unavailable — the request still shows as received.
		}
		submitted = true;
	}

	function resetForm() {
		name = '';
		phone = '';
		email = '';
		service = 'smile-assessment';
		date = '';
		errors = {};
		submitted = false;
	}

	const inputCls =
		'w-full min-h-11 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30';
	const labelCls = 'mb-1.5 block text-sm font-semibold text-navy';
</script>

<svelte:head>
	<title>New Patients | NaviX Technologies</title>
</svelte:head>

<PageHero
	eyebrow="NEW PATIENTS"
	title="Your first visit, made easy"
	subtitle="New patients are always welcome. Here is exactly what happens at your first visit, what to bring, and how to get started."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<!-- What to expect -->
	<h2 class="text-2xl font-bold text-navy sm:text-3xl" use:reveal>What to expect</h2>
	<ol class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each steps as step, i}
			<li class="min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" use:reveal>
				<span
					class="grid size-11 place-items-center rounded-full bg-brand text-base font-bold text-white"
				>
					{i + 1}
				</span>
				<h3 class="mt-4 font-bold text-navy">{step.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">{step.text}</p>
			</li>
		{/each}
		<li
			class="flex min-w-0 flex-col justify-center rounded-3xl bg-navy p-6 text-white shadow-sm"
			use:reveal
		>
			<h3 class="font-bold">Nervous about visiting?</h3>
			<p class="mt-2 text-sm leading-relaxed text-white/85">
				Tell us when you book — we take extra time, explain each step, and never rush you.
			</p>
			<a
				href="tel:+15125550148"
				class="mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy"
			>
				<Icon name="phone" class="size-4" /> +1 (512) 555-0148
			</a>
		</li>
	</ol>

	<!-- What to bring -->
	<h2 class="mt-16 text-2xl font-bold text-navy sm:text-3xl" use:reveal>What to bring</h2>
	<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each bring as item}
			<div class="min-w-0 rounded-3xl bg-mist p-6" use:reveal>
				<span class="grid size-12 place-items-center rounded-2xl bg-brand text-white">
					<Icon name={item.icon} class="size-6" />
				</span>
				<h3 class="mt-4 font-bold text-navy">{item.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">{item.text}</p>
			</div>
		{/each}
	</div>

	<!-- Form + side info -->
	<div class="mt-16 grid gap-8 lg:grid-cols-[1fr_360px]">
		<div class="min-w-0 rounded-3xl bg-white px-6 pt-6 pb-4 shadow-sm sm:px-8 sm:pt-8 sm:pb-5" use:reveal>
			<h2 class="text-2xl font-bold text-navy">New-patient form</h2>
			<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">
				Complete this demo form and we will have your details ready before you arrive. Printable
				forms are also available at reception if you prefer paper.
			</p>
			{#if submitted}
				<div class="mt-6 text-center">
					<span class="mx-auto grid size-16 place-items-center rounded-full bg-brand text-white">
						<Icon name="check" class="size-8" />
					</span>
					<h3 class="mt-5 text-2xl font-bold text-navy">Welcome aboard, {name.trim()}!</h3>
					<p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#5B6B74]">
						Your new-patient details for <span class="font-semibold text-navy">{serviceName}</span>
						on <span class="font-semibold text-navy">{dateLabel}</span> were received. We will call
						you at <span class="font-semibold text-navy">{phone.trim()}</span> to confirm.
					</p>
					<p class="mt-4 text-xs text-[#5B6B74]">
						Demo form — your details were saved only in this browser, and no real registration
						was made.
					</p>
					<button
						type="button"
						onclick={resetForm}
						class="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B5E5D]"
					>
						Submit another form
					</button>
				</div>
			{:else}
				<form novalidate onsubmit={handleSubmit} class="mt-6">
					<div class="grid gap-5 sm:grid-cols-2">
						<div class="min-w-0">
							<label class={labelCls} for="np-name">Full name</label>
							<input
								id="np-name"
								type="text"
								bind:value={name}
								autocomplete="name"
								placeholder="Jane Smith"
								class={inputCls}
								aria-invalid={errors.name ? 'true' : undefined}
								aria-describedby={errors.name ? 'np-name-error' : undefined}
							/>
							{#if errors.name}<p id="np-name-error" class="mt-1.5 text-xs text-red-600">{errors.name}</p>{/if}
						</div>
						<div class="min-w-0">
							<label class={labelCls} for="np-phone">Phone</label>
							<input
								id="np-phone"
								type="tel"
								bind:value={phone}
								autocomplete="tel"
								placeholder="(512) 555-0100"
								class={inputCls}
								aria-invalid={errors.phone ? 'true' : undefined}
								aria-describedby={errors.phone ? 'np-phone-error' : undefined}
							/>
							{#if errors.phone}<p id="np-phone-error" class="mt-1.5 text-xs text-red-600">{errors.phone}</p>{/if}
						</div>
						<div class="min-w-0">
							<label class={labelCls} for="np-email">Email</label>
							<input
								id="np-email"
								type="email"
								bind:value={email}
								autocomplete="email"
								placeholder="jane@example.com"
								class={inputCls}
								aria-invalid={errors.email ? 'true' : undefined}
								aria-describedby={errors.email ? 'np-email-error' : undefined}
							/>
							{#if errors.email}<p id="np-email-error" class="mt-1.5 text-xs text-red-600">{errors.email}</p>{/if}
						</div>
						<div class="min-w-0">
							<label class={labelCls} for="np-service">Reason for your visit</label>
							<select id="np-service" bind:value={service} class={inputCls}>
								{#each services as s (s.slug)}
									<option value={s.slug}>{s.name}</option>
								{/each}
							</select>
						</div>
						<div class="min-w-0 sm:col-span-2">
							<label class={labelCls} for="np-date">Preferred date for your first visit</label>
							<input
								id="np-date"
								type="date"
								bind:value={date}
								min={todayStr}
								class={inputCls}
								aria-invalid={errors.date ? 'true' : undefined}
								aria-describedby={errors.date ? 'np-date-error' : undefined}
							/>
							{#if errors.date}<p id="np-date-error" class="mt-1.5 text-xs text-red-600">{errors.date}</p>{/if}
						</div>
					</div>
					<button
						type="submit"
						class="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B5E5D] sm:w-auto"
					>
						Submit new-patient form <Icon name="arrow-right" class="size-4" />
					</button>
					<p class="mt-3 text-xs text-[#5B6B74]">
						Demo form — no real registration is made. Your details are stored only in this
						browser.
					</p>
				</form>
			{/if}
		</div>

		<aside class="min-w-0 space-y-5">
			<div class="rounded-3xl bg-navy p-6 text-white shadow-sm sm:p-7" use:reveal>
				<h2 class="text-xl font-bold">Insurance</h2>
				<p class="mt-2 text-sm leading-relaxed text-white/85">
					We accept most major dental insurance plans, including Delta Dental, Cigna, MetLife,
					Aetna, UnitedHealthcare and Humana. Bring your card and we will check your benefits
					before treatment.
				</p>
				<a
					href="/insurance"
					class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-mist"
				>
					See accepted plans <Icon name="arrow-right" class="size-4" />
				</a>
			</div>
			<div class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" use:reveal>
				<h2 class="text-xl font-bold text-navy">Cancellation policy</h2>
				<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">
					Life happens. If you need to change or cancel your appointment, please give us at
					least <span class="font-semibold text-navy">24 hours' notice</span> by phone so we can
					offer the time to another patient. Appointments cancelled with less than 24 hours'
					notice may incur a fee.
				</p>
				<h2 class="mt-6 text-xl font-bold text-navy">Opening hours</h2>
				<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">
					Mon–Fri 8am–6pm · Sat 9am–2pm · Sun closed.<br />
					123 Smile Avenue, Austin, TX 78701
				</p>
			</div>
		</aside>
	</div>
</section>
