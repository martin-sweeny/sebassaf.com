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
			seb: file(relativePath: { eq: "seb-assaf-facing-camera.jpg" }) {
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
						Sed quis porttitor sapien. Pellentesque leo est, tincidunt vitae sem
						id, hendrerit dignissim arcu. Donec mattis risus eu ipsum dignissim,
						eu ornare elit ultrices. Aenean mauris quam, luctus at mi id,
						fringilla efficitur ex. Morbi ullamcorper enim sapien, sit amet
						posuere turpis congue nec. Etiam et lacus consectetur nisi aliquam
						molestie.
					</p>
					<p>
						Sed tempor odio suscipit, pellentesque lacus et, efficitur justo.
						Etiam pretium leo ut ornare porta. Suspendisse finibus non enim
						pulvinar finibus. Ut suscipit, velit id vulputate semper, purus
						lacus maximus nisl, id imperdiet quam mi nec augue.
					</p>
					<p>
						Sed nec erat quis justo ullamcorper efficitur. Praesent vel semper
						diam, ac pretium dolor. Pellentesque volutpat nec purus non porta.
						Cras rutrum lorem egestas tellus eleifend aliquet. Phasellus nec
						semper nibh. Cras eget iaculis risus. Vestibulum porta velit in
						neque tincidunt, a convallis orci vestibulum. Nulla odio libero,
						iaculis eget urna iaculis, eleifend lacinia risus.
					</p>
					<p>
						Phasellus in pharetra tortor. Sed euismod cursus commodo. Mauris
						sapien leo, auctor a iaculis ut, lobortis vitae ex. Cras sit amet
						lacus eget ipsum ornare feugiat. Nulla hendrerit in enim at lacinia.
						Vestibulum non eros ut velit consequat feugiat. Ut feugiat vehicula
						sem vitae congue.
					</p>
					<MediaQuery maxWidth={768}>
						<CTA>Get in Touch</CTA>
					</MediaQuery>
				</styles.Content>
			</styles.ContentWrapper>

			<MediaQuery minWidth={768}>
				<div style={{ height: 80 }} />
				<CTA>Get in Touch</CTA>
				<br />
				<br />
			</MediaQuery>
			<a href="#">Or, keep reading</a>
		</styles.Intro>
	)
}
