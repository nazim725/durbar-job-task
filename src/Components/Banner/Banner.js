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
      <Row>
        <Col md={5}>
          <div className="banner-card">
            <Card />
          </div>
        </Col>
        <Col md={7}>
          <div className="spinner">
            <Speaking />
            <Grammar />
            <Words />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Banner
