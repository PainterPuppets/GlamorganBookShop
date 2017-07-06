import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/homepage.scss'

class HomepageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minHeight: document.body.clientHeight
        }
    }

    render() {
        return (
            <div className="mdl-layout" style={{ backgroundColor: '#FFFDE7' }}>
                <Header style={{ marginBottom: '40px' }}/>
                <div className="mdl-layout__content" style={{ minHeight: this.state.minHeight }}>
                    <div className='container booklist'>
                        <BookCard className='book-item'/>
                        <BookCard className='book-item'/>
                        <BookCard className='book-item'/>
                        <BookCard className='book-item'/>
                        <BookCard className='book-item'/>
                        <BookCard className='book-item'/>
                    </div>
                </div>
                <Footer style={{ marginTop: '40px', backgroundColor: '#4E342E' }}/>
            </div>
        )
    }
}

HomepageLayout.propTypes = {
};

HomepageLayout.defaultProps = {
};

export default HomepageLayout;
