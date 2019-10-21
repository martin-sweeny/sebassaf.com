import React from 'react'
import styled from '@emotion/styled'
import Slider from 'react-slick'
import Img from 'gatsby-image'

import { accent, primary, white, secondary } from '../utils/colours'
import services from '../data/services'
import { graphql, Link } from 'gatsby'
import { useStaticQuery } from 'gatsby'

const styles = {
	Content: styled.div`
		display: flex;
		flex-flow: row wrap;
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
	`,
	Services: styled.section`
		text-align: center;

		header {
			background: ${primary};
			color: ${white};
			margin-bottom: -140px;
			padding-bottom: 140px;
			padding-top: 140px;
		}
	`,
	ServiceAside: styled.aside`
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
		a {
			color: ${white};
		}

		> div {
			align-items: center;
			background: ${secondary};
			display: flex;
			flex-flow: column nowrap;
			height: 20vh;
			justify-content: center;
			margin: 5vw;
		}
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

export default () => {
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { relativePath: { regex: "/^services/" } }) {
				edges {
					node {
						relativePath
						childImageSharp {
							fluid(maxWidth: 1000, quality: 99) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	return (
		<styles.Services>
			<header>
				<h3>
					Getting your shit together takes a few steps.
					<br />
					Seb can help with them all.
				</h3>
			</header>

			<Slider {...sliderSettings}>
				{services.map((service, i) => (
					<styles.ServicePreview key={`prev-service-${i}`}>
						<div>
							<h3>{service.name}</h3>
							<a href={`/#/services/${prepareAnchor(service.name)}`}>
								Read more
							</a>
							{!!service.link && <Link to={service.link}>Read more</Link>}
						</div>
					</styles.ServicePreview>
				))}
			</Slider>

			<styles.Content>
				{services.map((service, i) => {
					const aside = (
						<styles.ServiceAside>
							{data.allFile.edges
								.filter(({ node }) =>
									node.relativePath.includes(service.name.toLowerCase())
								)
								.map(({ node }, i) => (
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
						<styles.Service key={`full-service-${i}`}>
							<div>
								<h2>{service.name}</h2>
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
		</styles.Services>
	)
}
