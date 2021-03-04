import React, { useEffect, useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import { CaixaGeral, valueFilter, checkBox } from '../../assets/js/TableColumns'
import '@inovua/reactdatagrid-community/index.css'
import { Container, Button } from './styles'
import api from '../../services/api'
import { useAuth } from '../../contexts/auth'

const Table = () => {
  const columns = CaixaGeral
  const [pagination] = useState(true)
  const [data, setData] = useState([])
  const [selected, setSelected] = useState({})
  const defaultFilterValue: any = valueFilter
  const [filterValue, setFilterValue] = useState(defaultFilterValue)
  const { authenticated } = useAuth()

  useEffect(() => {
    const getData = async (filterValue: any) => {
      const response = await api.get('/data')
      setData(response.data)
    }
    getData(filterValue)
  }, [filterValue])

  async function getUpdatedList() {
    const response = await api.get('/data')
    setData(response.data)
  }
  const toArray = (selected: any) =>
    Object.keys(selected).map((id: any) => id * 1)

  async function handleClick() {
    await api.put(`/atribuir`, toArray(selected))
    getUpdatedList()
  }

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected)
  }, [])

  const gridStyle = {
    minHeight: 750,
    backgroundColor: 'none'
  }

  if (authenticated) {
    return (
      <Container>
        <ReactDataGrid
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
        )
        <div className="button">
          <Button onClick={handleClick}>Atribuir a mim</Button>
        </div>
      </Container>
    )
  } else {
    return (
      <div>
        <h2>Usuario não autenticado</h2>
      </div>
    )
  }
}

export default Table
