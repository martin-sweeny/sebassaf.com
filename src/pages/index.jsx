import React from 'react'

import HeroBanner from '../components/hero-banner'
import Intro from '../components/intro'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<HeroBanner />
		<Intro />
	</Layout>
)

export default IndexPage
