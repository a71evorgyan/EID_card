import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
// import writeJsonFile from 'write-json-file';
export default class ButtonWithBlock extends Component {
  state = {
    
  }



  handleChange = name => event => {
    const {name, value} = event.target; 
    // console.log(name);
    // console.log(this.state);
    this.setState({
        [name]: value,
    });
  };

  handeClick = (event) => {
    console.log("clicked")
    const send = this.state;
    event.preventDefault();

    fetch('/ident', {
      headers: {"Content-Type": "application/json"},
      method: 'POST',
      body: JSON.stringify(send),
    })
    .then(res => res.json())
    .then(get => console.log(get));
  }

  render() {
    const {button, first, second, third, fourth} = this.props;
    // const { EIDCard: { EIDnumber, EIDissuedate, EIDexpiryday, UAEvisaNo}, Passport: {
    //   PassportNo,
    //   Passportissdate,
    //   Passportexpdate,
    //   Passportissplace, } } = this.state;
    // console.log(first);
    return (

      <div className="buttonWithBlock"> 
      
        <div className="orangeButton" onClick={this.handeClick}>{button}</div>

          <div className="whiteBlock">
            <TextField
              id={first.replace(/[\s.]/g,'')}
              label={first}
              name={first.replace(/[\s.]/g,'')}
              className='text'
              // value={EIDnumber}
              onChange={this.handleChange(first.replace(/[\s.]/g,''))}
              margin="normal"
            />

            <TextField
              id={second.replace(/[\s.]/g,'')}
              label={second}
              name={second.replace(/[\s.]/g,'')}
              className='text'
              // value={this.state.name}
              onChange={this.handleChange(second.replace(/[\s.]/g,''))}
              margin="normal"
            />
           
            <TextField
              id={third.replace(/[\s.]/g,'')}
              // type="time"
              label={third}
              name={third.replace(/[\s.]/g,'')}
              className='text'
              value={this.state.name}
              onChange={this.handleChange(third.replace(/[\s.]/g,''))}
              margin="normal"
            />

            <TextField
              id={fourth.replace(/[\s.]/g,'')}
              label={fourth}
              name={fourth.replace(/[\s.]/g,'')}
              className='text'
              value={this.state.name}
              onChange={this.handleChange(fourth.replace(/[\s.]/g,''))}
              margin="normal"
            /> 

          </div>
        </div>
      
    );
  }
}



 {/*
        
        <button>Scan passport</button>

       <div className="passport">
          <TextField
            id="name"
            label="Name"
            className='text'
            value={this.state.name}
            // onChange={this.handleChange('name')}
            margin="normal"
          />

          <TextField
            id="name"
            label="Name"
            className='text'
            value={this.state.name}
            // onChange={this.handleChange('name')}
            margin="normal"
          />

          <TextField
            id="name"
            label="Name"
            className='text'
            value={this.state.name}
            // onChange={this.handleChange('name')}
            margin="normal"
            style={{ alignItems: 'center' }}
          />

          <TextField
            id="name"
            label="Name"
            className='text'
            value={this.state.name}
            // onChange={this.handleChange('name')}
            margin="normal"
          /> */}
        {/* </div> */}