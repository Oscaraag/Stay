import React, { useState } from 'react'
import { SkillsDescription } from '../SkillsDescription'

export const SkillsIcon = ({ iconName, skill }) => {
  const [showDescription, setShowDescription] = useState('')
  const showDescriptionHandler = () => {
    showDescription === 'bucle' ? setShowDescription('show-skill') : setShowDescription('bucle')
  }

  return (
    <div className='skills-icon-container'>
      <i
        onClick={showDescriptionHandler}
        className={`${iconName} skills-icon`}
      />
      <SkillsDescription showDescription={showDescription} description={skill} />
    </div>
  )
}
