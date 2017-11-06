import React from 'react';
import {Accordion, Card, Label, Header} from 'semantic-ui-react';
var CardStructure =  require('./cardStructure.jsx');
class CDAP extends React.Component {
  constructor() {
    super();
    this.state = {
      // projects : ["project1","project2","project3","project4"]
      projects:[]
    };
  }

  componentWillMount() {
    let projects = [];
    console.log('hhhhhhhhhhhhhh');
    $.ajax({
        url: '/bambooDashboard/getProjects',
        type: 'GET',
        success: function(data)
        {
          console.log(data);
          data.records.map((item,index)=>{
          projects.push({name:item._fields[0].properties.name,key:item._fields[0].properties.key,score:item._fields[0].properties.score,planCount:item._fields[1].low })
          })
          this.setState({projects:projects})
        }.bind(this),
        error: function(err)
        {
        }.bind(this)
      });
  }

  render() {

    var context = this;
     var data = this.state.projects.map((item,index)=>{
       console.log(",,,,,,,,",item);
       return(<CardStructure item = {item}/>)
         })
    return(
      <div>
      {/* <Header as='h4' style={{backgroundColor:'#24292e',fontSize:'22px',padding:'15px',color:'white'}} fixed>Telstra Continuous Delivery Analytics Platform</Header> */}
      <Card.Group itemsPerRow={3} style={{marginLeft:'15%',marginTop:'2%'}}>
      {data}
    </Card.Group></div>
    )
}
}

module.exports = CDAP;
