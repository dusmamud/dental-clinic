<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let errors = $state<Record<string, string>>({});
	let sent = $state(false);

	function validate(): boolean {
		const next: Record<string, string> = {};
		if (name.trim().length < 2) next.name = 'Please enter your name (at least 2 characters).';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
			next.email = 'Please enter a valid email address.';
		if (phone.trim() && phone.replace(/\D/g, '').length < 7)
			next.phone = 'Please enter a valid phone number (at least 7 digits).';
		if (message.trim().length < 10)
			next.message = 'Please write a message of at least 10 characters.';
		errors = next;
		return Object.keys(next).length === 0;
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!validate()) return;
		sent = true;
	}

	function resetForm() {
		name = '';
		email = '';
		phone = '';
		message = '';
		errors = {};
		sent = false;
	}

	const inputCls =
		'w-full min-h-11 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30';
	const labelCls = 'mb-1.5 block text-sm font-semibold text-navy';

	const hours = [
		{ day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
		{ day: 'Saturday', time: '9:00 AM – 2:00 PM' },
		{ day: 'Sunday', time: 'Closed' }
	];
</script>

<svelte:head>
	<title>Contact Us | NaviX Technologies</title>
	<meta
		name="description"
		content="Visit NaviX Technologies at 123 Smile Avenue, Austin, TX 78701, or call +1 (512) 555-0148. Open Mon–Fri 8am–6pm and Sat 9am–2pm."
	/>
</svelte:head>

<PageHero eyebrow="Contact" title="Visit us in Austin" subtitle="Questions about a treatment, insurance or your first visit? We'd love to hear from you." />

<section class="bg-mist py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-[1fr_380px]">
			<!-- Contact form -->
			<div class="min-w-0 rounded-3xl bg-white p-6 shadow-sm sm:p-8" use:reveal>
				{#if sent}
					<div class="text-center">
						<span class="mx-auto grid size-16 place-items-center rounded-full bg-brand text-white">
							<Icon name="check" class="size-8" />
						</span>
						<h2 class="mt-5 text-2xl font-bold text-navy sm:text-3xl">Thanks, {name.trim()}!</h2>
						<p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#5B6B74] sm:text-base">
							Thanks — this is a demo form, so nothing was sent. Call us to reach the clinic.
						</p>
						<a
							href="tel:+15125550148"
							class="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B5E5D]"
						>
							<Icon name="phone" class="size-4" /> Call +1 (512) 555-0148
						</a>
						<div>
							<button
								type="button"
								onclick={resetForm}
								class="mt-4 inline-flex min-h-11 items-center rounded-full border-2 border-brand/30 px-6 py-3 text-sm font-bold text-brand transition hover:border-brand"
							>
								Send another message
							</button>
						</div>
					</div>
				{:else}
					<h2 class="text-xl font-bold text-navy sm:text-2xl">Send us a message</h2>
					<p class="mt-2 text-sm leading-relaxed text-[#5B6B74]">
						Fill in the form and we'll get back to you as soon as we can during clinic hours.
					</p>
					<form novalidate onsubmit={handleSubmit} class="mt-6">
						<div class="grid gap-5 sm:grid-cols-2">
							<div class="min-w-0">
								<label class={labelCls} for="ct-name">Name</label>
								<input
									id="ct-name"
									type="text"
									bind:value={name}
									autocomplete="name"
									placeholder="Jane Smith"
									class={inputCls}
									aria-invalid={errors.name ? 'true' : undefined}
								/>
								{#if errors.name}<p class="mt-1.5 text-xs text-red-600">{errors.name}</p>{/if}
							</div>
							<div class="min-w-0">
								<label class={labelCls} for="ct-email">Email</label>
								<input
									id="ct-email"
									type="email"
									bind:value={email}
									autocomplete="email"
									placeholder="jane@example.com"
									class={inputCls}
									aria-invalid={errors.email ? 'true' : undefined}
								/>
								{#if errors.email}<p class="mt-1.5 text-xs text-red-600">{errors.email}</p>{/if}
							</div>
							<div class="min-w-0 sm:col-span-2">
								<label class={labelCls} for="ct-phone">Phone (optional)</label>
								<input
									id="ct-phone"
									type="tel"
									bind:value={phone}
									autocomplete="tel"
									placeholder="(512) 555-0100"
									class={inputCls}
									aria-invalid={errors.phone ? 'true' : undefined}
								/>
								{#if errors.phone}<p class="mt-1.5 text-xs text-red-600">{errors.phone}</p>{/if}
							</div>
							<div class="min-w-0 sm:col-span-2">
								<label class={labelCls} for="ct-message">Message</label>
								<textarea
									id="ct-message"
									bind:value={message}
									rows="5"
									placeholder="How can we help?"
									class="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
									aria-invalid={errors.message ? 'true' : undefined}
								></textarea>
								{#if errors.message}<p class="mt-1.5 text-xs text-red-600">{errors.message}</p>{/if}
							</div>
						</div>
						<button
							type="submit"
							class="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B5E5D] sm:w-auto"
						>
							Send message <Icon name="arrow-right" class="size-4" />
						</button>
						<p class="mt-3 text-xs text-[#5B6B74]">
							Demo form — nothing is sent anywhere. To reach the clinic, call us.
						</p>
					</form>
				{/if}
			</div>

			<!-- Info + map -->
			<div class="min-w-0 space-y-6">
				<div class="rounded-3xl bg-navy p-6 text-white shadow-sm sm:p-7" use:reveal>
					<h2 class="text-xl font-bold">Clinic information</h2>
					<ul class="mt-5 space-y-4 text-sm">
						<li class="flex items-start gap-3">
							<Icon name="pin" class="mt-0.5 size-5 shrink-0 text-white/70" />
							<span>123 Smile Avenue<br />Austin, TX 78701</span>
						</li>
						<li class="flex items-start gap-3">
							<Icon name="phone" class="mt-0.5 size-5 shrink-0 text-white/70" />
							<a href="tel:+15125550148" class="hover:underline">+1 (512) 555-0148</a>
						</li>
						<li class="flex items-start gap-3">
							<Icon name="mail" class="mt-0.5 size-5 shrink-0 text-white/70" />
							<a href="mailto:hello@navixdental.com" class="break-all hover:underline"
								>hello@navixdental.com</a
							>
						</li>
					</ul>
					<div class="mt-6 border-t border-white/15 pt-5">
						<h3 class="flex items-center gap-2 text-sm font-bold">
							<Icon name="clock" class="size-4 text-white/70" /> Opening hours
						</h3>
						<dl class="mt-3 space-y-2 text-sm">
							{#each hours as h}
								<div class="flex items-center justify-between gap-4">
									<dt class="text-white/80">{h.day}</dt>
									<dd class="font-semibold">{h.time}</dd>
								</div>
							{/each}
						</dl>
					</div>
				</div>

				<!-- Map placeholder (no live embed) -->
				<div
					class="rounded-3xl bg-mist p-6 text-center shadow-sm ring-1 ring-slate-200 sm:p-8"
					use:reveal
				>
					<span class="mx-auto grid size-14 place-items-center rounded-full bg-brand text-white">
						<Icon name="pin" class="size-7" />
					</span>
					<h2 class="mt-4 text-lg font-bold text-navy">Find us in Austin</h2>
					<p class="mt-1 text-sm text-[#5B6B74]">123 Smile Avenue, Austin, TX 78701</p>
					<a
						href="https://www.google.com/maps/search/?api=1&query=123+Smile+Avenue+Austin+TX+78701"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B5E5D]"
					>
						Open in Google Maps <Icon name="arrow-right" class="size-4" />
					</a>
					<p class="mt-3 text-xs text-[#5B6B74]">Free parking available on site.</p>
				</div>
			</div>
		</div>
	</div>
</section>
