import React, { Component } from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
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
    else if (this.state.password === "mouni") {
      alert('sucess');
    }
    else {
      return this.setState({ error: 'password is incorrect' });
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
 Casual()
 {
alert("12 Days CL per year credited on a pro-rata basis from Date of Joining.Minimum Half a day, Maximum 2 days.CL - encouraged to apply 2 days in advance.CL Leave application should be submitted 2 days before date of leave.In case of emergency/sickness it has to be informed to the respective TL within 30 Minutes of shift starting.Leave application should be submitted on the day of resuming to job after leave (in case of emergency/sickness).Intervening Holidays will form part of CL.Maximum days for CL are 2.CL cannot be clubbed with any other leave.If CL is applied for Saturday & Monday, Saturday & Sunday will be treated as CL & Monday will be treated as LOP.If the employee is on leave for the First session then he\she must apply Leave within 12 hours from the first swipe entry of the same day.If the employee is on leave for Last session or Full day then he\she must apply Leave within 12 hours from the first swipe entry of the next working day.");
 }
 Previlege()
 {
   alert("12 Days in a Calendar Year on completion of 1 year for B5 For B4 and above on Pro-rata Basis from the Date of Joining. Must be applied & approved 5 days in advance. Intervening Holidays will form part of PL.Emergency Leaves will not be classified as PL.In case of serious medical illness / on the death of direct family members it can be classified as PL with the approval of VP & GM-HR Leave Applications.")
 }
 General()
 {
   alert("Non-Submission of Leave Applications (for CL in advance by 2 days, and in case of emergency leave on the date of resuming duty) will be treated only as LOP. Non-Submission of Leave Applications for PL in advance by 5 days will be considered only as LOP. Extra Work / Comp. Off application has to be authorized & submitted on the same date of work done / the next shift he starts to work. Comp-off will not be considered if Extra Work / Comp. Off application is not submitted before the said time.")
 }
 Off()
 {
   alert("	Can be availed within 90 days of extra work done, otherwise it will get elapsed.Must be applied & approved by the respective Dept. / DU Heads 2 days in advance.Extra Work / Comp. Off application must be submitted to the Time Office before proceeding on Leave.Maximum days for Comp. Off is 2, Intervening holidays will form part of comp off.In case of serious medical illness / on the death of direct family members it can be classified as PL with the approval of VP & GM-HR Leave Applications.")
 }
 Permission()
 {
   alert("The employee can apply for the Permission/OD on or before 24 hrs of their first swipe entry. For Production and Production Support Employees, Permission of 90 minutes can be availed only from 26th to 25th of every month. Same will be taken for payroll process – HR TEAM For Support Employees, Permission of 90 minutes can be availed only from 1st to 30th of every month. Same will be taken for payroll process  – HR TEAMPermission can be applied anytime during the shift the same need to be applied through leave track within 24 hours of your first swipe in. Please contact Time office for any question on this.")
 }
invalid()
{
  alert("Invalid Entry can be done within 48 hours of next swipe card entry.")
}
shift()
{
  alert("A shift can be changed within 3 days from the current date.")
}
  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      
      <div>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="350" height="150"></img> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="350" height="150"></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="350" height="150"></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="350" height="150"></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljYe2HgPx3M1yOfzN-q3-pGNiaggWk8cbN6hTAkyceSf_Gf7A&s" width="350" height="150"></img>
       
          <h1 id='head'>Leave Track</h1>
          
        </div>
        <div className="Container-fluid">
          <div className="row">
            <div className="col-6">
            {/* <a  href="D://mouni//first//src//Casual.PNG" > Casual Leave</a><br></br><br></br>  */}
            
           <button type="button" class="btn btn-secondary" btn-lg  onClick={this.Casual}> Casual Leave</button><br></br><br></br> 
           <button type="button" class="btn btn-warning"  btn-lg onClick={this.Previlege}>Previlege Leave</button><br></br><br></br>
           <button type="button" class="btn btn-dark"  btn-lg onClick={this.General}>General Rules For All Leave Categories</button><br></br><br></br>
           <button type="button" class="btn btn-primary" btn-lg onClick={this.Off}>Compensatory Off</button><br></br><br></br>
           <button type="button" class="btn btn-success"  btn-lg onClick={this.Permission}>Permission/OD</button><br></br><br></br>
           <button type="button" class="btn btn-danger"  btn-lg onClick={this.invalid}>Invalid Entry</button><br></br><br></br>            
           <button type="button" class="btn btn-info" btn-lg onClick={this.shift}>Shift Change</button><br></br>
           
             </div>
            <div class="col-6 ">
          <form onSubmit={this.handleSubmit}>
            {
              this.state.error &&
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            }
            <h1><center>LOGIN</center></h1><br></br><br></br><br></br>
              <center>
                <label><h3>User Name:</h3></label>
                <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} /><br></br>

                <label><h3>Password:</h3></label>
                <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} /><br></br>

                <input type="submit" value="Log In" class="btn btn-info" data-test="submit" />

                {/* <button type="button" class="btn btn-primary">LOGIN</button> */}
              </center>
              <p>NOTE:
    Dear Integrites,
    Attendance cycle for December  2019 will be considered from 21-11-2019 to 20-12-2019, 
    Hence all employees are requested to close their respective pending Permission / Invalid Entry / Leave entries, 
    if any, through leave track before 3 pm on 23-12-2019 (Monday).
    No LOP Reversion will be considered later.</p>
    <div>
    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="900" height="400"></img>   
    </div>
          
          </form>
        </div>
          </div>
        </div>
        
      </div>
      

    )
  }
}

export default Main;