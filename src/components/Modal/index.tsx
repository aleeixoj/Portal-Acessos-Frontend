import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { VscError } from 'react-icons/vsc'

import { Container } from './styles'

interface PropsModal {
  message: string
}

const Modal = ({ message }: PropsModal) => {
  return (
    <Container>
      {message === 'É necessario completar o checklist' ? (
        <div className="Icon2">
          <VscError />
        </div>
      ) : (
          <div className="Icon">
            <FaCheck />
          </div>
        ) && message === 'Matricula espelho incorreta' ? (
        <div className="Icon2">
          <VscError />
        </div>
      ) : (
        <div className="Icon">
          <FaCheck />
        </div>
      )}

      <h1>{message}</h1>
    </Container>
  )
}

export default Modal
