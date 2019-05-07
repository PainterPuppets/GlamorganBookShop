
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Layout, Icon, Menu, Dropdown, Avatar } from 'antd';
import AuthStore from '../stores/AuthStore'
import LoginModal from './LoginModal'
import BookDetailModal from './BookDetailModal'
import './styles.less';

const { Header, Sider, Content } = Layout;

@observer
class AppLayout extends Component {
  state = {
    collapsed: false
  };

  handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      AuthStore.logout();
    }
  }

  render() {
    const { collapsed } = this.state;

    const menu = (
      <Menu className="user-menu" selectedKeys={[]} onClick={this.handleMenuClick}>
        <Menu.Item key="userCenter">
          <a href="/admin/"><Icon type="setting" style={{ marginRight: '8px' }} />管理页面</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" style={{ marginRight: '8px' }} />
          退出登录
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout className={this.props.className}>
        {/* <Sider
          trigger={null}
          collapsible
          width={256}
          collapsed={this.state.collapsed}
        >
          <div className="layout-logo">
            <img src={logo} alt="logo" />
            <h1>{collapsed ? '' : '光粒运维平台'}</h1>
          </div>
          <SiderMenu collapsed={collapsed} />
        </Sider> */}
        <Header className="lms-header">
          {/* <Icon
            className="icon-menu-trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => this.setState({ collapsed: !this.state.collapsed })}
          /> */}
          <h3 className="header-title">
            图书管理系统
          </h3>
          <div className="right">
            {AuthStore.isAuthenticated ?
              <Dropdown overlay={menu}>
                <span className="action account">
                  {/* <Avatar
                  size="small"
                  className="avatar"
                  src={AuthStore.user.avatarUrl}
                  alt="avatar"
                /> */}
                  <span className="clickable-text">{AuthStore.username}</span>
                </span>
              </Dropdown> :
              <div style={{ padding: '0 12px' }} className="clickable-text" onClick={() => AuthStore.openLoginModal()}>
                登录
              </div>
            }
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {this.props.children}
        </Content>

        <LoginModal />
        <BookDetailModal />
      </Layout>
    );
  }
}

export default AppLayout;
