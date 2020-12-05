import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import FC from '~/types/fc'

import styles from './marketing-item.module.scss'

interface Props {
  image: FluidObject
  date: string
  author: string
  intro: string
}

const MarketingItem: FC<Props> = ({ image, date, author, intro }) => {
  return (
    <div className={styles.sliderItemWrapper}>
      <Img fluid={image} />
      <div className={styles.itemHeader}>
        <div className={styles.itemAuthor}>
          <p className={styles.headerText}>By</p>
          <p className={styles.headerName}>{author}</p>
        </div>
        <p className={styles.headerText}>{date}</p>
      </div>
      <p className={styles.headerIntro}>{intro}</p>
    </div>
  )
}

export default MarketingItem
