import styled from 'styled-components'

export const InputContent = styled.div`
  width: 100%;
  z-index: auto;
  position: relative;
  margin-bottom: 1.2rem;

  input {
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    color: ${props => props.theme.colors.inputIn};
    background-color: #fafafa;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    padding: 0 30px 0 10px;
  }
  label {
    font-size: 16px;
    display: flex;
    text-align: center;
    margin: 0 10px;
    color: ${props => props.theme.colors.menuTxt};
  }

  .react-select__menu {
    z-index: 999;
    background: #000;
  }

  span.input-error {
    width: 100%;
    display: flex;
    color: red;
    margin-left: 20px;
    margin-top: 5px;
  }

  span.focusInput {
    display: block;
    position: absolute;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    top: 0;
    left: 0;
    z-index: -1;
    box-shadow: 0px 0px 0px 0px;
    color: #fff;
  }

  input:focus + .focusInput,
  select:focus + .focusInput {
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
  }

  span.inputIcon {
    display: flex;
    font-size: 1.6rem;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    color: ${props => props.theme.colors.inputTxtColor};
  }
  span.inputIcon:hover {
    color: ${props => props.theme.colors.menuHover};
  }
  input:focus + .focusInput + .inputIcon,
  select:focus + .focusInput + .inputIcon {
    color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
  }

  /** ANIMATION */
  @keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 70px 25px;
      opacity: 0;
    }
  }
  @media (max-width: 1366px) {
    input,
    select {
      margin: 1px;
    }
    span.inputIcon {
      right: 0.8rem;
    }
  }
`
