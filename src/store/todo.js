import { observable } from "mobx";

class Todo {
  constructor({ id, title }) {
    this.id = id
    this.title = title
  }
    id = 0;
    @observable title = "";
    @observable finished = false;
}
export default Todo