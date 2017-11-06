const React = require('react');
const {Link} = require('react-router');
const {hashHistory} = require('react-router');
import { Button, Checkbox, Form, Card,Input,Icon } from 'semantic-ui-react';
// import Cookie from 'react-cookie';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const ReactToastr = require('react-toastr');
const {ToastContainer} = ReactToastr;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username:'',
      password:'',
      alertMsg:false
    };
    this.checkCredentials = this.checkCredentials.bind(this);
    this.LoginUser = this.LoginUser.bind(this);
    this.checkforPasswordMismatch = this.checkforPasswordMismatch.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  checkforPasswordMismatch() {
    console.log("inside check for password mismatch alert");
    let context = this;
    this.refs.asd.warning(
      'Password mismatch',
      '', {
      timeOut: 3000,
      extendedTimeOut: 3000
    }
  );
  }
  handleUserName(e) {
    this.setState({username: e.target.value});
    //console.log("username ",this.state.username);
  }
  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  checkCredentials() {
    if(this.state.username == "" || this.state.password == "") {
      return "nodata";
    } else if(this.state.checkDataFromDb) {
      return "invalid";
    }else{
      return "success";
    }
  }
  LoginUser() {
    if(this.checkCredentials() == "nodata"){}else{
      let context = this;
      $.ajax({
        url:"/users/checkUser",
        type: 'POST',
        datatype: 'JSON',
        data:{username :this.state.username,password:this.state.password},
        success: function(res)
        {
          console.log('inside success',res);
          if(res == 'failure') {
            console.log('failure');
            context.checkforPasswordMismatch();
          }else if(res == 'success'){
          hashHistory.push('/cdap');
        }
        }.bind(this),
        error: function(err)
        {

        }.bind(this)
      });
    }
  }
  render() {
    let loginPage;
    let alertMessages = "";

      loginPage = (<div className='container' style={{marginTop:'7%'}}>

  <form method='POST' style={{margin:'auto',width:'45%'}}><ul className="nav nav-tabs">
<li className="active"><a href="#" style={{color:'white',background: 'transparent'}}>Admin</a></li>
</ul>
<h2 style={{color:'white', textAlign:'center'}}>Admin Login</h2>
      <div className="form-group">
        <input type="text" style={{textAlign:'center'}} onChange={this.handleUserName} required className="form-control" id="email" placeholder="Enter your username" name="email"/>
      </div>
      <div className="form-group">
        <input type="password" style={{textAlign:'center'}} onChange={this.handlePassword} required className="form-control" id="pwd" placeholder="Enter your password" name="pwd"/>
      </div><center><button type="button" onClick={this.LoginUser} className="btn btn-default" style={{margin:'auto',background: '#80868e',color: 'white',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',fontFamily: 'inherit'}}><i className="fa fa-thumbs-o-up" aria-hidden="true"/>&nbsp;&nbsp;Log in</button></center>
    </form>
  </div>);

return(
  <div>
    {loginPage}
    <ToastContainer ref='asd'
      toastMessageFactory={ToastMessageFactory}
      className='toast-top-center'/>
  </div>

);
}
}
module.exports = Login;
