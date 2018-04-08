import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  onFliter = (value) => {
    const line = this.props.data.filter((item) => (
      item.name.toLowerCase().indexOf(value) >= 0
    ));
    this.setState({
      data: line
    });
  };
  render() {
    return (
      <div>
        <SearchForm onFilter={this.onFliter.bind(this)} />
        <SearchResult data={this.state.data} />
      </div>
    );
  }
}
Search.propTypes = {
  data: PropTypes.array.isRequired
};
