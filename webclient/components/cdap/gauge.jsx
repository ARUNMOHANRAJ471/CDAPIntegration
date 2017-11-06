import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LiquidFillGauge from 'react-liquid-gauge';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }
     startColor = '#6495ed'; // cornflowerblue
     endColor = '#dc143c'; // crimson

    render() {
        const radius = 200;
        const interpolate = interpolateRgb(this.startColor, this.endColor);
        const fillColor = interpolate(this.state.value / 100);
        const gradientStops = [
            {
                key: '0%',
                stopColor: color(fillColor).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            },
            {
                key: '50%',
                stopColor: fillColor,
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '100%',
                stopColor: color(fillColor).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }
        ];

        return (
            <div>
                <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={radius * 2}
                    height={radius * 2}
                    value={this.state.value}
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
                    gradientStops={gradientStops}
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
                    onClick={() => {
                        this.setState({ value: Math.random() * 100 });
                    }}
                />
                <div
                    style={{
                        margin: '20px auto',
                        width: 120
                    }}
                >
                </div>
            </div>
        );
    }
}
module.exports = App;
// import Gauge from 'react-radial-gauge';
// class AwesomeComponent extends React.Component {
//     render() {
//         let opts = {size:200, currentValue:72}
//         return (
//             <Gauge {...opts} />
//         )
//     }
// }
//
// module.exports = AwesomeComponent;

// import LiquidChart from 'react-liquidchart';
//
// const stops = [
//   <stop key={1} stopColor="someColor1" offset="5%" />,
//   <stop key={2} stopColor="someColor2" offset="50%" />,
//   <stop key={3} stopColor="someColor3" offset="85%" />
// ];
//
// class ChartLiquid extends Component {
//   constructor() {
//     super();
//   }
//
//   render() {
//     return (
//       <div
//         style={{
//           width: '100%',
//           height: '500px',
//         }}
//       >
//         <LiquidChart
//             responsive
//             legend="Percentage of Completed Tasks"
//             value={Math.random() * 100}
//             showDecimal
//             amplitude={4}
//             frequency={2}
//             animationTime={2000}
//             animationWavesTime={2250}
//             gradient={{
//               type: 1,
//               x1: 0,
//               x2: 0,
//               y1: 100,
//               y2: 0,
//               stops,
//             }}
//             postfix="%"
//             legendFontSize={0.1}
//           />
//       </div>
//     );
//   }
// }
//
// module.exports = ChartLiquid;
