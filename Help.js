import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Help extends Component {
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
       
        <table border="1" width="1500" height="900">
             <h1><center>IT-HELPDESK</center></h1>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="200" height="150"></img>  
             <table align="right" border="1" width="500" height="300">
             <a href="https://www.w3schools.com">*Instagram Security vulnerability</a><br></br>
             <a href="https://www.w3schools.com">*Microsoft Patch-Nov2018</a><br></br>
             <a href="https://www.w3schools.com">*Flaws In Flash Player</a><br></br>
             <a href="https://www.w3schools.com">*Microsoft Fixes 12 Critical vulnerability</a><br></br>
             <a href="https://www.w3schools.com">*Adobe Releases Security Patch Updates</a><br></br>
             <a href="https://www.w3schools.com">*Integra E-mail Etiqutee 1.0</a><br></br>
             <a href="https://www.w3schools.com">*Email Security Advisory</a><br></br>
             <a href="https://www.w3schools.com">*Avoid Storing Password In Browser Application</a><br></br>
             <a href="https://www.w3schools.com">*Microsoft Security Software Updates</a><br></br>
                    
             </table>
        <table border="1" width="190" height="500" cellSpacing="1" cellPadding="1">

            
      <div>
          
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
      </table>
      </table>
      
    );
  }
}

export default Help;