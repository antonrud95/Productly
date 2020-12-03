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
    <InfoSection
      reverse
      uppertitle={data.datoCmsManager.uppertitle}
      title={data.datoCmsManager.title}
      description={data.datoCmsManager.description}
      image={data.datoCmsManager.image}
      firstItemImage={data.datoCmsManager.checkfirst}
      firstItemText={data.datoCmsManager.descriptionfirst}
      secondItemImage={data.datoCmsManager.checkfirst}
      secondItemText={data.datoCmsManager.descriptionsecond}
      thirdItemImage={data.datoCmsManager.checkfirst}
      thirdItemText={data.datoCmsManager.descriptionthird}
    />
    <InfoSection
      isText
      uppertitle={data.datoCmsMarketer.uppertitle}
      title={data.datoCmsMarketer.title}
      description={data.datoCmsMarketer.description}
      image={data.datoCmsMarketer.image}
      upperFirstItemTitle={data.datoCmsMarketer.titlefirst}
      upperFirstItemText={data.datoCmsMarketer.textfirst}
      upperSecondItemTitle={data.datoCmsMarketer.titlesecond}
      upperSecondItemText={data.datoCmsMarketer.textsecond}
      upperThirdItemTitle={data.datoCmsMarketer.titlethird}
      upperThirdItemText={data.datoCmsMarketer.textthird}
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
    datoCmsMarketer {
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
    datoCmsManager {
      uppertitle
      title
      description
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      checkfirst {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      descriptionfirst
      descriptionsecond
      descriptionthird
    }
  }
`

export default IndexPage
