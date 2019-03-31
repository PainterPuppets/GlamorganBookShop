import React, { PropTypes } from 'react';
import { Layout, Menu, Typography, Popover, Select } from 'antd';
import { observer } from 'mobx-react';
import AuthStore from '../stores/AuthStore'
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Option } = Select;

import './header.scss'

@observer
class LMSHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderUserBox = (
      <div className="userbox">
        <div onClick={this.props.onLogout} className="userbox-item">
          登出
        </div>
      </div>
    )

    return (
      <Header className={`${this.props.className} lms-header`} style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <h3 className="header-title">
          图书管理系统
        </h3>
        {AuthStore.isAuthenticated ?
          <Popover placement="bottomRight" content={renderUserBox} trigger="hover">
            <div className="header-profile clickable-text">
              {AuthStore.username}
            </div>
          </Popover> :
          <div className="clickable-text" onClick={this.props.onLogin}>
            登录
          </div>
        }
      </Header>
    )
  }
}

export default LMSHeader;
