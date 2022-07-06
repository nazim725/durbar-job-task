import React from 'react'
import './Navs.css'
import p1 from '../../images/Oval.png'
import p2 from '../../images/2.png'
import p3 from '../../images/3.png'
import Nav from 'react-bootstrap/Nav'
import { Row, Col } from 'react-bootstrap'

const Navs = () => {
  return (
    <div className="inner-nav">
      <Row>
        <Col md="6" sm={12}>
          <Nav  defaultActiveKey="/link-2" className="navs">
            <Nav.Item>
              <Nav.Link className="nav-link" href="/home">
                {' '}
                <img src={p1} alt="" /> Know Words
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" href="/link-1">
                {' '}
                <img src={p2} alt="" /> Know Grammar
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" href="/link-2">
                {' '}
                <img src={p2} alt="" /> Speech
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </div>
  )
}

export default Navs
