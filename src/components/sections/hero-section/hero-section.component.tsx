import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import styles from './hero-section.module.scss'
import SButton from '~/components/ui/general/button/button.component'
import Img from 'gatsby-image'
import { HeroType } from '~/types/hero.type'
import FC from '~/types/fc'

interface Props {
  hero: HeroType
}

const HeroSection: FC<Props> = ({ hero }) => {
  return (
    <Container className={styles.heroContainer}>
      <Row>
        <Col xs="12" md="5" className={styles.leftCol}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className={styles.buttonWrapper}>
            <SButton variant="primary" className={styles.heroBtn}>
              Get started
            </SButton>
            <Link to="/" className={styles.heroWatch}>
              <FontAwesomeIcon icon={faPlay} className={styles.play} />
              Watch the video
            </Link>
          </div>
        </Col>
        <Col xs="12" md="7" className={styles.rightCol}>
          <Img fluid={hero.image.fluid} className={styles.imageStyles} />
        </Col>
      </Row>
    </Container>
  )
}
export default HeroSection
