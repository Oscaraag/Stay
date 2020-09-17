import React from 'react'
import './styles.scss'

export const TextDescription = ({ description }) => {
  return (
    <div id='about-me' name='about-me' className='description-container'>
      <span>
        {description}
      </span>
    </div>
  )
}
