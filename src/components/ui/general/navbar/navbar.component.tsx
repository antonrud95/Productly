import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import classnames from 'classnames'

import Logo from '~/components/ui/general/logo/logo.component'
import MobileMenu from '~/components/ui/general/mobile-menu/mobile-menu.component'
import Button from '~/components/ui/general/button/button.component'

import DarkMenuOpenIcon from '~/assets/icons/menu-open-icon-dark.svg'

import styles from './navbar.module.scss'

const SNavbar = () => {
  const [isMenuShown, toggleMenu] = useState(false)

  const openClickHandler = () => {
    toggleMenu(true)
  }

  return (
    <Navbar
      fixed="top"
      className={classnames(styles.navbar, styles.navbar__onLight)}
    >
      <Container className={styles.navContainer}>
        <Logo />
        <DarkMenuOpenIcon
          className={styles.openIcon}
          onClick={openClickHandler}
        />

        <Nav className={classnames(styles.nav, 'ml-auto')}>
          <Link to="/" className={styles.navLink}>
            Product
          </Link>
          <Link to="/" className={styles.navLink}>
            Customers
          </Link>
          <Link to="/" className={styles.navLink}>
            Pricng
          </Link>
          <Link to="/" className={styles.navLink}>
            Resources
          </Link>
        </Nav>
        <Nav className={styles.nav}>
          <Button variant={'secondary'}>Sign In</Button>
          <Button variant={'primary'}>Sign Up</Button>
        </Nav>
      </Container>
      <MobileMenu isShown={isMenuShown} toggle={toggleMenu} />
    </Navbar>
  )
}

export default SNavbar
