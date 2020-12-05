import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import FC from '~/types/fc'

// import styles from './marketing-item.module.scss'

interface Props {
  image: FluidObject
  date: string
  author: string
  intro: string
}

const MarketingItem: FC<Props> = ({ image, date, author, intro }) => {
  return (
    <div>
      <Img fluid={image} />
      <div>
        <div>
          <p>By</p>
          <p>{author}</p>
        </div>
        <p>{date}</p>
      </div>
      <p>{intro}</p>
    </div>
  )
}

export default MarketingItem
