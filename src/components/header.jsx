import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { dark, secondary, accent } from '../utils/colours'

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

		li {
			list-style: none;
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
				<styles.Menu>
					<ul>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#/contact">Contact</a>
						</li>
						<li>
							<Link to="/blog">Blog</Link>
						</li>
					</ul>
				</styles.Menu>
			</styles.Wrapper>
		</styles.Header>
	)
}
