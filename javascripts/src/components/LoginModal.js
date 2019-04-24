import React from 'react';
import { Modal, message } from 'antd';
import { observer } from 'mobx-react';
import AuthStore from '../stores/AuthStore'
import LoginForm from './LoginForm';

@observer
class LoginModal extends React.Component {

  handleLogin = (username, password) => {
    AuthStore.login(username, password).then(() => {
      message.success('登录成功')
      AuthStore.closeLoginModal();
    }).catch((err) => {
      message.error(err.response.data.detail)
    })
  }

  render() {
    return (
      <Modal
        title="登录"
        visible={AuthStore.loginModalVisible}
        onOk={AuthStore.closeLoginModal}
        onCancel={AuthStore.closeLoginModal}
        footer={null}
      >
        <LoginForm className='login-modal-form' onLogin={this.handleLogin}/>
      </Modal>
    )
  }
}

export default LoginModal;
