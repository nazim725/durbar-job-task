import React, { useEffect } from 'react'
import './Words.css'

const Words = () => {
  useEffect(() => {
    const numb = document.querySelector('.progress-parcentage-words')
    let counter = 0
    setInterval(() => {
      if (counter == 35) {
        clearInterval()
      } else {
        counter += 1
        numb.textContent = counter + '%'
      }
    }, 80)
  }, [])
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 loading-words">
          <div class="progress red">
            <span class="progress-left">
              <span class="progress-bar"></span>
            </span>
            <span class="progress-right">
              <span class="progress-bar"></span>
            </span>
            <div class="progress-value-words">
              <p
                className="progress-parcentage-words"
                style={{
                  color: '#0FBF39',
                  marginTop: '-30px',
                  fontWeight: 'bold',
                }}
              >
                0%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="speaking-text">
        <p>Set of Words</p>
        <p>72 completed</p>
      </div>
    </div>
  )
}

export default Words
