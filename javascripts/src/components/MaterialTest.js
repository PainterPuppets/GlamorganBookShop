import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  marginRight: 20,
};

export default class MaterialTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minHeight: document.body.clientHeight
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <FloatingActionButton mini={true} secondary={true} style={style}>
                    <ContentAdd />
                </FloatingActionButton>
            </MuiThemeProvider>
        )
    }
};