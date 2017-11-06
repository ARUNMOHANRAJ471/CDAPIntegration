import React from 'react';
import {Accordion, Card, Label, Header, Grid, Button, Segment} from 'semantic-ui-react';
class LogPage extends React.Component {
  constructor() {
    super();
    this.state = {
      plans : [],
      sidebar:false,
      history:[],
    };
    this.loadLogs = this.loadLogs.bind(this);
  }

  componentWillMount() {
    let project = window.location.hash.split('&')[0].split('=')[1];
    let plans =[];
    $.ajax({
        url: '/bambooDashboard/getPlans',
        type: 'POST',
        data: {project:project},
        success: function(data)
        {
          console.log("data",data);
          //
          // data.records.map((item,index)=>{
          //   console.log("hgjhvjhgjhgjhjhjh.....");
          // plans.push({planName:item._fields[0].properties.name,build:item._fields[1].properties.buildNo,history:item._fields[1].properties.data,count:item.length})
          // })
          this.setState({plans:data})
        }.bind(this),
        error: function(err)
        {
        }.bind(this)
      });
  }

  loadLogs(build){
    // console.log('bbbbb',build);
    // var arr = JSON.parse(build);
    this.setState({history:build});
    this.setState({sidebar:true});
  }
  render() {
  let i=0;
  let j=0;
  let i1=0;
  let j1=0;
  let contents1;
    var context = this;
    function planName() {
        while (i < context.state.plans.length) {
          ++i;
            return 'Plan Name - '+context.state.plans[i - 1].planName;
          }
    }
    function planContent() {
      let aa;
      if (j < context.state.plans.length) {
        ++j;
        aa = context.state.plans[i-1].build.map((item,index)=>{
            return <div style={{marginBottom:'5%'}}><Button onClick = {context.loadLogs.bind(item.history)} >Build No # {item.buildNo}</Button></div>
        })
      }
      return aa;
    }

    function stageName() {
        while (i1 < context.state.history.plan.stage_executed) {
          ++i1;
            return 'Stage Name - '+context.state.history.plan.stages.stage[i1-1].name;
          }
    }
    function stageContent() {
      let aa;
      while (j1 < context.state.history.plan.stage_executed) {
        ++j1;
        let s1 = context.state.history.plan.stages.stage[i1-1];
          return <div>
          <h4>Stage</h4>
          <table>
            <tr><td>build_state</td><td style={{paddingLeft: '14%'}}>:</td><td style={{paddingLeft: '15%',width: '100%'}}>{s1.build_state}</td></tr>
            <tr><td>Job_Configured</td><td style={{paddingLeft: '14%'}}>:</td><td style={{paddingLeft: '15%'}}>{s1.Job_Configured}</td></tr>
          </table>
          <h4>Jobs</h4>
          {s1.jobs.job.map((item,index)=>{
            return <div>
              <h5>Job({index+1})</h5>
              <table>
                <tr><td>Job_Name</td><td style={{paddingLeft: '10%'}}>:</td><td style={{paddingLeft:'10%',width: '100%'}}>{item.name}</td></tr>
                <tr><td>Job_Key</td><td style={{paddingLeft: '10%'}}>:</td><td style={{paddingLeft:'10%'}}>{item.key}</td></tr>
                <tr><td>build_state</td><td style={{paddingLeft: '10%'}}>:</td><td style={{paddingLeft:'10%'}}>{item.build_state}</td></tr>
                <tr><td>build_status</td><td style={{paddingLeft: '10%'}}>:</td><td style={{paddingLeft:'10%'}}>{item.build_status}</td></tr>

                {item.build_status == "Unknown" ? null :
                <div><tr><td>task_enabled</td><td style={{paddingLeft: '10%'}}>:</td><td style={{paddingLeft:'10%'}}>{item.task_enabled}</td></tr>
                  <tr><td>enabled_list</td><td style={{paddingLeft: '10%'}}>:</td><td style={{paddingLeft:'10%'}}>
                    {item.enabled_list != undefined ? item.enabled_list.map((items,index)=>{
                      return <li >{items}</li>
                    }) : null}
                    </td></tr>
                    <tr><td>task_disabled</td><td style={{paddingLeft: '10%'}}>:</td><td style={{paddingLeft: '10%'}}>{item.task_disabled}</td></tr>
                    <tr><td>disabled_list</td><td style={{paddingLeft: '10%'}}>:</td><td style={{paddingLeft: '10%'}}>
                      {item.disabled_list != undefined ? item.disabled_list.map((items,index)=>{
                        return <li >{items}</li>
                      }) : null}
                    </td></tr>
                  </div>
              }
              </table>
              </div>
          })}
        </div>
      }
      return aa;
    }
    if(context.state.history && context.state.history.plan) {
    contents1 = _.times(context.state.history.plan.stage_executed, () => ({title: stageName(), content: stageContent()}));
  }
    const panels = _.times(context.state.plans.length, () => ({title: planName(), content: planContent()}));
    let accords = (<Accordion styled panels={panels} style={{
      color: 'black',
      textAlign: 'left'
    }}/>)
    let contentss = (
    <Accordion styled panels={contents1} style={{
      color: 'black',
      textAlign: 'left'
    }}/>)
    return(
      <Grid>
      <Grid.Column width={6}>
        {accords}
      </Grid.Column>
      <Grid.Column width={10}>
        {this.state.sidebar ? contentss:null}
      </Grid.Column>
     </Grid>

    )
}
}

module.exports = LogPage;
