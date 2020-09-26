import React from 'react'

import { LateralTitle } from '../components/LateralTitle'
import { PageImage } from '../components/PageImage'
import '../styles/AboutMe.scss'
import { TextDescription } from '../components/TextDescription'

export const AboutMe = () => {
  return (

    <div name='about-me' className='about-me-container'>
      <LateralTitle
        classNameH1='lateral-title-1'
        classNameContainer='lateral-title-container'
        LateralTitle={'EXPLORE YOU\'RE MIND'}
      />
      <TextDescription
        description='Soy desarrollador web, venezolano, nacido en Mérida pero feliz en los llanos, me encanta la tecnología, las ciencias, los videojuegos, la música y la vida, actualmente soy frontend developer me encanta trabajar con React.js y todo su ecosistema.'
      />
      <PageImage />

    </div>

  )
}
