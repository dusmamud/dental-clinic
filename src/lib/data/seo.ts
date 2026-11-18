import { services } from './services';
import { team } from './team';
import { blogPosts } from './blog';

export const SITE_URL = 'https://navix-dental.pages.dev';

export type SeoEntry = {
	title: string;
	description: string;
	image: string;
	type?: 'website' | 'article';
	publishedTime?: string;
};

const MONTHS: Record<string, string> = {
	January: '01',
	February: '02',
	March: '03',
	April: '04',
	May: '05',
	June: '06',
	July: '07',
	August: '08',
	September: '09',
	October: '10',
	November: '11',
	December: '12'
};

/** 'November 10, 2026' -> '2026-11-10' */
export function toIsoDate(dateStr: string): string {
	const [month, day, year] = dateStr.replace(',', '').split(' ');
	return `${year}-${MONTHS[month]}-${day.padStart(2, '0')}`;
}

/** Truncate at a word boundary to at most `max` chars, appending an ellipsis. */
function truncate(text: string, max = 155): string {
	if (text.length <= max) return text;
	const cut = text.slice(0, max - 1);
	const lastSpace = cut.lastIndexOf(' ');
	return `${cut.slice(0, lastSpace > 0 ? lastSpace : cut.length)}…`;
}

const DEFAULT_IMAGE = '/images/hero.webp';

export const SEO_BY_PATH: Record<string, SeoEntry> = {
	'/': {
		title: 'NaviX Technologies | Family Dental Care, Austin',
		description:
			'Gentle, family-friendly dental care in Austin, TX. Smile assessments, preventive care, cosmetic dentistry, implants and whitening — book your visit today.',
		image: DEFAULT_IMAGE
	},
	'/services': {
		title: 'Our Services | NaviX Technologies',
		description:
			'Dental services for every smile — checkups, cleanings, cosmetic dentistry, restorative treatment, implants and whitening at NaviX Technologies in Austin, TX.',
		image: DEFAULT_IMAGE
	},
	'/about': {
		title: 'About Us | NaviX Technologies',
		description:
			"Care with compassion and advanced technology — meet the team behind NaviX Technologies, Austin's family dental clinic since 2010.",
		image: DEFAULT_IMAGE
	},
	'/team': {
		title: 'Our Team | NaviX Technologies',
		description:
			'Meet the dentists behind your smile — Dr. Michael Anderson, Dr. Sarah Chen, Dr. James Patel and Dr. Emily Rodriguez at NaviX Technologies, Austin.',
		image: DEFAULT_IMAGE
	},
	'/blog': {
		title: 'Blog | NaviX Technologies',
		description:
			'Smile tips from our dentists — checkups, whitening, implants and everyday oral care, explained simply by the NaviX Technologies team.',
		image: DEFAULT_IMAGE
	},
	'/book-appointment': {
		title: 'Book an Appointment | NaviX Technologies',
		description:
			"Book a dental visit at NaviX Technologies in Austin, TX. Pick a service, date and time — we'll confirm by phone or email.",
		image: DEFAULT_IMAGE
	},
	'/contact': {
		title: 'Contact Us | NaviX Technologies',
		description:
			'Visit NaviX Technologies at 123 Smile Avenue, Austin, TX 78701, or call +1 (512) 555-0148. Open Mon–Fri 8am–6pm and Sat 9am–2pm.',
		image: DEFAULT_IMAGE
	},
	'/faq': {
		title: 'Frequently Asked Questions | NaviX Technologies',
		description:
			'Answers to common questions about visiting NaviX Technologies in Austin — appointments, insurance, costs, whitening, implants and more.',
		image: DEFAULT_IMAGE
	},
	'/new-patients': {
		title: 'New Patients | NaviX Technologies',
		description:
			'Your first visit to NaviX Technologies in Austin: what to expect, what to bring, new-patient forms, insurance and our 24-hour cancellation policy.',
		image: DEFAULT_IMAGE
	},
	'/insurance': {
		title: 'Dental Insurance & Financing | NaviX Technologies',
		description:
			'NaviX Technologies accepts Delta Dental, Cigna, MetLife, Aetna, UnitedHealthcare and Humana, plus CareCredit and in-house payment plans. Uninsured patients welcome.',
		image: DEFAULT_IMAGE
	},
	'/pricing': {
		title: 'Transparent Pricing | NaviX Technologies',
		description:
			'Clear starting prices for every NaviX Technologies treatment — from smile assessments to implants and clear aligners. Exact quotes follow a personal assessment.',
		image: DEFAULT_IMAGE
	},
	'/emergency': {
		title: 'Dental Emergency | NaviX Technologies',
		description:
			'Dental emergency in Austin? Call NaviX Technologies on +1 (512) 555-0148 for same-day emergency appointments — cracked tooth, severe pain, knocked-out tooth and more.',
		image: DEFAULT_IMAGE
	},
	'/reviews': {
		title: 'Patient Reviews | NaviX Technologies',
		description:
			'NaviX Technologies is rated 4.9/5 from 280+ patient reviews. Read what patients say about our Austin dental clinic — demo reviews shared with permission.',
		image: DEFAULT_IMAGE
	},
	'/smile-gallery': {
		title: 'Smile Gallery | NaviX Technologies',
		description:
			'Illustrative smile results from NaviX Technologies in Austin — whitening, clear aligners, veneers, implants and crowns. Demo examples, not real patients.',
		image: DEFAULT_IMAGE
	},
	'/sitemap': {
		title: 'Sitemap | NaviX Technologies',
		description:
			'Every page on the NaviX Technologies website — services, team, blog, patient information and legal pages.',
		image: DEFAULT_IMAGE
	},
	'/privacy-policy': {
		title: 'Privacy Policy | NaviX Technologies',
		description:
			'Privacy policy for the NaviX Technologies demo website: what the demo forms collect, where it is stored, and how to reach us.',
		image: DEFAULT_IMAGE
	},
	'/terms': {
		title: 'Terms of Use | NaviX Technologies',
		description:
			'Terms of use for the NaviX Technologies demo website: demo content, illustrative prices, and appointment requests.',
		image: DEFAULT_IMAGE
	},
	'/disclaimer': {
		title: 'Disclaimer | NaviX Technologies',
		description:
			'Disclaimer for the NaviX Technologies demo website: mock content, not medical advice, and what to do in a dental emergency.',
		image: DEFAULT_IMAGE
	}
};

for (const service of services) {
	SEO_BY_PATH[`/services/${service.slug}`] = {
		title: `${service.name} | NaviX Technologies`,
		description: service.short,
		image: DEFAULT_IMAGE
	};
}

for (const member of team) {
	SEO_BY_PATH[`/team/${member.slug}`] = {
		title: `${member.name} | NaviX Technologies`,
		description: truncate(member.bio),
		image: member.image ?? DEFAULT_IMAGE
	};
}

for (const post of blogPosts) {
	SEO_BY_PATH[`/blog/${post.slug}`] = {
		title: `${post.title} | NaviX Blog`,
		description: post.excerpt,
		image: post.image,
		type: 'article',
		publishedTime: toIsoDate(post.date)
	};
}

export const DEFAULT_SEO: SeoEntry = SEO_BY_PATH['/'];
