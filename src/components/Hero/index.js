import React from 'react'
import './styles.scss'
import logo from '../../../public/img/logo.svg'
import ship from '../../../public/img/ship.svg'

export const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-name-container'>
        <h1>.... - .- --.- .-.-.. </h1>
        <h2>Stay</h2>
      </div>
      <figure className='hero-img-container'>
        <img src={logo} alt='' />
      </figure>
      <figure className='hero-img-indicator-container'>
        <a href=''><img src={ship} alt='' /></a>
      </figure>
      <div className='hero-description-container'>
        <h3>Hola, soy Oscar Angel</h3>
        <h4>Frontend Developer</h4>
      </div>
    </div>
  )
}
