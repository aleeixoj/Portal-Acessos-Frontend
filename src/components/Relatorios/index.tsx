import React, { useEffect, useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import { Relatorio, valueFilter, checkBox } from '../../assets/js/TableColumns'
import '@inovua/reactdatagrid-community/index.css'
import { Container, Button, NewIncidentBox, NewInc } from './styles'
import api from '../../services/api'
import { format } from 'date-fns'
interface GridData {
  gridRef: any
  prevState: any
}

const Table = () => {
  const [columns] = useState(Relatorio)
  const [showModal, setShowModal] = useState(false)
  const defaultFilterValue: any = valueFilter
  const [filterValue, setFilterValue] = useState(defaultFilterValue)
  const [pagination] = useState(true)
  const [data, setData] = useState([])
  const [selected, setSelected] = useState({})
  const [gridRef, setGridRef] = useState<GridData | any>(null)
  const SEPARATOR = ';'
  const today = format(new Date(), 'dd-MM-yyyy')

  const downloadBlob = (blob: any, fileName = `Relatorio-${today}.csv`) => {
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)

    link.setAttribute('href', url)
    link.setAttribute('download', fileName)
    link.style.position = 'absolute'
    link.style.visibility = 'hidden'

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
  }
  useEffect(() => {
    const getData = async (filterValue: any) => {
      const response = await api.get('/relatorio')
      setData(response.data)
    }
    getData(filterValue)
  }, [filterValue])

  async function getUpdatedList() {
    const response = await api.get('/relatorio')
    setData(response.data)
  }
  const toArray = (selected: any) =>
    Object.keys(selected).map((id: any) => id * 1)

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected)
  }, [])

  const gridStyle = {
    minHeight: 750,
    backgroundColor: 'none'
  }

  const exportCSV = () => {
    const columns = gridRef.current.visibleColumns

    const header = columns.map((c: any) => c.name).join(SEPARATOR)
    const rows = gridRef.current.data.map((data: any) =>
      columns.map((c: any) => data[c.id]).join(SEPARATOR)
    )

    const contents = [header].concat(rows).join('\n')
    const blob = new Blob([contents], { type: 'text/csv;charset=utf-8;' })

    downloadBlob(blob)
  }
  const array = toArray(selected)
  return (
    <Container>
      <ReactDataGrid
        handle={setGridRef}
        selected={selected}
        checkboxColumn={checkBox}
        onSelectionChange={onSelectionChange}
        dataSource={data}
        pagination={pagination}
        columns={columns}
        idProperty="id"
        style={gridStyle}
        defaultFilterValue={defaultFilterValue}
        onFilterValueChange={setFilterValue}
      />
      <div className="button">
        <Button onClick={exportCSV}>Exportar relatorio</Button>
        <Button
          type="submit"
          onClick={() => {
            setShowModal(true)
          }}
        >
          Rotear chamados
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
          <NewInc array={array} />
        </NewIncidentBox>
      </div>
    </Container>
  )
}

export default Table
