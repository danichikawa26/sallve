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
              <i className="search icon"></i>
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