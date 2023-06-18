import { OGImageRoute } from 'astro-og-canvas';
import { allPages } from '~/content';
import { rtlLanguages } from '~/i18n/languages';
import { getLanguageFromURL } from '~/util';

/** Paths for all of our Markdown content we want to generate OG images for. */
const paths = process.env.SKIP_OG ? [] : allPages;

/** An object mapping file paths to file metadata. */
const pages = Object.fromEntries(paths.map(({ id, slug, data }) => [id, { data, slug }]));

export const { getStaticPaths, get } = OGImageRoute({
	param: 'path',

	pages,

	getImageOptions: async (_, { data, slug }: (typeof pages)[string]) => {
		return {
			title: data.title,
			description: data.description,
			dir: rtlLanguages.has(getLanguageFromURL(slug)) ? 'rtl' : 'ltr',
			logo: {
				path: './src/docs-logo.png',
			},
			border: { color: [255, 93, 1], width: 20, side: 'inline-start' },
			// border: { color: [220, 160, 0], width: 20, side: 'inline-start' },
			bgGradient: [
				[42, 35, 62],
				[23, 20, 36],
			],
			font: {
				title: {
					size: 78,
					families: [
						'Work Sans',
						'Noto Sans Black',
						'Noto Sans Arabic',
						'Noto Sans SC Black',
						'Noto Sans TC Black',
						'Noto Sans JP Black',
						'Noto Sans KR Black',
					],
					weight: 'ExtraBold',
				},
				description: {
					size: 45,
					lineHeight: 1.25,
					families: [
						'Work Sans',
						'Noto Sans',
						'Noto Sans Arabic',
						'Noto Sans SC',
						'Noto Sans TC',
						'Noto Sans JP',
						'Noto Sans KR',
					],
					weight: 'Normal',
				},
			},
			fonts: [
				'https://cdn.jsdelivr.net/npm/@fontsource/work-sans@5.0.3/files/work-sans-latin-400-normal.woff2',
				'https://cdn.jsdelivr.net/npm/@fontsource/work-sans@5.0.3/files/work-sans-latin-800-normal.woff2',
			],
		};
	},
});
