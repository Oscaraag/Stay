import React, { useState } from 'react'
import { SkillsDescription } from '../SkillsDescription'
import { Icon } from '../Icon'

export const SkillsIcon = ({ iconName, skill }) => {
  const [showDescription, setShowDescription] = useState('')
  const showDescriptionHandler = () => {
    showDescription === 'bucle' ? setShowDescription('show-skill') : setShowDescription('bucle')
  }

  return (
    <div className='skills-icon-container'>
      <Icon
        onClick={showDescriptionHandler}
        classIcon1={iconName}
        classIcon2='skills-icon'
      />
      <SkillsDescription showDescription={showDescription} description={skill} />
    </div>
  )
}
