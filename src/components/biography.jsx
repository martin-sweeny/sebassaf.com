import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

import CTA from './cta'

import { primary, secondary } from '../utils/colours'

const styles = {
	Background: styled(Img)`
		height: 100%;
		left: 0;
		position: absolute !important;
		top: 0;
		width: 100%;
		z-index: -1;

		&:after {
			content: '';
			height: 100%;
			left: 0;
			position: absolute !important;
			top: 0;
			width: 100%;
			background: linear-gradient(90deg, rgba(255, 255, 255, 0), #fff);
		}
	`,
	Biography: styled.section`
		overflow: hidden;
		position: relative;
		width: 100%;
	`,
	Content: styled.div`
		max-width: 600px;
		padding: 6rem 2.5vw 0;
		width: 50%;

		h2 {
			color: ${primary};
			position: relative;
			margin-top: 3rem;
			padding-bottom: 1rem;

			&:after {
				content: '';
				background: ${secondary};
				left: 0;
				top: 100%;
				width: 100px;
				height: 8px;
				position: absolute;
				box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
			}
		}

		strong {
			display: block;
			font-size: 28px;
			font-weight: 300;
			line-height: 34px;
			margin-bottom: 4rem;
		}

		p {
			font-size: 15px;
			line-height: 18px;
		}

		footer {
			padding: 6rem 0;
			text-align: center;
		}
	`,
	CtaButton: styled(CTA)`
		margin: 0 auto;
	`,
	Foreground: styled(Img)`
		align-self: flex-end;
		margin: 0 5vw -20px 0;
		pointer-events: none;
		width: 45vw;
	`,
	Wrapper: styled.div`
		align-items: center;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		width: 100%;
	`,
}

export default () => {
	const { foreground, background } = useStaticQuery(graphql`
		query {
			foreground: file(relativePath: { eq: "bio-foreground.png" }) {
				childImageSharp {
					fluid(maxWidth: 1500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			background: file(relativePath: { eq: "bio-background.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 3000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<styles.Biography>
			<styles.Wrapper>
				<styles.Foreground fluid={foreground.childImageSharp.fluid} />
				<styles.Content>
					<h2>Meet Seb</h2>
					<strong>
						Aenean tincidunt dictum massa ut auctor. In ut tellus varius, tempus
						leo leu, pretium massa. Donec magna est, maximus et venenatis nec,
						facilisis id neque.
					</strong>
					<p>
						In malesuada sollicitudin quam et egestas. Donec lacinia venenatis
						ex id vehicula. Donec id tristique mi. Nam rutrum dolor ac felis
						sodales, a faucibus ex viverra. Sed nisl purus, mattis a dignissim
						vitae, sagittis ut erat. Nam a diam et sapien iaculis tempus. Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Donec feugiat massa convallis purus porttitor
						pharetra. Duis dignissim enim a ex pretium, quis cursus lorem
						fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et
						ultrices posuere cubilia Curae; Proin non orci pharetra sapien
						tincidunt fermentum non eget diam.
						<br />
						<br />
						Vestibulum ullamcorper nulla vel erat aliquet, at gravida tellus
						consequat. Pellentesque sagittis, mauris eu venenatis posuere, velit
						neque sollicitudin metus, vel eleifend nisl odio non ligula. Sed
						nisi ligula, porta at ultrices sed, tempus id elit. Quisque a orci
						varius dui commodo condimentum. Mauris a justo leo. Suspendisse
						condimentum nulla nulla, eget tristique mi ornare ac. Nunc rhoncus
						lorem diam, ac faucibus dolor semper ut. Aenean lobortis elit eget
						enim fringilla gravida. In sed commodo sem.
						<br />
						<br />
						Nullam convallis nisl eget enim porta, sed vulputate felis porta.
						Aliquam mauris nisl, malesuada non consequat non, posuere sed
						tortor. Vivamus vitae dolor at eros euismod molestie. Nullam
						ultricies nisi at justo fermentum, nec rhoncus velit scelerisque.
						Maecenas vitae neque semper, rhoncus quam sed, egestas odio.
						Pellentesque tortor dolor, posuere vel augue et, luctus iaculis
						odio. Cras hendrerit pellentesque ipsum.
						<br />
						<br />
						Vestibulum aliquet enim dapibus vehicula commodo. Aliquam enim enim,
						egestas suscipit lacus eu, condimentum semper purus. Proin quis
						massa ante. Vestibulum sed neque sed odio luctus consectetur vitae a
						dolor. Pellentesque habitant morbi tristique senectus et netus et
						malesuada fames ac turpis egestas. Integer non nulla imperdiet justo
						commodo sollicitudin. Maecenas ac.
					</p>

					<footer>
						<styles.CtaButton>Get in Touch</styles.CtaButton>
					</footer>
				</styles.Content>
			</styles.Wrapper>

			<styles.Background fluid={background.childImageSharp.fluid} />
		</styles.Biography>
	)
}
