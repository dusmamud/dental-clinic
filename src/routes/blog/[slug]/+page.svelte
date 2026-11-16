<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { blogPosts as posts } from '#lib/data/blog';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);
	const others = $derived(posts.filter((p) => p.slug !== post.slug));
</script>

<svelte:head>
	<title>{post.title} | NaviX Blog</title>
	<meta name="description" content={post.excerpt} />
</svelte:head>

<!-- Article header -->
<header class="bg-mist">
	<div class="mx-auto max-w-3xl px-4 pt-14 pb-10 text-center sm:px-6 lg:pt-20" use:reveal>
		<p class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-bold">
			<span class="rounded-full bg-brand px-3 py-1 text-white">{post.category}</span>
			<span class="text-[#5B6B74]">{post.date}</span>
			<span class="text-[#5B6B74]">{post.readTime}</span>
		</p>
		<h1 class="mt-5 text-3xl leading-tight font-bold text-navy sm:text-4xl lg:text-[44px]">
			{post.title}
		</h1>
		<p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#5B6B74]">{post.excerpt}</p>
	</div>
	<div class="mx-auto max-w-4xl px-4 pb-14 sm:px-6" use:reveal>
		<img
			src={post.image}
			alt={post.title}
			class="aspect-[16/9] w-full rounded-3xl object-cover shadow-xl"
		/>
	</div>
</header>

<article class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
	<div class="space-y-5">
		{#each post.content as paragraph}
			<p class="text-base leading-relaxed text-[#5B6B74]" use:reveal>{paragraph}</p>
		{/each}
	</div>

	<a
		href="/blog"
		class="mt-10 inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-brand"
		use:reveal
	>
		<Icon name="arrow-right" class="size-4 rotate-180" /> Back to all articles
	</a>

	<!-- CTA card -->
	<div class="mt-10 rounded-3xl bg-navy px-6 py-10 text-center text-white sm:px-12" use:reveal>
		<h2 class="text-2xl font-bold sm:text-3xl">Questions about your smile?</h2>
		<p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
			Book a visit with our dentists at 123 Smile Avenue, Austin — Mon–Fri 8am–6pm,
			Sat 9am–2pm. Call +1 (512) 555-0148 for same-day appointments.
		</p>
		<a
			href="/book-appointment"
			class="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-navy transition hover:bg-mist"
		>
			Book an appointment <Icon name="arrow-right" class="size-4" />
		</a>
	</div>
</article>

<!-- More articles -->
<section class="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:pb-20">
	<h2 class="text-2xl font-bold text-navy sm:text-3xl" use:reveal>More articles</h2>
	<div class="mt-8 grid gap-6 md:grid-cols-2">
		{#each others as other (other.slug)}
			<a
				href="/blog/{other.slug}"
				class="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:flex-row"
				use:reveal
			>
				<img
					src={other.image}
					alt={other.title}
					loading="lazy"
					class="aspect-[16/9] w-full object-cover sm:aspect-auto sm:w-48 sm:shrink-0"
				/>
				<span class="min-w-0 flex-1 p-5">
					<span class="text-xs font-bold text-brand">{other.category} · {other.readTime}</span>
					<span class="mt-2 block text-lg leading-snug font-bold text-navy group-hover:text-brand">
						{other.title}
					</span>
					<span class="mt-2 line-clamp-2 block text-sm leading-relaxed text-[#5B6B74]">
						{other.excerpt}
					</span>
				</span>
			</a>
		{/each}
	</div>
</section>
