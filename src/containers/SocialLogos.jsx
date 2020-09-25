import React from 'react'
import { Icon } from '../components/Icon'
import { LinkHandler } from '../utils/LinkHandler'

export const SocialLogos = () => {
  const PAGEURL = 'https://github.com/Oscaraag'

  const openGithubUrl = () => {
    LinkHandler(PAGEURL)
  }
  const email = 'oscaraag1493@gmail.com'

  return (
    <div className='social-logo-container'>
      <Icon onClick={openGithubUrl} classIcon1='fab fa-github social-logo-child' />
      <a href={`mailto: ${email}`}><Icon classIcon1='far fa-envelope social-logo-child' /></a>
    </div>
  )
}
