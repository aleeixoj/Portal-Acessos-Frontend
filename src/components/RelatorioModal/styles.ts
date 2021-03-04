import styled from 'styled-components'
import CustomButtom from '../../components/CustomButton'
import CustomSelect from '../../components/CustomSelect'
import { Form as Unform } from '@unform/web'

export const Container = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  h1,
  p {
    margin-right: 20px;
    margin-bottom: 10px;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.menuTxt};
  }
  .Icon {
    color: ${props => props.theme.colors.iconCheck};
    width: 100px;
    font-size: 5.2rem;
  }
`
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
  .react-select__menu {
    color: #000;
  }
  .react-select__control--is-focused,
  .react-select__control--menu-is-open {
    border-radius: 10px;
    font-size: 1.2rem;
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.menuHover};
    height: 50px;
    display: flex;
    justify-content: center;
    &:hover {
      border: 1px solid;
      border-color: ${props => props.theme.colors.secondary};
      height: 50px;
    }
  }
  .react-select__single-value,
  .css-1uccc91-singleValue {
    font-size: 1.2rem;
  }
`
export const Button = styled(CustomButtom)`
  width: 250px;
  background-color: #eb3c7d;
  font-size: 16px;
  color: #fff;
  transition: 0.2s;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 10px;

  &:hover {
    background-color: ${props => props.theme.colors.menuHover};
    font-weight: 700;
  }
`
export const Select = styled(CustomSelect)``
