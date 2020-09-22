import React from 'react'
import { ReactComponent as Ship } from '../../../public/img/ship.svg'
import { Link } from 'react-scroll'

export const Indicator = () => {
  return (
    <figure className='hero-img-indicator-container'>
      <Link to='about-me' smooth duration={200}>
        <Ship name='indicator' alt='scroll indicator' />
      </Link>
    </figure>
  )
}
