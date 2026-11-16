<script lang="ts">
	import { page } from '$app/state';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
</script>

<svelte:head>
	<title>Page not found | NaviX Technologies</title>
	<meta name="description" content="The page you were looking for doesn't exist on the NaviX Technologies website." />
</svelte:head>

<section class="bg-mist py-20 sm:py-28">
	<div class="mx-auto max-w-2xl px-4 text-center sm:px-6" use:reveal>
		<p class="text-7xl font-extrabold text-brand sm:text-8xl">{page.status || 404}</p>
		<h1 class="mt-4 text-2xl font-bold text-navy sm:text-3xl">This page isn't smiling back.</h1>
		<p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#5B6B74] sm:text-base">
			The page you're looking for has moved, or it never existed. Let's get you back to
			something useful.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/"
				class="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0B5E5D]"
			>
				Go home
			</a>
			<a
				href="/book-appointment"
				class="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-brand/30 bg-white px-6 py-3 text-sm font-bold text-brand transition hover:border-brand"
			>
				Book an appointment <Icon name="arrow-right" class="size-4" />
			</a>
		</div>
		<p class="mt-6 text-xs text-[#5B6B74]">
			Or call us at <a href="tel:+15125550148" class="font-semibold text-brand hover:underline"
				>+1 (512) 555-0148</a
			> — we're happy to help.
		</p>
	</div>
</section>
