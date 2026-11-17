export type Testimonial = {
	name: string;
	initials: string;
	service: string;
	rating: number;
	text: string;
};

export const testimonials: Testimonial[] = [
	{
		name: 'Rachel M.',
		initials: 'RM',
		service: 'Smile Assessment',
		rating: 5,
		text: 'I was nervous about my first visit in years, but the team was so kind and patient. Everything was explained clearly and there was no pressure at all.'
	},
	{
		name: 'David K.',
		initials: 'DK',
		service: 'Dental Implants',
		rating: 5,
		text: 'Dr. Anderson replaced my missing tooth with an implant and it feels completely natural. The whole process was far easier than I expected.'
	},
	{
		name: 'Priya S.',
		initials: 'PS',
		service: 'Teeth Whitening',
		rating: 5,
		text: 'My smile is noticeably brighter after just one visit, and my teeth felt fine afterwards. I have already booked my six-month check-up.'
	},
	{
		name: 'Tom W.',
		initials: 'TW',
		service: 'Preventive Care',
		rating: 5,
		text: 'Our whole family comes here now. The kids actually enjoy their check-ups, and the pricing is always clear before any treatment starts.'
	},
	{
		name: 'Maria L.',
		initials: 'ML',
		service: 'Orthodontics — Clear Aligners',
		rating: 5,
		text: 'The clear aligners fitted easily into my work life — nobody at the office even noticed them. Seeing my smile preview before we started made the whole thing feel easy.'
	},
	{
		name: 'James R.',
		initials: 'JR',
		service: 'Root Canal Treatment',
		rating: 5,
		text: 'I put off my root canal for months because I was scared. Dr. Rodriguez was so calm and the treatment was over before I knew it — and the pain was gone that night.'
	},
	{
		name: 'Aisha K.',
		initials: 'AK',
		service: 'Pediatric Dentistry',
		rating: 5,
		text: 'My daughter asks when her next dentist visit is. Dr. Chen lets her pick the toothpaste flavour and explains everything — it feels like a visit to a friend.'
	},
	{
		name: 'Chris B.',
		initials: 'CB',
		service: 'Crowns & Fillings',
		rating: 4,
		text: 'My crown was fitted in two visits and matched my other teeth so well I forget which tooth it is. The written estimate before we started was exactly what I paid.'
	},
	{
		name: 'Sofia G.',
		initials: 'SG',
		service: 'Cosmetic Dentistry',
		rating: 5,
		text: 'I had bonding done before my sister’s wedding and the result looked completely natural. The team checked in the next day to make sure everything felt right.'
	}
];
