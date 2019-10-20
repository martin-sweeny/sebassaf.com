import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Color from 'color'

import { dark, secondary, primary, white } from '../utils/colours'

const styles = {
	HeroBanner: styled.section`
		align-items: center;
		display: flex;
		flex-flow: column nowrap;
		height: 95vh;
		overflow: hidden;
		justify-content: center;
		position: relative;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		h1 {
			color: ${dark};
			margin-bottom: 6vh;
			position: relative;
			text-align: center;
			font-weight: 900;

			&:after {
				background: ${secondary};
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
				content: '';
				height: 8px;
				left: 50%;
				margin-left: -50px;
				position: absolute;
				top: 150%;
				width: 100px;
			}
		}

		p {
			font-size: 18px;
			line-height: 22px;
			max-width: 500px;
			text-align: center;
		}
	`,
	BackgroundImage: styled(Img)`
		height: 100%;
		left: 0;
		position: absolute !important;
		top: 0;
		width: 100%;
		z-index: -1;
	`,
	CTA: styled.a`
		background: ${Color(primary)
			.saturate(50)
			.lighten(1.5)
			.toString()};
		box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15),
			0 1px 3px rgba(0, 0, 0, 0.15);
		color: ${white};
		cursor: pointer;
		display: inline-block;
		font-size: 24px;
		font-weight: 700;
		height: 64px;
		line-height: 64px;
		text-align: center;
		text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
		width: 311px;

		&:hover,
		&:focus {
			background: ${Color(primary)
				.saturate(100)
				.lighten(1.75)
				.toString()};
			box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15),
				0 1px 2px rgba(0, 0, 0, 0.5);
		}
	`,
}

export default () => (
	<styles.HeroBanner>
		<StaticQuery
			query={graphql`
				query {
					desktopImage: file(
						relativePath: { eq: "hero-background-desktop.jpg" }
					) {
						childImageSharp {
							fluid(maxWidth: 3000, quality: 99) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			`}
			render={data => (
				<styles.BackgroundImage
					fluid={data.desktopImage.childImageSharp.fluid}
					alt="clear skies"
				/>
			)}
		/>

		<h1>Living Your Best Life</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dolor in
			velit imperdiet posuere. Praesent diam massa, scelerisque vel posuere non,
			vulputate accumsan urna.
		</p>
		<styles.CTA>Get in Touch</styles.CTA>
	</styles.HeroBanner>
)
