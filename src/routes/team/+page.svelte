<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { team } from '#lib/data/team';
</script>

<svelte:head>
	<title>Our Team | NaviX Technologies</title>
	<meta
		name="description"
		content="Meet the dentists behind your smile — Dr. Michael Anderson, Dr. Sarah Chen, Dr. James Patel and Dr. Emily Rodriguez at NaviX Technologies, Austin."
	/>
</svelte:head>

<PageHero
	eyebrow="OUR TEAM"
	title="Meet the dentists behind your smile"
	subtitle="Experienced, gentle and genuinely friendly — get to know the people who will look after your smile."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
		{#each team as member (member.slug)}
			<article
				class="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				use:reveal
			>
				{#if member.image}
					<img
						src={member.image}
						alt="Portrait of {member.name}"
						loading="lazy"
						class="aspect-[4/3] w-full object-cover object-top"
					/>
				{:else}
					<div class="grid aspect-[4/3] w-full place-items-center bg-brand">
						<span class="grid size-24 place-items-center rounded-full bg-white/20 text-3xl font-extrabold text-white ring-4 ring-white/30">
							{member.initials}
						</span>
					</div>
				{/if}
				<div class="flex min-w-0 flex-1 flex-col p-5">
					<h2 class="text-lg font-bold text-navy">{member.name}</h2>
					<p class="mt-0.5 text-sm font-semibold text-brand">{member.role}</p>
					<p class="mt-2 flex items-center gap-1.5 text-sm text-[#5B6B74]">
						<span class="flex text-amber-400" aria-label="Rated {member.rating} out of 5">
							{#each Array(5) as _}<Icon name="star" class="size-4" />{/each}
						</span>
						<span class="font-bold text-navy">{member.rating}</span>
						<span>({member.reviews} reviews)</span>
					</p>
					<p class="mt-2 text-xs font-semibold text-[#5B6B74]">
						{member.experience} experience
					</p>
					<p class="mt-3 flex flex-wrap gap-2">
						{#each member.specialties.slice(0, 2) as specialty}
							<span
								class="rounded-full bg-mist px-3 py-1 text-[11px] font-bold text-navy"
							>
								{specialty}
							</span>
						{/each}
					</p>
					<a
						href="/team/{member.slug}"
						class="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-brand"
					>
						View profile <Icon name="arrow-right" class="size-4" />
					</a>
				</div>
			</article>
		{/each}
	</div>

	<div class="mt-12 rounded-3xl bg-mist px-6 py-10 text-center sm:px-12" use:reveal>
		<h2 class="text-2xl font-bold text-navy sm:text-3xl">Not sure who to book with?</h2>
		<p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#5B6B74] sm:text-base">
			Call us at +1 (512) 555-0148 and we will match you with the right dentist for your
			needs — or book online in under two minutes.
		</p>
		<a
			href="/book-appointment"
			class="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90"
		>
			Book an appointment <Icon name="arrow-right" class="size-4" />
		</a>
	</div>
</section>
