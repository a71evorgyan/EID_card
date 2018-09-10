import React, { Component } from 'react';
import ButtonWithBlock from './ButtonWithBlock'

export default class Identification extends Component {

  render() {
    return (
      <div className="identification">


        <div className="Idheader">
          <div className="onLine">
            <div id="ident">Identification</div>
            <div id="next">Next</div>
          </div>
          <hr/>
        </div>
        
        <ButtonWithBlock button="Read EID Card" first="EID number" second="EID issue date" third="EID expiry day" fourth="UAE visa No."/>
        <ButtonWithBlock button="Scan Passport" first="Passport No." second="Passport iss. date" third="Passport exp. date" fourth="Passport iss. place"/>
      </div>
    );
  }
}


