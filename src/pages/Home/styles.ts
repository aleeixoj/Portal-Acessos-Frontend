// import styled from 'styled-components'
import styled from 'styled-components'
import CustomHeader from '../../components/CustomHeader'
import CustomButton from '../../components/CustomButton'
import CustomFooter from '../../components/CustomFooter'
import CustomInput from '../../components/CustomInput'
import CustomSelect from '../../components/CustomSelect'
import Modal from '../../components/Modal'
import { Form as Unform } from '@unform/web'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'h h h'
    'b b b'
    '. f .'
    'fo fo fo';
  grid-template-rows: 5vh 60vh 60vh;
  align-items: center;
  justify-content: center;

  .header {
    width: 100%;
    height: 100%;
    grid-area: h;
  }
  .main {
    grid-area: b;
    justify-content: center;
    align-content: center;
    text-align: center;
    img {
      width: 52.2rem;
    }
  }
  .form {
    margin-top: 10.5rem;
    width: 100%;
    max-width: 350px;
    grid-area: f;
    justify-content: center;
    align-self: center;
  }

  @media (max-width: 1366px) {
    .main {
      img {
        width: 42.2rem;
      }
    }
    div.form {
      width: 100%;
      max-width: 300px;
      justify-content: center;
      align-content: center;
      margin-left: 10px;
      max-height: 300px;
      margin: 0 auto;
      display: block;
    }
  }
`
export const Footer = styled(CustomFooter)`
  height: 100%;
  width: 100%;
  @media (max-width: 767px) {
    margin-top: 15.5rem;
  }
`
export const Header = styled(CustomHeader)``
export const Input = styled(CustomInput)``
export const Form = styled(Unform)`
  width: 90%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error-message {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    margin-bottom: 5px;
  }

  .text-area {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 25px;
    text-align: center;
  }

  .react-select__control,
  .css-2b097c-container {
    height: 50px;
    border-radius: 10px;
  }
  .react-select__indicators,
  .react-select__value-container {
    height: 50px;
    border-radius: 10px;
    &:hover {
      height: 50px;
      margin-top: 0 auto;
    }
  }
  .react-select__control--is-focused,
  .react-select__control--menu-is-open {
    border-radius: 10px;
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.menuHover};
    height: 50px;
    &:hover {
      border: 1px solid;
      border-color: ${props => props.theme.colors.secondary};
      height: 50px;
    }
  }
`
export const Select = styled(CustomSelect)`
  font-size: 16px;
  color: ${props => props.theme.colors.inputTxtColor};
  background-color: #fafafa;
`
export const Buttons = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column; */
  margin-top: 25px;

  a {
    color: #ffffff99;
    transition: all ease 0.4s;
    margin-top: 10px;

    &:hover {
      color: #fff;
    }
  }
`

export const Button = styled(CustomButton)`
  width: 250px;
  background-color: #eb3c7d;
  font-size: 16px;
  color: #fff;
  transition: 0.2s;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #ec6094;
    font-weight: 700;
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
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
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
