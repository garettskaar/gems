import React from 'react';
import './Style/GEMS.css';
import Login from './Common/Login.js'
import GemsSession from './GEMS_Session.js'

class GEMS extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      validLogin: false
    };
  }
  handleLogin(validLogin){
    this.setState({validLogin});
  }
  render() {
    const validLogin = this.state.validLogin;
    //const user = this.state.user;
    if(validLogin){
      return (
        <div>
          <GemsSession />
        </div>
      );
    }
    else{
      return (
        <div>
          <h1>GEMS</h1>
          <Login onLoginAttempt={this.handleLogin} />
        </div>
        
      );
    }
  }
}

export default GEMS;
