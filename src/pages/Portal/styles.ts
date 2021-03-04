import styled from 'styled-components'
import Charts from '../../components/Charts'

export const Container = styled.section`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  grid-template-rows: repeat(2, 1fr);
  .first,
  .secondary,
  .third {
    margin-bottom: 10px;
    text-align: center;
    h3 {
      font-size: 1.8rem;
      color: ${props => props.theme.colors.menuTxt};
    }
  }
`
type PropTypeBg = {
  data: any
}
export const Chartjs = styled(Charts).attrs((props: PropTypeBg) => ({
  data: props.data
}))<PropTypeBg>`
  grid-row: 1 / 4;
  display: flex;
  flex: 1 1 200px;
`
