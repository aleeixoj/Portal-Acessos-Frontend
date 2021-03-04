import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html, body, #root {
    max-height: 100vh;
    font-size: 62.5%;
    overflow-y: ${props => (props.show ? 'hidden' : 'auto')};
    overflow-x: hidden;
    ::-webkit-scrollbar-track {
      background-color: #F4F4F4;
      border-radius: 5px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      background: #9b9b9b;
    }
    ::-webkit-scrollbar-thumb {
      background: #dad7d7;
      /* background:${props => props.theme.colors.secondary}; */
    }
  }
  

  body {
    
    
    width: 100%;
    font: 400 1.6rem "Poppins", sans-serif;
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    color: ${props => props.theme.colors.text};

    .center{
    display: block;
    margin: 0 auto;
    text-align: center;
    }
    .column {
      box-sizing: border-box;
      width: 100%;
      height: 100vh;
    }
    .left{
      float: left;
    }
    .right{
      float: right;
    }

    
  }

  input, button, textarea {
    font: 400 1.6rem Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }
 

  .container {
    width: 90vw;
    max-width: 700px;
  }

    /* @media (min-width: 700px) {
      :root {
        font-size: 62.5%;
      }
    } */
  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  /* @media (max-width: 1366px){
   #root{
      width: 100vw;
      zoom: 0.8;
    }
  } */
  

`

export default GlobalStyle
