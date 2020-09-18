import React from 'react'

export const LateralTitle = ({ LateralTitle, classNameContainer, classNameH1 }) => {
  return (
    <div className={classNameContainer}>
      <h1 className={classNameH1}>{LateralTitle}</h1>

    </div>
  )
}
