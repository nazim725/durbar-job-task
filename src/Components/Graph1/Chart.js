import React, { Component } from 'react'
import CanvasJSReact from '../../file/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default class Graph2 extends Component {
  constructor() {
    super()
    this.toggleDataSeries = this.toggleDataSeries.bind(this)
  }

  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false
    } else {
      e.dataSeries.visible = true
    }
    this.chart.render()
  }

  render() {
    const options = {
      theme: 'light2',
      animationEnabled: true,
      axisX: {
        title: 'Month',
      },
      axisY: {
        title: 'Words',
        titleFontColor: '#6D78AD',
        lineColor: '#6D78AD',
        labelFontColor: '#6D78AD',
        tickColor: '#6D78AD',
      },

      toolTip: {
        shared: true,
      },
      legend: {
        cursor: 'pointer',
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: 'spline',
          showInLegend: true,
          xValueFormatString: 'MMM',
        
          dataPoints: [
            { x: new Date(2017, 0, 1), y: 0 },
            { x: new Date(2017, 1, 1), y: 50 },
            { x: new Date(2017, 2, 1), y: 126 },
           
          ],
        },
        {
          type: 'spline',
  
       
          showInLegend: true,
          xValueFormatString: 'MMM',
      
          dataPoints: [
            { x: new Date(2017, 0, 1), y: 0 },
            { x: new Date(2017, 1, 1), y: 100 },
            { x: new Date(2017, 2, 1), y: 24 },
           
          ],
        },
      ],
    }

    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    )
  }
}
