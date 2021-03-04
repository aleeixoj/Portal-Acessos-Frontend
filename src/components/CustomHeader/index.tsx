import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import lightImg from '../../assets/images/uncontrol.svg'
import darkImg from '../../assets/images/uncontrol.svg'
import { useAuth } from '../../contexts/auth'

import { Container } from './styles'

const CustomHeader = () => {
  const [img, setImg] = useState('')
  const { title } = useContext(ThemeContext)
  const { user } = useAuth()
  async function validaTheme() {
    if (title === 'dark') {
      setImg(darkImg)
    } else {
      setImg(lightImg)
    }
  }
  const { signOut } = useAuth()

  return (
    <Container onLoad={validaTheme}>
      <header>
        <input type="checkbox" id="control-nav" />
        <label htmlFor="control-nav" className="control-nav"></label>
        <label htmlFor="control-nav" className="control-nav-close"></label>
        <div className="logo-vivo">
          <img src={lightImg} alt="Logo" className="logo" />
        </div>
        <div className="nav-bar">
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/chamado">Consultar chamado</Link>
              </li>
              {user.super_id > 1 && (
                <li>
                  <Link to="/dashboard">Painel</Link>
                </li>
              )}

              <li>
                <Link to="/" onClick={signOut}>
                  Sair
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Container>
  )
}

export default CustomHeader
