import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image = styled(Img)`
	height: 100%;
	left: 0;
	position: absolute !important;
	top: 0;
	width: 100%;
	z-index: -1;
`

export default data => (
	<Image
		fluid={data.file.childImageSharp.fluid}
		alt="Gatsby Docs are awesome"
	/>
)
