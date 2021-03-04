import React from 'react'
import { useAuth } from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
interface Props {
  toggleTheme(): void
}

export default function Routes({ toggleTheme }: Props) {
  const { authenticated } = useAuth()

  return authenticated ? (
    <AuthRoutes toggleTheme={toggleTheme} />
  ) : (
    <AppRoutes />
  )
}
