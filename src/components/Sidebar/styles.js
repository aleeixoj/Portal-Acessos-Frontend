import styled from 'styled-components'

export const Container = styled.div`
  grid-area: SB;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  border-right: 3px solid ${props => props.theme.colors.shadeBack};

  .current-version {
    margin-top: auto;
    margin-bottom: 10px;
    opacity: 0.3;
  }
  span {
    color: ${props => props.theme.colors.menuTxt};
  }
  .switch {
    position: absolute;
    bottom: 3rem;
  }
  @media (max-height: 762px) {
    .switch {
      position: absolute;
      bottom: -28rem;
    }
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;

  > a img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const UserData = styled.div`
  width: 100%;
  max-width: 140px;
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  > a {
    color: #fff;

    > p {
      font-size: 1.4rem;
      /* white-space: nowrap; */
      /* text-overflow: ellipsis; */
      margin-bottom: 2rem;
      overflow: hidden;
      /* font-weight: 300; */
      text-align: right;
      color: ${props => props.theme.colors.menuTxt};
    }
  }

  > button {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-top: 8px;
    font-size: 1.6rem;

    background: transparent;
    border: none;
    color: ${props => props.theme.colors.menuTxt};
    transition: color 0.2s;

    border: none;
    cursor: pointer;

    > svg {
      margin-right: 4px;
    }

    &:hover {
      color: white;
    }
  }
`

export const Separator = styled.div`
  width: 90%;
  height: 1px;
  margin-bottom: 20px;

  background-color: rgba(255, 255, 255, 0.1);
`

export const Navbar = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;

  > ul {
    width: 100%;
    display: flex;
    flex-direction: column;

    > li {
      width: 100%;

      > a,
      button {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1.4rem;

        padding: 8px;
        border-radius: 4px;
        border: none;
        outline: none;

        background: transparent;
        color: ${props => props.theme.colors.menuTxt};
        transition: background 0.2s;

        &:hover {
          background-color: ${props => props.theme.colors.menuHover};
          color: ${props => props.theme.colors.text};
          //rgba(255, 255, 255, 0.2)
        }
      }

      & + li {
        margin-top: 4px;
      }
    }
  }
`

// export const Modal = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   z-index: 1;

//   display: ${props => (props.show ? 'flex' : 'none')};
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   > .background {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.75);
//     z-index: -1;
//   }

//   > button {
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     background: transparent;
//     border: none;
//     font-size: 36px;
//     color: rgba(255, 255, 255, 0.6);
//     transition: color 0.2s;

//     &:hover {
//       color: #fff;
//     }
//   }
// `
