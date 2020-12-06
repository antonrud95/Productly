import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'

import Logo from '~/components/ui/general/logo/logo.component'

import FC from '~/types/fc'

import CloseIcon from '~/assets/icons/menu-close-icon.svg'

import styles from './mobile-menu.module.scss'
import Button from '~/components/ui/general/button/button.component'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

interface Props {
  isShown: boolean
  toggle: (value: boolean) => void
}

const MobileMenu: FC<Props> = ({ isShown, toggle }) => {
  const shownClass = [styles.root, styles.root__shown].join(' ')

  const menuRef = useRef(null)
  useEffect(() => {
    isShown ? disableBodyScroll(menuRef.current) : clearAllBodyScrollLocks()
  }, [isShown])

  const closeClickHandler = (e) => {
    e.preventDefault()
    enableBodyScroll(menuRef.current)
    clearAllBodyScrollLocks()
    toggle(false)
  }
  return (
    <div className={isShown ? shownClass : styles.root} ref={menuRef}>
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
