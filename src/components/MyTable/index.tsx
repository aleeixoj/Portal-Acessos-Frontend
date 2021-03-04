import React, { useEffect, useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import { Container, Button, StyledModal, CustomTextArea, Form } from './styles'
import api from '../../services/api'
import { MinhaCaixa, valueFilter } from '../../assets/js/TableColumns'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface DataProps {
  massivo: string
  matricula: string
}

const Table = () => {
  const [pagination] = useState(true)
  const [data, setData] = useState<DataProps | any>([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalIsOpen2, setModalIsOpen2] = useState(false)
  const [selected, setSelected] = useState<DataProps | any>({})
  const defaultFilterValue: any = valueFilter
  const [setFilterValue] = useState(defaultFilterValue)
  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/mydata')
      setData(response.data)
    }
    getData()
  }, [])

  async function getUpdatedList() {
    const response = await api.get('/mydata')
    setData(response.data)
  }

  const toArray = (selected: any) =>
    Object.keys(selected).map((id: any) => id * 1)

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected)
  }, [])
  const toStringfy = toArray(selected).toString()
  const sel = Object.values(selected)
    .map((massivo: any) => massivo.massivo)
    .toString()
  const sel2 = Object.values(selected)
    .map((matricula: any) => matricula.matricula)
    .toString()
  const download = () => {
    if (selected) {
      if (sel === 'Sim') {
        const downloadEmployeeData = () => {
          fetch(`${process.env.REACT_APP_API_URL}/uploads/${sel2}`).then(
            response => {
              response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob)
                let a = document.createElement('a')
                a.href = url
                a.download = `${sel2}`
                a.click()
              })
            }
          )
        }
        downloadEmployeeData()
      }
    }
  }

  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const edit = [...data]
      edit[rowIndex] = Object.assign({}, edit[rowIndex], {
        [columnId]: value
      })
      api.put(`/edit-row`, edit[rowIndex])
      setData(edit)
      getUpdatedList()
    },
    [data]
  )

  const gridStyle = {
    minHeight: 750,
    backgroundColor: 'none'
  }

  const columns = MinhaCaixa

  const defaultUnselected = { 1: true, 3: true }

  async function handleSubmit(data: any) {
    const sourceData = {
      data,
      toStringfy
    }
    await api.post(`/fechar`, sourceData)
    getUpdatedList()
    setModalIsOpen2(false)
    setModalIsOpen(false)
  }

  async function handleClick() {
    setModalIsOpen2(true)
  }

  async function handleClose() {
    setModalIsOpen(false)
  }
  return (
    <Container>
      <ReactDataGrid
        selected={selected}
        // checkboxColumn={checkBox}
        defaultUnselected={defaultUnselected}
        onSelectionChange={onSelectionChange}
        editable={true}
        onEditComplete={onEditComplete}
        dataSource={data}
        pagination={pagination}
        columns={columns}
        idProperty="id"
        style={gridStyle}
        defaultFilterValue={defaultFilterValue}
        onFilterValueChange={setFilterValue}
      />
      <ToastContainer
        style={{ fontSize: '1.4rem' }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <div className="button">
        <Button
          onClick={() => {
            setModalIsOpen(true)
          }}
        >
          Fechar chamado
        </Button>
        {sel === 'Sim' && <Button onClick={download}>Download</Button>}
      </div>
      <StyledModal isOpen={modalIsOpen}>
        <p>Deseja fechar o chamado selecionado?</p>
        <div className="buttons">
          <Button onClick={handleClick}>Sim</Button>
          <Button onClick={handleClose}>Não</Button>
        </div>

        <button className="button" onClick={handleClose}>
          X
        </button>
      </StyledModal>

      <StyledModal isOpen={modalIsOpen2}>
        <div className="buttons">
          <Form onSubmit={handleSubmit}>
            <CustomTextArea name="descr" label="Descrição de fechamento" />
            <Button onClick="submit">Fechar</Button>
          </Form>
        </div>

        <button className="button" onClick={() => setModalIsOpen2(false)}>
          X
        </button>
      </StyledModal>
    </Container>
  )
}

export default Table
