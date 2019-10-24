import React from 'react'
import styled from '@emotion/styled'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import MediaQuery from 'react-responsive'

import { accent, primary, white, secondary } from '../utils/colours'
import services from '../data/services'
import { graphql, Link } from 'gatsby'
import { useStaticQuery } from 'gatsby'

const styles = {
	Content: styled.div`
		display: flex;
		flex-flow: row wrap;

		@media screen and (max-width: 768px) {
			background: ${white};
			margin: 190px 5vw 0;
			padding: 24px;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

			h2 {
				margin-bottom: 100px;
			}
		}
	`,
	Service: styled.div`
		padding: 25vh 2vw;
		text-align: center;
		white-space: break-spaces;
		width: 50%;

		> div {
			margin-left: auto;
			margin-right: auto;
			max-width: 35vw;
			text-align: left;
		}

		strong {
			display: block;
			font-size: 24px;
			font-weight: 300;
			line-height: 29px;
			margin-bottom: 2rem;
		}

		p {
			font-size: 14px;
			line-height: 17px;
		}

		a {
			font-weight: 700;
		}

		@media screen and (max-width: 768px) {
			margin: 0;
			position: relative;
			padding: 25vh 5vw 10vh;
			width: 100%;

			> div {
				max-width: 100%;
			}
		}
	`,
	Services: styled.section`
		text-align: center;
		position: relative;

		header {
			background: ${primary};
			color: ${white};
			margin-bottom: -140px;
			padding-bottom: 140px;
			padding-top: 140px;
		}
	`,
	ServiceAside: styled.aside`
		overflow: hidden;
		position: relative;
		width: 50%;

		.box-1,
		.box-2 {
			content: '';
			position: absolute;
			z-index: -1;
		}

		.box-1 {
			background: ${secondary};
			height: 35vw;
			left: 50%;
			margin: -17.5vw 0 0 -17.5vw;
			top: 50%;
			width: 35vw;
		}

		.box-2 {
			background: ${accent};
			height: 10vw;
			right: 0;
			top: ${Math.random() * 25 + 25}%;
			width: 10vw;
		}
	`,
	ServiceImage: styled(Img)`
		height: 50%;
		left: 0;
		overflow: visible !important;
		position: absolute !important;
		top: 5vh;
		width: 70%;
		z-index: 1;

		${({ i }) => `transform: translate3d(${35 * i}%, ${70 * i}%, 0);`}
	`,
	ServicePreview: styled.div`
		* {
			color: ${white};
		}

		> div {
			align-items: center;
			background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
			display: flex;
			flex-flow: column nowrap;
			height: 30vw;
			justify-content: center;
			margin: 5vw;
			position: relative;
		}
	`,
	ServicePreviewBackground: styled(Img)`
		height: 100%;
		left: 0;
		pointer-events: none;
		position: absolute !important;
		top: 0;
		width: 100%;
		z-index: -1;
	`,
}

const sliderSettings = {
	centerMode: true,
	centerPadding: '200px',
	className: 'center',
	infinite: true,
	slidesToShow: 1,
	speed: 500,
}

const prepareAnchor = name => name.toLowerCase().replace(/[^a-z0-9]/g, '-')

const getServiceImages = (name, imageData) =>
	imageData.allFile.edges.filter(({ node }) =>
		node.relativePath.includes(name.toLowerCase())
	)

export default () => {
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { relativePath: { regex: "/^services/" } }) {
				edges {
					node {
						relativePath
						childImageSharp {
							fluid(maxWidth: 3000, quality: 99) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	return (
		<styles.Services id="/services">
			<header>
				<h3>Everything you need.</h3>
			</header>

			<MediaQuery minWidth={768}>
				<Slider {...sliderSettings}>
					{services.map((service, i) => (
						<styles.ServicePreview key={`prev-service-${i}`}>
							<div>
								<h3>{service.headline}</h3>
								<a href={`/#/services/${prepareAnchor(service.name)}`}>
									Read more
								</a>
								{!!service.link && <Link to={service.link}>Read more</Link>}

								<styles.ServicePreviewBackground
									fluid={
										getServiceImages(service.name, data)[0].node.childImageSharp
											.fluid
									}
								/>
							</div>
						</styles.ServicePreview>
					))}
				</Slider>

				<styles.Content>
					{services.map((service, i) => {
						const aside = (
							<styles.ServiceAside>
								{getServiceImages(service.name, data).map(({ node }, i) => (
									<styles.ServiceImage
										i={i}
										key={`services-${service.name.toLowerCase()}-${i}`}
										fluid={node.childImageSharp.fluid}
									/>
								))}
								<div className="box-1" />
								<div className="box-2" />
							</styles.ServiceAside>
						)

						const content = (
							<styles.Service
								key={`full-service-${i}`}
								id={`/services/${prepareAnchor(service.name)}`}
							>
								<div>
									<h2>{service.headline}</h2>
									<p>
										<strong>{service.short}</strong>
										{service.long}
									</p>
								</div>
							</styles.Service>
						)

						return i % 2 === 0 ? [aside, content] : [content, aside]
					})}
				</styles.Content>
			</MediaQuery>

			<MediaQuery maxWidth={768}>
				{services.map(service => (
					<styles.Service>
						<styles.ServicePreviewBackground
							fluid={
								getServiceImages(service.name, data)[0].node.childImageSharp
									.fluid
							}
						/>

						<styles.Content>
							<div>
								<h2>{service.headline}</h2>
								<p>
									<strong>{service.short}</strong>
								</p>
							</div>
						</styles.Content>
					</styles.Service>
				))}
			</MediaQuery>
		</styles.Services>
	)
}
