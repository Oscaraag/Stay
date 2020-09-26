
import React from 'react'
import { Helmet } from 'react-helmet'
export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} 👨‍🚀 Frontend Developer </title>}
        {subtitle && <meta name='description' content={subtitle} />}
        <meta name='keywords' content='react, react.js, developer, frontend developer, venezolano, desarrollador web, web developer' />
        <meta name='author' content='Oscar Angel' />
        <meta name='copyright' content='Oscar Angel 2020' />
      </Helmet>
      <div>
        {children}
      </div>
    </>
  )
}
