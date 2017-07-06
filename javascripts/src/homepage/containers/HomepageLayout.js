import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/homepage.scss'
import BaseProvider, { BookProvider } from '../../utils/Provider';

class HomepageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minHeight: document.body.clientHeight,
            books: [],
            loading: false,
        }
    }

    componentWillMount() {
        this.loadBook();
    }

    componentWillReceiveProps() {
        this.loadBook();
    }

    loadBook = () => {
    console.log('运行了');
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });
    this.forceUpdate();

    /*const param = {
      title: this.props.params.title
    };*/
    // const url = `/api/article/preview/?title=${encodeURIComponent(this.props.params.title)}`;
    BookProvider.getList().then(({ data }) => {
        console.log(data);
        this.setState({
            loading: false,
            books: data.results
        });
    });
  };


    render() {
        if (this.state.loading) {
            return (
                <div className="text-center p-t-100">
                    <i className="fa fa-spin fa-spinner fa-2x" />
                </div>
            );
        }
        console.log(this.state.books)
        return (
            <div className="mdl-layout" style={{ backgroundColor: '#FFFDE7' }}>
                <Header style={{ marginBottom: '40px' }}/>
                <div className="mdl-layout__content" style={{ minHeight: this.state.minHeight }}>
                    <div className='container booklist'>
                        {this.state.books.map(book => (
                            <BookCard className='book-item' imageUrl={book.image} name={book.name} price={book.price} key={book.id} />
                        ))}
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
