import CustomButton from '../../components/CustomButton'
import styled from 'styled-components'
import Modal from 'react-modal'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export const Button = styled(CustomButton)`
  width: 15rem;
  background-color: #eb3c7d;
  font-size: 16px;
  color: #fff;
  transition: 0.2s;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 1rem;

  &:hover {
    background-color: ${props => props.theme.colors.menuHover};
    font-weight: 700;
  }
`

export const StyledModal = styled(Modal)`
  width: 55rem;
  height: 45rem;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25rem auto;
  h2,
  p {
    margin-bottom: 10px;
    color: ${props => props.theme.colors.menuTxt};
  }
  .button {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
  }
  .ReactModal__Overlay,
  .ReactModal__Overlay--after-open {
    background-color: rgba(0, 0, 0, 0.41);
  }

  @media screen and (max-width: 1366px) {
    margin: 10rem auto;
  }
`
