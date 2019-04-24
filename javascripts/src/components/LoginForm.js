import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.onLogin(values.username, values.password)
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={`login-form ${this.props.className}`}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
          登录
        </Button>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedNormalLoginForm;