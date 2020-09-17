import React from 'react'
import { LateralTitle } from '../components/LateralTitle'
import { PageTitle } from '../components/PageTitle'
import { PageImage } from '../components/PageImage'
import '../styles/AboutMe.scss'
import { TextDescription } from '../components/TextDescription'

import { SocialLogos } from '../containers/SocialLogos'

export const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <PageTitle title='About me' />
      <LateralTitle LateralTitle='Explore Youre mind' />
      <PageImage />
      <TextDescription description={`Soy desarrollador web, Venezolano
      amante de la tecnologia, las ciencias en general y la vida, si lo imaginas es posible, hagamoslo!!`}
      />
      <SocialLogos />
    </div>
  )
}