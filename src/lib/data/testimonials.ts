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
	}
];
