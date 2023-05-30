/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Getting Started', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Introduction', slug: 'introduction', key: 'introduction' },
	{ text: 'Installation', slug: 'install', key: 'install' },

	{ text: 'Add Fonts', header: true, type: 'learn', key: 'addFonts' },
	{ text: 'Custom Font', slug: 'font/custom-font', key: 'font/custom-font' },
	{ text: 'Google Fonts', slug: 'font/google-fonts', key: 'font/google-fonts' },
	{ text: 'Adobe Fonts', slug: 'font/adobe-fonts', key: 'font/adobe-fonts' },

	{ text: 'Integration', header: true, type: 'learn', key: 'integration' },
	{ text: 'Theme / Plugin Developers', slug: 'integration/developer', key: 'integration/developer' },
	{ text: 'Beaver Builder', slug: 'integration/beaver-builder', key: 'integration/beaver-builder' },
	{ text: 'Breakdance', slug: 'integration/breakdance', key: 'integration/breakdance' },
	{ text: 'Bricks', slug: 'integration/bricks', key: 'integration/bricks' },
	{ text: 'Builderius', slug: 'integration/builderius', key: 'integration/builderius' },
	{ text: 'Classic Editor', slug: 'integration/classic-editor', key: 'integration/classic-editor' },
	{ text: 'Cwicly', slug: 'integration/cwicly', key: 'integration/cwicly' },
	{ text: 'Divi', slug: 'integration/divi', key: 'integration/divi' },
	{ text: 'Elementor', slug: 'integration/elementor', key: 'integration/elementor' },
	{ text: 'GeneratePress', slug: 'integration/generatepress', key: 'integration/generatepress' },
	{ text: 'Greenshift', slug: 'integration/greenshift', key: 'integration/greenshift' },
	{ text: 'Gutenberg', slug: 'integration/gutenberg', key: 'integration/gutenberg' },
	{ text: 'Kadence WP', slug: 'integration/kadence-wp', key: 'integration/kadence-wp' },
	{ text: 'Oxygen', slug: 'integration/oxygen', key: 'integration/oxygen' },
	{ text: 'Spectra', slug: 'integration/spectra', key: 'integration/spectra' },
	{ text: 'Zion Builder', slug: 'integration/zion-builder', key: 'integration/zion-builder' },


	{ text: 'Misc', header: true, type: 'learn', key: 'misc' },
	{ text: 'Convert TTF to WOFF2', slug: 'misc/convert-ttf-woff2', key: 'misc/convert-ttf-woff2' },
	{ text: 'Without the Plugin', slug: 'misc/no-plugin', key: 'misc/no-plugin' },
] as const;
