import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  .chart-box {
    flex: 1 1 200px;
    width: 100%;
    margin: 40px 30px;
    label {
      margin: 0 auto;
      font-size: 1.6rem;
      display: block;
      text-align: center;
      color: ${props => props.theme.colors.menuTxt};
    }
  }
  @media (max-width: 762px) {
    width: 40%;
    flex-direction: column;
    display: block;
    .chart-box {
      margin: 20px;
    }
  }
`
