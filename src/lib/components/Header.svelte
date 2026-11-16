<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { page } from '$app/state';

	let open = $state(false);
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/about', label: 'About Us' },
		{ href: '/team', label: 'Our Team' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string) {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
		<a href="/" class="flex min-w-0 items-center gap-2.5" aria-label="NaviX Technologies — home">
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
			{#each links as l}
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
				class="hidden min-h-11 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-700/25 transition hover:bg-brand-dark sm:inline-flex"
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
		<nav class="border-t border-slate-200 bg-white px-4 py-3 lg:hidden" aria-label="Mobile">
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
			<a
				href="/book-appointment"
				class="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white"
				onclick={() => (open = false)}
				><Icon name="calendar" class="size-4" /> Book Appointment</a
			>
		</nav>
	{/if}
</header>
