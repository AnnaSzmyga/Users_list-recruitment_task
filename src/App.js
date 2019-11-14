import React from 'react';
import './App.scss';

import Search from './components/Search/Search';
import UsersList from './components/UsersList/UsersList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Users list</h1>
        <Search />
        <UsersList />
      </div>
    );
  }
}

export default App;
