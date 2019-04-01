import React from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import { Layout, Menu, Breadcrumb, Card, Table } from 'antd';
import BookStore from './stores/BookStore'
import AuthStore from './stores/AuthStore'
import BorrowStore from './stores/BorrowStore'

import LMSHeader from './components/LMSHeader'
import LMSBookTable from './components/LMSBookTable'
import BorrowTable from './components/BorrowTable'
import LoginModal from './components/LoginModal'
import BookDetailModal from './components/BookDetailModal'

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
    reaction(() => AuthStore.isAuthenticated, () => {
      this.loadBorrow()
    })
  }

  componentWillMount() {
    this.loadBook();
    this.loadBorrow();
  }

  componentWillReceiveProps() {
    this.loadBook();
    this.loadBorrow();
  }

  loadBorrow = () => {
    console.log('loadBorrow')
    if (!AuthStore.isAuthenticated) {
      return;
    }
    BorrowStore.getRecord()
  }

  loadBook = () => {
    console.log('loadBook')
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });

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
            onReturn={() => { }}
            onLogin={() => AuthStore.openLoginModal()}
            onLogout={() => AuthStore.logout()}
          />
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <BorrowTable className="lms-borrow-card"/>
            <Card className="lms-book-card">
              <LMSBookTable
                onBorrow={() => { }}
                onDetail={(id) => BookStore.openDetailModal(id)}
              />
            </Card>
          </Content>
        </Layout>
        <LoginModal />
        <BookDetailModal />
      </React.Fragment>
    )
  }
}

export default LibraryMangeSystem;
