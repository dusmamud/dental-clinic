<script lang="ts">
	let { name, class: cls = '' }: { name: string; class?: string } = $props();

	const paths: Record<string, string> = {
		search:
			'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/>',
		bag: '<path d="M6 7h12l1 13H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
		menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
		close: '<path d="M6 6l12 12M18 6 6 18"/>',
		'arrow-right': '<path d="M4 12h15m-6-6 6 6-6 6"/>',
		check: '<path d="m4.5 12.5 5 5 10-11"/>',
		star: '<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-3-5.4 3 1.1-6L3.2 9.4l6.1-.8L12 3Z"/>',
		shield: '<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z"/><path d="m9 11.5 2.2 2.2L15.5 9"/>',
		truck: '<path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
		refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.6M20 3v4h-4"/>',
		sofa: '<path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><path d="M3 13a2 2 0 0 1 4 0v1h10v-1a2 2 0 0 1 4 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3Z"/><path d="M5 20v-2M19 20v-2"/>',
		leaf: '<path d="M5 19c0-9 5-14 14-14-1 9-6 14-14 14Z"/><path d="M5 19c3-5 7-9 11-11"/>',
		phone: '<path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
		mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
		pin: '<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
		'map-pin': '<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
		clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
		heart: '<path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z"/>',
		smile:
			'<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8"/><path d="M9 9.5h.01M15 9.5h.01"/>',
		sparkle:
			'<path d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z"/><path d="M19 15l.8 2.7L22.5 18.5l-2.7.8L19 22l-.8-2.7-2.7-.8 2.7-.8L19 15Z"/>',
		user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c1-3.5 3.8-5 7-5s6 1.5 7 5"/>',
		tooth:
			'<path d="M7 4.5C5 4.5 3.6 6 3.6 8.2c0 2.7 1.2 4.5 1.8 6.8.5 2 .8 5 1.7 5 1.2 0 .9-3.3 2-3.3h1.8c1.1 0 .8 3.3 2 3.3.9 0 1.2-3 1.7-5 .6-2.3 1.8-4.1 1.8-6.8 0-2.2-1.4-3.7-3.4-3.7-1.7 0-2.7 1.1-5 1.1s-3.3-1.1-5-1.1Z"/>',
		calendar:
			'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
		quote:
			'<path d="M10 8c-2.5 0-4 1.8-4 4.5 0 2 1.2 3.5 3 3.5 1.5 0 2.6-1.1 2.6-2.6 0-1.4-1-2.4-2.3-2.4-.3 0-.6 0-.8.1.3-1.4 1.2-2.3 2.6-2.6L10 8Z"/><path d="M20 8c-2.5 0-4 1.8-4 4.5 0 2 1.2 3.5 3 3.5 1.5 0 2.6-1.1 2.6-2.6 0-1.4-1-2.4-2.3-2.4-.3 0-.6 0-.8.1.3-1.4 1.2-2.3 2.6-2.6L20 8Z"/>',
		'chevron-down': '<path d="m6 9 6 6 6-6"/>',
		external: '<path d="M14 4h6v6M20 4 11 13"/><path d="M9 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>'
	};
</script>

<svg
	class={cls}
	viewBox="0 0 24 24"
	fill={name === 'star' ? 'currentColor' : 'none'}
	stroke="currentColor"
	stroke-width="1.8"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{@html paths[name] ?? ''}
</svg>
