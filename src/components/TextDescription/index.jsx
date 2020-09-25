import React from 'react'
import { SocialLogos } from '../../containers/SocialLogos'

export const TextDescription = ({ description }) => {
  return (
    <div className='description-container'>

      <span>
        {description}
      </span>
      <SocialLogos />
    </div>
  )
}
