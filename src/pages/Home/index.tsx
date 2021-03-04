import React, { useRef, useState, useEffect, useContext } from 'react'
import { FormHandles } from '@unform/core'
import ImageInput from '../../components/ImageInput'
import {
  Container,
  Form,
  Input,
  Header,
  Button,
  Footer,
  Select,
  NewIncidentBox,
  NewInc
} from './styles'
import api from '../../services/api'
import { massivo } from '../../assets/js/options'
import darkImg from '../../assets/images/darkBanner.svg'
import lightImg from '../../assets/images/Banner.svg'
import { ThemeContext } from 'styled-components'

interface Props {
  storageMat: string
}

const Home = ({ ...rest }: Props) => {
  const [img, setImg] = useState('')
  const [system, setSystem] = useState([])
  const [type, setType] = useState([])
  const [on, setOn] = useState(false)
  const [tipoDoSistema, setTipoDoSistema] = useState(false)
  const { title } = useContext(ThemeContext)
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState('')
  // const [sheet, setSheet] = useState('')
  const formRef = useRef<FormHandles>(null)
  async function validaTheme() {
    if (title === 'dark') {
      setImg(darkImg)
    } else {
      setImg(lightImg)
    }
  }

  async function ClearAll() {
    if (tipoDoSistema === true) {
      ;(document.querySelector('#linkSystem') as HTMLInputElement).value = ''
    }
    ;(document.querySelector('#matricula') as HTMLInputElement).value = ''
    ;(document.querySelector('#espelho') as HTMLInputElement).value = ''
  }

  async function handleSubmit(data: any) {
    if (!data.file) {
      const { data: response } = await api.post('/insert/data', data)
      ClearAll()
      setMessage(response.status_message)
    }
    if (data.file) {
      const fd = new FormData()
      fd.append('file', data.file, data.name)
      fd.append('requisitante', data.requisitante)
      fd.append('sistema', data.sistema)
      fd.append('massivo', data.massivo)
      fd.append('tipo', data.tipo)
      fd.append('typeOfSystem', data.typeOfSystem)
      fd.append('linkSystem', data.linkSystem)
      fd.append('matricula', data.matricula)
      fd.append('espelho', data.espelho)
      ClearAll()
      const { data: response } = await api.post('/insert', fd, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      setMessage(response.status_message)
    }
  }

  async function handleMass(value: string) {
    if (value === 'Sim') {
      setOn(true)
    } else {
      setOn(false)
    }
  }
  async function handleTypeOfSystem(value: string) {
    if (value === 'Sim') {
      setTipoDoSistema(true)
    } else {
      setTipoDoSistema(false)
    }
  }

  const download = () => {
    const downloadEmployeeData = () => {
      fetch(
        `${process.env.REACT_APP_API_URL}/uploads/PLANILHAEXEMPLO.xlsx`
      ).then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob)
          let a = document.createElement('a')
          a.href = url
          a.download = `PLANILHAEXEMPLO.xlsx`
          a.click()
        })
      })
    }
    downloadEmployeeData()
  }
  const [mat, setMat] = useState('')
  useEffect(() => {
    document.title = `Portal Operacional - Home`
    const storageMat = sessionStorage.getItem('mat')?.toString()
    setMat(`${storageMat}`)

    const getSystems = async () => {
      const response = await api.get('/getSystems')
      setSystem(response.data)
    }
    const getTypes = async () => {
      const response = await api.get('/getTypes')
      setType(response.data)
    }

    getSystems()
    getTypes()
  }, [])

  return (
    <Container onLoad={validaTheme} {...rest}>
      <div className="header">
        <Header />
      </div>
      <div className="main center">
        <img src={img} alt="Banner" className="banner" />
      </div>
      <div className="form center">
        <Form
          encType="multipart/form-data"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input
            name="requisitante"
            placeholder="Requisitante"
            defaultValue={mat}
            disabled
          ></Input>
          <Select
            name="tipo"
            id="tipo"
            placeholder="Tipo de solicitação"
            options={type}
          ></Select>
          <Select
            name="sistema"
            placeholder="Sistema"
            id="sistema"
            options={system}
          ></Select>
          <Select
            name="typeOfSystem"
            id="typeOfSystem"
            placeholder="É um sistema web?"
            options={massivo}
            getOptionValue={({ id }: any) => id}
            onChange={({ value }: any) => handleTypeOfSystem(value)}
          ></Select>
          {tipoDoSistema === true && (
            <Input
              name="linkSystem"
              id="linkSystem"
              placeholder="Link do sistema"
            />
          )}
          <Select
            name="massivo"
            id="massivo"
            placeholder="Solicitação massiva?"
            options={massivo}
            getOptionValue={({ id }: any) => id}
            onChange={({ value }: any) => handleMass(value)}
          ></Select>

          {!on && (
            <Input name="matricula" id="matricula" placeholder="Login"></Input>
          )}
          <Input
            name="espelho"
            id="espelho"
            placeholder="Login espelho"
          ></Input>
          {on === true && (
            <div>
              <Button onClick={download}>Planilha exemplo</Button>
            </div>
          )}
          {on === true && (
            <div>
              <ImageInput name="file">Enviar planilha</ImageInput>
            </div>
          )}

          <Button
            type="submit"
            onClick={() => {
              setShowModal(true)
            }}
          >
            Abrir chamado
          </Button>
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
            <NewInc message={message} />
          </NewIncidentBox>
        </Form>
      </div>
      <Footer />
    </Container>
  )
}

export default Home
