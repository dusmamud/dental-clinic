<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import { page } from '$app/state';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children }: LayoutProps = $props();

	const siteUrl = 'https://dental-clinic.pages.dev';
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
