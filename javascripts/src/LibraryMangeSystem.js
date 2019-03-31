import React from 'react';
import { observer } from 'mobx-react';
import { Layout, Menu, Breadcrumb, Card, Table } from 'antd';
import BookStore from './stores/BookStore'
import LMSHeader from './components/LMSHeader'
import LMSBookTable from './components/LMSBookTable'
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
      <Layout className="lms-layout">
        <LMSHeader/>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Card className="lms-book-card">
            <LMSBookTable onBorrow={() => {}}/>
          </Card>
        </Content>
      </Layout>
    )
  }
}

export default LibraryMangeSystem;
