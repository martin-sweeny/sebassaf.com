import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import CTAButton from './cta'

import { dark, secondary } from '../utils/colours'

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
			font-weight: 900;
			margin-bottom: 6vh;
			position: relative;
			text-align: center;

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
			margin-bottom: 55px;
			margin-top: 55px;
			max-width: 500px;
			text-align: center;
		}
		@media screen and (max-width: 768px) {
			h1 {
				font-size: 30px;
				line-height: 37px;
			}

			p {
				margin-left: 2vw;
				margin-right: 2vw;
			}
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
}

const HeroBanner = () => (
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

		<h1>Digital Marketing Consultant</h1>
		<p>
			I help entrepreneurs optimize their minds, bodies, and businesses through
			creative, clear and well executed strategies. Achieving your goals is not
			always simple, and rarely easy. It often takes discipline, guidance, and
			accountability. This is where working together directly can finally help
			you hit your objectives.
		</p>
		<CTAButton
			href={'https://app.acuityscheduling.com/schedule.php?owner=18476238'}
		>
			Let&apos;s Talk
		</CTAButton>
	</styles.HeroBanner>
)

export default HeroBanner
