import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Count from '../Count/Count'
import Graph3 from '../Graph3/Graph3'
import Graph4 from '../Graph4/Graph4'
import Graph2 from './Chart'

const Graph1 = () => {
  return (
    <div>
      <Row>
        <Col md={4}>
          <Graph2 />
        </Col>
        <Col md={4}>
          <div style={{ height: '230px' }}>
            <Graph3 />
          </div>
          <div style={{ height: '230px' }}>
            <Graph4 />
          </div>
        </Col>
        <Col md={4}>
          <Count />
        </Col>
      </Row>
    </div>
  )
}

export default Graph1
