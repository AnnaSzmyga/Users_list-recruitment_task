import React from 'react';
import './App.scss';

import Search from './components/Search/Search';
import UsersList from './components/UsersList/UsersList';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

class App extends React.Component {
  state = {
    initialUsers: [],
    users: [],
    searchingText: '',
    alert: false
  }

  componentDidMount() {
    fetch(API_URL)
    .then(response => response.json())
    .then(users => {
        this.setState({ initialUsers: users, users });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const users = this.state.initialUsers.filter(user => user.name.toLowerCase().includes(this.state.searchingText.toLowerCase().trim()));
    this.setState({
      users,
      searchingText: '',
      alert: users.length ? false : true
    })
  }

  handleChange = (e) => {
    this.setState({
      searchingText: e.target.value
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Users list</h1>
        <Search searchingText={this.state.searchingText} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <UsersList users={this.state.users}/>
        {this.state.alert && <p>No such a user!</p>}
      </div>
    );
  }
}

export default App;
