import React from 'react'
import './Count.css'
import CountUp from 'react-countup'
import bg from '../../images/Oval5.png'

const Count = () => {
  return (
    <div className="counter">
      <div className="count">
        <h4>Words</h4>
        <h2 >
          <CountUp end={150} duration={16} />
        </h2>
      </div>
      <div className="count-info">
        <p className="text-start text-center mt-4 pb-5">
          To the next, level{' '}
          <span>
            1028
          </span>
        </p>
      </div>
    </div>
  )
}

export default Count
