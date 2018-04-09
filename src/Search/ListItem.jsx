import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  render() {
    return (
      <div className="tile tile-centered">
        <div className="tile-icon">
          <div className="example-tile-icon">
            <i className="icon icon-file centered"></i>
          </div>
        </div>
        <div className="tile-content">
          <div className="tile-title">{this.props.user.name}</div>
          <div className="tile-subtitle">{this.props.user.comment}</div>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired
};
