import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import './Graph1.css'
const apexData = {
  series: [
    {
      name: 'Month',
      data: [31, 40, 28, 126, 100],
    },
    {
      name: 'Words',
      data: [11, 32, 45, 26,  41],
    },
  ],
  options: {
    chart: {
      height: 437,
      type: 'line',
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'month',
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
}

const LineChart = () => {
  const [state, setState] = useState(apexData)

  return (
    <div className="lineChart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={437}
       
      />
    </div>
  )
}

export default LineChart
