import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { team } from '../../../lib/data/team';

export function entries() {
	return team.map((member) => ({ slug: member.slug }));
}

export const load: PageLoad = ({ params }) => {
	const member = team.find((m) => m.slug === params.slug);
	if (!member) error(404, 'Team member not found');
	return { member };
};
