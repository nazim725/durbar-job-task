import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from '../Card/Card'
import Grammar from '../Grammer/Grammer'
import Speaking from '../Speaking/Speaking'
import Words from '../Words/Words'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <Card />
      <Speaking />
      <Grammar />
      <Words />
    </div>
  )
}

export default Banner
