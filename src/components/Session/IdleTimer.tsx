import React, { useRef, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import { Button, StyledModal, Container } from './styles'
import { useAuth } from '../../contexts/auth'

// StyledModal.setAppElement('#root')

const Idle = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { signOut } = useAuth()
  const IdleTimeRef = useRef(null)
  const sessionTimeoutRef = useRef<HTMLInputElement | any>(null)
  const logOut = () => {
    signOut()
    setModalIsOpen(false)
    console.log('saindo')
  }
  const onIdle = () => {
    setModalIsOpen(true)
    sessionTimeoutRef.current = setTimeout(logOut, 5000)
  }
  const stayActive = () => {
    setModalIsOpen(false)
    clearTimeout(sessionTimeoutRef.current)
  }
  return (
    <Container>
      <StyledModal isOpen={modalIsOpen}>
        <h2>Você está ocioso a mais de 15 minutos</h2>
        <p>Você será desconectado em breve</p>
        <div className="button">
          <Button onClick={stayActive}>Continuar Logado</Button>
          <Button onClick={logOut}>Sair</Button>
        </div>
      </StyledModal>
      <IdleTimer
        ref={IdleTimeRef}
        timeout={900 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </Container>
  )
}

export default Idle
