import React, { useEffect } from 'react'
import FormConsulta from '../../components/FormConsulta'

import { Container, Footer, Header } from './styles'

const FindTicket = () => {
  useEffect(() => {
    document.title = `Portal Operacional - Consultar Chamado`
  }, [])
  return (
    <Container>
      <div className="header">
        <Header />
      </div>
      <div className="formulario">
        <FormConsulta />
      </div>
      <Footer />
    </Container>
  )
}

export default FindTicket
