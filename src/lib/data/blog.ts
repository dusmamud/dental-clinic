export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	category: string;
	image: string;
	content: string[];
};

export const blogPosts: BlogPost[] = [
	{
		slug: 'how-often-should-you-visit-the-dentist',
		title: 'How Often Should You Visit the Dentist?',
		excerpt:
			'Most adults benefit from a check-up every six months — here is why that rhythm works, and when you might need to come sooner.',
		date: 'November 10, 2026',
		readTime: '4 min read',
		category: 'Preventive Care',
		image: '/images/about.webp',
		content: [
			'For most adults, a dental check-up every six months is a good rhythm. It is frequent enough for your dentist to spot early signs of decay, gum disease or wear, and it keeps your cleaning routine on track between visits.',
			'At a routine visit, your dentist checks your teeth and gums, looks at any fillings or crowns, and screens for problems that do not hurt yet. Many dental problems are painless at first, which is why waiting for pain is not a good strategy.',
			'A professional cleaning removes plaque and tartar that brushing and flossing cannot reach, especially along the gum line and between teeth. Even careful brushers build up tartar over time, and once it hardens, only a dental cleaning can remove it.',
			'Some people need to visit more often — for example, if you have gum disease, a history of frequent cavities, diabetes, or you smoke. Your dentist can suggest a schedule that fits your situation, which may be every three or four months.',
			'Children also benefit from regular visits, usually every six months. Early visits help children get comfortable with the dentist, and they let the dentist check how teeth are coming through and whether fluoride or sealants would help.',
			'If you notice bleeding gums, persistent bad breath, sensitivity, or a tooth that feels different, do not wait for your next routine visit — book sooner. And if you are unsure, ask your dentist: a quick question is always better than a guess.'
		]
	},
	{
		slug: 'teeth-whitening-what-to-expect',
		title: 'Teeth Whitening: What to Expect',
		excerpt:
			'Professional whitening can brighten your smile in about an hour. Here is how it works, who it suits, and how to keep the result.',
		date: 'October 28, 2026',
		readTime: '5 min read',
		category: 'Cosmetic Dentistry',
		image: '/images/hero.webp',
		content: [
			'Teeth naturally pick up stains from coffee, tea, red wine and time itself. Professional whitening uses a clinic-strength gel to lift those stains from the enamel, giving a brighter result than shop-bought strips or toothpaste.',
			'Before whitening, your dentist checks your teeth and gums to make sure the treatment is suitable for you. Whitening works best on natural teeth — it does not change the colour of fillings, crowns or veneers, which is something to discuss first.',
			'During an in-clinic whitening visit, your gums and lips are protected, the gel is applied, and the shade is monitored as it develops. The whole appointment usually takes about an hour, and most people see a visible difference the same day.',
			'Some people notice temporary sensitivity for a day or two after whitening. This is common and usually settles on its own. Your dentist can suggest a gentler approach or a desensitising toothpaste if your teeth are already sensitive.',
			'The result is not permanent — how long it lasts depends on your habits. Coffee, tea, red wine and smoking can re-stain teeth over time, while good brushing and regular cleanings help the brightness last longer.',
			'If you are thinking about whitening for a special occasion, book a few weeks ahead so there is time for a check-up first. And as always, ask your dentist what is realistic for your teeth — a natural, even brightness usually looks better than the whitest possible shade.'
		]
	},
	{
		slug: 'dental-implants-a-complete-guide',
		title: 'Dental Implants: A Complete Guide',
		excerpt:
			'Implants are the closest thing to a natural tooth. This guide explains how they work, who they suit, and what the treatment involves.',
		date: 'October 12, 2026',
		readTime: '6 min read',
		category: 'Restorative Treatment',
		image: '/images/clinic.webp',
		content: [
			'A dental implant replaces a missing tooth from the root up. A small titanium post is placed in the jawbone, where it bonds with the bone over time, and a crown that looks like a natural tooth is fitted on top.',
			'Implants are used to replace a single tooth, several teeth, or to support a bridge or denture. Because they are anchored in the jaw, they feel stable when eating and speaking, and they do not rely on neighbouring teeth for support.',
			'Treatment usually happens in stages. First, your dentist plans the implant with X-rays or a 3D scan and checks that there is enough bone. Then the implant is placed under local anaesthetic, and healing takes a few months while the implant bonds with the bone.',
			'Once healing is complete, an impression is taken and a crown is made to match the shape and shade of your other teeth. The crown is then fitted, and your dentist checks your bite so the new tooth feels comfortable.',
			'Good oral hygiene matters more than ever with implants. Brushing, flossing and regular check-ups help keep the gum around the implant healthy, and most implants last for many years with proper care.',
			'Not everyone is a candidate straight away — for example, if there is not enough bone, or if gum disease needs treating first. Your dentist can explain the options, the timeline and the cost honestly, and whether an implant, bridge or denture is the best fit for you.'
		]
	}
];
