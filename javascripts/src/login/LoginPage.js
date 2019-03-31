import React from 'React';
import { message } from 'antd';
import { observer } from 'mobx-react';
import { withRouter } from "react-router";
import LoginForm from './compinents/LoginForm'
import AuthStore from '../stores/AuthStore'
import './LoginPage.scss'

@withRouter
@observer
class LoginPage extends React.Component {
  handleLogin = (username, password) => {
    AuthStore.login(username, password).then(() => {
      message.success('登录成功')
    }).catch((err) => {
      console.log(err)
      message.error(err.response.data.detail)
    })
  }

  render() {
    if (AuthStore.isAuthenticated) {
      this.props.history.push(`/`);
    }
    return (
      <div className="login-page">
        <div className='login-logo'>
          <img src='/static/logo.svg' className='logo' />
          <h3>Library Manage System</h3>
        </div>
  
        <LoginForm className={'login-form'} onLogin={this.handleLogin}/>
      </div>
    )
  }
}

export default LoginPage;