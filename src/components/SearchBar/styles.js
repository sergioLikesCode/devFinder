import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: #1f2a48;
  border-radius: 1rem;
  width: var(--app-width);
  height: 3.5rem;
  margin-bottom: 1rem;

  input {
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: none;
    color: #ffffff;
    padding: 0.25rem;
    margin-left: 0.5rem;
    font-size: 1rem;
    &::placeholder {
      color: #ddd;
    }
  }

  button {
    border: 0;
    padding: 0.7rem 1rem;
    background-color: #0179fe;
    color: #ffffff;
    border-radius: 0.5rem;
    &:hover {
      filter: brightness(0.9);
    }
  }

  .search-icon {
    margin-left: 0.5rem;
  }
`;
