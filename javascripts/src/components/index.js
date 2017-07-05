import React from 'react';
import { Button } from 'antd';
import WebSiteLayout from './WebSiteLayout';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebSiteLayout />
        );
    }
}