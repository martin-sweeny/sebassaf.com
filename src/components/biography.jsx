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
		/* max-width: 600px; */

		padding: 6rem 5vw 0;
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
		justify-content: flex-end;
		width: 100%;
	`,
}

export default () => {
	const { foreground, background } = useStaticQuery(graphql`
		query {
			# foreground: file(relativePath: { eq: "bio-foreground.png" }) {
			# 	childImageSharp {
			# 		fluid(maxWidth: 1500) {
			# 			...GatsbyImageSharpFluid
			# 		}
			# 	}
			# }
			background: file(relativePath: { eq: "seb-assaf-in-greece.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 3000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<styles.Biography id="/biography">
			<styles.Wrapper>
				{/* <styles.Foreground fluid={foreground.childImageSharp.fluid} /> */}
				<styles.Content>
					<h2>Meet Sebastian</h2>
					<strong>
						Hey, Seb here.
						<br />
						<br />
						Please allow me to introduce myself, since you may be wondering:
						"Who is this Sebastian Assaf guy?”
					</strong>
					<p>
						I'm actually a fairly normal guy, who went through a point where I
						decided that I needed to get a handle on my business.
						<br />
						<br />
						I won't get into the details, but I was going through a time where I
						was involved in my first business opportunity, and struggling... and
						I still had NO IDEA how to build a successful business and team. One
						night, I had just finished making another endlessly unsuccessful
						cold call, and I said "I am going to figure this out for myself,
						whatever it takes".
						<br />
						<br />
						Well, it wasn't so easy. I spent the next few years reading a lot of
						books, going to seminars, and generally trying out a lot of crazy
						stuff that I was learning. <br />
						<br />
						My epiphany came when I started searching online and learning from
						people that were successfully building their businesses and living
						their lives.
						<br />
						<br />
						To make a long story short, I started moving forward by learning
						from these "mentors", and taking the things I learned... and started
						applying them to my life and business.
						<br />
						<br />
						I have now come to believe something that I think is very
						important...
						<br />
						<br />
						If you don't know how to market your business effectively, then
						you're probably going to approach your business feeling "less than
						successful". It's not an easy thing to explain to someone who
						doesn't "get it", but I'll bet that you know EXACTLY what I'm
						talking about.
						<br />
						<br />
						On the other hand, if you DO know how to market your business,
						you're going to have an inner confidence that other people can sense
						INSTANTLY.
						<br />
						<br />
						You might be asking is "Why should I believe what Sebastian says?".
						<br />
						<br />
						And my answer to you is that you SHOULDN'T just blindly believe me.
						<br />
						<br />
						I want you to TRY what you learn.
						<br />
						<br />
						I think you'll find that I'm not interested in things that don't
						work. I like stuff that gets results. And BIG results, at that.
						<br />
						<br />
						Only after you've seen that this stuff is REAL... do I want you to
						"believe" me.
						<br />
						<br />
						I believe this information is some of the best in the world, and I
						stand behind it. I honestly hope you get a TON of value from it.
						<br />
						<br />
						To your inevitable success,
						<br />
						<br />
						Sebastian Assaf
					</p>

					<footer>
						<styles.CtaButton href="https://app.acuityscheduling.com/schedule.php?owner=18476238">
							Let's Talk
						</styles.CtaButton>
					</footer>
				</styles.Content>
			</styles.Wrapper>

			<styles.Background fluid={background.childImageSharp.fluid} />
		</styles.Biography>
	)
}
