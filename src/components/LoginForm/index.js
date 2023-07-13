import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    errorOccurred: false,
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFail = err => {
    this.setState({errorMsg: err, errorOccurred: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFail(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, errorOccurred} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <form className="from-container" onSubmit={this.onSubmitForm}>
          <div className="form-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt=" website logo"
            />
          </div>
          <label htmlFor="username">USERNAME</label>
          <br />
          <input
            type="text"
            value={username}
            placeholder="username"
            id="username"
            onChange={this.onChangeUserName}
          />
          <br />
          <br />
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input
            type="text"
            value={password}
            placeholder="password"
            id="password"
            onChange={this.onChangePassword}
          />
          <br />
          <br />
          <button type="submit">Login</button>
          {errorOccurred && <p>*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
