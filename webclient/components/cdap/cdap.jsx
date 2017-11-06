import React from 'react';
import {Accordion, Card, Label, Header} from 'semantic-ui-react';
// import Gauge from './gauge.jsx';

const projectData = [
  {
    name: "project 1",
    score: 0,
    plan: [
      {
        name: 'p1p1',
        score: 80,
        stage: [
          {
            name: 'p1p1s1',
            score: 100,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p1p1s2',
            score: 0,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p1p1s3',
            score: 80,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }
        ]
      }, {
        name: 'p1p2',
        score: 80,
        stage: [
          {
            name: 'p1p2s1',
            score: 100,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p1p2s2',
            score: 0,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p1p2s3',
            score: 80,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }
        ]
      }
    ]
  }, {
    name: "project 2",
    score: 40,
    plan: [
      {
        name: 'p2p1',
        score: 80,
        stage: [
          {
            name: 'p2p1s1',
            score: 100,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p2p1s2',
            score: 0,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p2p1s3',
            score: 80,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }
        ]
      }, {
        name: 'p2p2',
        score: 80,
        stage: [
          {
            name: 'p2p2s1',
            score: 100,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p2p2s2',
            score: 0,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p2p2s3',
            score: 80,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }
        ]
      }
    ]
  }, {
    name: "project 3",
    score: 100,
    plan: [
      {
        name: 'p3p1',
        score: 100,
        stage: [
          {
            name: 'p3p1s1',
            score: 100,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p3p1s2',
            score: 0,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p3p1s3',
            score: 80,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }
        ]
      }, {
        name: 'p3p2',
        score: 100,
        stage: [
          {
            name: 'p3p2s1',
            score: 100,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p3p2s2',
            score: 0,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }, {
            name: 'p3p2s3',
            score: 80,
            job:[
              {
                name: 'p1p1s1j1',
                score: 100
              }, {
                name: 'p1p1s1j2',
                score: 0
              }, {
                name: 'p1p1s3j3',
                score: 80
              }
            ]
          }
        ]
      }
    ]
  }
];
class CDAP extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    $.ajax({
        url: '/bambooDashboard/getProjects',
        type: 'GET',
        success: function(data)
        {
          console.log(data);
        }.bind(this),
        error: function(err)
        {
        }.bind(this)
      });
  }
  render() {
    let aaaa = this.state.projectData.map((item, index) => {
      let prjColor = '';
      if (item.score == 100)
        prjColor = '#006400';
      else if (item.score < 100 && item.score > 0)
        prjColor = '#FFA500';
      else if (item.score == 0)
        prjColor = '#FF0000';
      return <Accordion styled style={{
        fontFamily: 'arial'
      }}>
        <Accordion.Title style={{
          fontSize: '17px',
          background: 'linear-gradient(to left, #cee4f9,#d0e5ff)'
        }}>
          Project Name - {item.name}<div style={{float:'right',backgroundColor:prjColor, color:prjColor, width:'20px',height:'20px',borderRadius:'50%'}}></div>
        </Accordion.Title>
        <Accordion.Content style={{
          fontFamily: 'arial',
          marginLeft:'40px'
        }}>
        </Accordion.Content>
      </Accordion>
    });
    return (
      <div>
        <Header as='h4' style={{backgroundColor:'#24292e',fontSize:'22px',padding:'15px',color:'white'}} fixed>Telstra Continuous Delivery Analytics Platform</Header>
      <div style={{
        margin: '5%'
      }}>
      <div style={{float: 'left'}}>
        {/* {aaaa} */}
        </div>
        <div style={{float: 'right',width:'450px'}}>
        {/* <Gauge/> */}
        <img src='../../image/liquid.png' style={{float:'right', margin:'0 40% 0 0'}}/>
        <div>
          <img src='../../image/Capture.png' style={{marginLeft:'-14%'}}/>
          <Card style={{float:'left',width:'40%'}}>
                    <Label style={{
                      color:'white',
                      fontSize:'15px',
                      marginLeft: "8%",
                      marginRight: "-18%",
                      backgroundColor:'#015a82',
                      borderColor:'#015a82'
                    }} ribbon>Stage</Label>
                    <p style={{
                      marginTop: "2%",
                      fontSize:'15px',
                      textAlign: 'center',
                      fontFamily: 'arial',
                      marginBottom: '2%'
                    }}>
                      <b>4 / 6</b>
                    </p>
                  </Card>
                  <Card style={{float:'right',width:'40%',marginTop:'3%'}}>
                            <Label style={{
                              color:'white',
                              fontSize:'15px',
                              marginLeft: "8%",
                              marginRight: "-18%",
                              backgroundColor:'#015a82',
                              borderColor:'#015a82'
                            }} ribbon>Task</Label>
                            <p style={{
                              marginTop: "2%",
                              fontSize:'15px',
                              textAlign: 'center',
                              fontFamily: 'arial',
                              marginBottom: '2%'
                            }}>
                              <b>30 / 37</b>
                            </p>
                          </Card>

        </div>
      </div>
    </div>
  </div>
    );
  }
}

module.exports = CDAP;
