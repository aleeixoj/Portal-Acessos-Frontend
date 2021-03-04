import React from 'react'
import Dashboard from '../../components/DashBoard'
import Table from '../../components/MyTable'
import { Container } from './styles'
interface Props {
  toggleTheme(): void
}

const MyData = ({ toggleTheme }: Props) => {
  return (
    <Dashboard title="Minha Caixa" description="" toggleTheme={toggleTheme}>
      <Container>
        <div className="table">
          <Table />
        </div>
      </Container>
    </Dashboard>
  )
}

export default MyData
