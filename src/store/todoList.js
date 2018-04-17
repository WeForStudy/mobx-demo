
import { computed, observable } from "mobx";
class TodoList {
  @observable todos = [{
    task: 'new Task',
    id: 1,
    finished: false
  }];
  @computed get unfinishedTodoCount() {
      return this.todos.filter(todo => !todo.finished).length;
  }
}

export default new TodoList()