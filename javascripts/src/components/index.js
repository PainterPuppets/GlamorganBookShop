import React from 'react';
import { Button } from 'antd';
var ProductBox;
ProductBox = React.createClass({
    render: function () {
        return (
            <div className="productBox">
                antd button
            <Button type="primary">Primary</Button>
            </div>
        );
    }
});

module.exports = ProductBox;