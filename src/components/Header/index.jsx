import React from 'react';
import * as S from './styles';
import { Sun } from 'phosphor-react';

const index = () => {
  return (
    <S.HeaderContainer>
      <a href="/">DevFinder</a>
      <div>
        <span>light</span>
        <Sun size={20} color="#e8e8e8" weight="fill" className='toggle-theme'/>
      </div>
    </S.HeaderContainer>
  );
};

export default index;
