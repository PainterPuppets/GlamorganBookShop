import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{backgroundColor: '#eeeeee'}}>
                {this.props.children}
            </div>
        )
    }
}

Body.propTypes = {
    
};

Body.defaultProps = {
    className: '',
};

export default Body;