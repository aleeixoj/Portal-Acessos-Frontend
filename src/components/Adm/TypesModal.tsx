import React, { useState } from 'react'
import { Content, Input, Form, Button } from './styles'
import api from '../../services/api'

const Modal2 = () => {
  const [message, setMessage] = useState('')
  async function handleSubmit(data: any) {
    const response = await api.post('/add-type', data)
    setMessage(response.data.status_message)
  }
  return (
    <Content>
      <Form onSubmit={handleSubmit}>
        <p>{message}</p>
        <Input
          name="type"
          id="type"
          placeholder="Digite o nome do sistema"
        ></Input>
        <div className="but">
          <Button type="submit">Adicionar</Button>
        </div>
      </Form>
    </Content>
  )
}
export default Modal2
