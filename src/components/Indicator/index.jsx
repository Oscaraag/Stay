import React from 'react'
import ship from '../../../public/img/ship.svg'
import { Link } from 'react-scroll'
export const Indicator = () => {
  return (
    <figure className='hero-img-indicator-container'>
      <Link to='about-me' smooth duration={200}>
        <img name='indicator' src={ship} alt='scroll indicator' />
      </Link>
    </figure>
  )
}
