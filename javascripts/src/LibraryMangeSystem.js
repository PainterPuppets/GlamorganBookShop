import React from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import { Layout, Input, Card, Button } from 'antd';
import BookStore from './stores/BookStore'
import AuthStore from './stores/AuthStore'
import BorrowStore from './stores/BorrowStore'

import LMSHeader from './components/LMSHeader'
import LMSBookTable from './components/LMSBookTable'
import BorrowTable from './components/BorrowTable'
import LoginModal from './components/LoginModal'
import BookDetailModal from './components/BookDetailModal'

import './layout.less'

const Search = Input.Search;
const { Content } = Layout;

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
    if (!AuthStore.isAuthenticated) {
      return;
    }
    BorrowStore.getRecord()
  }

  loadBook = (param = {}) => {
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });

    /*const param = {
      title: this.props.params.title
    };*/
    // const url = `/api/article/preview/?title=${encodeURIComponent(this.props.params.title)}`;
    BookStore.getList(param).finally(() => {
      this.setState({
        loading: false
      });
    });
  };

  searchBook = (value) => {
    let param = {
      search: value
    }
    this.loadBook(param);
  }


  render() {
    return (
      <React.Fragment>
        <Layout className="lms-layout">
          <LMSHeader
            onLogin={() => AuthStore.openLoginModal()}
            onLogout={() => AuthStore.logout()}
          />
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <BorrowTable className="lms-borrow-card"/>
            <Card className="lms-book-card">
              <Search 
                placeholder="请输入你要找的书名"
                onSearch={this.searchBook}
                enterButton="搜索"
                style={{
                  maxWidth: '320px',
                  marginBottom: '20px',
                  marginRight: '10px'
                }}
              />
              <Button type="primary" onClick={() => this.loadBook()}>
                查看全部书籍
              </Button>
              <LMSBookTable
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
