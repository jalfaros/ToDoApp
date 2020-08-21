import React from 'react'

const TodoListItem = ( {item, index, handleDelete, handleToggle} ) => {

    return (
        <li key={item.id} className="list-group-item">
                    
            <p className={ `${item.done && 'complete'}` } onClick={ () => handleToggle(item.id)}>
            {index + 1} - {item.descripcion}
            
            </p>

            <button className="btn btn-danger"
                    onClick={ () => handleDelete( item.id ) }
            >Borrar
            
            </button>
        </li>
    )
}

export default TodoListItem
