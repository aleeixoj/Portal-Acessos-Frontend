import React, { useState, useEffect, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import { systems, valueFilter } from '../../assets/js/TableColumns'
import { Container, Button, NewIncidentBox, NewInc } from './styles'
import api from '../../services/api'
interface GridData {
  gridRef: any
  prevState: any
}

const Syst = () => {
  const columns = systems
  const defaultFilterValue: any = valueFilter
  const [filterValue, setFilterValue] = useState(defaultFilterValue)
  const [pagination] = useState(true)
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState({})
  const [setGridRef] = useState<GridData | any>(null)

  useEffect(() => {
    const getData = async (filterValue: any) => {
      const response = await api.get('/getSystems')
      setData(response.data)
    }
    getData(filterValue)
  }, [filterValue])

  async function getUpdatedList() {
    const response = await api.get('/getSystems')
    setData(response.data)
  }
  // const toArray = (selected: any) =>
  //   Object.keys(selected).map((id: any) => id * 1)
  const gridStyle = {
    minHeight: 750,
    backgroundColor: 'none'
  }

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected)
  }, [])

  return (
    <Container>
      <ReactDataGrid
        handle={setGridRef}
        selected={selected}
        checkboxColumn
        onSelectionChange={onSelectionChange}
        dataSource={data}
        pagination={pagination}
        columns={columns}
        idProperty="id"
        style={gridStyle}
        defaultFilterValue={defaultFilterValue}
        onFilterValueChange={setFilterValue}
      />
      <Button
        onClick={() => {
          setShowModal(true)
        }}
      >
        Adicionar
      </Button>

      <NewIncidentBox show={showModal}>
        <div
          className="background"
          onClick={() => {
            setShowModal(false)
            getUpdatedList()
          }}
        ></div>
        <button
          onClick={() => {
            setShowModal(false)
            getUpdatedList()
          }}
        >
          X
        </button>
        <NewInc />
      </NewIncidentBox>
    </Container>
  )
}

export default Syst
