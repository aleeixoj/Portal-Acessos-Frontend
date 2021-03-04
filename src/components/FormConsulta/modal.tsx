import React, { useState } from 'react'
import api from '../../services/api'
import { Content, Form, Button, Area } from './styles'

interface Props {
  nchamado: string
  requisitante: string
}

const Modal = (
  {
    nchamado,
    requisitante
  }: Props
) => {
  const [message, setMessage] = useState('')
  async function handleSubmit(data: any) {
    const sourceData = {
      data,
      nchamado,
      requisitante
    }
    const response = await api.put('/reabre', sourceData)
    setMessage(response.data.status_message)
  }
  return (
    <Content>
      <Form onSubmit={handleSubmit}>
        <Area
          style={{ height: 120 }}
          name="desc"
          label="Motivo da reabertura"
        ></Area>
        <h2>{message}</h2>

        <Button
          type="submit"
          style={{ width: 150, justifyContent: 'center', marginLeft: '10rem' }}
        >
          Reabrir
        </Button>
      </Form>
    </Content>
  )
}
export default Modal
