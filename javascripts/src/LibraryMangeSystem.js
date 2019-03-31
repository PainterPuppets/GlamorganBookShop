import React from 'react';
import { observer } from 'mobx-react';
import { Layout, Menu, Breadcrumb, Card, Table } from 'antd';
import BookStore from './stores/BookStore'
import AuthStore from './stores/AuthStore'
import LMSHeader from './components/LMSHeader'
import LMSBookTable from './components/LMSBookTable'
import LoginModal from './components/LoginModal'

import './layout.scss'

const { Content, Footer } = Layout;

@observer
class LibraryMangeSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minHeight: document.body.clientHeight,
      loading: false,
    }
  }

  componentWillMount() {
    this.loadBook();
  }

  componentWillReceiveProps() {
    this.loadBook();
  }

  loadBook = () => {
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });
    this.forceUpdate();

    /*const param = {
      title: this.props.params.title
    };*/
    // const url = `/api/article/preview/?title=${encodeURIComponent(this.props.params.title)}`;
    BookStore.getList().finally(() => {
      this.setState({
        loading: false
      });
    });
  };


  render() {
    return (
      <React.Fragment>
      <Layout className="lms-layout">
        <LMSHeader 
          onReturn={() => {}}
          onLogin={() => AuthStore.openLoginModal()}
          onLogout={() => AuthStore.logout()}
        />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Card className="lms-book-card">
            <LMSBookTable onBorrow={() => {}}/>
          </Card>
        </Content>
      </Layout>
      <LoginModal />
      </React.Fragment>
    )
  }
}

export default LibraryMangeSystem;
