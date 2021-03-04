import React from 'react'
import { Container } from './styles'
import { format } from 'date-fns'

const CustomFooter = () => {
  return (
    <Container>
      <div className="footer-bottom">
        <p>UnControl - {format(new Date(), 'yyyy')} All rights reserved </p>
      </div>
    </Container>
  )
}

export default CustomFooter
