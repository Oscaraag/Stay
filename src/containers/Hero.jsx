import React from 'react'
import { HeroTitle } from '../components/HeroTitle'
import { HeroLogo } from '../components/HeroLogo'
import { Indicator } from '../components/Indicator'
import { HeroDescription } from '../components/HeroDescription'
import '../styles/HeroStyles.scss'

export const Hero = () => {
  return (
    <div className='hero-container'>
      <HeroTitle />
      <HeroLogo />
      <Indicator />
      <HeroDescription />
    </div>
  )
}
