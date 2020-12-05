import React from 'react'
import FC from '~/types/fc'
import Img, { FluidObject } from 'gatsby-image'

import styles from './contacts-item.module.scss'

interface Props {
  text: string
  avatar: FluidObject
  outerwrapper: string
  innerWrapper: string
  image: string
}

const ContactsItem: FC<Props> = ({
  text,
  avatar,
  outerwrapper,
  innerWrapper,
  image,
}) => {
  return (
    <div className={outerwrapper}>
      <div className={innerWrapper}>
        <p className={styles.itemText}>{text}</p>
        <Img fluid={avatar} className={image} />
      </div>
    </div>
  )
}

export default ContactsItem
