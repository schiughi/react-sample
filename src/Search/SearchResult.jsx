import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default class SearchResult extends Component {
  render() {
    const list = this.props.data.map((data) => (
      <ListItem user={data} key={data.id} />
    ));

    return (
      <div>
        {list}
      </div>
    );
  }
}

SearchResult.propTypes = {
  data: PropTypes.array.isRequired
};
