import React, { PropTypes } from 'react';
import { Modal } from 'antd';
import { observer } from 'mobx-react';

@observer
class BorrowModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal>
      </Modal>
    )
  }
}

export default BorrowModal;
