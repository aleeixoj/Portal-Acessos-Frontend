import styled from 'styled-components'

export const Container = styled.div`
  grid-area: DH;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 24px;
  header {
    width: 100%;
    z-index: 2;

    #control-nav {
      display: none;
    }

    @media screen and (max-width: 767px) {
      .control-nav {
        position: absolute;
        right: 20px;
        top: 20px;
        display: block;
        width: 30px;
        padding: 5px 0;
        border: solid ${props => props.theme.colors.menuTxt};
        border-width: 3px 0;
        z-index: 2;
        cursor: pointer;
      }
      .control-nav:before {
        content: '';
        display: block;
        height: 3px;
        background: ${props => props.theme.colors.menuTxt};
      }
      .control-nav-close {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        display: block;
        z-index: 1;
        background: rgba(0, 0, 0, 0.4);
        transition: all 500ms ease;
        transform: translate(100%, 0);
      }
      nav {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 250px;
        border-left: 1px solid #ccc;
        background: #fff;
        transition: all 500ms ease;
        transform: translate(100%, 0);
        z-index: 999;
      }
    }
  }
  .logo-vivo {
    img {
      width: 10rem;
      float: left;
      margin: 8px;
    }
  }
  div.nav-bar {
    float: right;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    li {
      display: inline-block;
      margin: 10px;
      text-decoration: none;
      a {
        color: ${props => props.theme.colors.menuTxt};
        &:hover {
          text-decoration: underline;
          color: ${props => props.theme.colors.menuHover};
        }
      }
    }
  }
  #control-nav:checked ~ .control-nav-close {
    transform: translate(0, 0);
  }

  #control-nav:checked ~ nav {
    transform: translate(0, 0);
  }
`
