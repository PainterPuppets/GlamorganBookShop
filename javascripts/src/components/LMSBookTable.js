
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
        {/* <Column
          title="Age"
          dataIndex="age"
          key="age"
        />
        <Column
          title="Address"
          dataIndex="address"
          key="address"
        /> */}
      </Table>
    )
  }
}

export default LMSBookTable;
