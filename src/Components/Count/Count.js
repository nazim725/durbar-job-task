import React from 'react'
import './Count.css'
import CountUp from 'react-countup'

const Count = () => {
  return (
    <div style={{background:"#fff" ,height:'200px', width:'200px'}}>
      <div className="count">
        <p className="pt-4">Words</p>
        <h1>
          <CountUp end={150} duration={16} /> ++
        </h1>
      </div>
      <div>
        <p className="text-start ms-3 mt-4">To the next, level</p>
      </div>
    </div>
  )
}

export default Count
