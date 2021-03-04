import React from 'react'
import Dashboard from '../../components/DashBoard'
import Syst from '../../components/Adm/systems'
import { UserStyle } from './styles'

interface Props {
  toggleTheme(): void
}

const Sys = ({ toggleTheme }: Props) => {
  return (
    <Dashboard
      title="Painel Adm"
      description="Sistemas"
      toggleTheme={toggleTheme}
    >
      <UserStyle>
        <div className="table">
          <Syst />
        </div>
      </UserStyle>
    </Dashboard>
  )
}
export default Sys
