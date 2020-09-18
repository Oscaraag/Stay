import React from 'react'

export const SkillsDescription = ({ description, showDescription }) => {
  return (
    <div className={`skills-description ${showDescription}`}>
      <span>{description}</span>
    </div>
  )
}
