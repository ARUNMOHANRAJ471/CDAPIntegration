const React = require('react');
const ReactDOM = require('react-dom');
const {browserHistory, hashHistory, Route, Router} = require('react-router');
const cdap = require('./components/cdap/cards.jsx');
const logPage = require('./components/cdap/logPage.jsx');
const Login = require('./components/Login/Login.jsx');
const NavBar = require('./components/cdap/navbar.jsx');
const MainComp = React.createClass({
  render: function() {
    return (
      <div>
                  <NavBar/>
                  <br/>
                  <br/>

                  {this.props.children}
              </div>
    );
  }
});
ReactDOM.render(
  <Router history={hashHistory}>

  {/* <Route path="/phleboHome" component={phleboHome}/>*/}
    <Route path="/" component={Login}/>
  <Route component={MainComp}>
    <Route path="/cdap" component={cdap}/>
    <Route path="/logPage" component={logPage}/>
    {/* <Route path="/Requests" component={ListAppointments}/>
    <Route path="/Roster" component={Roster}/>
    <Route path="/MyStaff" component={MyStaff}/> */}
  </Route>
</Router>, document.getElementById('app'));
