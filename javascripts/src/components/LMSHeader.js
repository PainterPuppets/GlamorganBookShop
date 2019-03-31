import React, { PropTypes } from 'react';
import { Layout, Menu, Typography } from 'antd';
import { observer } from 'mobx-react';
import AuthStore from '../stores/AuthStore'
const { Header, Content, Footer } = Layout;
const { Title } = Typography;


import './header.scss'

@observer
class LMSHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header className={`${this.props.className} lms-header`} style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <h3 className="header-title">
          图书管理系统
        </h3>
        <div className="header-profile clickable-text">
          {AuthStore.username}
        </div>
      </Header>
    )
  }
}

export default LMSHeader;
