import React, { useRef, useState } from 'react'
import api from '../../services/api'
import { FaSearch } from 'react-icons/fa'
import { FormHandles } from '@unform/core'

import {
  Container,
  Input,
  Form,
  Button,
  Area,
  NewIncidentBox,
  NewInc,
  NewInc2
} from './styles'

const FormConsulta = () => {
  const [status, setStatus] = useState('')
  const [reqs, setReqs] = useState('')
  const [lastModified, setLastModified] = useState('')
  const [type, setType] = useState('')
  const [system, setSystem] = useState('')
  const [desc, setDesc] = useState('')
  const [respo, setRespo] = useState('')
  const [aberto, setAberto] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [chamado, setChamado] = useState('')
  async function handleSubmit(data: any) {
    const response = await api.post('/busca', data)
    setChamado(response.data.nchamado)
    setStatus(response.data.status)
    setLastModified(response.data.lastModified)
    setType(response.data.tipo)
    setSystem(response.data.sistema)
    setReqs(response.data.requisitante)
    setDesc(response.data.desc)
    setRespo(response.data.responsavel)
    setAberto(response.data.created)
  }
  const formRef = useRef<FormHandles>(null)
  return (
    <Container>
      <div className="formulario">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div className="top">
            <Input
              type="text"
              name="nchamado"
              id="nchamado"
              label="Digite o Número do Chamado"
            ></Input>
            <div className="botao">
              <Button type="submit">
                <FaSearch />
              </Button>
            </div>
          </div>
          <div className="left">
            <Input name="status" label="Status" placeholder={status}></Input>
            <Input
              name="responsavel"
              label="Analista Responsável"
              placeholder={respo}
              disabled
            ></Input>
            <Input
              name="aberto"
              label="Data de Abertura"
              placeholder={aberto}
              disabled
            ></Input>
            <Input
              name="type"
              label="Tipo de solicitação"
              placeholder={type}
              disabled
            ></Input>
          </div>
          <div className="right">
            <Input name="reqs" label="Requisitante" placeholder={reqs}></Input>
            <Input
              name="last-modified"
              label="Última alteração"
              placeholder={lastModified}
              disabled
            ></Input>
            <Input
              name="prazo"
              label="Prazo"
              placeholder="20 Dias"
              disabled
            ></Input>
            <Input
              name="system"
              label="Sistema"
              placeholder={system}
              disabled
            ></Input>
          </div>
          <div className="bottom">
            <Area
              name="description"
              label="Descrição"
              placeholder={desc}
              disabled
            ></Area>
            <div className="botoes">
              <Button
                onClick={() => {
                  setShowModal(true)
                }}
                style={{ width: 150 }}
              >
                Reabrir chamado
              </Button>
              <Button
                onClick={() => {
                  setShowModal2(true)
                }}
                style={{ width: 150 }}
              >
                Cancelar chamado
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <NewIncidentBox show={showModal}>
        <div
          className="background"
          onClick={() => {
            setShowModal(false)
          }}
        ></div>
        <button
          onClick={() => {
            setShowModal(false)
          }}
        ></button>
        <NewInc nchamado={chamado} requisitante={reqs} />
      </NewIncidentBox>

      <NewIncidentBox show={showModal2}>
        <div
          className="background"
          onClick={() => {
            setShowModal2(false)
          }}
        ></div>
        <button
          onClick={() => {
            setShowModal2(false)
          }}
        ></button>
        <NewInc2 nchamado={chamado} requisitante={reqs} />
      </NewIncidentBox>
    </Container>
  )
}

export default FormConsulta
