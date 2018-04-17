import { observable } from "mobx";

class Todo {
  constructor({ id, title }) {
    this.title = title
  }
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}
export default Todo