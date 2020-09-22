import React from 'react'
import { LateralTitle } from '../LateralTitle'
import astro from '../../../public/img/astro.png'

export const PageImage = () => {
  return (
    <div className='about-me-img-container'>
      <LateralTitle
        classNameH1='lateral-title-1'
        classNameContainer='lateral-title-container'
        LateralTitle={'EXPLORE YOU\'RE MIND'}
      />
      <img src={astro} alt='image' />
    </div>
  )
}
