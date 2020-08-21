import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ toDos, handleDelete, handleToggle }) => {
    return (
        
        <ul className="list-group list-group-flush">
        {
            toDos.map((item, index) => (
                <TodoListItem 
                    key = {item.id}
                    item         = { item }
                    index        = { index }
                    handleDelete = { handleDelete }
                    handleToggle = { handleToggle }

                />
            ))
        }

    </ul>
        
    )
}

export default TodoList
