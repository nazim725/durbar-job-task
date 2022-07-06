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
          <div class="progress-words red-words">
            <span class="progress-left-words">
              <span class="progress-bar-words"></span>
            </span>
            <span class="progress-right-words">
              <span class="progress-bar-words"></span>
            </span>
            <div class="progress-value-words">
              <p
                className="progress-parcentage-words"
                style={{ color: '#EE1429',marginTop:"-24px", fontWeight:'bold',fontSize:'20px' }}
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
