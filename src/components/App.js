import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_UNSPLASH_SECRET_ACCESS_KEY : process.env.REACT_APP_DEV_UNSPLASH_SECRET_ACCESS_KEY;

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: `Client-ID ${apiUrl}`
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;