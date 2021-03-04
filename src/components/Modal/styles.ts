import styled from 'styled-components'

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
  h1 {
    margin-right: 20px;
    color: ${props => props.theme.colors.menuTxt};
  }
  .Icon {
    color: ${props => props.theme.colors.iconCheck};
    width: 100px;
    font-size: 5.2rem;
  }
  .Icon2 {
    color: red;
    width: 100px;
    font-size: 5.2rem;
  }
`
