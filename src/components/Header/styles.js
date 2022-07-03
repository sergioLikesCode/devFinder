import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--app-width);
  margin-bottom: 2rem;
  
  a {
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    color: #ffffff;
  }

  div {
    display: flex;
    span {
      margin-right: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 0.8rem;
    }
  }

  .toggle-theme {
    cursor: pointer;
  }
`;
