import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MarketingType } from '~/types/marketing.type'

import MarketingItem from '~/components/ui/general/marketing-item/marketing-item.component'
import Carousel from '~/components/ui/general/carousel/carousel.component'
import FC from '~/types/fc'

import styles from './marketing-section.module.scss'

interface Props {
  sliders: MarketingType[]
}

const MarketingSection: FC<Props> = ({ sliders }) => {
  return (
    <Container>
      <div className={styles.marketingHeader}>
        <h2 className={styles.marketingTitle}>Marketing Strategies</h2>
        <p className={styles.marketingText}>
          Join 40,000+ other marketers and get proven strategies on email
          marketing
        </p>
      </div>

      <Carousel>
        {sliders.map((slider: MarketingType, index) => {
          return (
            <MarketingItem
              key={slider.id}
              image={slider.image.fluid}
              date={slider.date}
              author={slider.author}
              intro={slider.description}
            />
          )
        })}
      </Carousel>
    </Container>
  )
}

export default MarketingSection
