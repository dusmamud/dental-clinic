export type Service = {
	slug: string;
	name: string;
	short: string;
	description: string;
	icon: string;
	priceFrom: number;
	priceLabel: string;
	visits: string;
	duration: string;
	includes: string[];
	steps: { title: string; text: string }[];
};

export const services: Service[] = [
	{
		slug: 'smile-assessment',
		name: 'Smile Assessment',
		short: 'A full check of your teeth, gums and smile — and a clear plan for what comes next.',
		description:
			'Your first visit starts with a relaxed, unhurried smile assessment. We check your teeth and gums, take digital X-rays only if needed, and talk through anything that bothers you — from sensitivity to the look of your smile. You leave with a clear, honest picture of your oral health and a plan that fits your budget, with no pressure to book anything you do not need.',
		icon: 'smile',
		priceFrom: 49,
		priceLabel: 'From $49',
		visits: '1 visit',
		duration: '45 min',
		includes: ['Full oral exam', 'Digital X-rays if needed', 'Gum health check', 'Personal treatment plan'],
		steps: [
			{ title: 'Meet your dentist', text: 'A friendly chat about your dental history, concerns and goals.' },
			{ title: 'Examine & scan', text: 'A gentle exam of your teeth and gums, with digital X-rays only if needed.' },
			{ title: 'Your plan', text: 'A clear, written plan with options and transparent pricing — no surprises.' }
		]
	},
	{
		slug: 'preventive-care',
		name: 'Preventive Care',
		short: 'Check-ups and cleaning every six months to keep small problems small.',
		description:
			'Preventive care is the simplest way to protect your smile. Every six months we clean away plaque and tartar that brushing misses, check for early signs of decay and gum disease, and polish your teeth so they feel fresh. Regular visits catch problems early, when they are easier — and cheaper — to fix.',
		icon: 'shield',
		priceFrom: 89,
		priceLabel: 'From $89',
		visits: 'Every 6 months',
		duration: '60 min',
		includes: ['Full check-up', 'Professional cleaning & polish', 'Gum disease screening', 'Fluoride treatment'],
		steps: [
			{ title: 'Check-up', text: 'We examine your teeth, gums and bite for any early warning signs.' },
			{ title: 'Clean & polish', text: 'Plaque and tartar are gently removed and your teeth are polished.' },
			{ title: 'Stay on track', text: 'We book your next six-month visit and share simple at-home care tips.' }
		]
	},
	{
		slug: 'cosmetic-dentistry',
		name: 'Cosmetic Dentistry',
		short: 'Veneers, bonding and smile design for a smile you feel proud to show.',
		description:
			'Cosmetic dentistry is about more than looks — a confident smile changes how you feel every day. From subtle bonding and veneers to a full smile design, we plan every change with you, show you what is possible, and use natural-looking materials that match your teeth. The goal is a smile that looks like yours, only better.',
		icon: 'sparkle',
		priceFrom: 199,
		priceLabel: 'From $199',
		visits: '1–2 visits',
		duration: '60–90 min',
		includes: ['Smile design consultation', 'Veneers & bonding', 'Natural-looking materials', 'Aftercare guidance'],
		steps: [
			{ title: 'Design your smile', text: 'We talk through what you would like to change and plan the result together.' },
			{ title: 'Gentle treatment', text: 'Veneers or bonding are placed with care, matched to your natural tooth shade.' },
			{ title: 'Enjoy the result', text: 'A final check, polish and simple tips to keep your new smile looking great.' }
		]
	},
	{
		slug: 'restorative-treatment',
		name: 'Restorative Treatment',
		short: 'Fillings, crowns and root canals that repair damage and stop the pain.',
		description:
			'When a tooth is damaged, decayed or painful, restorative treatment brings it back to full strength. We offer tooth-coloured fillings, durable crowns and gentle root canal treatment, always with effective numbing and a calm, unhurried approach. Most treatments are completed in one or two visits, so you can get back to eating and smiling comfortably.',
		icon: 'tooth',
		priceFrom: 799,
		priceLabel: 'From $799',
		visits: '1–2 visits',
		duration: '60–90 min',
		includes: ['Tooth-coloured fillings', 'Crowns & bridges', 'Gentle root canal treatment', 'Pain relief first'],
		steps: [
			{ title: 'Diagnose the problem', text: 'We find the cause of the pain or damage and explain your options clearly.' },
			{ title: 'Repair the tooth', text: 'The damaged area is treated gently, with numbing that actually works.' },
			{ title: 'Protect & review', text: 'We check your bite, restore the tooth fully and book a follow-up if needed.' }
		]
	},
	{
		slug: 'dental-implants',
		name: 'Dental Implants',
		short: 'Permanent, natural-feeling replacements for missing teeth.',
		description:
			'Missing teeth affect how you eat, speak and smile — implants are the closest thing to getting your natural tooth back. A small titanium post is placed in the jaw, where it bonds with the bone, and a natural-looking crown is fitted on top. Implants look, feel and work like real teeth, and with good care they can last for many years.',
		icon: 'tooth',
		priceFrom: 1499,
		priceLabel: 'From $1,499',
		visits: '2–3 visits',
		duration: '90 min',
		includes: ['3D scan & planning', 'Implant placement', 'Natural-looking crown', 'Long-term aftercare'],
		steps: [
			{ title: 'Plan with 3D scans', text: 'We scan your jaw in 3D and plan the implant position precisely.' },
			{ title: 'Place the implant', text: 'The implant is placed gently under local anaesthetic, with aftercare explained.' },
			{ title: 'Fit your new tooth', text: 'Once healed, a crown matched to your teeth is fitted and checked.' }
		]
	},
	{
		slug: 'teeth-whitening',
		name: 'Teeth Whitening',
		short: 'Safe, professional whitening for a noticeably brighter smile in one visit.',
		description:
			'Professional whitening lifts everyday stains from coffee, tea and time — safely and evenly. We check your teeth and gums first, protect sensitive areas, and use a clinic-strength gel that gives a brighter result than shop-bought kits. Most patients see a visible difference in a single one-hour visit.',
		icon: 'sparkle',
		priceFrom: 199,
		priceLabel: 'From $199',
		visits: '1 visit',
		duration: '60 min',
		includes: ['Pre-whitening check', 'Clinic-strength whitening', 'Sensitivity care', 'Take-home maintenance tips'],
		steps: [
			{ title: 'Check first', text: 'We make sure whitening is safe for your teeth and gums.' },
			{ title: 'Whiten in-clinic', text: 'A professional gel is applied and monitored for about an hour.' },
			{ title: 'Keep it bright', text: 'Simple tips and, if you like, a take-home kit to top up the result.' }
		]
	}
];
