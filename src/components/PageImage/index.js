import React from 'react'

import astro from '../../../public/img/astro.svg'

export const PageImage = () => {
  return (
    <figure className='about-me-img-container'>
      <img src={astro} alt='image' />
    </figure>
  )
}
