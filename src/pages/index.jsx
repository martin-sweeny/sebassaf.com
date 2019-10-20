import React from 'react'

import HeroBanner from '../components/hero-banner'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<HeroBanner />
	</Layout>
)

export default IndexPage
