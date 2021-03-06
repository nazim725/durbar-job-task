import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import './Graph3.css'

const apexData = {
  series: [
    {
      data: [31, 34, 28, 24, 42, 60, 64],
    },
  ],
  options: {
    chart: {
      height: 200,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: '#EE1429',
    },

    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
}

const AreaChart2 = () => {
  const [state, setState] = useState(apexData)

  return (
    <div className="area-chart mt-4">
      <div className="area-chart-info">
        <h5>Words not Pronounced</h5>
        <div className="number d-flex">
          <h2>24</h2>
          <p id="number-down">
            -3 <i class="ri-arrow-down-s-fill"></i>
          </p>
        </div>
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={200}
      />
    </div>
  )
}

export default AreaChart2
