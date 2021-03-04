import React, { useState, useEffect, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'

import { Container } from './styles'
import { users, valueFilter } from '../../assets/js/TableColumns'
import '@inovua/reactdatagrid-community/index.css'
import api from '../../services/api'

interface GridData {
  gridRef: any
  prevState: any
}

const Users = () => {
  const columns = users
  const defaultFilterValue: any = valueFilter
  const [pagination] = useState(true)
  const [data, setData] = useState([])
  const [selected] = useState({})
  const [filterValue, setFilterValue] = useState(defaultFilterValue)
  const [setGridRef] = useState<GridData | any>(null)

  useEffect(() => {
    const getData = async (filterValue: any) => {
      const response = await api.get('/allusers')
      setData(response.data)
    }
    getData(filterValue)
  }, [filterValue])

  async function getUpdatedList() {
    const response = await api.get('/allusers')
    setData(response.data)
  }
  // const toArray = (selected: any) =>
  //   Object.keys(selected).map((id: any) => id * 1)

  const gridStyle = {
    minHeight: 750,
    backgroundColor: 'none'
  }
  const onEditComplete = useCallback(
    ({ value, columnId, rowIndex }) => {
      const edit = [...data]
      edit[rowIndex] = Object.assign({}, edit[rowIndex], {
        [columnId]: value
      })
      api.post(`/edituser`, edit[rowIndex])
      console.log(edit[rowIndex])
      setData(edit)
      getUpdatedList()
    },
    [data]
  )
  return (
    <Container>
      <ReactDataGrid
        handle={setGridRef}
        selected={selected}
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
    </Container>
  )
}

export default Users
