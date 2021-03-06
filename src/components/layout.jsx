import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import Biography from '../components/biography'
import Contact from '../components/contact'
import Header from './header'
import Footer from './footer'

import { white, primary } from '../utils/colours'

const fontStack = `montserrat, sans-serif`

export const breakpoints = {
	tablet: `768px`,
}

const GlobalStyle = () => (
	<Global
		styles={css`
			* {
				margin: 0;
				padding: 0;
			}

			body {
				background: ${white};
				font-family: ${fontStack};
				overflow-x: hidden;
			}

			a {
				color: ${primary};
			}
		`}
	/>
)

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={() => (
			<>
				<GlobalStyle />
				<Header />

				{children}

				<Contact />
				<MediaQuery minWidth={768}>
					<Biography />
				</MediaQuery>
				<Footer />
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	heroProps: PropTypes.object,
}

export default Layout
