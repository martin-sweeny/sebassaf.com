import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import { secondary, black, white, primary } from '../utils/colours'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

const styles = {
	Contact: styled.section`
		align-content: space-around;
		background: ${secondary};
		padding: 10vh;

		> div {
			display: flex;
			justify-content: space-around;
			margin-left: auto;
			margin-right: auto;
			text-align: center;
			width: 1000px;
		}

		form {
			align-items: center;
			display: flex;
			justify-content: space-around;
			flex-flow: column nowrap;
			margin-left: auto;
			margin-right: auto;
			max-width: 500px;
		}

		input {
			background: ${white};
			border: 0;
			border-bottom: 4px solid ${primary};
			text-align: center;
			height: 72px;
			line-height: 72px;
			padding: 0;
			width: 100%;
		}

		input[type='submit'],
		h3 {
			font-weight: 700;
			color: ${black};
		}

		h3 {
			font-size: 36px;
			line-height: 44px;
		}

		input[type='submit'] {
			background: transparent;
			border: 0;
			font-size: 36px;
			line-height: 44px;
		}
	`,

	Image: styled(Img)`
		height: 750px;
		width: 50%;
		transform: translateX(12.5vw);
	`,
}

export default () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "contact-image.png" }) {
				childImageSharp {
					fixed(width: 500) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	return (
		<styles.Contact>
			<div>
				<form>
					<h3>
						Life can be pretty sweet. Get in touch with Seb today, and satisfy
						your sweettooth.
					</h3>

					<input type="email" placeholder="Enter your email" />

					<input type="submit" value="Get my copy!" />
				</form>
				<styles.Image fixed={data.file.childImageSharp.fixed} />
			</div>
		</styles.Contact>
	)
}
