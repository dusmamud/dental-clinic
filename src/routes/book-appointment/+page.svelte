<script lang="ts">
	import { page } from '$app/state';
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { services } from '#lib/data/services';

	const timeSlots = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM'];

	const serviceParam = $derived(page.url.searchParams.get('service') ?? '');

	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let service = $state('not-sure');
	let date = $state('');
	let time = $state('');
	let notes = $state('');
	let errors = $state<Record<string, string>>({});
	let submitted = $state(false);

	// Apply a valid ?service= slug once, after mount — never mutate during render.
	$effect(() => {
		if (serviceParam && services.some((s) => s.slug === serviceParam)) {
			service = serviceParam;
		}
	});

	const todayStr = $derived(
		(() => {
			const d = new Date();
			const m = String(d.getMonth() + 1).padStart(2, '0');
			const day = String(d.getDate()).padStart(2, '0');
			return `${d.getFullYear()}-${m}-${day}`;
		})()
	);

	const serviceName = $derived(
		service === 'not-sure'
			? 'Not sure — help me choose'
			: (services.find((s) => s.slug === service)?.name ?? 'Not sure — help me choose')
	);

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
		if (!time) next.time = 'Please pick a time slot.';
		errors = next;
		return Object.keys(next).length === 0;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!validate()) return;
		const booking = {
			name: name.trim(),
			phone: phone.trim(),
			email: email.trim(),
			service,
			serviceName,
			date,
			dateLabel: dateLabel,
			time,
			notes: notes.trim(),
			createdAt: new Date().toISOString()
		};
		try {
			if (typeof window !== 'undefined') {
				window.localStorage.setItem('navix-booking', JSON.stringify(booking));
			}
		} catch {
			// localStorage unavailable (private mode, prerender) — the request still shows as received.
		}
		submitted = true;
	}

	function resetForm() {
		name = '';
		phone = '';
		email = '';
		service = 'not-sure';
		date = '';
		time = '';
		notes = '';
		errors = {};
		submitted = false;
	}

	const inputCls =
		'w-full min-h-11 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30';
	const labelCls = 'mb-1.5 block text-sm font-semibold text-navy';
</script>

<svelte:head>
	<title>Book an Appointment | NaviX Technologies</title>
</svelte:head>

<PageHero
	eyebrow="Book Appointment"
	title="Book your visit in under a minute"
	subtitle="Pick a service, date and time — we'll confirm by phone or email. Demo form: no real booking is made."
/>

<section class="bg-mist py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-[1fr_360px]">
			<!-- Form / success -->
			<div class="min-w-0 rounded-3xl bg-white p-6 shadow-sm sm:p-8" use:reveal>
				{#if submitted}
					<div class="text-center">
						<span class="mx-auto grid size-16 place-items-center rounded-full bg-brand text-white">
							<Icon name="check" class="size-8" />
						</span>
						<h2 class="mt-5 text-2xl font-bold text-navy sm:text-3xl">Request received, {name.trim()}!</h2>
						<p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#5B6B74] sm:text-base">
							We'll call you at <span class="font-semibold text-navy">{phone.trim()}</span> to confirm.
						</p>
						<dl
							class="mx-auto mt-6 max-w-md space-y-2 rounded-2xl bg-mist p-5 text-left text-sm"
						>
							<div class="flex justify-between gap-4">
								<dt class="font-semibold text-navy">Service</dt>
								<dd class="text-right text-[#5B6B74]">{serviceName}</dd>
							</div>
							<div class="flex justify-between gap-4">
								<dt class="font-semibold text-navy">Date</dt>
								<dd class="text-right text-[#5B6B74]">{dateLabel}</dd>
							</div>
							<div class="flex justify-between gap-4">
								<dt class="font-semibold text-navy">Time</dt>
								<dd class="text-right text-[#5B6B74]">{time}</dd>
							</div>
						</dl>
						<p class="mt-4 text-xs text-[#5B6B74]">
							This is a demo — your request was saved only in this browser, and no real
							appointment was made.
						</p>
						<button
							type="button"
							onclick={resetForm}
							class="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B5E5D]"
						>
							Book another appointment
						</button>
					</div>
				{:else}
					<form novalidate onsubmit={handleSubmit}>
						<div class="grid gap-5 sm:grid-cols-2">
							<div class="min-w-0">
								<label class={labelCls} for="bk-name">Full name</label>
								<input
									id="bk-name"
									type="text"
									bind:value={name}
									autocomplete="name"
									placeholder="Jane Smith"
									class={inputCls}
									aria-invalid={errors.name ? 'true' : undefined}
									aria-describedby={errors.name ? 'bk-name-error' : undefined}
								/>
								{#if errors.name}<p id="bk-name-error" class="mt-1.5 text-xs text-red-600">{errors.name}</p>{/if}
							</div>
							<div class="min-w-0">
								<label class={labelCls} for="bk-phone">Phone</label>
								<input
									id="bk-phone"
									type="tel"
									bind:value={phone}
									autocomplete="tel"
									placeholder="(512) 555-0100"
									class={inputCls}
									aria-invalid={errors.phone ? 'true' : undefined}
									aria-describedby={errors.phone ? 'bk-phone-error' : undefined}
								/>
								{#if errors.phone}<p id="bk-phone-error" class="mt-1.5 text-xs text-red-600">{errors.phone}</p>{/if}
							</div>
							<div class="min-w-0">
								<label class={labelCls} for="bk-email">Email</label>
								<input
									id="bk-email"
									type="email"
									bind:value={email}
									autocomplete="email"
									placeholder="jane@example.com"
									class={inputCls}
									aria-invalid={errors.email ? 'true' : undefined}
									aria-describedby={errors.email ? 'bk-email-error' : undefined}
								/>
								{#if errors.email}<p id="bk-email-error" class="mt-1.5 text-xs text-red-600">{errors.email}</p>{/if}
							</div>
							<div class="min-w-0">
								<label class={labelCls} for="bk-service">Service</label>
								<select id="bk-service" bind:value={service} class={inputCls}>
									{#each services as s (s.slug)}
										<option value={s.slug}>{s.name}</option>
									{/each}
									<option value="not-sure">Not sure — help me choose</option>
								</select>
							</div>
							<div class="min-w-0">
								<label class={labelCls} for="bk-date">Preferred date</label>
								<input
									id="bk-date"
									type="date"
									bind:value={date}
									min={todayStr}
									class={inputCls}
									aria-invalid={errors.date ? 'true' : undefined}
									aria-describedby={errors.date ? 'bk-date-error' : undefined}
								/>
								{#if errors.date}<p id="bk-date-error" class="mt-1.5 text-xs text-red-600">{errors.date}</p>{/if}
							</div>
							<div class="min-w-0">
								<label class={labelCls} for="bk-time">Time slot</label>
								<select
									id="bk-time"
									bind:value={time}
									class={inputCls}
									aria-invalid={errors.time ? 'true' : undefined}
									aria-describedby={errors.time ? 'bk-time-error' : undefined}
								>
									<option value="" disabled>Select a time</option>
									{#each timeSlots as slot}
										<option value={slot}>{slot}</option>
									{/each}
								</select>
								{#if errors.time}<p id="bk-time-error" class="mt-1.5 text-xs text-red-600">{errors.time}</p>{/if}
							</div>
							<div class="min-w-0 sm:col-span-2">
								<label class={labelCls} for="bk-notes"
									>Anything you'd like us to know? (optional — please don't share detailed medical
									history here)</label
								>
								<textarea
									id="bk-notes"
									bind:value={notes}
									rows="4"
									placeholder="For example: first visit, nervous about treatment, prefer morning appointments…"
									class="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
								></textarea>
							</div>
						</div>
						<button
							type="submit"
							class="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B5E5D] sm:w-auto"
						>
							Request appointment <Icon name="arrow-right" class="size-4" />
						</button>
						<p class="mt-3 text-xs text-[#5B6B74]">
							Demo form — no real booking is made. Your request is stored only in this browser.
						</p>
					</form>
				{/if}
			</div>

			<!-- Side card -->
			<aside class="min-w-0" use:reveal>
				<div class="rounded-3xl bg-navy p-6 text-white shadow-sm sm:p-7">
					<h2 class="text-xl font-bold">Prefer to talk?</h2>
					<p class="mt-2 text-sm leading-relaxed text-white/80">
						Call us and we'll find a time that works for you. New patients welcome.
					</p>
					<a
						href="tel:+15125550148"
						class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-mist"
					>
						<Icon name="phone" class="size-4" /> +1 (512) 555-0148
					</a>
					<div class="mt-6 space-y-4 border-t border-white/15 pt-6 text-sm">
						<div class="flex items-start gap-3">
							<Icon name="clock" class="mt-0.5 size-5 shrink-0 text-white/70" />
							<div>
								<p class="font-semibold">Mon–Fri · 8am–6pm</p>
								<p class="text-white/80">Sat · 9am–2pm</p>
								<p class="text-white/80">Sun · Closed</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<Icon name="pin" class="mt-0.5 size-5 shrink-0 text-white/70" />
							<p>123 Smile Avenue<br />Austin, TX 78701</p>
						</div>
						<div class="flex items-start gap-3">
							<Icon name="mail" class="mt-0.5 size-5 shrink-0 text-white/70" />
							<a href="mailto:hello@navixdental.com" class="break-all hover:underline"
								>hello@navixdental.com</a
							>
						</div>
					</div>
					<p class="mt-6 rounded-2xl bg-white/10 p-4 text-xs leading-relaxed text-white/85">
						New patients welcome — bring your insurance card and a list of any medications you
						take.
					</p>
				</div>
			</aside>
		</div>
	</div>
</section>
