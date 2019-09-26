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
        <div className="ui search">
          <div className="ui icon input">
            <input type="text" className="prompt" placeholder="Search for a movie title..." value={this.state.term} 
                    onChange={e => this.setState({ term: e.target.value })} />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;