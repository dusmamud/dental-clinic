<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import { page } from '$app/state';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children }: LayoutProps = $props();

	const siteUrl = 'https://navix-dental.pages.dev';
	const canonical = $derived(`${siteUrl}${page.url.pathname}`);

	const dentistJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Dentist',
		name: 'NaviX Technologies',
		url: siteUrl,
		telephone: '+1-512-555-0148',
		email: 'hello@navixdental.com',
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '123 Smile Avenue',
			addressLocality: 'Austin',
			addressRegion: 'TX',
			postalCode: '78701',
			addressCountry: 'US'
		},
		geo: { '@type': 'GeoCoordinates', latitude: 30.2672, longitude: -97.7431 },
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '08:00',
				closes: '18:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: 'Saturday',
				opens: '09:00',
				closes: '14:00'
			}
		]
	};
</script>

<svelte:head>
	<title>NaviX Technologies — Family-Friendly Dental Care in Austin, TX</title>
	<meta
		name="description"
		content="Gentle, family-friendly dental care in Austin, TX. Smile assessments, preventive care, cosmetic dentistry, implants and whitening — book your visit today."
	/>
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="NaviX Technologies" />
	<meta property="og:title" content="NaviX Technologies — Family-Friendly Dental Care in Austin, TX" />
	<meta
		property="og:description"
		content="Gentle care for every smile. Advanced technology for a healthier tomorrow."
	/>
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={`${siteUrl}/images/hero.webp`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="NaviX Technologies — Family-Friendly Dental Care in Austin, TX" />
	<meta
		name="twitter:description"
		content="Gentle care for every smile. Advanced technology for a healthier tomorrow."
	/>
	<meta name="twitter:image" content={`${siteUrl}/images/hero.webp`} />
	{@html `<script type="application/ld+json">${JSON.stringify(dentistJsonLd)}</script>`}
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />
<!-- Footer spacer so the sticky mobile bar never covers legal links -->
<div class="h-16 lg:hidden" aria-hidden="true"></div>

<!-- Sticky mobile bottom bar -->
<div
	class="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur lg:hidden"
>
	<a
		href="tel:+15125550148"
		class="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand text-sm font-bold text-brand"
		>Call +1 (512) 555-0148</a
	>
	<a
		href="/book-appointment"
		class="flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand text-sm font-bold text-white shadow-lg shadow-teal-700/25"
		>Book Appointment</a
	>
</div>
