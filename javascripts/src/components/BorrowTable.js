
import React from 'react';
import { observer } from 'mobx-react';
import { Table, Collapse, message } from 'antd';
import BookStore from '../stores/BookStore';
import BorrowStore from '../stores/BorrowStore';
import AuthStore from '../stores/AuthStore';
import { BORROW_STATUS, borrowStatus } from '../constants';

const { Column } = Table;
const Panel = Collapse.Panel;

@observer
class BorrowTable extends React.Component {
  constructor(props) {
    super(props);
  }

  onGiveBack = (borrowId) => {
    BorrowStore.giveBackBook(borrowId).then(() => {
      message.success('归还成功')
    }).catch((err) => {
      message.error(err.response.data.detail)
    });
  }

  renderAction = (borrow) => {
    if (borrow.status === BORROW_STATUS.GIVEBACKED) {
      return null;
    }
    return (
      <span onClick={() => this.onGiveBack(record.id)} className="clickable-text">
        归还
      </span>
    )
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
        <Panel header={`您当前一共借阅了 ${BorrowStore.borrowingRecord.length} 本书，展开查看更多`}>
          <Table dataSource={BorrowStore.borrowRecord} loading={!BorrowStore.isReady} pagination={false}>
            <Column
              title="书名"
              key="name"
              render={(record) => (
                <span>《{record.book.name}》</span>
              )}
            />
            <Column
              title="状态"
              key="status"
              render={(record) => (
                <span>{borrowStatus[record.status].text}</span>
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
              title="归还时间"
              key="return_at"
              render={(record) => (
                <span>{record.return_at ? new Date(record.return_at).toLocaleString() : '----'}</span>
              )}
            />
            <Column
              title="操作"
              key="action"
              render={this.renderAction}
            />
          </Table>
        </Panel>
      </Collapse>
    )
  }
}

export default BorrowTable;
