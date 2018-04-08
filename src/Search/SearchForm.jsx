import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  _filterVal = () => {
    const value = this.refs.inputed.value;
    this.props.onFilter(value);
  }
  render() {
    return (
      <div>
        <input type="text" ref="inputed" onKeyUp={this._filterVal.bind(this)} />
      </div>
    );
  }
}

SearchForm.propTypes = {
  onFilter: PropTypes.func.isRequired
};
