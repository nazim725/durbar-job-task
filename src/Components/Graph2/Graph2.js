import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import './Graph2.css'
const apexData = {
  series: [
    {
   
      data: [31, 40, 28, 51, 42, 109, 126],
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
      colors: ['#00FF00', '#008000', ' #ABEBC6'],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
}

const AreaChart = () => {
  const [state, setState] = useState(apexData)

  return (
    <div className="area-chart">
      <div className="area-chart-info">
        <h5>Words Pronounced</h5>
        <div className="number d-flex">
          <h2>126</h2>
          <p>
            +5 <i class="ri-arrow-up-s-fill"></i>
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

export default AreaChart
