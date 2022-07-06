import React from 'react'
import './Card.css'
import men from '../../images/men.png'
import bar from '../../images/1.png'
import coin from '../../images/coin-stack.png'
import { Row, Col } from 'react-bootstrap'

const Card = () => {
  return (
    <div className="card">
      <Row className="">
        <Col md={5} xs={4}>
          <div className="card-img ms-4">
            <img src={bar} alt="" className="bar-img" />
            <img src={men} alt="" className='profile-img' />
          </div>
        </Col>
        <Col md={5} xs={5}>
          
          <div className="card-info ms-4 mt-4">
            <h4>Justin Danko</h4>
            <p>United Kingdom</p>
            <div className="d-flex ">
              <img src={coin} alt="" width={20} height={30} />
              <p className="ms-3">268 points</p>
            </div>
          </div>
        </Col>
        <Col md={2} xs={2}>
          <div className="card-button mt-4">
            <p className="text-center p-1 fw-bold">$42,5</p>
          </div>
        </Col>
      </Row>
      <Row className="">
        <div className='text-start mt-5 ms-4'>
            <p>Longest Study Session</p>
            <p className="text-primary">4 hours 26 min</p>
        </div>
      </Row>
      <Row className="">
        <div className='text-start mt-2 ms-4'>
            <p>Longest Study Streak</p>
            <p className="text-primary">12 days</p>
        </div>
      </Row>
    </div>
  )
}

export default Card
