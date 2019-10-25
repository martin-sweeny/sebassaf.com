import React from 'react'

import HeroBanner from '../components/hero-banner'
import Intro from '../components/intro'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Services from '../components/services'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<HeroBanner />
		<Intro />
		<Services />
	</Layout>
)

export default IndexPage
