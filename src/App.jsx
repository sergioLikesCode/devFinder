import React from 'react';
import { GlobalStyle, AppContainer } from './styles/global';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserData from './components/UserData';

function App() {
  const [userSearch, setUserSearch] = React.useState('');
  const [requestData, setRequestData] = React.useState(false);

  return (
    <AppContainer>
      <Header />
      <SearchBar
        userSearch={userSearch}
        setUserSearch={setUserSearch}
        setRequestData={setRequestData}
      />
      <UserData
        userSearch={userSearch}
        requestData={requestData}
        setRequestData={setRequestData}
      />
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
