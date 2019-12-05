import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    else if(this.state.password==="mouni"){
      alert ('LOGIN SUCESSFULLY');
    }
    else{
      return this.setState({error:'password is incorrect'});
    }


    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="600" height="600"></img>  
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="600" height="600"></img>  
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="600" height="600"></img>  
        
      <div className="Login">
      

        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <h1><center>STAFF LOGIN</center></h1><br></br><br></br><br></br>
          <center>
          <label><h3>User Name:</h3></label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} /><br></br>

          <label><h3>Password:</h3></label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} /><br></br>

           <input type="submit" value="Log In" class="btn btn-primary" data-test="submit" />
          {/* <button type="button" class="btn btn-primary">LOGIN</button> */}
          </center>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;