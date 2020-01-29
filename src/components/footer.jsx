import React from 'react'
import styled from '@emotion/styled'
import Color from 'color'

import { secondary, white, primary } from '../utils/colours'

import IconEmail from '../images/icon-email.svg'
import IconFacebook from '../images/icon-facebook.svg'
import IconInstagram from '../images/icon-instagram.svg'
import IconLinkedIn from '../images/icon-linkedin.svg'
import IconTwitter from '../images/icon-twitter.svg'
import IconYoutube from '../images/icon-youtube.svg'

const styles = {
	Footer: styled.footer`
		background: ${Color(secondary)
			.lighten(0.1)
			.toString()};
		border-top: 10px solid ${white};
		display: flex;
		justify-content: space-around;
		padding: 10vh 0;

		h4 {
			font-size: 22px;
			font-weight: 400;
			line-height: 27px;
			margin-bottom: 50px;
		}

		li {
			list-style: none;
		}

		p {
			line-height: 16px;
			margin-bottom: 50px;
		}

		a {
			font-size: 13px;
			line-height: 16px;
			text-decoration: none;
		}

		aside {
			h4 {
				margin-bottom: 1rem;
			}

			form {
				border: 2px solid ${primary};
				display: flex;
				height: 48px;
			}

			button,
			input {
				background: transparent;
				border: 0;
				font-size: 12px;
				height: 48px;
				line-height: 48px;
				vertical-align: middle;
			}

			input {
				text-indent: 24px;
			}

			button {
				align-items: center;
				display: flex;
				width: 48px;
				justify-content: center;
			}

			.social a {
				margin-right: 16px;
			}
		}

		@media screen and (max-width: 768px) {
			flex-flow: column nowrap;
			padding: 10vh 15vw;

			ul {
				margin-left: 0;
			}

			input[type='email'] {
				flex: 1;
			}
		}
	`,
}

const Footer = () => (
	<styles.Footer>
		<ul>
			<li>
				<h4>Sitemap</h4>
			</li>
			<li>
				<a href="/#">Welcome</a>
			</li>
			<li>
				<a href="/#/services">Services</a>
			</li>
			<li>
				<a href="#/biography">About Sebastian</a>
			</li>
			<li>
				<a href="#/contact">Contact</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
		</ul>

		<div>
			<h4>Contact Information</h4>
			<p>
				Write to Seb
				<br />
				<br />
				<a href="mailto:hello@sebassaf.com">hello@sebassaf.com</a>
			</p>
		</div>

		<aside>
			<h4>Social</h4>
			<div className="social">
				<a href="https://facebook.com/">
					<IconFacebook />
				</a>
				<a href="https://youtube.com/">
					<IconYoutube />
				</a>
				<a href="https://linkedin.com/">
					<IconLinkedIn />
				</a>
				<a href="https://instagram.com/">
					<IconInstagram />
				</a>
				<a href="https://twitter.com/">
					<IconTwitter />
				</a>
			</div>
			<div style={{ height: 60 }} />
			<h4>Newsletter</h4>
			<form>
				<input
					type="email"
					name="email"
					id="newsletter-email"
					placeholder="Enter your email"
				/>
				<button>
					<IconEmail />
				</button>
			</form>
		</aside>
	</styles.Footer>
)

export default Footer
