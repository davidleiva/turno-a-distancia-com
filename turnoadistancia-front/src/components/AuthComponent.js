import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }


  getJwt() {
    console.log('getJWT');
    return localStorage.getItem('jwt');
  };
  

  componentDidMount() {
    console.log('didm');
    this.getUser();
  }

  getUser() {
    console.log('getuser');
    const jwt = this.getJwt();
    if (!jwt) {
      this.setState({
        user: null
      });
      return;
    }

    console.log('call');


    axios.get('/auth/getUser', { headers: { Authorization: this.getJwt() } })
    .then(res => {
      this.setState({
        user: res.data
      })
    });
  }

  render() {
    console.log('render');

    const { user } = this.state;
    if (user === undefined) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if (user === null) {
      this.props.history.push('/login');
    }

    return this.props.children;
  }
}

export default withRouter(AuthComponent);