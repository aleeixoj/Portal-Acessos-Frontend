import styled from 'styled-components'
import CustomInput from '../../components/CustomInput'
import CustomButtom from '../../components/CustomButton'
import { Form as Unform } from '@unform/web'
import TextArea from '../../components/TxtArea'
import Modal from './modal'
import Modal2 from './modal2'

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-areas:
    't t'
    'e d'
    'b b';
  justify-content: center;
  align-items: center;
  .formulario {
    width: 100%;
    margin: 10.6rem 0;

    .top {
      width: 100%;
      grid-area: t;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .botao {
        margin-top: 0.5rem;
      }
    }
    .left {
      grid-area: e;
      margin-right: 20px;
    }
    .right {
      grid-area: d;
    }
    .bottom {
      width: 100%;
      grid-area: b;
      .botoes {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }
  }
`

export const Area = styled(TextArea)``

export const Input = styled(CustomInput)`
  font-size: 16px;
  width: 3.6rem;
  color: #615c66;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 5px;
  border: 2px solid #dbdbdb;
  padding: 0 32px 0 58px;
  margin: 10px;
`

export const Form = styled(Unform)`
  width: 100%;
  margin-bottom: 2.4rem;
`
export const Button = styled(CustomButtom)`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eb3c7d;
  font-size: 16px;
  color: #fff;
  transition: 0.2s;
  border-radius: 10px;
  margin: 1rem 1rem;

  &:hover {
    background-color: #ec6094;
  }
`

type PropTypeBg = {
  show: boolean
}

export const NewIncidentBox = styled.div.attrs((props: PropTypeBg) => ({
  display: props.show
}))<PropTypeBg>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > .background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: -1;
  }

  > button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 36px;
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
`
export const NewInc = styled(Modal)``
export const NewInc2 = styled(Modal2)``

export const Content = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  h2 {
    font-weight: 400;
    color: red; //${props => props.theme.colors.menuTxt};
  }
`
