import React from 'react'
import { Icon } from '../components/Icon'

export const SocialLogos = () => {
  const openGithubUrl = () => {
    const win = window.open('https://github.com/Oscaraag', '_blank')
    win.focus()
  }
  const email = 'oscaraag1493@gmail.com'

  return (
    <div className='social-logo-container'>
      <Icon onClick={openGithubUrl} classIcon1='fab fa-github child2' />
      <a href={`mailto: ${email}`}><Icon classIcon1='far fa-envelope child2' /></a>
    </div>
  )
}
