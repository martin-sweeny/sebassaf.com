import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PageStyles = styled.div`
	color: #fff;
`

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<PageStyles>
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist.</p>
		</PageStyles>
	</Layout>
)

export default NotFoundPage
