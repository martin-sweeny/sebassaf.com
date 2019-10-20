import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import Header from './header'
import { white, primary } from '../utils/colours'

const fontStack = `montserrat, sans-serif`

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
			}

			a {
				color: ${primary};
			}
		`}
	/>
)

const Content = styled.section``

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
		render={data => (
			<>
				<GlobalStyle />

				<Header />
				<Content>
					<div>{children}</div>
				</Content>
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	heroProps: PropTypes.object,
}

export default Layout
