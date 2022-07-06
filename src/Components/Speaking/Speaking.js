import React, { useEffect } from 'react'
import './Speaking.css'

const Speaking = () => {
  useEffect(() => {
    const numb = document.querySelector('.progress-parcentage')
    let counter = 0
    setInterval(() => {
      if (counter == 26) {
        clearInterval()
      } else {
        counter += 1
        numb.textContent = counter + '%'
      }
    }, 80)
  }, [])
  return (
    <div class="container ">
      <div class="row">
        <div class="col-md-3 col-sm-6 loading">
          <div class="progress blue">
            <span class="progress-left">
              <span class="progress-bar"></span>
            </span>
            <span class="progress-right">
              <span class="progress-bar"></span>
            </span>
          </div>
          <div class="progress-value">
            <p
              className="progress-parcentage"
              style={{ color: '#0FBF39',marginTop:'30px',fontWeight:'bold',fontSize:'20px'  }}
            >
              0%
            </p>
          </div>
        </div>
      </div>

      <div className="speaking-text">
        <p>Speaking</p>
        <p>58 completed</p>
      </div>
    </div>
  )
}

export default Speaking
