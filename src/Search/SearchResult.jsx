import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default class SearchResult extends Component {
  render() {
    const list = this.props.users.map((user) => (
      <ListItem user={user} key={user.id} />
    ));

    return (
      <div>
        {list}
      </div>
    );
  }
}

SearchResult.propTypes = {
  users: PropTypes.array.isRequired
};
