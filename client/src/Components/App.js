import React, { Component } from 'react';
import Identification from './Identification'
import Details from './Details';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import Naviagation from './Navigation';
import {Path} from './path';


export default class App extends Component {
 
  render() {
    return (
     
      <div className="app">
        {/* <Path /> */}
        <Header/>
        <Naviagation/> 

        {/* <Identification/> */}
       
        {/* <Details/> */}
        {/* <Dashboard/> */}
        <Footer/>
      </div>
    );
  }
}


