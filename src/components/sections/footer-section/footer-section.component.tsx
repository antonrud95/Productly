import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '~/components/ui/general/logo/logo.component'
import { Link } from 'gatsby'
import SButton from '~/components/ui/general/button/button.component'

import styles from './footer-section.module.scss'

const Footer = () => {
  return (
    <Container className={styles.footerContainer}>
      <Row>
        <Col xs="12">
          <Logo />
        </Col>
        <Col xs="12" md="6" lg="8" className={styles.linkWrapper}>
          <div className={styles.linkWrapperItem}>
            <Link to="/" className={styles.linkItem}>
              About us
            </Link>
            <Link to="/" className={styles.linkItem}>
              Blog
            </Link>
            <Link to="/" className={styles.linkItem}>
              Contact
            </Link>
            <Link to="/" className={styles.linkItem}>
              FAQ
            </Link>
          </div>
          <div className={styles.linkWrapperItem}>
            <Link to="/" className={styles.linkItem}>
              Disclaimer
            </Link>
            <Link to="/" className={styles.linkItem}>
              Financing
            </Link>
            <Link to="/" className={styles.linkItem}>
              Privacy policy
            </Link>
            <Link to="/" className={styles.linkItem}>
              Terms of service
            </Link>
          </div>
        </Col>
        <Col xs="12" md="6" lg="4" className={styles.btnWrapper}>
          <div className={styles.inputWrapper}>
            <input className={styles.footerInput} />
            <SButton variant="primary" className={styles.footerBtn}>
              Sign up Now
            </SButton>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
