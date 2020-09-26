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
        description='Soy desarrollador web, Venezolano amante de la tecnologia, las ciencias en general y la vida.'
      />
      <PageImage />

    </div>

  )
}
