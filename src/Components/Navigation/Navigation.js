import React from 'react'
import './Navigation.css'
import settings from '../../images/settings.png'
import statusBar from '../../images/Status.png'

const Navigation = () => {
  return (
    <div className="navigation">
      <div className='status'>
        <img src={statusBar} alt="" width="100%" />
      </div>
      <div className="nav">
        <p> &#60; Back</p>
        <p>My Stats</p>
        <img src={settings} alt="" />
      </div>
    </div>
  )
}

export default Navigation
