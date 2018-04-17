import React, {Component} from 'react';
import { observer } from 'mobx-react';
import TodoView from './TodoView'
@observer
class TodoListView extends Component {
    componentWillMount() {
      // this.props.todoList()
    }
    handleClick() {
      this.props.todoList.push()
    }
    handlePop() {
      this.props.todoList.pop()
    }
    handleDelete(index) {
      this.props.todoList.remove(index)
    }
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map((todo , index) =><TodoView todo={todo} key={todo.id} deleteFunc={() => this.handleDelete(index)} />)}
            </ul>
            <button onClick={this.handleClick.bind(this)}>push new todo</button>
            <button onClick={this.handlePop.bind(this)}>pop</button>
            
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}


export default TodoListView;
