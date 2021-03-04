import styled from 'styled-components'

export const InputContent = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;
  margin-bottom: 10px;

  textarea {
    margin-left: 5px;
    margin-top: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 25.75rem;
    color: ${props => props.theme.colors.inputTxtColor};
    background-color: #fafafa;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    padding: 10px;
    resize: none;
  }
  label {
    font-size: 16px;
    color: ${props => props.theme.colors.menuTxt};
    margin: 10px;
  }
  @media (max-width: 1366px) {
    input,
    select {
      margin: 1px;
    }
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
    font-size: 16px;
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 25px;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding-left: 25px;
    pointer-events: none;
    color: #666;
    transition: all 0.4s;
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
`
