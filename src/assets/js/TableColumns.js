import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter'
import DateFilter from '@inovua/reactdatagrid-community/DateFilter'
import moment from 'moment'
import { toast } from 'react-toastify'

window.moment = moment

export const checkBox = {
  renderCheckbox: (checkboxProps, cellProps) => {
    const { onChange, checked } = checkboxProps

    const background = !checked ? '' : '#7986cb'
    const border =
      checked === false ? '0.5px solid #7C8792' : '0.5px solid #7986CB'

    return (
      <div
        style={{
          cursor: 'pointer',
          background,
          // borderRadius: '50%',
          height: '20px',
          width: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border,
          fontSize: 12,
          color: checked === false ? 'inherit' : '#E8E8E8',
          margin: '2px'
        }}
        onClick={e => {
          e.stopPropagation()
          onChange(!checked)
        }}
      >
        {checked === false ? '' : checked === true ? 'X' : '-'}
      </div>
    )
  }
}

const ball = [
  { id: 'purple', label: 'Operação' },
  { id: 'gold', label: 'V' }
]

const status = [
  { id: 'Aberto', label: 'Aberto' },
  { id: 'Fechado', label: 'Fechado' },
  { id: 'Reaberto', label: 'Reaberto' }
]

export const CaixaGeral = [
  { name: 'id', header: 'ID', defaultVisible: false },
  {
    name: 'color',
    header: '',
    maxWidth: 117,
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: '',
      dataSource: ball
    },
    render: ({ value }) => {
      if (value === 'gold') {
        return (
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: 'rgb(255,191,0)',
              display: 'flex',
              width: 10,
              height: 10,
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto'
            }}
          ></div>
        )
      } else if (value === 'purple') {
        return (
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: '#8257e6',
              display: 'flex',
              width: 10,
              height: 10,
              margin: '0 auto'
            }}
          ></div>
        )
      }
    },

    cellDOMProps: ({ value }) => {
      if (value === 'gold') {
        return <div></div>
      } else if (value === 'purple') {
        return <div></div>
      }
    }
  },
  {
    name: 'nchamado',
    header: 'Numero do chamado',
    defaultFlex: 1
  },
  { name: 'requisitante', header: 'Requisitante', defaultFlex: 1 },
  { name: 'group', header: 'Grupo', defaultFlex: 1 },
  { name: 'tipo', header: 'Tipo de solicitação', defaultFlex: 1 },
  {
    name: 'status',
    header: 'Status',
    maxWidth: 250,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: '',
      dataSource: status
    }
  },
  {
    name: 'created',
    header: 'Aberto em',
    defaultFlex: 1,
    dateFormat: 'YYYY-MM-DD',
    filterEditor: DateFilter,
    filterEditorProps: (props, { index }) => {
      // for range and notinrange operators, the index is 1 for the after field
      return {
        placeholder: 'Criado em'
      }
    },
    render: ({ value, cellProps: { dateFormat } }) =>
      moment(value).format(dateFormat)
  }
  // render: ({ value }) => format(value, 'dd-MM-yyyy')
]

export const MinhaCaixa = [
  { name: 'id', header: 'ID', editable: false, defaultVisible: false },
  {
    name: 'color',
    header: '',
    maxWidth: 117,
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: '',
      dataSource: ball
    },
    render: ({ value }) => {
      if (value === 'gold') {
        return (
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: 'rgb(255,191,0)',
              display: 'flex',
              width: 10,
              height: 10,
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto'
            }}
          ></div>
        )
      } else if (value === 'purple') {
        return (
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: '#8257e6',
              display: 'flex',
              width: 10,
              height: 10,
              margin: '0 auto'
            }}
          ></div>
        )
      }
    },
    cellDOMProps: ({ value }) => {
      return {
        onClick: () => {
          if (value === 'gold') {
            const notify = () =>
              toast.info(`🟡 V`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined
              })
            notify()
            return <p data-tip="V"></p>
          }
          if (value === 'purple') {
            const notify = () =>
              toast.dark(`🟣 Operação`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined
              })
            notify()
            return <p data-tip="Operação"></p>
          }
        }
      }
    }
  },
  {
    name: 'nchamado',
    header: 'Numero do chamado',
    editable: false,
    defaultFlex: 1
  },
  {
    name: 'requisitante',
    header: 'Requisitante',
    editable: false,
    defaultFlex: 1
  },
  { name: 'sistema', header: 'Sistema', editable: false, defaultFlex: 1 },
  {
    name: 'tipo',
    header: 'Tipo de solicitação',
    editable: false,
    defaultFlex: 1
  },
  {
    name: 'typeOfSystem',
    header: 'Sistema Web?',
    editable: false,
    defaultFlex: 1
  },
  {
    name: 'linkSystem',
    header: 'Link do sistema',
    editable: false,
    defaultFlex: 1,
    cellDOMProps: ({ value }) => {
      return {
        onClick: () => {
          return value === '#N/D' ? '' : window.open(value, '__blank')
        }
      }
    }
  },
  {
    name: 'massivo',
    header: 'Solicitação Massiva?',
    editable: false,
    defaultFlex: 1
  },
  {
    name: 'matricula',
    header: 'Beneficiario',
    editable: true,
    defaultFlex: 1
  },
  {
    name: 'espelho',
    header: 'Espelho',
    editable: false,
    defaultFlex: 1,
    cellDOMProps: ({ value }) => {
      return {
        onClick: () => {
          const notify = () =>
            toast.info(`Copiado para área de transferência`, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined
            })
          let copiarTexto = () => {
            const texto = value
            let inputTest = document.createElement('input')
            inputTest.value = texto
            document.body.appendChild(inputTest)
            inputTest.select()
            document.execCommand('copy')
            document.body.removeChild(inputTest)
          }
          copiarTexto()
          notify()
        }
      }
    }
  },
  {
    name: 'created',
    header: 'Aberto em',
    defaultFlex: 1,
    dateFormat: 'YYYY-MM-DD',
    filterEditor: DateFilter,
    filterEditorProps: (props, { index }) => {
      // for range and notinrange operators, the index is 1 for the after field
      return {
        placeholder: 'Criado em'
      }
    },
    render: ({ value, cellProps: { dateFormat } }) =>
      moment(value).format(dateFormat)
  },
  {
    name: 'desc',
    header: 'Descrição',
    defaultFlex: 1,
    cellDOMProps: ({ value }) => {
      return {
        onClick: () => {
          return (
            // let div = document.createElement('div')
            // let text = document.createElement('textarea')
            // text.innerHTML = value
            // div.appendChild(text) //adiciona o nó de texto à nova div criada
            // let divAtual = document.getElementsByClassName('bqnXUf')
            // document.body.insertBefore(div, divAtual)

            <div
              className="testando"
              style={{
                width: '100%',
                backgroundColor: 'black',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                position: 'absolute'
              }}
            >
              <textarea>{value}</textarea>
            </div>
          )
        }
      }
    }
  },
  {
    name: 'status',
    header: 'Status',
    editable: false,
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: '',
      dataSource: status
    }
  }
]
const shouldComponentUpdate = () => true
export const Relatorio = [
  { name: 'id', header: 'ID', defaultVisible: false, shouldComponentUpdate },
  {
    name: 'color',
    header: '',
    width: 117,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: '',
      dataSource: ball
    },
    render: ({ value }) => {
      if (value === 'gold') {
        return (
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: 'rgb(255,191,0)',
              display: 'flex',
              width: 10,
              height: 10,
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto'
            }}
          ></div>
        )
      } else if (value === 'purple') {
        return (
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: '#8257e6',
              display: 'flex',
              width: 10,
              height: 10,
              margin: '0 auto'
            }}
          ></div>
        )
      }
    }
  },
  {
    name: 'nchamado',
    header: 'Numero do chamado',
    type: 'string',
    defaultFlex: 1,
    shouldComponentUpdate
  },
  {
    name: 'requisitante',
    header: 'Requisitante',
    type: 'string',
    defaultFlex: 1,
    shouldComponentUpdate
  },
  {
    name: 'group',
    header: 'Grupo do requisitante',
    type: 'string',
    defaultFlex: 1,
    shouldComponentUpdate
  },
  {
    name: 'tipo',
    header: 'Tipo de solicitação',
    type: 'string',
    defaultFlex: 1,
    shouldComponentUpdate
  },
  {
    name: 'massivo',
    header: 'Solicitação Massiva?',
    type: 'string',
    defaultFlex: 1,
    shouldComponentUpdate
  },
  {
    name: 'matricula',
    header: 'Beneficiario',
    type: 'string',
    defaultFlex: 1,
    shouldComponentUpdate
  },
  {
    name: 'status',
    header: 'Status',
    type: 'string',
    maxWidth: 250,
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: '',
      dataSource: status
    },
    shouldComponentUpdate
  },
  {
    name: 'created',
    header: 'Aberto em',
    defaultFlex: 1,
    dateFormat: 'YYYY-MM-DD',
    filterEditor: DateFilter,
    filterEditorProps: (props, { index }) => {
      // for range and notinrange operators, the index is 1 for the after field
      return {
        placeholder: 'Criado em'
      }
    },
    render: ({ value, cellProps: { dateFormat } }) =>
      moment(value).format(dateFormat)
  },
  {
    name: 'responsavel',
    header: 'Responsavel pelo chamado',
    type: 'string',
    shouldComponentUpdate
  }
]

export const valueFilter = [
  {
    name: 'nchamado',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'nchamado'
  },
  {
    name: 'requisitante',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'requisitante'
  },
  {
    name: 'group',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'group'
  },
  {
    name: 'tipo',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'tipo'
  },
  {
    name: 'massivo',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'massivo'
  },
  {
    name: 'matricula',
    header: 'Beneficiario',
    type: 'string',
    operator: 'contains',
    value: ''
  },
  {
    name: 'status',
    type: 'select',
    operator: 'eq'
  },
  { name: 'created', operator: 'eq', type: 'date', value: '' },
  {
    name: 'responsavel',
    type: 'string',
    operator: 'contains',
    value: '',
    header: 'responsavel'
  },
  {
    name: 'name',
    header: 'Nome',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'matricula',
    header: 'Matricula',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'cargo',
    header: 'Cargo',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'email',
    header: 'E-mail',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'super_id',
    header: 'Perfil',
    type: 'string',
    value: '',
    operator: 'contains'
  },
  {
    name: 'color',
    header: '',
    type: 'select',
    // value: '',
    operator: 'eq'
  },
  {
    name: 'sistema',
    value: '',
    operator: 'eq',
    type: 'string'
  },
  {
    name: 'espelho',
    value: '',
    operator: 'eq',
    type: 'string'
  },
  {
    name: 'desc',
    value: '',
    operator: 'contains',
    type: 'string'
  }
]

export const users = [
  {
    name: 'id',
    header: 'ID',
    defaultVisible: false,
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'name',
    header: 'Nome',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'matricula',
    header: 'Matricula',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'email',
    header: 'E-mail',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'cargo',
    header: 'Cargo',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'group',
    header: 'Grupo',
    type: 'string',
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'super_id',
    header: 'Perfil',
    type: 'string',
    shouldComponentUpdate,
    editable: true
  }
]

export const systems = [
  {
    name: 'id',
    header: 'ID',
    defaultVisible: false,
    shouldComponentUpdate,
    editable: false
  },
  {
    name: 'label',
    header: 'Nome do Sistema',
    defaultVisible: true,
    shouldComponentUpdate,
    editable: false
  }
]
