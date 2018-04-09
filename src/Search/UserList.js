import { observable, computed, action } from 'mobx-react';

export default class UserList {
  @observable users = [];
  @observable condition = '';

  @computed get filteredUsers() {
    return this.users.filter((user) => (
      user.name.toLowerCase().indexOf(this.condition) >= 0
    ));
  }

  @action inputeCondition(condition) {
    this.condition = condition
  }
}
