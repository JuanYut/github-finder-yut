import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    console.log(this.state.users);
    this.setState({ loading: true });

    let data;
    await fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(jsonThing => (data = jsonThing));

    // await fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //   .then(response => response.json())
    //   .then(jsonThing => (data = jsonThing));

    this.setState({ users: data, loading: false });
    console.log(this.state.users);
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='GitHub Finder' />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
