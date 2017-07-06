import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBox from './SearchBox';
import { Link } from 'react-router';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${this.props.className} mdl-mega-footer`} style={this.props.style}>
                <div className="mdl-mega-footer--middle-section">
                    <div className="mdl-mega-footer--drop-down-section">
                    <input className="mdl-mega-footer--heading-checkbox" type="checkbox" checked />
                    <h1 className="mdl-mega-footer--heading">购物指南</h1>
                    <ul className="mdl-mega-footer--link-list">
                        <li><a href="#">购物流程</a></li>
                        <li><a href="#">常见问题</a></li>
                        <li><a href="#">联系客服</a></li>
                    </ul>
                    </div>
                    <div className="mdl-mega-footer--drop-down-section">
                        <input className="mdl-mega-footer--heading-checkbox" type="checkbox" />
                        <h1 className="mdl-mega-footer--heading">配送方式</h1>
                        <ul className="mdl-mega-footer--link-list">
                            <li><a href="#">上门自提</a></li>
                            <li><a href="#">配送服务查询</a></li>
                            <li><a href="#">配送费收取标准</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mdl-mega-footer--bottom-section">
                    <div className="mdl-logo">
                    More Information
                    </div>
                    <ul className="mdl-mega-footer--link-list">
                    <li><a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Privacy and Terms</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

Footer.propTypes = {
    
};

Footer.defaultProps = {
    className: '',
};

export default Footer;
