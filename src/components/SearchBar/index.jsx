import React from 'react';
import * as S from './styles';
import { MagnifyingGlass } from 'phosphor-react';

const index = ({ userSearch, setUserSearch, setRequestData }) => {
  return (
    <S.SearchBar>
      <MagnifyingGlass size={28} color="#295ea0" className="search-icon" />
      <input
        type="text"
        value={userSearch}
        onChange={({ target }) => setUserSearch(target.value)}
        placeholder="Search Github username..."
      />
      <button onClick={() => setRequestData(true)}>Search</button>
    </S.SearchBar>
  );
};

export default index;
