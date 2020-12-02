import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import ToolsSection from '~/components/sections/tools-section/tools-section.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Productly" />
    <HeroSection hero={data.datoCmsHero} />
    <ToolsSection tools={data.allDatoCmsTool.nodes} />
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
    allDatoCmsTool {
      nodes {
        id
        text
        title
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default IndexPage
