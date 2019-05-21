import React from 'react';
import { Typography } from 'antd';
import { observer } from 'mobx-react';
const { Title, Paragraph, Text } = Typography;

@observer
class BookCard extends React.Component {

  render() {
    const book = this.props.book;
    return (
      <div className={`book-card ${this.props.className}`} onClick={this.props.onClick}>
        <Paragraph style={{ textAlign: 'center' }}>
          <img src={book.image} style={{ width: '120px' }} alt=""/>
        </Paragraph>
        <Title style={{ textAlign: 'center' }} level={3}>《{book.name}》</Title>
      </div>
    )
  }
}

export default BookCard;
