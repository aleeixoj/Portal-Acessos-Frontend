import React from 'react'
import Dashboard from '../../components/DashBoard'
import Table from '../../components/ClosedTickets'
import { Container } from './styles'
interface Props {
  toggleTheme(): void
}

const Closed = ({ toggleTheme }: Props) => {
  return (
    <Dashboard title="Histórico" description="" toggleTheme={toggleTheme}>
      <Container>
        <div className="table">
          <Table />
        </div>
      </Container>
    </Dashboard>
  )
}

export default Closed
