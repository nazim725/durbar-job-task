import React, { useEffect } from 'react'
import './Grammar.css'

const Grammar = () => {
  useEffect(() => {
    const numb = document.querySelector('.progress-parcentage-grammar')
    let counter = 0
    setInterval(() => {
      if (counter == 48) {
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
        <div class="col-md-3 col-sm-6 loading-grammar">
          <div class="progress progress-grammar yellow">
            <span class="progress-left">
              <span class="progress-bar"></span>
            </span>
            <span class="progress-right">
              <span class="progress-bar"></span>
            </span>
            <div class="progress-value-grammar">
              <p
                className="progress-parcentage-grammar"
                style={{ color: '#0A70F5',marginTop:"-24px", fontWeight:'bold',fontSize:'20px' }}
              >
                0%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="speaking-text">
        <p>Grammar</p>
        <p>126 completed</p>
      </div>




      
    </div>
  )
}

export default Grammar
