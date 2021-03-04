import React, { useEffect, useState } from 'react'
import Dashboard from '../../components/DashBoard'
import api from '../../services/api'

import { Container, Chartjs } from './styles'

interface Props {
  toggleTheme(): void
}

const Portal = ({ toggleTheme }: Props) => {
  const [seven, setSeven] = useState([])
  const [fifteen, setFifteen] = useState([])
  const [thirty, setThirty] = useState([])
  const [mySeven, setMySeven] = useState([])
  const [myFifteen, setMyFifteen] = useState([])
  const [myThirty, setMyThirty] = useState([])

  useEffect(() => {
    document.title = 'Portal Operacional - Dashboard'
    const getSeven = async () => {
      const response = await api.get('/data/seven')
      setSeven(response.data)
    }
    getSeven()
    const getFifteen = async () => {
      const response = await api.get('/data/fifteen')
      setFifteen(response.data)
    }
    getFifteen()
    const getThirty = async () => {
      const response = await api.get('/data/thirty')
      setThirty(response.data)
    }
    getThirty()

    const getMySeven = async () => {
      const response = await api.get('/my/data/seven')
      setMySeven(response.data)
    }
    getMySeven()
    const getMyFifteen = async () => {
      const response = await api.get('/my/data/fifteen')
      setMyFifteen(response.data)
    }
    getMyFifteen()
    const getMyThirty = async () => {
      const response = await api.get('/my/data/thirty')
      setMyThirty(response.data)
    }
    getMyThirty()
  }, [])

  const dataSeven = {
    labels: seven.map((item: any) => {
      return item.sistema
    }),
    datasets: [
      {
        data: seven.map((item: any) => {
          return item.quantidade
        }),
        color: '#fff',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(95, 76, 989, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(95, 76, 989, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  const dataFifteen = {
    labels: fifteen.map((item: any) => {
      return item.sistema
    }),
    datasets: [
      {
        data: fifteen.map((item: any) => {
          return item.quantidade
        }),
        color: '#fff',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(95, 76, 989, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(95, 76, 989, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  const dataThirty = {
    labels: thirty.map((item: any) => {
      return item.sistema
    }),
    datasets: [
      {
        data: thirty.map((item: any) => {
          return item.quantidade
        }),
        color: '#fff',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(95, 76, 989, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(95, 76, 989, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  const myDataSeven = {
    labels: mySeven.map((item: any) => {
      return item.sistema
    }),
    datasets: [
      {
        data: mySeven.map((item: any) => {
          return item.quantidade
        }),
        color: '#fff',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(95, 76, 989, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(95, 76, 989, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  const myDataFifteen = {
    labels: myFifteen.map((item: any) => {
      return item.sistema
    }),
    datasets: [
      {
        data: myFifteen.map((item: any) => {
          return item.quantidade
        }),
        color: '#fff',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(95, 76, 989, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(95, 76, 989, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  const myDataThirty = {
    labels: myThirty.map((item: any) => {
      return item.sistema
    }),
    datasets: [
      {
        data: myThirty.map((item: any) => {
          return item.quantidade
        }),
        color: '#fff',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(95, 76, 989, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(95, 76, 989, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <Dashboard
      title="Caixa principal"
      description="Resumo"
      toggleTheme={toggleTheme}
    >
      <Container>
        <section className="first">
          <h3>Total de chamados</h3>
          <Chartjs
            dataSeven={dataSeven}
            dataFifteen={dataFifteen}
            dataThirty={dataThirty}
          />
        </section>
        <section className="secondary">
          <h3>Meus chamados</h3>
          <Chartjs
            dataSeven={myDataSeven}
            dataFifteen={myDataFifteen}
            dataThirty={myDataThirty}
          />
        </section>
      </Container>
    </Dashboard>
  )
}
export default Portal
