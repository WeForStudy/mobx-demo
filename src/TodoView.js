import { observer } from 'mobx-react'
import React from 'react'

const TodoView = observer(({todo, deleteFunc: Function }) =>
    <div>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.id}
        <button onClick={() => console.log(deleteFunc)}>删除本项</button>
    </div>
)
export default TodoView