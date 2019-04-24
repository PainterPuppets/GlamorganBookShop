import React from 'react';
import { Modal, Empty } from 'antd';
import { observer } from 'mobx-react';
import BookInfo from './BookInfo';
import BookStore from '../stores/BookStore'
import BorrowAction from './BorrowAction';
import './styles.less'

@observer
class BookDetailModal extends React.Component {
  render() {
    return (
      <Modal
        title="书籍详细信息"
        visible={BookStore.detailModalVisible}
        onOk={BookStore.closeDetailModal}
        onCancel={BookStore.closeDetailModal}
        footer={null}
      >
        {BookStore.bookDetail ?
          <React.Fragment>
            <BookInfo className="modal-book-info" book={BookStore.bookDetail} />
            <BorrowAction book={BookStore.bookDetail} type="button" onFinish={BookStore.closeDetailModal}/>
          </React.Fragment> :
          <Empty />
        }
      </Modal>
    )
  }
}

export default BookDetailModal;
