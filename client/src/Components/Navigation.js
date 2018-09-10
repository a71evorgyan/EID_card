import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Identification from './Identification'
import Details from './Details';

export default class Navigation extends Component {
  render() {
    return (
      <Router>
      <div className="nav">
        <ul >
          <li>
            <Link to="/">Identification</Link>
          </li>
          <li>
            <Link to="/personalDetails">Personal Details</Link>
          </li>
        </ul>
  
      
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Identification} />
        <Route path="/personalDetails" component={Details} />
      </div>
    </Router>
    );
  }
}