import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import MediaQuery from 'react-responsive'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

import { secondary, black, white, primary } from '../utils/colours'
import CTA from './cta'

// TODO: Connect this to some lead gen site

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

		input[type='email'] {
			background: ${white};
			border: 0;
			border-bottom: 4px solid ${primary};
			text-align: center;
			height: 72px;
			line-height: 72px;
			padding: 0;
			width: 100%;
		}

		h3 {
			font-weight: 700;
			color: ${black};
		}

		h3 {
			font-size: 36px;
			line-height: 44px;
		}

		@media screen and (max-width: 768px) {
			padding: 10vh 5vw;

			> div {
				margin: 0;
				width: 100%;
			}

			/* h3 {
				font-size: 24px;
			} */

			input[type='email'] {
				margin: 64px 0;
			}
		}
	`,

	Image: styled(Img)`
		height: 750px;
		width: 50%;
		transform: translateX(12.5vw);
	`,
}

const Contact = () => {
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

	const formProps = {
		action:
			'https://gmail.us20.list-manage.com/subscribe/post?u=8350b82f52342489d395d0309&amp;id=73ad8f1d93',
		method: 'post',
		id: 'mc-embedded-subscribe-form',
		name: 'mc-embedded-subscribe-form',
		className: 'validate',
		target: '_blank',
	}

	return (
		<styles.Contact id="/contact">
			<div>
				<form {...formProps} noValidate>
					<h3>
						Get my super simple marketing acceleration guide and learn the 5
						keys to growing your business quickly without any confusing or
						complicated technical knowledge.
					</h3>

					<input
						type="email"
						className="required email"
						id="mce-EMAIL"
						name="EMAIL"
						placeholder="Enter your email"
					/>

					{/* TODO: Use CTA */}
					<CTA
						type="submit"
						name="subscribe"
						id="mc-embedded-subscribe"
						className="button"
						isFormSubmit={true}
						value="Get my copy!"
					/>

					<div style={{ position: `absolute`, left: -5000 }} aria-hidden="true">
						<input
							type="text"
							name="b_8350b82f52342489d395d0309_73ad8f1d93"
							tabIndex="-1"
							value=""
						/>
					</div>
				</form>
				<MediaQuery minWidth={768}>
					<styles.Image fixed={data.file.childImageSharp.fixed} />
				</MediaQuery>
			</div>
		</styles.Contact>
	)
}

export default Contact
