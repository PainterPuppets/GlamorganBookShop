import React, { PropTypes } from 'react';
import { Layout, Menu } from 'antd';
import { observer } from 'mobx-react';
import AuthStore from '../stores/AuthStore'
const { Header, Content, Footer } = Layout;

@observer
class LMSHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="header-title">
          图书管理系统
        </div>
        <div className="header-profile">
        </div>
      </Header>
    )
  }
}

export default LMSHeader;
