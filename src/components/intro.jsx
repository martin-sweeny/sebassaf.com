import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import CTA from './cta'
import { accent, secondary } from '../utils/colours'

const styles = {
	Intro: styled.section`
		text-align: center;
		h3 {
			margin-bottom: 120px;
			margin-top: 120px;
			text-align: center;
			text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
		}
	`,

	Content: styled.div`
		align-items: center;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
		width: 50%;

		p {
			font-size: 15px;
			line-height: 18px;
			margin: 0;
			max-width: 311px;
			text-align: left;

			&::first-line {
				font-weight: 700;
			}
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
	`,
}

const pictures = {
	Seb: (
		<StaticQuery
			query={graphql`
				query {
					file(relativePath: { eq: "seb-assaf-facing-camera.jpg" }) {
						childImageSharp {
							fluid(maxWidth: 500, quality: 99) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			`}
			render={({ file }) => (
				<styles.SebPic
					fluid={file.childImageSharp.fluid}
					alt="Sebastian Assaf Facing Camera, Smiling"
				/>
			)}
		/>
	),
	BackgroundImage: () => {},
}

export default () => (
	<styles.Intro>
		<h3>Why You Wanna Work With Seb</h3>
		<styles.ContentWrapper>
			{pictures.Seb}
			<styles.Content>
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
					pulvinar finibus. Ut suscipit, velit id vulputate semper, purus lacus
					maximus nisl, id imperdiet quam mi nec augue.
				</p>
				<p>
					Sed nec erat quis justo ullamcorper efficitur. Praesent vel semper
					diam, ac pretium dolor. Pellentesque volutpat nec purus non porta.
					Cras rutrum lorem egestas tellus eleifend aliquet. Phasellus nec
					semper nibh. Cras eget iaculis risus. Vestibulum porta velit in neque
					tincidunt, a convallis orci vestibulum. Nulla odio libero, iaculis
					eget urna iaculis, eleifend lacinia risus.
				</p>
				<p>
					Phasellus in pharetra tortor. Sed euismod cursus commodo. Mauris
					sapien leo, auctor a iaculis ut, lobortis vitae ex. Cras sit amet
					lacus eget ipsum ornare feugiat. Nulla hendrerit in enim at lacinia.
					Vestibulum non eros ut velit consequat feugiat. Ut feugiat vehicula
					sem vitae congue.
				</p>
			</styles.Content>
		</styles.ContentWrapper>

		<div style={{ height: 60 }} />

		<CTA>Get in Touch</CTA>
		<br />
		<br />
		<a href="#">Or, keep reading</a>

		<div style={{ height: 60 }} />
	</styles.Intro>
)
