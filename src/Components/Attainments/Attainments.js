import React from 'react'
import './Attainments.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Attainments = () => {
  return (
    <div className="attainments">
      <h4>Attainments</h4>
      <Breadcrumb>
        <Breadcrumb.Item active href="#">
          Today
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">7 days</Breadcrumb.Item>
        <Breadcrumb.Item href="#">30 days</Breadcrumb.Item>
        <Breadcrumb.Item href="#">100 days</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Attainments
