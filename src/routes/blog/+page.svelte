<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { blogPosts as posts } from '#lib/data/blog';
	import { imgSrcset } from '#lib/data/images';
</script>

<svelte:head>
	<title>Blog | NaviX Technologies</title>
</svelte:head>

<PageHero
	eyebrow="BLOG"
	title="Smile tips from our dentists"
	subtitle="Practical, honest advice on looking after your teeth — written by the people who care for them every day."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as post (post.slug)}
			<article
				class="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				use:reveal
			>
				<img
					src={post.image}
					srcset={imgSrcset(post.image)}
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
					width={post.image.includes('dr-anderson') ? 1280 : 1920}
					height={post.image.includes('dr-anderson') ? 1920 : 1280}
					alt={post.title}
					loading="lazy"
					class="aspect-[16/10] w-full object-cover"
				/>
				<div class="flex min-w-0 flex-1 flex-col p-6">
					<p class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-brand">
						<span class="rounded-full bg-mist px-3 py-1">{post.category}</span>
						<span class="font-semibold text-[#5B6B74]">{post.date}</span>
						<span class="font-semibold text-[#5B6B74]">{post.readTime}</span>
					</p>
					<h2 class="mt-3 text-xl font-bold text-navy">{post.title}</h2>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-[#5B6B74]">{post.excerpt}</p>
					<a
						href="/blog/{post.slug}"
						class="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-brand"
					>
						Read article <Icon name="arrow-right" class="size-4" />
					</a>
				</div>
			</article>
		{/each}
	</div>
</section>
