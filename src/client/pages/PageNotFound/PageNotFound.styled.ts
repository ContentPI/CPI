import styled from 'styled-components'

export const StyledPageNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;

  img {
    margin-right: 50px;
    width: 250px;
  }
  .notFound {
    font-family: Arial;

    h1 {
      font-size: 208px;
      margin: 0;
    }

    span {
      font-size: 29px;
    }

    p {
      font-size: 24px;
      margin: 30px 0 80px 0;
      max-width: 500px;
    }

    a {
      color: blue;
      text-decoration: none;
      &:hover {
        color: blue;
      }

      i {
        margin-left: 15px;
      }
    }
  }
`
