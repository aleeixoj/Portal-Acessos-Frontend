import styled from 'styled-components'

export const InputContent = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;

  input[type='file'] {
    display: none;
  }

  label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed ${props => props.theme.colors.menuTxt};
    color: ${props => props.theme.colors.menuTxt};
    border-radius: 15px;
    padding: 10px;
    overflow: hidden;
    font-size: 16px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      border-color: #ec6094;
      color: #ec6094;
    }

    &.with-file {
      border-color: #bd93f9;
      color: #bd93f9;
    }

    & span {
      overflow: hidden;
    }

    & svg {
      min-width: 10%;
      margin-right: 5px;
    }
  }
`
