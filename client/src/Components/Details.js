import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

export default class Details extends Component {
  render() {
    return (
      <div className="details">

        

          <TextField
            id="name"
            label="Name"
            // className={classes.textField}
            // value={this.state.name}
            // onChange={this.handleChange('name')}
            margin="normal"
        />
      </div>
    );
  }
}
