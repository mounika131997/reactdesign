import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      EmpNo:'',
      Mail:'',
      BloodGroup:'',
      Address:'',
      Designation:'',
      error: '',
      loginform:''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmpNoChange = this.handleEmpNoChange.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    
    this.handleBloodGroupChange = this.handleBloodGroupChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleDesignationChange = this.handleDesignationChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.handlesubmit=this.handlesubmit.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.Name) {
      return this.setState({ error: 'Name is required' });
    }

    if (!this.state.EmpNo) {
      return this.setState({ error: 'EmpNo is required' });
    }
    
  if (!this.state.Mail) {
        return this.setState({ error: 'Mail is required' });
      }
      if (!this.state.BloodGroup) {
        return this.setState({ error: 'BloodGroup is required' });
      }
      if (!this.state.Address) {
        return this.setState({ error: 'Address is required' });
      }
      if (!this.state.Designation) {
        return this.setState({ error: 'Designation is required' });
      }
      
    return this.setState({ error: '' });
  }

  handleNameChange(evt) {
    this.setState({
        Name: evt.target.value,
    });
  };
 handleEmpNoChange(evt) {
    this.setState({
        EmpNo: evt.target.value,
    });
  };
  handleMailChange(evt) {
        this.setState({
            Mail: evt.target.value,
        });
      };
  handleBloodGroupChange(evt) {
        this.setState({
            BloodGroup: evt.target.value,
        });
      };
    
  handleAddressChange(evt) {
        this.setState({
            Address: evt.target.value,
        });
      };

  handleDesignationChange(evt) {
        this.setState({
            Designation: evt.target.value,
        });
      }
      // handleClick()
      // {
      //   if(Name==='mounika'&&EmpNo==='IS7579')
      //   {

      //   }
      //   });
      handlesubmit(e){
        this.setState({
          

        });
       
      }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
     
    

      
      <div>
        
        
      <div className="Login">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="850" height="400"></img>  
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="850" height="400"></img>  
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4pnxLLm-9HNZ5nQ2bkBQYHjUiAY1WJq80t638hij6Z5P1V9oQA&s" width="450" height="200"></img>
      <img src="https://as2.ftcdn.net/jpg/01/34/48/71/500_F_134487131_aObf7Hryok4mjcRMWDk1CbidVRXbVhev.jpg" width="450" height="200"></img>
      <img src="https://www.elsevier.com/__data/assets/image/0006/734046/working-in-lab.jpg" width="450" height="200"></img>

      
        <img src="https://t4.ftcdn.net/jpg/01/34/48/87/500_F_134488730_ft7iWRIoBenISweM1hJnwdXxOdG5Xc72.jpg" width="450" height="200"></img>
      
      
        
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <h1><center>REGISTER PAGE</center></h1><br></br><br></br><br></br>
          <center>
          <label><h3> Name:</h3></label>
          <input type="text" data-test=" Name" value={this.state.Name} onChange={this.handleNameChange} /><br></br>
          <label><h3> EmpNo:</h3></label>
          <input type="text" data-test="EmpNo" value={this.state.EmpNo} onChange={this.handleEmpNoChange} /><br></br>
          <label><h3>Mail:</h3></label>
          <input type="text" data-test="Mail" value={this.state.Mail} onChange={this.handleMailChange} /><br></br>
          <label><h3>BloodGroup:</h3></label>
          <input type="text" data-test=" BloodGroup" value={this.state.BloodGroup} onChange={this.handleBloodGroupChange} /><br></br>
          <label><h3>Address:</h3></label>
          <input type="text" data-test="Address" value={this.state.Address} onChange={this.handleAddressChange} /><br></br>
          <label><h3>Designation:</h3></label>
          <input type="text" data-test=" Designation" value={this.state.Designation} onChange={this.handleDesignationChange} /><br></br>

           <input type="button"  value="Register" onClick={this.handleSubmit} class="btn btn-success" data-test="submit" />
           {/* <input type="submit" value="Register" onClick={handleClick} class="btn btn-success" data-test="submit" /> */}
          {/* <button type="button" class="btn btn-primary">LOGIN</button> */}
          
          </center>
        </form>
      </div>
      </div>
    
    );
  }
}

export default Register;