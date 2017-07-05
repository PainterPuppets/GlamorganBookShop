import React from 'react';
import { Button } from 'antd';
var ProductBox;
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="productBox">
                antd button!!!<br />
            <Button type="primary">Primary</Button>
            </div>
        );
    }
}