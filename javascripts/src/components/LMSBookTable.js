
import React from 'react';
import { observer } from 'mobx-react';
import { Table } from 'antd';
import BookStore from '../stores/BookStore'

const { Column, ColumnGroup } = Table;

@observer
class LMSBookTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(BookStore.books)
  
    return (
      <Table dataSource={BookStore.books} loading={BookStore.isReady}>
        <Column
          title="书名"
          dataIndex="name"
          key="name"
        />
        <Column
          title="作者"
          dataIndex="author"
          key="author"
        />
        <Column
          title="数量"
          dataIndex="count"
          key="count"
        />
        <Column
          title="剩余数量"
          dataIndex="current_count"
          key="current_count"
        />
        <Column
          title="操作"
          key="action"
          render={(text, record) => (
            <span className="clickable-text" onClick={this.props.onBorrow}>借阅</span>
          )}
        />
      </Table>
    )
  }
}

export default LMSBookTable;
