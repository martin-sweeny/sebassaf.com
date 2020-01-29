// NOTE: This shouldn't be necessary, but I can't seem to get the environment
// vars to work without explicitly running dotenv
require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: `Sebastian Assaf`,
		description: ``,
		author: `Martin Sweeny`,
	},
	plugins: [
		`gatsby-plugin-offline`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: `${__dirname}/src/images`, // See below to configure properly
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#4B5F32`,
				display: `minimal-ui`,
				icon: `src/images/favicon.svg`,
			},
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: process.env.GTM_ID,
			},
		},
	],
}
