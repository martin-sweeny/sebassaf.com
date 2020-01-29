import React, { useState } from 'react'
import styled from '@emotion/styled'
import MediaQuery from 'react-responsive'

import { dark, secondary, accent, white } from '../utils/colours'

import CloseIcon from '../images/icon-close.svg'
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

		@media screen and (max-width: 768px) {
			background: ${white};
			height: 100vh;
			width: 100vw;
			transition: all 250ms;
			position: fixed;
			z-index: -1;

			${({ active }) =>
				active ? 'transform: translateY(0);' : 'transform: translateY(-100vh);'}

			a {
				font-weight: 900;
				font-size: 36px;
			}

			ul {
				align-items: center;
				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				height: 100%;
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

		@media screen and (max-width: 768px) {
			background: ${white};
		}
	`,
}

const Header = () => {
	const [menuActive, setMenuActive] = useState(false)
	return (
		<styles.Header>
			<MediaQuery maxWidth={768}>
				<styles.Menu active={menuActive}>
					<ul>
						<li>
							<a href="/#">About</a>
						</li>
						<li>
							<a href="/#/services">Services</a>
						</li>
						<li>
							<a href="/#/contact">Contact</a>
						</li>
						{/* <li>
							<Link to="/blog">Blog</Link>
						</li> */}
					</ul>
				</styles.Menu>
			</MediaQuery>
			<styles.Wrapper>
				<styles.Logo>Sebastian Assaf</styles.Logo>
				<MediaQuery minWidth={768}>
					<styles.Menu>
						<ul>
							<li>
								<a href="/#">About</a>
							</li>
							<li>
								<a href="/#/services">Services</a>
							</li>
							<li>
								<a href="/#/contact">Contact</a>
							</li>
							{/* <li>
								<Link to="/blog">Blog</Link>
							</li> */}
						</ul>
					</styles.Menu>
				</MediaQuery>
				<MediaQuery maxWidth={768}>
					<button onClick={() => setMenuActive(!menuActive)}>
						{menuActive ? <CloseIcon /> : <MenuIcon />}
					</button>
				</MediaQuery>
			</styles.Wrapper>
		</styles.Header>
	)
}
export default Header
