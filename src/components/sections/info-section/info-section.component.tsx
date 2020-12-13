import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

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
    <Container className={styles.infoContainer}>
      <Row
        className={
          reverse ? [styles.row, styles.row__reverse].join(' ') : styles.row
        }
      >
        <Col
          xs="12"
          md="6"
          className={reverse ? styles.leftColReverse : styles.leftCol}
        >
          {reverse ? (
            <Fade right>
              <h4 className={styles.upperTitle}>{uppertitle}</h4>
              <h2 style={{ marginBottom: 22 }}>{title}</h2>
              <p className={styles.descriptionStyles}>{description}</p>
              {isText ? (
                <>
                  <h5 className={styles.lowerTitle}>{upperFirstItemTitle}</h5>
                  <p className={styles.lowerText}>{upperFirstItemText}</p>
                  <h5 className={styles.lowerTitle}>{upperSecondItemTitle}</h5>
                  <p className={styles.lowerText}>{upperSecondItemText}</p>
                  <h5 className={styles.lowerTitle}>{upperThirdItemTitle}</h5>
                  <p className={styles.lowerText}>{upperThirdItemText}</p>
                </>
              ) : (
                <>
                  <InfoCheck
                    image={firstItemImage.fluid}
                    text={firstItemText}
                  />
                  <InfoCheck
                    image={secondItemImage.fluid}
                    text={secondItemText}
                  />
                  <InfoCheck
                    image={thirdItemImage.fluid}
                    text={thirdItemText}
                  />
                </>
              )}
            </Fade>
          ) : (
            <Fade left>
              <h4 className={styles.upperTitle}>{uppertitle}</h4>
              <h2 style={{ marginBottom: 22 }}>{title}</h2>
              <p className={styles.descriptionStyles}>{description}</p>
              {isText ? (
                <>
                  <h5 className={styles.lowerTitle}>{upperFirstItemTitle}</h5>
                  <p className={styles.lowerText}>{upperFirstItemText}</p>
                  <h5 className={styles.lowerTitle}>{upperSecondItemTitle}</h5>
                  <p className={styles.lowerText}>{upperSecondItemText}</p>
                  <h5 className={styles.lowerTitle}>{upperThirdItemTitle}</h5>
                  <p className={styles.lowerText}>{upperThirdItemText}</p>
                </>
              ) : (
                <>
                  <InfoCheck
                    image={firstItemImage.fluid}
                    text={firstItemText}
                  />
                  <InfoCheck
                    image={secondItemImage.fluid}
                    text={secondItemText}
                  />
                  <InfoCheck
                    image={thirdItemImage.fluid}
                    text={thirdItemText}
                  />
                </>
              )}
            </Fade>
          )}
        </Col>
        <Col xs="12" md="6">
          {reverse ? (
            <Fade left>
              <Img fluid={image.fluid} className={styles.infoImg} />
            </Fade>
          ) : (
            <Fade right>
              <Img fluid={image.fluid} className={styles.infoImg} />
            </Fade>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default InfoSection
