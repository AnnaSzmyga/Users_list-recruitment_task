import React from 'react';
import './App.scss';

import Search from './components/Search/Search';
import UsersList from './components/UsersList/UsersList';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch(API_URL)
    .then(response => response.json())
    .then(users => {
        this.setState({ users });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    console.log(this.state);
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
