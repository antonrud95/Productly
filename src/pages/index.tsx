import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Productly" />
    <HeroSection hero={data.datoCmsHero} />
  </Layout>
)

export const query = graphql`
  query {
    datoCmsHero {
      id
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      title
      description
    }
  }
`

export default IndexPage
