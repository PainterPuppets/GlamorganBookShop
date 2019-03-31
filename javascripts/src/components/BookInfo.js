import React, { PropTypes } from 'react';
import { Typography } from 'antd';
import { observer } from 'mobx-react';
const { Title, Paragraph, Text } = Typography;

class BookInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const book = this.props.book;
    return (
      <div className={this.props.className}>
        <Paragraph style={{ textAlign: 'center' }}>
          <img src={book.image} style={{ width: '120px' }} />
        </Paragraph>
        <Title style={{ textAlign: 'center' }} level={3}>《{book.name}》</Title>
        <Paragraph>
          <Text strong>作者:</Text> {book.author}
        </Paragraph>
        <Paragraph>
          <Text strong>介绍:</Text> {book.introduce || '暂无介绍'}
        </Paragraph>
        <Paragraph>
          <Text strong>馆藏:</Text> {book.count}
        </Paragraph>
        <Paragraph>
          <Text strong>可借数量:</Text> {book.current_count}
        </Paragraph>
      </div>
    )
  }
}

export default BookInfo;
