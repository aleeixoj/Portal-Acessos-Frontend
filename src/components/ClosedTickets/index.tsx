import React, { useEffect, useState } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import { Container } from './styles'
import api from '../../services/api'
import { MinhaCaixa, valueFilter, checkBox } from '../../assets/js/TableColumns'

interface DataProps {
  massivo: string
  matricula: string
}

const Table = () => {
  const [pagination] = useState(true)
  const [data, setData] = useState<DataProps | any>([])
  const defaultFilterValue: any = valueFilter
  const [setFilterValue] = useState(defaultFilterValue)

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/mydata/closed')
      setData(response.data)
    }
    getData()
  }, [])

  const gridStyle = {
    minHeight: 750,
    backgroundColor: 'none'
  }

  const columns = MinhaCaixa

  return (
    <Container>
      <ReactDataGrid
        dataSource={data}
        pagination={pagination}
        columns={columns}
        idProperty="id"
        style={gridStyle}
        defaultFilterValue={defaultFilterValue}
        onFilterValueChange={setFilterValue}
        checkboxColumn={checkBox}
      />
    </Container>
  )
}

export default Table
