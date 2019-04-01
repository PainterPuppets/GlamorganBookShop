
import React from 'react';
import { observer } from 'mobx-react';
import { Table, Collapse, message } from 'antd';
import BookStore from '../stores/BookStore'
import BorrowStore from '../stores/BorrowStore'
import AuthStore from '../stores/AuthStore'

const { Column, ColumnGroup } = Table;
const Panel = Collapse.Panel;

@observer
class BorrowTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Header = (
      <span>
        <span className="clickable-text" onClick={AuthStore.openLoginModal}>登录 </span>
        后查看您借阅的书籍
      </span>
    )

    if (!AuthStore.isAuthenticated) {
      return (
        <Collapse className={this.props.className} onChange={AuthStore.openLoginModal}>
          <Panel header={Header} disabled />
        </Collapse>
      )
    }

    return (
      <Collapse className={this.props.className}>
        <Panel header={`您一共借阅了 ${BorrowStore.borrowRecord.length} 本书，展开查看更多`}>
          <Table dataSource={BorrowStore.borrowRecord} loading={!BorrowStore.isReady} pagination={false}>
            <Column
              title="书名"
              key="name"
              render={(record) => (
                <span>{record.book.name}</span>
              )}
            />
            <Column
              title="借阅时间"
              key="create_at"
              render={(record) => (
                <span>{new Date(record.create_at).toLocaleString()}</span>
              )}
            />
            <Column
              title="操作"
              key="action"
              render={record => (<span className="clickable-text">归还</span>)}
            />
          </Table>
        </Panel>
      </Collapse>
    )
  }
}

export default BorrowTable;
