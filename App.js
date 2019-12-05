import React, { Component } from 'react';
// import AppC from'./App.css';
import Register from'./Register';
import Login from'./Login';
import Main from'./Main.js';
import Help from'./Help.js';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
class App extends Component {
  render() {
return(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">REGISTER</Link>
        </li>
        <li>
          <Link to="/Login">LOGIN</Link>
        </li>
        <li>
          <Link to="/LeaveTrack">LEAVE TRACK</Link>
        </li>
        <li>
          <Link to="/Help">HELPDESK</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" ><Register/></Route>
        <Route path="/Login"> <Login/></Route>
        <Route path="/LeaveTrack"><Main/></Route>
        <Route path="/Help"><Help/></Route>
        
      </Switch>
      </div>
      </Router>)
      }
    }
      export default App;