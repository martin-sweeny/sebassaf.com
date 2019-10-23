import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Color from 'color'

import { primary, white } from '../utils/colours'

const styles = css`
	background: ${Color(primary)
		.saturate(50)
		.lighten(1.5)
		.toString()};
	border: 0;
	box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.15);
	color: ${white};
	cursor: pointer;
	display: inline-block;
	font-size: 24px;
	font-weight: 700;
	height: 64px;
	line-height: 64px;
	text-align: center;
	text-decoration: none;
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
	width: 311px;

	&:hover,
	&:focus {
		background: ${Color(primary)
			.saturate(100)
			.lighten(1.75)
			.toString()};
		box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.5);
	}

	&:active {
		background: ${Color(primary)
			.saturate(100)
			.lighten(1.25)
			.toString()};
		box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
	}
`

const CTAButton = ({ children, href, isFormSubmit = false, ...rest }) =>
	isFormSubmit ? (
		<input type="submit" {...rest} css={styles} />
	) : (
		<a href={href ? href : '/#/contact'} {...rest} css={styles}>
			{children}
		</a>
	)

CTAButton.propTypes = {
	href: PropTypes.string,
	isFormSubmit: PropTypes.boolean,
}

export default CTAButton
