import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/action';

class Login extends Component {

  constructor(props) {
    super();

    this.state = {
      loginusername: '',
      loginpassword: '',
    };
  }


  onChange = (e) => {
    e.preventDefault();
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onLogin = (e) => {
    e.preventDefault();
    const { users, login, history } = this.props;
    users.forEach((user) => {
      if (user.username === this.state.loginusername && user.password === this.state.loginpassword) {
        login(true);
        history.push('/');
      } else {
        login(false);
        history.push('/invalidlogin');
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Login
            </h3>
          </div>
          <div className="panel-body col-md-6">
            <form onSubmit={this.onLogin}>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input type="text" className="form-control" name="loginusername" value={this.state.loginusername} onChange={this.onChange} placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" className="form-control" name="loginpassword" value={this.state.loginpassword} onChange={this.onChange} placeholder="password" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(
  state => ({ users: state.default.users, userLogged: state.userLogged }),
  { login }
)(Login);