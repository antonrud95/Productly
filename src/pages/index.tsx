import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import ToolsSection from '~/components/sections/tools-section/tools-section.component'
import InfoSection from '~/components/sections/info-section/info-section.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Productly" />
    <HeroSection hero={data.datoCmsHero} />
    <ToolsSection tools={data.allDatoCmsTool.nodes} />
    <InfoSection
      isText
      uppertitle={data.datoCmsDesigner.uppertitle}
      title={data.datoCmsDesigner.title}
      description={data.datoCmsDesigner.description}
      image={data.datoCmsDesigner.image}
      upperFirstItemTitle={data.datoCmsDesigner.titlefirst}
      upperFirstItemText={data.datoCmsDesigner.textfirst}
      upperSecondItemTitle={data.datoCmsDesigner.titlesecond}
      upperSecondItemText={data.datoCmsDesigner.textsecond}
      upperThirdItemTitle={data.datoCmsDesigner.titlethird}
      upperThirdItemText={data.datoCmsDesigner.textthird}
    />
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
    datoCmsDesigner {
      uppertitle
      title
      description
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      titlefirst
      textfirst
      titlesecond
      textsecond
      titlethird
      textthird
    }
  }
`

export default IndexPage
