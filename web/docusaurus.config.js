// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Sushrit\'s Docs',
	tagline: 'Centralizing all my learnings.',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://sushritpasupuleti.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'SushritPasupuleti', // Usually your GitHub org/user name.
	projectName: 'docs', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'Sushrit\'s Docs',
				logo: {
					alt: 'Sushrit\'s Docs Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Start here',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Start here',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Social',
						items: [
							{
								label: 'Portfolio',
								href: 'https://sushritpasupuleti.github.io',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/SushritPasupuleti',
							},
							{
								label: 'YouTube',
								href: 'https://www.youtube.com/channel/UCUDlGMaGAQctgQJTRoBHgAw',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/sushrit_lawliet',
							},
							{
								label: 'LinkedIn',
								href: 'https://www.linkedin.com/in/sushritpasupuleti/',
							},
							{
								label: 'Medium',
								href: 'https://medium.com/@sushrit.pk21',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/SushritPasupuleti',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Sushrit Pasupuleti. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
