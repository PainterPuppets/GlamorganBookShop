import React, { PropTypes } from 'react';
import { message, Button } from 'antd';
import { observer } from 'mobx-react';
import BorrowStore from '../stores/BorrowStore'


@observer
class BorrowAction extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBorrow = () => {
    const canBorrow = this.props.book.current_count > 0; 
    if (!canBorrow) {
      message.error('已无更多藏书')
      return;
    }

    BorrowStore.borrow(this.props.book.id).then(() => {
      message.success('借阅成功')
      this.props.onFinish();
    });
  }

  render() {
    const { book, type } = this.props;
    const canBorrow = book.current_count > 0; 
    if (type === 'button') {
      return (
        <Button type="primary" disabled={!canBorrow} style={{ width: '100%' }} onClick={this.handleBorrow}>
          {canBorrow ? '借阅' : '已无更多藏书'}
        </Button>
      )
    }

    return (
      <span className={`clickable-text ${canBorrow ? '': 'disabled'}`} onClick={this.handleBorrow}>
        {canBorrow ? '借阅' : '已无更多藏书'}
      </span>
    )
  }
}

export default BorrowAction;
