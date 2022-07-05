import React from 'react'
import './Card.css'
import men from '../../images/men.png'
import bar from '../../images/1.png'
import coin from '../../images/coin-stack.png'
import { Row, Col } from 'react-bootstrap'

const Card = () => {
  return (
    <div className="card">
      <Row className="ps-4">
        <Col md={5}>
          <div className="card-img">
            <img src={bar} alt="" className="bar-img" />
            <img src={men} alt="" width={160} />
          </div>
        </Col>
        <Col md={5}>
          
          <div className="card-info ms-4 mt-4">
            <h5>Justin Danko</h5>
            <p>United Kingdom</p>
            <div className="d-flex ">
              <img src={coin} alt="" width={20} height={30} />
              <p className="ms-3">268 points</p>
            </div>
          </div>
        </Col>
        <Col md={2}>
          <div className="card-button mt-4">
            <p>$42,5</p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className='text-start mt-5 ms-4'>
            <p>Longest Study Session</p>
            <p className="text-primary">4 hours 26 min</p>
        </div>
      </Row>
      <Row>
        <div className='text-start mt-2 ms-4'>
            <p>Longest Study Streak</p>
            <p className="text-primary">12 days</p>
        </div>
      </Row>
    </div>
  )
}

export default Card
