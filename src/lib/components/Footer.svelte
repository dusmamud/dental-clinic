<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { services } from '#lib/data/services';

	let email = $state('');
	let done = $state(false);
	let error = $state('');

	function subscribe(e: SubmitEvent) {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			error = 'Please enter a valid email address.';
			return;
		}
		error = '';
		done = true;
	}

	const companyLinks = [
		{ href: '/about', label: 'About Us' },
		{ href: '/team', label: 'Our Team' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/faq', label: 'FAQ' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/book-appointment', label: 'Book Appointment' },
		{ href: '/privacy-policy', label: 'Privacy Policy' },
		{ href: '/terms', label: 'Terms of Service' }
	];
</script>

<footer class="bg-navy text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
			<div class="min-w-0">
				<a href="/" class="flex items-center gap-2.5">
					<span class="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
						<Icon name="tooth" class="size-6" />
					</span>
					<span class="leading-none">
						<span class="block text-[20px] font-bold tracking-tight text-white">NaviX Technologies</span>
						<span class="mt-1 block text-[11px] font-semibold tracking-[0.24em] text-teal-200 uppercase"
							>Family Dental Care</span
						>
					</span>
				</a>
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">
					Gentle, family-friendly dental care in Austin — modern technology, honest pricing, and a
					team that puts your comfort first.
				</p>
				<p class="mt-4 flex items-start gap-2 text-sm text-slate-300">
					<Icon name="pin" class="mt-0.5 size-4 shrink-0 text-teal-300" />
					<span>123 Smile Avenue, Austin, TX 78701</span>
				</p>
				<p class="mt-2 flex items-center gap-2 text-sm text-slate-300">
					<Icon name="phone" class="size-4 shrink-0 text-teal-300" />
					<a class="hover:text-white" href="tel:+15125550148">+1 (512) 555-0148</a>
				</p>
				<p class="mt-2 flex items-center gap-2 text-sm text-slate-300">
					<Icon name="mail" class="size-4 shrink-0 text-teal-300" />
					<a class="hover:text-white" href="mailto:hello@navixdental.com">hello@navixdental.com</a>
				</p>
			</div>

			<nav aria-label="Services" class="min-w-0">
				<h3 class="text-sm font-bold tracking-wide text-white uppercase">Services</h3>
				<ul class="mt-4 space-y-2.5 text-sm text-slate-300">
					{#each services as s}
						<li><a class="hover:text-white" href="/services/{s.slug}">{s.name}</a></li>
					{/each}
				</ul>
			</nav>

			<nav aria-label="Company" class="min-w-0">
				<h3 class="text-sm font-bold tracking-wide text-white uppercase">Company</h3>
				<ul class="mt-4 space-y-2.5 text-sm text-slate-300">
					{#each companyLinks as l}
						<li><a class="hover:text-white" href={l.href}>{l.label}</a></li>
					{/each}
				</ul>
			</nav>

			<div class="min-w-0">
				<h3 class="text-sm font-bold tracking-wide text-white uppercase">Smile tips, once a month</h3>
				<p class="mt-4 text-sm leading-relaxed text-slate-300">
					Brushing basics, check-up reminders and clinic news — once a month, no spam.
				</p>
				{#if done}
					<p
						class="mt-4 flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-teal-200"
					>
						<Icon name="check" class="size-5" /> You&rsquo;re on the list — welcome!
					</p>
				{:else}
					<form class="mt-4 flex gap-2" onsubmit={subscribe} novalidate>
						<label class="sr-only" for="newsletter-email">Email address</label>
						<input
							id="newsletter-email"
							type="email"
							bind:value={email}
							placeholder="you@example.com"
							class="min-w-0 flex-1 rounded-full border border-white/20 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/70 focus:border-brand focus:outline-none"
						/>
						<button
							type="submit"
							class="min-h-11 shrink-0 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
							>Join</button
						>
					</form>
					{#if error}<p class="mt-2 text-xs font-semibold text-red-300">{error}</p>{/if}
				{/if}
				<p class="mt-4 flex items-center gap-2 text-xs text-slate-300">
					<Icon name="clock" class="size-4 shrink-0 text-teal-300" /> Mon–Fri 8am–6pm · Sat 9am–2pm
				</p>
				<p class="mt-2 text-xs text-slate-400">Demo newsletter — no emails are actually sent.</p>
			</div>
		</div>

		<div
			class="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© 2026 NaviX Technologies. All rights reserved. Demo site — dentists, prices and reviews are illustrative.</p>
			<nav class="flex flex-wrap items-center gap-x-4 gap-y-1" aria-label="Legal">
				<a class="hover:text-white" href="/privacy-policy">Privacy</a>
				<a class="hover:text-white" href="/terms">Terms</a>
				<a class="hover:text-white" href="/disclaimer">Disclaimer</a>
			</nav>
		</div>
		<p class="mt-3 text-xs text-slate-400">Mon–Fri 8am–6pm · Sat 9am–2pm · Sun closed</p>
	</div>
</footer>
