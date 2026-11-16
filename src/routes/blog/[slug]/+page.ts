import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { blogPosts as posts } from '../../../lib/data/blog';

export function entries() {
	return posts.map((post) => ({ slug: post.slug }));
}

export const load: PageLoad = ({ params }) => {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Article not found');
	return { post };
};
