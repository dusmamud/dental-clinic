<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { ChevronDown } from 'lucide-svelte';
	import { page } from '$app/state';

	let open = $state(false);
	let scrolled = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/about', label: 'About Us' },
		{ href: '/team', label: 'Our Team' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];

	const patientLinks = [
		{ href: '/new-patients', label: 'New Patients' },
		{ href: '/insurance', label: 'Insurance' },
		{ href: '/pricing', label: 'Pricing' },
		{ href: '/emergency', label: 'Emergency Care' },
		{ href: '/reviews', label: 'Reviews' },
		{ href: '/smile-gallery', label: 'Smile Gallery' }
	];

	function isActive(href: string) {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}

	const patientsActive = $derived(patientLinks.some((l) => isActive(l.href)));
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 8)} />

<header
	class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur transition-shadow duration-300 {scrolled
		? 'shadow-lg shadow-teal-900/10'
		: 'shadow-none'}"
>
	<div
		class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 lg:px-8 {scrolled
			? 'h-14'
			: 'h-16'}"
	>
		<a href="/" class="flex min-w-0 items-center gap-2.5" aria-label="NaviX Technologies Family Dental Care — home">
			<span class="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
				<Icon name="tooth" class="size-6" />
			</span>
			<span class="min-w-0 leading-none">
				<span class="block truncate text-[20px] font-bold tracking-tight text-navy">NaviX Technologies</span>
				<span class="mt-1 block text-[11px] font-semibold tracking-[0.24em] text-brand uppercase"
					>Family Dental Care</span
				>
			</span>
		</a>

		<nav class="hidden items-center gap-7 lg:flex" aria-label="Main">
			{#each links.slice(0, 2) as l}
				<a
					href={l.href}
					aria-current={isActive(l.href) ? 'page' : undefined}
					class="text-sm font-semibold transition hover:text-brand {isActive(l.href)
						? 'text-brand'
						: 'text-navy'}">{l.label}</a
				>
			{/each}

			<!-- Patients dropdown (desktop hover + keyboard focus) -->
			<div class="group relative">
				<button
					type="button"
					aria-haspopup="true"
					aria-expanded="false"
					class="flex min-h-11 items-center gap-1 text-sm font-semibold transition hover:text-brand {patientsActive
						? 'text-brand'
						: 'text-navy'}"
				>
					Patients
					<ChevronDown class="size-4 transition-transform duration-300 group-hover:rotate-180" />
				</button>
				<div
					class="invisible absolute top-full left-1/2 w-56 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
				>
					<ul class="overflow-hidden rounded-2xl border border-slate-200 bg-white py-2 shadow-xl shadow-teal-900/10">
						{#each patientLinks as l}
							<li>
								<a
									href={l.href}
									aria-current={isActive(l.href) ? 'page' : undefined}
									class="block min-h-11 px-4 py-2.5 text-sm font-semibold transition hover:bg-mist hover:text-brand {isActive(
										l.href
									)
										? 'text-brand'
										: 'text-navy'}">{l.label}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			{#each links.slice(2) as l}
				<a
					href={l.href}
					aria-current={isActive(l.href) ? 'page' : undefined}
					class="text-sm font-semibold transition hover:text-brand {isActive(l.href)
						? 'text-brand'
						: 'text-navy'}">{l.label}</a
				>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<a
				href="/book-appointment"
				class="btn-arrow hidden min-h-11 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-700/25 transition hover:bg-brand-dark sm:inline-flex"
			>
				<Icon name="calendar" class="size-4" /> Book Appointment
			</a>
			<button
				type="button"
				class="grid size-11 place-items-center rounded-full text-navy transition hover:bg-mist lg:hidden"
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<Icon name={open ? 'close' : 'menu'} class="size-6" />
			</button>
		</div>
	</div>

	{#if open}
		<nav class="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-3 lg:hidden" aria-label="Mobile">
			{#each links as l}
				<a
					href={l.href}
					aria-current={isActive(l.href) ? 'page' : undefined}
					class="block min-h-11 rounded-xl px-3 py-3 text-base font-semibold hover:bg-mist {isActive(l.href)
						? 'text-brand'
						: 'text-navy'}"
					onclick={() => (open = false)}>{l.label}</a
				>
			{/each}
			<p class="mt-3 px-3 pt-3 text-xs font-bold tracking-[0.2em] text-brand uppercase">Patients</p>
			{#each patientLinks as l}
				<a
					href={l.href}
					aria-current={isActive(l.href) ? 'page' : undefined}
					class="block min-h-11 rounded-xl px-3 py-3 text-base font-semibold hover:bg-mist {isActive(l.href)
						? 'text-brand'
						: 'text-navy'}"
					onclick={() => (open = false)}>{l.label}</a
				>
			{/each}
			<a
				href="/book-appointment"
				class="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white"
				onclick={() => (open = false)}
				><Icon name="calendar" class="size-4" /> Book Appointment</a
			>
		</nav>
	{/if}
</header>
