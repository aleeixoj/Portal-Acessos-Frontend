import styled from 'styled-components'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { Form as Unform } from '@unform/web'

export const Container = styled.main`
  width: 100vw;
  justify-content: center;
  padding: 20px;
  border-top-right-radius: 20px;
  /* border-bottom-right-radius: 20px; */

  .top-img {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    max-width: 80px;
    /* grid-column: 4/5;
    grid-row: 1/2; */
  }
  .bottom-img {
    box-sizing: border-box;
    position: absolute;
    bottom: -4px;
    left: 0;
    max-width: 150px;
    /* grid-column: 1/2;
    grid-row: 1/2; */
  }
  .login-form {
    width: 100%;
    justify-content: center;
    /* grid-column: 1/4;
    grid-row: 1/5; */
  }
  .banner {
    width: 100%;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    /* grid-column: 4/5;
    grid-row: 2/4; */
  }
  .vivo {
    width: 190px;
    margin: 70px;
  }
  .d-none {
    display: none;
  }
  @media screen and (min-width: 1200px) {
    .top-img,
    .bottom-img {
      display: none;
    }
    .column {
      width: 50%;
    }
    .banner {
      max-width: 600px;
    }
    .d-none {
      display: block;
    }
  }
  @media screen and (min-width: 468px) {
    .login-form {
      max-width: 370px;
    }
    .top-img,
    .bottom-img {
      max-width: 158px;
    }
    .vivo {
      width: 170px;
    }
  }
`

export const Input = styled(CustomInput)`
  font-size: 16px;
  color: ${props => props.theme.colors.menuTxt};
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 5px;
  border: 2px solid #dbdbdb;
  padding: 0 32px 0 58px;
  margin: 10px;
  .inputIcon {
    top: 0;
    bottom: 0;
    right: 0;
  }
`

export const Content = styled.section`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div.content-title {
    margin-bottom: 50px;

    h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    span {
      font-size: 18px;
      font-weight: 300;
    }
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
    color: red;
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

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
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: #eb3c7d;
  font-size: 16px;
  color: #fff;
  transition: 0.2s;
  border-radius: 5px;
  margin-top: 25px;

  &:hover {
    background-color: #ec6094;
  }
`
