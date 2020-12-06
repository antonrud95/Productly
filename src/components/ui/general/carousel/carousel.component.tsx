import React, { ReactNodeArray } from 'react'
import FC from '~/types/fc'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'

interface Props {
  children: ReactNodeArray
}

const Carousel: FC<Props> = ({ children }) => {
  const { width } = useWindowDimensions()
  const setCards = () => {
    if (width < 768) {
      return 1
    } else {
      return 3
    }
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: setCards(),
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
