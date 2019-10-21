import React from 'react'

import Contact from '../components/contact'
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
		<Contact />
	</Layout>
)

export default IndexPage
