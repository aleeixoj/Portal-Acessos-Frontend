import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: row wrap;
  flex: 1 1 200px;

  .icons-box {
    width: 100%;
    max-width: 22rem;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${props => props.theme.colors.menuTxt};
    border-radius: 15px;
    text-align: center;

    svg {
      color: ${props => props.theme.colors.admIcon};
      font-size: 14.5rem;
      margin: 0 22px 10px;
    }
    span {
      color: ${props => props.theme.colors.admIcon};
      font-size: 1.6rem;
    }
  }
  .icons-box:hover {
    background-color: ${props => props.theme.colors.menuHover};
    span,
    svg {
      color: #fff;
    }
  }
`

export const UserStyle = styled.section`
  width: 100%;

  .table {
    width: 100%;
    height: 100%;
    margin-top: 4rem;
  }
`
