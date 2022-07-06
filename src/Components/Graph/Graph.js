import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Count from '../Count/Count'
import LineChart from '../Graph1/LineChart'
import AreaChart from '../Graph2/Graph2'
import AreaChart2 from '../Graph3/Graph3'
import Navs from '../Navs/Navs'
import './Graph.css'

const Graph = () => {
  return (
    <div className="graph">
      <Navs />
      <Row className="mt-4">
        <Col md={4}>
          <LineChart />
        </Col>
        <Col md={5}>
          <AreaChart />
          <AreaChart2 />
        </Col>
        <Col md={3}>
          <Count />
        </Col>
      </Row>
    </div>
  )
}

export default Graph
