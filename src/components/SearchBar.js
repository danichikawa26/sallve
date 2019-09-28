import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  
  state = { term: '' }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (        
      <form onSubmit={this.onFormSubmit}>
        <div className="search-container">
          <div className="ui search">
            <div className="ui icon input">
              <img src="https://cdn.shopify.com/s/files/1/0074/3486/2639/t/62/assets/lupa.svg?154259" alt="search-icon" className="search-icon"/>
              <input type="text" className="prompt" placeholder="find a movie" value={this.state.term}
                      onChange={e => this.setState({ term: e.target.value })} />
            </div>
          </div>
          <button className="ui primary button" onClick={this.onFormSubmit}>
            search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;