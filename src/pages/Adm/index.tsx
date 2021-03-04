import React from 'react'
import Dashboard from '../../components/DashBoard'
import { Link } from 'react-router-dom'
import { Container } from './styles'

import { FaUsers, FaStream, FaCog } from 'react-icons/fa'

interface Props {
  toggleTheme(): void
}

const Adm = ({ toggleTheme }: Props) => {
  return (
    <Dashboard title="Painel Adm" description="" toggleTheme={toggleTheme}>
      <Container>
        <div className="icons-box">
          <Link to="/users">
            <FaUsers />
          </Link>
          <span>Lista de usuários</span>
        </div>
        <div className="icons-box">
          <Link to="/systems">
            <FaCog />
          </Link>
          <span>Lista de sistemas</span>
        </div>
        <div className="icons-box">
          <Link to="/types">
            <FaStream />
          </Link>
          <span>Lista de tipos</span>
        </div>
      </Container>
    </Dashboard>
  )
}

export default Adm
