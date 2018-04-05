import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/action';

class SignUp extends Component {

  constructor(props) {
    super();
    console.log(props);
    this.state = {
      user: {
        username: '',
        password: '',
        email: '',
        firstname: '',
        lastname: '',
        gender: '',
        country: '',
      },
      users: [],
    };
  }

  onChange = (e) => {
    e.preventDefault();
    const state = this.state;
    state.user[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { signup, history } = this.props;
    const { user } = this.state;
    signup(user);
    history.push('/login');
  }
  render() {
    const { userDetails } = this.props;
    const { username, password, email, firstname, lastname } = userDetails;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title">
              Sign Up
            </h2>
          </div>
          <div className="panel-body col-md-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input type="text" className="form-control" name="username" value={username} onChange={this.onChange} placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" className="form-control" name="password" value={password} onChange={this.onChange} placeholder="password" />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="text" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" className="form-control" name="firstname" value={firstname} onChange={this.onChange} placeholder="Firstname" />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" className="form-control" name="lastname" value={lastname} onChange={this.onChange} placeholder="Last Name" />
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
  state => ({ userDetails: state.default }),
  { signup }
)(SignUp);