import React, { useState } from 'react'
import { Content, Input, Form, Button } from './styles'
import api from '../../services/api'

const Modal = () => {
  const [message, setMessage] = useState('')
  async function handleSubmit(data: any) {
    const response = await api.post('/add-sistema', data)
    setMessage(response.data.status_message)
  }
  return (
    <Content>
      <Form onSubmit={handleSubmit}>
        <p>{message}</p>
        <Input
          name="system"
          id="system"
          placeholder="Digite o nome do sistema"
        ></Input>
        <div className="but">
          <Button type="submit">Adicionar</Button>
        </div>
      </Form>
    </Content>
  )
}
export default Modal
