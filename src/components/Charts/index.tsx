import React from 'react'
import { Doughnut } from '@reactchartjs/react-chart.js'
import { Container } from './styles'

interface PropsData {
  dataSeven: any
  dataFifteen: any
  dataThirty: any
}

const Charts = (
  {
    dataSeven,
    dataFifteen,
    dataThirty
  }: PropsData
) => {
  return (
    <Container>
      <div className="chart-box">
        <label>Ultimos 7 Dias</label>
        <Doughnut data={dataSeven} type="doughnut" />
      </div>
      <div className="chart-box">
        <label>Ultimos 15 Dias</label>
        <Doughnut data={dataFifteen} type="doughnut" />
      </div>
      <div className="chart-box">
        <label>Ultimos 30 Dias</label>
        <Doughnut data={dataThirty} type="doughnut" />
      </div>
    </Container>
  )
}
export default Charts
