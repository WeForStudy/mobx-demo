
import { computed, observable, action } from "mobx";
import Todo from './todo'
class TodoList {
  @observable todos = []
  @computed get unfinishedTodoCount() {
      return this.todos.filter(todo => !todo.finished).length;
  }
  @action push() {
    let length = this.todos.length
    this.todos.push(new Todo({
      id: ++length,
      title: 'A new todo'
    }))
  }
  @action remove(id) {
    this.todos.splice(id, 1)
  }
  @action pop() {
    this.todos.pop()
  }
  
}

export default new TodoList()