import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: ''}

  onChnageUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onFormSbtm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
  }

  renderUserName = () => {
    const {userName} = this.state
    return (
      <>
        <label className="label" htmlFor="name">
          USERNAME
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Username"
          className="input-bar"
          onChange={this.onChnageUserName}
          value={userName}
        />
      </>
    )
  }

  renderPasswordInput = () => {
    const {password} = this.state
    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          className="input-bar"
          onChange={this.onChangePassword}
          value={password}
        />
      </>
    )
  }

  render() {
    return (
      <div className="bg-login">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-img"
            alt="website login"
          />
          <form onSubmit={this.onFormSbtm} className="form">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-logo"
              alt="website logo"
            />
            <div className="label-input">{this.renderUserName()}</div>
            <div className="label-input">{this.renderPasswordInput()}</div>
            <button className="form-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
