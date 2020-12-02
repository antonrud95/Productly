import React from 'react'

import Img from 'gatsby-image'
import FC from '~/types/fc'

import styles from './info-check.module.scss'

interface Props {
  image: any
  text: string
}

const InfoCheck: FC<Props> = ({ image, text }) => {
  return (
    <div className={styles.infocheckWrapper}>
      <Img fluid={image} className={styles.infocheckImg} />
      <p className={styles.infocheckText}>{text}</p>
    </div>
  )
}

export default InfoCheck
