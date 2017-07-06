import React from 'react';

import { Card } from 'antd';
import '../styles/bookcard.scss'

const style = {
  width: 240,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class BookCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="//item.jd.com/12197322.html">
                <Card className='bookcard' bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                        <img alt="example" width="100%" src={this.props.imageUrl} />
                    </div>
                    <div className="custom-card">
                        <a className="card-name">{this.props.name}</a>
                        <div className='card-price'>
                            <em>￥</em>
                            {this.props.price}
                        </div>
                    </div>
                </Card>
            </a>
        )
    }
}

BookCard.propTypes = {
    
};

BookCard.defaultProps = {
    imageUrl: "/static/image/test.jpg",
    name: '福尔摩斯探案全集',
    price: '44.5',
};

export default BookCard;