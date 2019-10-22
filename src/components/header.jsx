import React from 'react'
import styled from '@emotion/styled'
import MediaQuery from 'react-responsive'
import { Link } from 'gatsby'

import { breakpoints } from './layout'

import { dark, secondary, accent, white } from '../utils/colours'

import MenuIcon from '../images/icon-menu.svg'

const HEADER_HEIGHT = '78px'

const styles = {
	Header: styled.header`
		height: ${HEADER_HEIGHT};
		position: fixed;
		text-align: center;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
		top: 0;
		width: 100%;
		z-index: 10;

		ul {
			margin: 0;
		}

		li {
			list-style: none;
		}

		@media screen and (max-width: 768px) {
			background: ${white};

			button {
				background: transparent;
				border: 0;
			}
		}
	`,

	Logo: styled.h1`
		color: ${dark};
		font-size: 36px;
		font-weight: 900;
		height: ${HEADER_HEIGHT};
		line-height: ${HEADER_HEIGHT};
		margin: 0;
		position: relative;

		&:before {
			background: ${secondary};
			bottom: 0;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
			content: '';
			height: 8px;
			left: 0;
			position: absolute;
			width: 100px;
		}

		&:after {
			background: ${accent};
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
			content: '';
			height: 8px;
			left: 0;
			position: absolute;
			top: 0;
			width: 100px;
		}

		@media screen and (max-width: 768px) {
			font-size: 24px;
			white-space: nowrap;

			&:after,
			&:before {
				box-shadow: none;
			}
		}
	`,

	Menu: styled.menu`
		width: 25%;
		height: ${HEADER_HEIGHT};

		ul {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		a {
			display: block;
			height: ${HEADER_HEIGHT};
			line-height: ${HEADER_HEIGHT};
			text-decoration: none;

			&:hover,
			&:focus {
				border-bottom: 8px solid ${secondary};
			}
		}
	`,
	Wrapper: styled.div`
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin-left: auto;
		margin-right: auto;
		max-width: 1000px;
		width: calc(100% - 48px);
	`,
}

export default () => {
	return (
		<styles.Header>
			<styles.Wrapper>
				<styles.Logo>Sebastian Assaf</styles.Logo>
				<MediaQuery minWidth={768}>
					<styles.Menu>
						<ul>
							<li>
								<a href="/#">About</a>
							</li>
							<li>
								<a href="/#/contact">Contact</a>
							</li>
							<li>
								<Link to="/blog">Blog</Link>
							</li>
						</ul>
					</styles.Menu>
				</MediaQuery>
				<button>
					<MenuIcon />
				</button>
			</styles.Wrapper>
		</styles.Header>
	)
}
