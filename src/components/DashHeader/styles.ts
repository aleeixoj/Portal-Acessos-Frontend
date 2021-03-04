import styled from 'styled-components'

export const Container = styled.div`
  grid-area: DH;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 24px;
  height: 15.6rem;
  background-color: ${props => props.theme.colors.background};
`

export const Page = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.menuTxt};
  margin-bottom: 4px;

  > strong {
    font-size: 24px;
  }
`

export const Description = styled.span`
  max-width: 30%;
  color: ${props => props.theme.colors.menuTxt};
  font-size: 16px;
  font-weight: lighter;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
