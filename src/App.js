import React, { Component } from 'react';
import axios from 'axios';

// component extended from React
class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      users: [],
      loading: false
    }
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
          users: response.data.results,
          loading: false
        })
      );
  }

  // just before component is mounted
  componentWillMount() {
    this.getUsers();
  }

  //using render() method, return JS6
  render() {
    return (
      // returning JS6
      // if loading is true, the following will render :)
      <div className="App">{!this.state.loading ? this.state.users.map(user => (
          <div>
            <h3>{user.name.first}</h3>
            <p>{user.email}</p>
          </div>
        )) : 'Loading . . '}
      </div>
    );
  }
}

export default App;

//JS6 is a mixture of HTML and JavaScript