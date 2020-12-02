import React from 'react'
import { Container } from 'react-bootstrap'

import styles from './tools-section.module.scss'
import Img from 'gatsby-image'
import useToolsAssets from '~/hooks/queries/useToolsAssets'

import { ToolsType } from '~/types/tools.type'
import ToolsItem from '~/components/ui/general/tools-item/tools-item.component'
import SButton from '~/components/ui/general/button/button.component'
import FC from '~/types/fc'

interface Props {
  tools: ToolsType[]
}

const ToolsSection: FC<Props> = ({ tools }) => {
  const { toolsBg } = useToolsAssets()
  return (
    <Container fluid className={styles.fluidTools}>
      <Img fluid={toolsBg.childImageSharp.fluid} className={styles.bg} />
      <Container>
        <h2 className={styles.toolsTitle}>
          We design tools to unveil{<br />}your superpowers
        </h2>
        <div className={styles.toolsWrapper}>
          {tools.map((tool: ToolsType, index) => {
            return (
              <ToolsItem
                key={tool.id}
                image={tool.image.fluid}
                imageStyles={styles.imageStyles}
                title={tool.title}
                text={tool.text}
                textStyles={styles.textStyles}
                itemWrapper={styles.itemWrapper}
              />
            )
          })}
        </div>
        <SButton variant="primary" className={styles.toolsBg}>
          Sign up now
        </SButton>
      </Container>
    </Container>
  )
}

export default ToolsSection
