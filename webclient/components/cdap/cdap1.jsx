import React from 'react';
import {Treebeard} from 'react-treebeard';
import allData from './data.json';
console.log(allData[0]);
const data = {
    name: 'List Of Projects',
    toggled: true,
    children: [
        {
            name: 'project 1',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'project 2',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: (<div><span style={{color:'red'}}>Arun</span><span style={{color:'yellow', backgroundColor:'blue', width:'20px', height:'20px', borderRadius:'50%', float:'right'}}></span></div>) }
                    ]
                }
            ]
        }
    ]
};

class CDAP extends React.Component {
	constructor () {
		super();
		this.state = {

    };
    this.onToggle = this.onToggle.bind(this);
	}
  componentWillMount() {
    let dataObj = ["abbc"];
    allData.map(function(records, key) {
      // if(key === 4) {
      //   console.log(records);
      // }
      records._fields.map(function(fields, fieldKey) {
        // console.log(",,,,,,,,,,,",fields);
        if(fieldKey == 0 ){
        if(! dataObj.includes(fields.properties.name)) {
          console.log("inside 1");
            dataObj.push(fields.properties.name);
            // console.log("....",dataObj);
        }
        else{
          console.log("not found");
        }
      }
      })
    });
    console.log(dataObj,"-------------");
  }
  onToggle(node, toggled) {
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
    }
	render () {
	return (
		<div >
      <Treebeard
              data={data}
              onToggle={this.onToggle}
          />
		</div>
	);
}
}

module.exports = CDAP;
