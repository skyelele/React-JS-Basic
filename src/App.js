import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

// component extended from React
class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      users: [],
      loading: false
    };
    // bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

getUsers() {
  // when we make the call, set loading to true
  this.setState({
    loading: true
  })
  // once we get the response, set loading to false
  axios('https://api.randomuser.me/?nat=US&results=5')
  //makes API call and sets the state so the users
  //will have the users data
    .then(response => 
      this.setState({
        users: [...this.state.users, ...response.data.results],
        loading: false
      })
    );
}

handleSubmit(e) {
  e.preventDefault();
  this.getUsers();
  console.log('more users loaded');
}

// just before component is mounted
componentWillMount() {
  this.getUsers();
}

//using render() method, return JS6
render() {
  const {loading, users} = this.state;
  return (
      // returning JS6
      // if loading is true, the following will render :)
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="load users" />
      </form>
      <hr />
      {!loading ? users.map(user => (
          <div key={user.id.value}>
            <h3 style={{color: 'red'}}>{user.name.first}</h3>
            <p>{user.email}</p>
            <hr />
          </div>
        )) : <Loading message="Hey hey hey" />}
      </div>
    );
  }
}

export default App;

//JS6 is a mixture of HTML and JavaScript