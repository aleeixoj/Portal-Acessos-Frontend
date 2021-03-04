import React from 'react'
import Users from '../../components/Adm'
import Dashboard from '../../components/DashBoard'

import { UserStyle } from './styles'

interface Props {
  toggleTheme(): void
}

const AllUsers = ({ toggleTheme }: Props) => {
  return (
    <Dashboard title="Painel Adm" description="" toggleTheme={toggleTheme}>
      <UserStyle>
        <div className="table">
          <Users />
        </div>
      </UserStyle>
    </Dashboard>
  )
}

export default AllUsers
