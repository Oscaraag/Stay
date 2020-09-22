import React from 'react'

import { PageTitle } from '../components/PageTitle'
import { PageImage } from '../components/PageImage'
import '../styles/AboutMe.scss'
import { TextDescription } from '../components/TextDescription'

export const AboutMe = () => {
  return (
    <div name='about-me' className='about-me-container'>
      <PageTitle title='About me' />

      <PageImage />
      <TextDescription
        description='Soy desarrollador web, Venezolano amante de la tecnologia, las ciencias en general y la vida, si lo imaginas es posible, hagamoslo!!'
      />
    </div>
  )
}
