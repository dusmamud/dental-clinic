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
	},
	{
		slug: 'orthodontics-aligners',
		name: 'Orthodontics — Clear Aligners',
		short: 'Invisalign clear aligners that straighten teeth discreetly, with a 3D preview of your new smile.',
		description:
			'Clear aligners straighten your teeth without brackets or wires. We scan your teeth in 3D, show you a preview of your finished smile before you start, and plan each aligner in the series. You wear the aligners day and night, take them out to eat and brush, and come back every few weeks so we can check your progress. Most treatments take 6–18 months, depending on how much movement is needed.',
		icon: 'smile',
		priceFrom: 3499,
		priceLabel: 'From $3,499',
		visits: 'Every 6–8 weeks',
		duration: '6–18 months',
		includes: ['3D scan & smile preview', 'Invisalign clear aligners', 'Retainers included', 'Progress check-ups'],
		steps: [
			{ title: 'Scan & preview', text: 'A 3D scan of your teeth lets you preview your new smile before treatment begins.' },
			{ title: 'Wear your aligners', text: 'Change to a new set every 1–2 weeks and visit us every 6–8 weeks for a check.' },
			{ title: 'Retain your smile', text: 'Retainers keep your teeth in place once treatment is finished.' }
		]
	},
	{
		slug: 'pediatric-dentistry',
		name: 'Pediatric Dentistry',
		short: 'Gentle, friendly dental care for children — from first check-ups to sealants and fluoride.',
		description:
			'Children deserve a dentist who makes them feel safe. First visits are kept short and friendly, with plenty of time to look around, ask questions and get comfortable in the chair. We check how teeth are coming through, offer fluoride and sealants where they help, and give parents simple at-home tips. Dr. Sarah Chen leads our children’s care, and parents are welcome in the room throughout.',
		icon: 'heart',
		priceFrom: 69,
		priceLabel: 'From $69',
		visits: 'Every 6 months',
		duration: '30–45 min',
		includes: ['Gentle first visits', 'Fluoride & sealants', 'Growth & development checks', 'Parents welcome in the room'],
		steps: [
			{ title: 'A friendly first visit', text: 'A short, relaxed introduction — a ride in the chair, a look around, no pressure.' },
			{ title: 'Check-up & clean', text: 'A gentle exam, cleaning and fluoride, with sealants if they would help.' },
			{ title: 'Tips for home', text: 'Simple brushing and diet tips for parents, and the next six-month visit booked.' }
		]
	},
	{
		slug: 'root-canal',
		name: 'Root Canal Treatment',
		short: 'Dedicated root canal care that relieves tooth pain — usually in a single, comfortable visit.',
		description:
			'Root canal treatment saves a tooth that is badly infected or damaged inside. The infected tissue is gently removed, the inside of the tooth is cleaned and sealed, and the tooth is restored — usually with a crown. Dr. Emily Rodriguez, our endodontics specialist, performs the treatment with effective numbing and a calm, unhurried approach, so most patients say it was far easier than they expected. Restorative treatment also mentions root canal care in general; this dedicated service covers the full root canal process in detail.',
		icon: 'tooth',
		priceFrom: 899,
		priceLabel: 'From $899',
		visits: '1–2 visits',
		duration: '60–90 min',
		includes: ['Pain relief first', 'Digital X-ray diagnosis', 'Single-visit treatment where possible', 'Crown advice & follow-up'],
		steps: [
			{ title: 'Diagnose the cause', text: 'Digital X-rays find the source of the pain and confirm a root canal is the right fix.' },
			{ title: 'Gentle treatment', text: 'The tooth is numbed, the infection is cleaned out and the tooth is sealed.' },
			{ title: 'Restore & review', text: 'A crown is usually fitted to protect the tooth, with a follow-up check to confirm healing.' }
		]
	},
	{
		slug: 'crowns-fillings',
		name: 'Crowns & Fillings',
		short: 'Tooth-coloured fillings and durable crowns that repair damage and restore your bite.',
		description:
			'When a tooth is chipped, cracked or decayed, a filling or crown brings it back to full strength. Small damage is repaired with a tooth-coloured filling matched to your natural shade, while larger damage is protected with a custom-made crown. We use digital impressions where possible, check your bite carefully, and most fillings and crowns are completed in one or two visits.',
		icon: 'sparkle',
		priceFrom: 199,
		priceLabel: 'From $199',
		visits: '1–2 visits',
		duration: '45–90 min',
		includes: ['Tooth-coloured fillings', 'Custom-made crowns', 'Digital impressions', 'Bite check & polish'],
		steps: [
			{ title: 'Assess the damage', text: 'We examine the tooth and explain whether a filling or a crown is the better fix.' },
			{ title: 'Repair the tooth', text: 'Decay is removed and the filling or crown is fitted, matched to your natural teeth.' },
			{ title: 'Check & protect', text: 'Your bite is checked, the tooth is polished, and we book a review if needed.' }
		]
	}
];
