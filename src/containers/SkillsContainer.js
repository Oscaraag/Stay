import React from 'react'
import { LateralTitle } from '../components/LateralTitle'
import { SkillsIcon } from '../components/SkillsIcon'

export const SkillsContainer = () => {
  return (
    <>
      <div className='skills-lateral-container'>
        <LateralTitle classNameH1='skills-lateral-h1' classNameContainer='skills-lateral-text-container' LateralTitle='S' />
        <LateralTitle classNameH1='skills-lateral-h1' classNameContainer='skills-lateral-text-container' LateralTitle='K' />
        <LateralTitle classNameH1='skills-lateral-h1' classNameContainer='skills-lateral-text-container' LateralTitle='I' />
        <LateralTitle classNameH1='skills-lateral-h1' classNameContainer='skills-lateral-text-container' LateralTitle='L' />
        <LateralTitle classNameH1='skills-lateral-h1' classNameContainer='skills-lateral-text-container' LateralTitle='L' />
        <LateralTitle classNameH1='skills-lateral-h1' classNameContainer='skills-lateral-text-container' LateralTitle='S' />
      </div>
      <div className='skills-icons-container'>
        <SkillsIcon

          iconName='fab fa-html5 icon-glow-html' skill='HTML 5'
        />
        <SkillsIcon
          iconName='fab fa-css3-alt icon-glow-css'
          skill='CSS 3'
        />
        <SkillsIcon
          iconName='fab fa-js-square icon-glow-js'
          skill='Javascript'
        />
        <SkillsIcon
          iconName='fab fa-react icon-glow-react'
          skill='React.js'
        />
        <SkillsIcon
          iconName='fab fa-sass icon-glow-sass'
          skill='Sass'
        />
        <SkillsIcon
          iconName='fab fa-git-alt icon-glow-git'
          skill='Git'
        />
        <SkillsIcon
          iconName='fab fa-npm icon-glow-npm'
          skill='NPM'
        />
        <SkillsIcon
          iconName='fab fa-node-js icon-glow-node'
          skill='Node.js'
        />

      </div>
    </>
  )
}
