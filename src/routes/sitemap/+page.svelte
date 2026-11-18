<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { services } from '#lib/data/services';
	import { team } from '#lib/data/team';
	import { blogPosts } from '#lib/data/blog';

	type Link = { label: string; href: string };
	type Section = { title: string; links: Link[] };

	const sections: Section[] = [
		{
			title: 'Main pages',
			links: [
				{ label: 'Home', href: '/' },
				{ label: 'About Us', href: '/about' },
				{ label: 'Contact', href: '/contact' },
				{ label: 'Book an Appointment', href: '/book-appointment' },
				{ label: 'Frequently Asked Questions', href: '/faq' }
			]
		},
		{
			title: 'Services',
			links: [
				{ label: 'All Services', href: '/services' },
				...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))
			]
		},
		{
			title: 'Our team',
			links: [
				{ label: 'Meet the Team', href: '/team' },
				...team.map((m) => ({ label: m.name, href: `/team/${m.slug}` }))
			]
		},
		{
			title: 'Blog',
			links: [
				{ label: 'Blog', href: '/blog' },
				...blogPosts.map((p) => ({ label: p.title, href: `/blog/${p.slug}` }))
			]
		},
		{
			title: 'Patient information',
			links: [
				{ label: 'New Patients', href: '/new-patients' },
				{ label: 'Insurance & Financing', href: '/insurance' },
				{ label: 'Pricing', href: '/pricing' },
				{ label: 'Dental Emergency', href: '/emergency' },
				{ label: 'Patient Reviews', href: '/reviews' },
				{ label: 'Smile Gallery', href: '/smile-gallery' }
			]
		},
		{
			title: 'Legal & site',
			links: [
				{ label: 'Privacy Policy', href: '/privacy-policy' },
				{ label: 'Terms of Service', href: '/terms' },
				{ label: 'Disclaimer', href: '/disclaimer' },
				{ label: 'Sitemap (this page)', href: '/sitemap' }
			]
		}
	];

	const totalLinks = sections.reduce((n, s) => n + s.links.length, 0);
</script>

<svelte:head>
	<title>Sitemap | NaviX Technologies</title>
</svelte:head>

<PageHero
	eyebrow="SITEMAP"
	title="Every page on our site"
	subtitle="All {totalLinks} pages of the NaviX Technologies website, grouped by section."
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each sections as section}
			<div
				class="min-w-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
				use:reveal
			>
				<h2 class="text-lg font-bold text-navy">{section.title}</h2>
				<ul class="mt-4 space-y-2.5">
					{#each section.links as link}
						<li class="min-w-0">
							<a
								href={link.href}
								class="group flex min-w-0 items-center gap-2 text-sm text-[#5B6B74] transition hover:text-brand"
							>
								<Icon name="arrow-right" class="size-4 shrink-0 text-brand" />
								<span class="min-w-0 group-hover:underline">{link.label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<p class="mt-10 text-center text-sm text-[#5B6B74]" use:reveal>
		Looking for the machine-readable sitemap?
		<a class="font-semibold text-brand hover:underline" href="/sitemap.xml">sitemap.xml</a>
		· Can't find what you need? Call
		<a class="font-semibold text-brand hover:underline" href="tel:+15125550148">+1 (512) 555-0148</a>.
	</p>
</section>
