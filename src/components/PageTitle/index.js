import React from 'react'

import './styles.scss'

export const PageTitle = ({ title }) => {
  return (
    <div className='title-container'>
      <h1 className='title'>{title}</h1>
    </div>
  )
}
