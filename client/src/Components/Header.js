import React, { Component } from 'react';
import '../Styles/style.css';
import moment from 'moment';
import menuIcon from '../Images/menu.png';
import notification from '../Images/notification.png';

export default class Header extends Component {
  state = {
    now: new Date()
  }
  
  interval = null;
  

  componentDidMount() {
    const self = this;
    self.interval = setInterval(function() {
      self.setState({
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const date = moment().format('DD MMM').toUpperCase();
    return (
      <div className="header">
        <div className="menu"><img src = {menuIcon}></img></div>
        <div className="rightside">
          <div>{date}</div>
          <div value={this.state.now}>{moment().format('hh:mm:ss a')} </div>
          <div><img src = {notification}></img></div>
        </div>
      </div>
    );
  }
}
