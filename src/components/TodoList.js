import React from 'react';

const TodoItem = ({id, name, isComplete }) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete}/>
        {name}
    </li>
);

export default (props) => (
    <div className="todo-list-items">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}

        </ul>
    </div>
);