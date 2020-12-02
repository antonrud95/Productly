import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import FC from '~/types/fc'
import InfoCheck from '~/components/ui/general/info-check-component/info-check.component'

import Img from 'gatsby-image'

import styles from './info-section.module.scss'

interface Props {
  uppertitle: string
  title: string
  description: string
  image: any
  upperFirstItemTitle?: string
  upperFirstItemText?: string
  upperSecondItemTitle?: string
  upperSecondItemText?: string
  upperThirdItemTitle?: string
  upperThirdItemText?: string
  firstItemImage?: any
  firstItemText?: string
  secondItemImage?: any
  secondItemText?: string
  thirdItemImage?: any
  thirdItemText?: string
  reverse?: boolean
  isText?: boolean
}

const InfoSection: FC<Props> = ({
  uppertitle,
  title,
  description,
  image,
  upperFirstItemTitle,
  upperFirstItemText,
  upperSecondItemTitle,
  upperSecondItemText,
  upperThirdItemTitle,
  upperThirdItemText,
  firstItemImage,
  firstItemText,
  secondItemImage,
  secondItemText,
  thirdItemImage,
  thirdItemText,
  reverse,
  isText,
}) => {
  return (
    <Container>
      <Row
        className={
          reverse ? [styles.row, styles.row__reverse].join(' ') : styles.row
        }
      >
        <Col xs="12" md="6">
          <h4>{uppertitle}</h4>
          <h2>{title}</h2>
          <p>{description}</p>
          {isText ? (
            <>
              <h5>{upperFirstItemTitle}</h5>
              <p>{upperFirstItemText}</p>
              <h5>{upperSecondItemTitle}</h5>
              <p>{upperSecondItemText}</p>
              <h5>{upperThirdItemTitle}</h5>
              <p>{upperThirdItemText}</p>
            </>
          ) : (
            <>
              <InfoCheck image={firstItemImage} text={firstItemText} />
              <InfoCheck image={secondItemImage} text={secondItemText} />
              <InfoCheck image={thirdItemImage} text={thirdItemText} />
            </>
          )}
        </Col>
        <Col xs="12" md="6">
          <Img fluid={image.fluid} />
        </Col>
      </Row>
    </Container>
  )
}

export default InfoSection
