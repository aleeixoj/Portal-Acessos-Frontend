import styled from 'styled-components'

export const Container = styled.footer`
  height: 100%;
  max-height: 3.5rem;
  margin-top: 10.5rem;
  background-color: #3c4f65;
  padding-top: 5em;
  padding-bottom: 40px;
  border-top: 2px solid #c5c5c5;
  display: flex;
  flex-flow: row wrap;
  padding: 50px;
  color: #f5f5f1;
  grid-area: fo;
  h2,
  p,
  span,
  a {
    color: #f5f5f1;
  }
  p {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    .footer-box {
      width: 40%;
      padding: 1%;
      float: left;
      .articles {
        h2,
        p {
          margin-bottom: 20px;
        }
      }
    }
    .company-footer {
      img {
        width: 250px;
      }
    }
    .footer-list {
      .fab {
        font-size: 2.5rem;
        margin-right: 10px;

        ul {
          text-align: center;
          display: flex;
          flex-direction: row;
          margin: 10px 0;
          li {
            align-items: center;
            justify-content: center;
          }
          a {
            transition: 0.2s;
            margin-right: 10px;
          }
          a:hover {
            color: ${props => props.theme.colors.menuHover};
          }
        }
      }
    }
  }

  .wrapper:after {
    clear: both;
    content: '';
  }

  .footer-bottom {
    /* border-top: 1px solid #fff; */

    p {
      font-weight: 700;
      /* margin-top: 40px; */
    }
  }
  @media (max-width: 1366px) {
    margin-top: 20rem;
    .wrapper {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      .footer-box {
        margin-bottom: 10px;
        .company-footer {
          img {
            width: 200px;
          }
        }
        .footer-list {
          .fab {
            font-size: 2.6rem;
            ul {
              margin-top: 10px;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }

    .wrapper:after {
      margin-top: 15px;
      width: 100%;
    }
    .footer-bottom {
      width: 100%;
    }
  }
`
