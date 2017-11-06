import React from 'react';
import {
  Segment,
  Card,
  Label,
  Dimmer,
  Accordion,
  Icon,
  Button
} from 'semantic-ui-react';
import _ from 'lodash';
const {hashHistory} = require('react-router');
import {Scrollbars} from 'react-custom-scrollbars';
import Gauge from 'react-svg-gauge';
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import LiquidFillGauge from 'react-liquid-gauge';

class CDAP extends React.Component {
  constructor() {
    super();
    this.state = {
      planDetails: [],
      colorValue: 'red',
      value: 50
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow () {
    this.setState({active: true});
    this.getPlanDetails();
  }

  getPlanDetails() {
    let context = this;
    let plansDetails = [];
    $.ajax({
      url: '/bambooDashboard/getPlanDetails',
      type: 'POST',
      data: {
        project: context.props.item.key
      },
      success: function(data) {
        console.log(data);
        this.setState({planDetails: data})
      }.bind(this),
      error: function(err) {}.bind(this)
    });
  }

  handleHide () {this.setState({active: false})}
  logPage(project){
    console.log("jhkjxchfjxfdhb");
        hashHistory.push('/logPage?p='+ project);
    }

  render() {
    let startColor = 'red'; // cornflowerblue
    let endColor = '#dc143c'; // crimson
        const radius = 100;
        const interpolate = interpolateRgb(startColor, endColor);
        const fillColor = interpolate(this.state.value / 100);
    const {active} = this.state
    var context = this;
    let labelColor = '';
    if (this.props.item.score == 100)
      labelColor = '#006400';
    else if (this.props.item.score < 100 && this.props.item.score > 0)
      labelColor = '#FFA500';
    else {
      labelColor = '#FF0000';
    }
    let i = 0;
    function planName() {
      // console.log("");
      while (i < context.state.planDetails.length) {
        ++i;
        let plnColor = '';
        if (context.state.planDetails[i - 1].score == 100)
          plnColor = '#006400';
        else if (context.state.planDetails[i - 1].score < 100 && context.state.planDetails[i - 1].score > 0)
          plnColor = '#FFA500';
        else if (context.state.planDetails[i - 1].score == 0)
          plnColor = '#FF0000';

        // return <p>Plan Name - {context.state.planDetails[i - 1].name}</p>;
        return 'Plan Name - ' + context.state.planDetails[i - 1].name;
      }
    }

    function planContent() {
      const planPanels = _.times(context.state.planDetails[i - 1].stages.length, () => ({title: stageName(), content: stageContent()}));
      return <Accordion styled panels={planPanels} style={{
        color: 'black',
        textAlign: 'left'
      }}/>
    }

    let j = 0;
    let b = false;
    let j1 = 0;
    function stageName() {
      while (j < context.state.planDetails[i - 1].stages.length) {
        ++j;

        j1 = j;
        if (j == context.state.planDetails[i - 1].stages.length) {
          j1 = j;
          j = 0;
          b = true;
        }
        if (b) {
          b = false;
        }
        return 'Stage Name - ' + context.state.planDetails[i - 1].stages[j1 - 1].name;

      }
    }

    function stageContent() {
      const stagePanels = _.times(context.state.planDetails[i - 1].stages[j1 - 1].jobs.length, () => ({title: jobName(), content: jobContent()}));
      return <Accordion styled panels={stagePanels} style={{
        color: 'black',
        textAlign: 'left'
      }}/>
    }

    let k = 0;
    function jobName() {
      // console.log('kkkkk',context.state.planDetails[i-1].stages[j1-1].jobs.length,k);
      if (k == context.state.planDetails[i - 1].stages[j1 - 1].jobs.length) {
        k = 0;
      }
      while (k < context.state.planDetails[i - 1].stages[j1 - 1].jobs.length) {
        ++k;
        // console.log(context.state.planDetails[i-1].stages[j1-1].jobs,",,,,",k-1);
        return 'Job Name - ' + context.state.planDetails[i - 1].stages[j1 - 1].jobs[k - 1].name;
      }
    }

    function jobContent() {
      return ((context.state.planDetails[i - 1].stages[j1 - 1].jobs[k - 1].enabled_list.length == 0 && context.state.planDetails[i - 1].stages[j1 - 1].jobs[k - 1].disabled_list == 0)
        ? <div>No Tasks</div>
        : <div style={{overflow:'auto'}}>
          <table style={{
            width: '48%',
            float:'left',
            margin:'5px'
          }}>
            <tr><th style={{color:'#006400'}}>Enabled list</th></tr>
            {context.state.planDetails[i - 1].stages[j1 - 1].jobs[k - 1].enabled_list.map((item, index) => {
              return <tr>
                <td><li>{item}</li></td>
              </tr>
            })}
          </table>
          <table style={{
            width: '48%',
            float:'left',
            margin:'5px'
          }}>
            <tr><th style={{color:'#FF0000'}}>Disabled list</th></tr>
            {context.state.planDetails[i - 1].stages[j1 - 1].jobs[k - 1].disabled_list.map((item, index) => {
              return <tr>
                <td><li>{item}</li></td>
              </tr>
            })}
          </table>
        </div>);
      // const planPanels = _.times(context.state.planDetails[i-1].stages.length, () => ({title: stageName(), content: stageContent()}));
      // return <Accordion styled panels={planPanels} style={{
      //   color: 'black',
      //   textAlign: 'left'
      // }}/>
    }

    const panels = _.times(context.state.planDetails.length, () => ({title: planName(), content: planContent()}));
    let aaaa = (<Accordion styled panels={panels} style={{
      color: 'black',
      textAlign: 'left',
      margin:'5px'
    }}/>)
    return (
      <div>
        <Card style={{
          marginRight: '40px',
          boxShadow: '5px 5px 5px grey',
          marginTop: '5%'
        }}>
          <Label as='a' color='blue' ribbon style={{
            marginLeft: '5%',
            width: '105%'
          }}>{this.props.item.key}</Label>
          <Card.Content>
            <Card.Description>
              {this.props.item.name}
              <div style={{
                float: 'right',
                backgroundColor: labelColor,
                color: labelColor,
                width: '20px',
                height: '20px',
                borderRadius: '50%'
              }}></div>
            </Card.Description>
            <div style={{marginTop:'3%',marginBottom:'3%'}}>No.of Plans:{this.props.item.planCount}</div>
          </Card.Content>
          <div style={{margin:'0 auto',marginBottom:'5%'}}>
            <Button inverted color='green' onClick={this.logPage.bind(this,this.props.item.key)}>logs</Button>
            <Button inverted color='green' onClick={this.handleShow}>Compliance</Button>
          </div>

        </Card>
        <Dimmer active={active}>
          <Icon name='delete' style={{
            float: 'right',
            marginRight: '3%',
            cursor: 'pointer'
          }} onClick={this.handleHide}/>
          <Segment style={{
            width: "90%",
            height: '90%',
            marginLeft: '5%'
          }}>
            <div>
              <h2 style={{
                color: 'black'
              }}>{this.props.item.name}({this.props.item.key})</h2>
              <div style={{
                margin: '5%'
              }}>
                <div style={{
                  float: 'left'
                }}>
                  <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{
                    display: 'none',
                    position: 'right'
                  }}/>} autoHide autoHideTimeout={500} autoHeight autoHeightMin={490}>
                  {this.state.planDetails.length > 0
                    ? aaaa
                    : null}
                  </Scrollbars>
                </div>
                <div style={{
                  float: 'right',
                  width: '450px'
                }}>
                  {/* <Gauge value='98' width={400} height={320} color={this.state.colorValue} label="" /> */}
                  <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={radius * 2}
                    height={radius * 2}
                    value={'64'}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                    textRenderer={(props) => {
                        const value = Math.round(props.value);
                        const radius = Math.min(props.height / 2, props.width / 2);
                        const textPixels = (props.textSize * radius / 2);
                        const valueStyle = {
                            fontSize: textPixels
                        };
                        const percentStyle = {
                            fontSize: textPixels * 0.6
                        };

                        return (
                            <tspan>
                                <tspan className="value" style={valueStyle}>{value}</tspan>
                                <tspan style={percentStyle}>{props.percent}</tspan>
                            </tspan>
                        );
                    }}
                    riseAnimation
                    waveAnimation
                    waveFrequency={2}
                    waveAmplitude={1}
                    gradient
                    // gradientStops={gradientStops}
                    circleStyle={{
                        fill: fillColor
                    }}
                    waveStyle={{
                        fill: fillColor
                    }}
                    textStyle={{
                        fill: color('#444').toString(),
                        fontFamily: 'Arial'
                    }}
                    waveTextStyle={{
                        fill: color('#fff').toString(),
                        fontFamily: 'Arial'
                    }}
                />
                <div
                    style={{
                        margin: '20px auto',
                        width: 120
                    }}
                >
                </div>
                  {/* <img src='../../image/liquid.png' style={{
                    float: 'right',
                    margin: '0 30% 0 0'
                  }}/> */}
                  <div>
                    <img src='../../image/Capture.png' style={{
                      marginLeft: '-14%'
                    }}/>
                    <Card style={{
                      float: 'left',
                      width: '40%'
                    }}>
                      <Label style={{
                        color: 'white',
                        fontSize: '15px',
                        marginLeft: "8%",
                        marginRight: "-18%",
                        backgroundColor: '#015a82',
                        borderColor: '#015a82'
                      }} ribbon>Stage</Label>
                      <p style={{
                        marginTop: "2%",
                        fontSize: '15px',
                        textAlign: 'center',
                        fontFamily: 'arial',
                        marginBottom: '2%',
                        color: 'black'
                      }}>
                        <b>4 / 6</b>
                      </p>
                    </Card>
                    <Card style={{
                      float: 'right',
                      width: '40%'
                    }}>
                      <Label style={{
                        color: 'white',
                        fontSize: '15px',
                        marginLeft: "8%",
                        marginRight: "-18%",
                        backgroundColor: '#015a82',
                        borderColor: '#015a82'
                      }} ribbon>Task</Label>
                      <p style={{
                        marginTop: "2%",
                        fontSize: '15px',
                        textAlign: 'center',
                        fontFamily: 'arial',
                        marginBottom: '2%',
                        color: 'black'
                      }}>
                        <b>30 / 37</b>
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </Segment>
        </Dimmer>

      </div>
    )
  }
}

module.exports = CDAP;
