module.exports = {
	siteMetadata: {
		title: `Sebastian Assaf`,
		description: ``,
		author: `Martin Sweeny`,
	},
	plugins: [
		`gatsby-plugin-offline`,
		`gatsby-plugin-emotion`,
		+`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
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
	],
}
