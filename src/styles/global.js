import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --app-width: 40rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.50%;
    }
  }
    body {
    background-color: #141c2f;
    -webkit-font-smoothing: antialiased;
    color: #ffffff;
    
  }
  button, input, body, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
`;

export const AppContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
`;
