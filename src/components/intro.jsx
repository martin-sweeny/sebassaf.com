import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MediaQuery from 'react-responsive'

import CTA from './cta'
import { accent, secondary, white } from '../utils/colours'
import { useStaticQuery } from 'gatsby'

const styles = {
	Intro: styled.section`
		padding-bottom: 120px;
		position: relative;
		text-align: center;

		h3 {
			margin-bottom: 120px;
			margin-top: 120px;
			text-align: center;
			text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
		}

		@media screen and (max-width: 768px) {
			background: #f6f6f6;
			padding-bottom: 36px;

			h3 {
				margin-top: 36px;
				margin-bottom: 0;
			}

			hr {
				border: 0;
				border-top: 8px solid ${secondary};
				margin-top: 36px;
				margin-bottom: 48px;
				width: 100px;
			}
		}
	`,

	Content: styled.div`
		align-items: center;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
		width: 50%;
		z-index: 1;

		p {
			font-size: 15px;
			line-height: 18px;
			margin: 0;
			max-width: 311px;
			text-align: left;

			&::first-line {
				font-weight: 700;
			}

			@media screen and (max-width: 768px) {
				margin-bottom: 36px;
			}
		}

		@media screen and (max-width: 768px) {
			background: ${white};
			border-top: 8px solid ${accent};
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
			margin: 50vh 2vw 36px;
			padding-bottom: 36px;
			width: auto;
		}
	`,
	ContentWrapper: styled.div`
		display: flex;
		margin-left: auto;
		margin-right: auto;
		max-width: 90%;
		width: 1000px;
	`,
	SebPic: styled(Img)`
		box-shadow: -19px 19px 0 ${accent}, 19px -19px 0 ${secondary};
		max-height: 711px;
		position: relative;
		width: 50%;

		@media screen and (max-width: 768px) {
			box-shadow: none;
			height: 100vh;
			left: 0;
			position: absolute !important;
			top: 0;
			width: 100%;
		}
	`,
}

export default () => {
	const data = useStaticQuery(graphql`
		query {
			seb: file(relativePath: { eq: "seb-assaf-sitting-stairs.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 99) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<styles.Intro>
			<MediaQuery minWidth={768}>
				<h3>Why You Wanna Work With Seb</h3>
			</MediaQuery>
			<styles.ContentWrapper>
				<styles.SebPic
					fluid={data.seb.childImageSharp.fluid}
					alt="Sebastian Assaf Facing Camera, Smiling"
				/>
				<styles.Content>
					<MediaQuery maxWidth={768}>
						<h3>Why You Wanna Work With Seb</h3>
						<hr />
					</MediaQuery>
					<p>
						Objective Perspective: It’s not always easy solving a problem when
						you’re in it. When you get a fresh objective perspective, you get
						new ideas that you may not have thought of, or at the very least
						confirmation to move forward in the right direction.
					</p>
					<p>
						Over 10 Years of Experience: Working with someone who knows the lay
						of the land makes things easy. Problems get solved quickly when
						working with someone who has seen your problem before and knows
						what’s worked for others.
					</p>
					<p>
						Reliable and Trustworthy: Whether it be a personal or professional
						problem, solutions often require you to become vulnerable. Having
						someone who can provide security and follow through is essential.
					</p>
					<p>
						Guaranteed Results: Nobody wants to pay for something they didn’t
						ask for, so why should you? If you’re not satisfied with your
						results, get your money back, no questions asked.
					</p>
					<MediaQuery maxWidth={768}>
						<CTA href="https://app.acuityscheduling.com/schedule.php?owner=18476238">
							Let's Talk
						</CTA>
					</MediaQuery>
				</styles.Content>
			</styles.ContentWrapper>

			<MediaQuery minWidth={768}>
				<div style={{ height: 80 }} />
				<CTA href="https://app.acuityscheduling.com/schedule.php?owner=18476238">
					Let's Talk
				</CTA>
				<br />
				<br />
			</MediaQuery>
			<a href="/#/services">Or, keep reading</a>
		</styles.Intro>
	)
}
