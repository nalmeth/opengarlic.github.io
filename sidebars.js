/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docSidebar: [
	'intro',
	'runprodserver',
	{
		type: 'category',
		label: 'Tutorial',
		collapsible: false,
		collapsed: false,
		link: {
			type: "generated-index",
			title: "Tutorial"
		},
		items: [
			'Tutorial/creatingagame',
			{
				type: 'category',
				label: 'Components',
				collapsed: true,
				link: {
					type: "generated-index",
					title: "Components",
					description: "Components required to build a game"
				},
				items: [
					'Tutorial/Components/modes',
					'Tutorial/Components/screens',
					'Tutorial/Components/widgets'
				]
			},
			'Tutorial/rundevserver',
			'Tutorial/events'
		]
	}

],

};

module.exports = sidebars;
