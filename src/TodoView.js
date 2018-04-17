import { observer } from 'mobx-react'
import React, {Component} from 'react'

@observer
class TodoView extends Component {

  render() {
    const {todo, deleteFunc} = this.props
    return(
      <div>
      <input
          type="checkbox"
          checked={todo.finished}
          onClick={() => todo.finished = !todo.finished}
      />{todo.id}
      <button onClick={deleteFunc}>删除本项</button>
  </div>
    )
  }
}
export default TodoView