import React from 'react'

export const SocialLogos = () => {
  const openGithubUrl = () => {
    const win = window.open('https://github.com/Oscaraag', '_blank')
    win.focus()
  }
  const email = 'oscaraag1493@gmail.com'

  return (
    <div className='social-logo-container'>
      <i onClick={openGithubUrl} className='fab fa-github child2' />
      <a href={`mailto: ${email}`}><i className='far fa-envelope child2' /></a>
    </div>
  )
}
