import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

@inject('userList')
@observer
export default class Search extends Component {
  onFliter = (value) => {
    this.props.userList.inputeCondition(value);
  };
  render() {
    return (
      <div>
        <SearchForm onFilter={this.onFliter.bind(this)} />
        <SearchResult users={this.props.userList.filteredUsers} />
      </div>
    );
  }
}
;
