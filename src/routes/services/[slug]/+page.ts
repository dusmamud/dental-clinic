import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { services } from '../../../lib/data/services';

export function entries() {
	return services.map((service) => ({ slug: service.slug }));
}

export const load: PageLoad = ({ params }) => {
	const service = services.find((s) => s.slug === params.slug);
	if (!service) error(404, 'Service not found');
	return { service };
};
