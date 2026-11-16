export type TeamMember = {
	slug: string;
	name: string;
	role: string;
	initials: string;
	rating: number;
	reviews: number;
	experience: string;
	specialties: string[];
	bio: string;
	education: string[];
	image?: string;
};

export const team: TeamMember[] = [
	{
		slug: 'dr-michael-anderson',
		name: 'Dr. Michael Anderson',
		role: 'Lead Dental Specialist',
		initials: 'MA',
		rating: 4.9,
		reviews: 280,
		experience: '15+ years',
		specialties: ['Cosmetic & Restorative Dentistry', 'Dental Implants', 'Smile Design'],
		bio: 'Dr. Anderson leads the NaviX team with over 15 years of experience in cosmetic and restorative dentistry. He is known for a calm, painless-first approach and for explaining every option in plain English before treatment begins.',
		education: ['DDS, University of Texas School of Dentistry', 'Advanced Implantology Certification'],
		image: '/images/dr-anderson.webp'
	},
	{
		slug: 'dr-sarah-chen',
		name: 'Dr. Sarah Chen',
		role: 'Pediatric & Family Dentistry',
		initials: 'SC',
		rating: 4.9,
		reviews: 190,
		experience: '12+ years',
		specialties: ['Children’s Dentistry', 'Family Check-ups', 'Preventive Care'],
		bio: 'Dr. Chen makes dental visits something kids actually look forward to, with a gentle manner and plenty of patience. She looks after whole families, from first check-ups to regular six-month care.',
		education: ['DDS, Baylor College of Dentistry', 'Pediatric Dentistry Residency']
	},
	{
		slug: 'dr-james-patel',
		name: 'Dr. James Patel',
		role: 'Orthodontics — Invisalign',
		initials: 'JP',
		rating: 4.8,
		reviews: 160,
		experience: '10+ years',
		specialties: ['Invisalign Clear Aligners', 'Teeth Straightening', 'Bite Correction'],
		bio: 'Dr. Patel helps patients of all ages straighten their teeth with clear aligners and modern orthodontics. He uses 3D scanning to plan every case, so patients can preview their new smile before treatment starts.',
		education: ['DDS, University of Michigan School of Dentistry', 'MS in Orthodontics']
	},
	{
		slug: 'dr-emily-rodriguez',
		name: 'Dr. Emily Rodriguez',
		role: 'Endodontics — Root Canal',
		initials: 'ER',
		rating: 4.9,
		reviews: 140,
		experience: '11+ years',
		specialties: ['Root Canal Treatment', 'Tooth Pain Relief', 'Endodontic Retreatment'],
		bio: 'Dr. Rodriguez specialises in root canal treatment and relieving tooth pain — often in a single, comfortable visit. Her patients regularly say the treatment was far easier than they expected.',
		education: ['DDS, UCLA School of Dentistry', 'Endodontics Specialty Training']
	}
];
