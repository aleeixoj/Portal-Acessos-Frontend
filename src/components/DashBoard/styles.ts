import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  grid-template-rows: 75px auto;

  grid-template-areas:
    'SB DH'
    'SB DM';

  height: 100vh;
`

export const Main = styled.main`
  grid-area: DM;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
