import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ant-input-affix-wrapper' style={{ width: 200 }}>
                <Input 
                    placeholder="input search book name" 
                    className='ant-input ant-input-search search' 
                    style={{ width: 200, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.5)' }}
                />
                <span className="ant-input-suffix"><i className="anticon anticon-search ant-input-search-icon"></i></span>
            </div>
        )
    }
}

SearchBox.propTypes = {
};

SearchBox.defaultProps = {
};

export default SearchBox;
