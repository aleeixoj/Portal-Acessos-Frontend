import React from 'react'
import { useAuth } from '../../contexts/auth'

import { Grid, Main } from './styles'

import Sidebar from '../Sidebar'
import Header from '../DashHeader'

interface Props {
  children: any
  title: string
  description: string
  toggleTheme(): void
}

const Dashboard = ({ children, toggleTheme, ...rest }: Props) => {
  const { signOut, user } = useAuth()

  return (
    <Grid>
      <Sidebar name={user.name} signOut={signOut} toggleTheme={toggleTheme} />

      <Header title={rest.title} description={rest.description} />

      <Main>{children}</Main>
    </Grid>
  )
}

export default Dashboard
