import React from 'react'

import Img, { FluidObject } from 'gatsby-image'

interface Props {
  title: string
  text: string
  image: FluidObject
  imageStyles: string
  textStyles: string
  itemWrapper: string
}

const ToolsItem = ({
  title,
  text,
  image,
  imageStyles,
  textStyles,
  itemWrapper,
}) => {
  return (
    <div className={itemWrapper}>
      <Img fluid={image} className={imageStyles} />
      <h4>{title}</h4>
      <p className={textStyles}>{text}</p>
    </div>
  )
}

export default ToolsItem
