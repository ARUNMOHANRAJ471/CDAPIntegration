import React from 'react';
import {Accordion, Card, Label, Header} from 'semantic-ui-react';
class CDAP extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return(
      <div>
      <Header as='h4' style={{backgroundColor:'#24292e',fontSize:'22px',padding:'15px',color:'white'}} fixed>Telstra Continuous Delivery Analytics Platform</Header>
      </div>
    )
}
}

module.exports = CDAP;
