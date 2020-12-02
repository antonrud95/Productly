import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'

import Logo from '~/components/ui/general/logo/logo.component'

import FC from '~/types/fc'

import CloseIcon from '~/assets/icons/menu-close-icon.svg'

import styles from './mobile-menu.module.scss'
import Button from '~/components/ui/general/button/button.component'

interface Props {
  isShown: boolean
  toggle: (value: boolean) => void
}

const MobileMenu: FC<Props> = ({ isShown, toggle }) => {
  const shownClass = [styles.root, styles.root__shown].join(' ')
  const closeClickHandler = () => {
    toggle(false)
  }
  return (
    <div className={isShown ? shownClass : styles.root}>
      <Container>
        <Logo />
        <CloseIcon onClick={closeClickHandler} className={styles.close} />
      </Container>
      <Container className={styles.linkBlock}>
        <Link to="/" className={styles.link}>
          Product
        </Link>
        <Link to="/" className={styles.link}>
          Customers
        </Link>
        <Link to="/" className={styles.link}>
          Pricng
        </Link>
        <Link to="/" className={styles.link}>
          Resources
        </Link>
        <Button variant={'secondary'} className={styles.firstBtn}>
          Sign In
        </Button>
        <Button variant={'primary'} className={styles.secondBtn}>
          Sign Up
        </Button>
      </Container>
    </div>
  )
}

export default MobileMenu
