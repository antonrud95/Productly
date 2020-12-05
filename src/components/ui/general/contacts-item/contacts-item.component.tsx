import React from 'react'
import FC from '~/types/fc'
import Img, { FluidObject } from 'gatsby-image'

import styles from './contacts-item.module.scss'

interface Props {
  text: string
  avatar: FluidObject
  outerwrapper: string
}

const ContactsItem: FC<Props> = ({ text, avatar, outerwrapper }) => {
  return (
    <div className={outerwrapper}>
      <div className={styles.itemWrapper}>
        <p className={styles.itemText}>{text}</p>
        <Img fluid={avatar} className={styles.itemImage} />
      </div>
    </div>
  )
}

export default ContactsItem
