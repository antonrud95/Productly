import React from 'react'
import FC from '~/types/fc'
import Img, { FluidObject } from 'gatsby-image'

import styles from './contacts-item.module.scss'

interface Props {
  text: string
  avatar: FluidObject
}

const ContactsItem: FC<Props> = ({ text, avatar }) => {
  return (
    <div className={styles.itemWrapper}>
      <p className={styles.itemText}>{text}</p>
      <Img fluid={avatar} className={styles.itemImage} />
    </div>
  )
}

export default ContactsItem
