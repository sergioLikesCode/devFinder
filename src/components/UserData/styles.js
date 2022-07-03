import styled from 'styled-components';

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 9rem 1fr;
  width: var(--app-width);
  background-color: #1f2a48;
  border-radius: 1rem;
  /* height: 22rem; */
  padding: 2rem;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  div {
    div.username {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-weight: 500;
      }

      span {
        color: #919bb4;
        font-size: 0.9rem;
      }
    }

    .user-id {
      color: #2458a1;
      margin-bottom: 1rem;
    }

    p {
      color: #919bb4;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

export const UserActivesInfo = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
  background-color: #141c2f;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;

  li {
    display: flex;
    flex-direction: column;
    list-style: none;

    span {
      color: #919bb4;
    }

    strong {
      font-size: 1.2rem;
    }
  }
`;

export const PersonalInfo = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  li {
    display: flex;
    align-items: center;
    list-style: none;
    margin-bottom: 1rem;

    span {
      margin-left: 1rem;
      color: #919bb4;
    }
  }
`;
