import { observable, computed, action } from 'mobx-react';

export default class User {
  id = Math.random();
  name = '';
  age = 0;
  @observable isOnline = true;

  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.isOnline = props.isOnline;
  }
}