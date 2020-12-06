import React from 'react'
import FC from '~/types/fc'
import Img, { FluidObject } from 'gatsby-image'
import Typewriter from 'typewriter-effect'

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
  const typing = (typewriter) => {
    typewriter.typeString(text).start()
  }
  return (
    <div className={outerwrapper}>
      <div className={innerWrapper}>
        <Typewriter onInit={typing} />
        <Img fluid={avatar} className={image} />
      </div>
    </div>
  )
}

export default ContactsItem
