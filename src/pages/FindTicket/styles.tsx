import styled from 'styled-components'
import CustomFooter from '../../components/CustomFooter'
import CustomHeader from '../../components/CustomHeader'

export const Container = styled.section`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'h h h'
    'form form form'
    'fo fo fo';
  align-items: center;
  justify-content: center;
  .header {
    width: 100%;
    grid-area: h;
  }
  .formulario {
    width: 100%;
    justify-content: center;
    grid-area: form;
  }
`

export const Footer = styled(CustomFooter)``
export const Header = styled(CustomHeader)``
