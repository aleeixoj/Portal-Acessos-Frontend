import React, { useRef, useEffect, useState } from 'react'
import { FormHandles } from '@unform/core'
import api from '../../services/api'

import { Container, Button, Select, Form } from './styles'
interface PropsModal {
  array: any
}

const Modal = (
  {
    array
  }: PropsModal
) => {
  const formRef = useRef<FormHandles>(null)
  const [optionsSelect, setOptionsSelect] = useState([])
  const [message, setMessage] = useState('')
  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/getUsers')
      setOptionsSelect(response.data)
    }
    getData()
  }, [])
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,

      color: '#000',
      padding: 20
    })
  }

  async function handleSubmit(data: any) {
    const sourceData = {
      data,
      array
    }
    const response = await api.put('/rotear', sourceData)
    setMessage(response.data.status_message)
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <p>{message}</p>
        <Select
          name="rotear"
          placeholder="Rotear"
          options={optionsSelect}
          style={customStyles}
        ></Select>
        <Button type="submit">Rotear</Button>
      </Form>
    </Container>
  )
}

export default Modal
