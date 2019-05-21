import React from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import { Input, Card, Button, Alert, Typography } from 'antd';
import BookStore from './stores/BookStore';
import AuthStore from './stores/AuthStore';
import BorrowStore from './stores/BorrowStore';


import Layout from './components/Layout';
import LMSBookTable from './components/LMSBookTable';
import BorrowTable from './components/BorrowTable';
import BookCard from './components/BookCard';

import './layout.less'

const { Title, Paragraph, Text } = Typography;
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
    BookStore.getRecommand();
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
          {Boolean(BorrowStore.expireRecord.length) &&
            <Alert
              style={{ marginTop: '20px' }}
              message="逾期警告"
              description={`您当前有 ${BorrowStore.expireRecord.length} 本书已经逾期，请记得归还`}
              type="error"
            />
          }
          {Boolean(BorrowStore.dueRecord.length) &&
            <Alert
              style={{ marginTop: '20px' }}
              message="归还提醒"
              description={`您当前有 ${BorrowStore.dueRecord.length} 本书即将到期，请记得归还`}
              type="warning"
            />
          }
          <BorrowTable className="lms-borrow-card" />
          {Boolean(BookStore.recommandBooks.length) &&
            <Card className="lms-recommand-book-card">
              <div className="lms-recommand-book-card-header">
                <Title className="lms-recommand-book-header" level={3}>编辑推荐</Title>
              </div>
              <div className="lms-recommand-book-list">
                {BookStore.recommandBooks.map(book => <BookCard book={book} onClick={() => BookStore.openDetailModal(book.id)}/>)}
              </div>
            </Card>
          }
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
        </Layout>
      </React.Fragment>
    )
  }
}

export default LibraryMangeSystem;
