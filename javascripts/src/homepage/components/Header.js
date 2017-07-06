import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBox from './SearchBox';
import { Link } from 'react-router';
import '../styles/header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${this.props.className} lay-header`} style={this.props.style}>
                <div className='content'>
                    <img src='/static/logo.svg' className='logo'/>
                    <h3>Glamorgan Book Store</h3>
                    <SearchBox className='search'/>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    
};

Header.defaultProps = {
    className: '',
};

export default Header;
