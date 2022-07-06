import React, { useState } from 'react'
import './Attainments.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Graph from '../Graph/Graph'
import Days7 from '../Days7/Days7'

const Attainments = ({ active, setActive }) => {
  const [aboutFilter, setAboutFilter] = useState('today')
  return (
    <div>
      <div className="attainments">
        <h4>Attainments</h4>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item
            className={`unActive-class ${
              aboutFilter === 'today' ? 'active-class' : ''
            }`}
            onClick={() => setAboutFilter('today')}
          >
            Today
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className={`unActive-class ${
              aboutFilter === '7day' ? 'active-class' : ''
            }`}
            onClick={() => setAboutFilter('7day')}
          >
            7 days
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className={`unActive-class ${
              aboutFilter === '30day' ? 'active-class' : ''
            }`}
            onClick={() => setAboutFilter('30day')}
          >
            30 days
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className={`unActive-class ${
              aboutFilter === '100day' ? 'active-class' : ''
            }`}
            onClick={() => setAboutFilter('100day')}
          >
            100 days
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {aboutFilter === 'today' && <Graph />}
      {aboutFilter === '7day' && <Days7 />}
    </div>
  )
}

export default Attainments
