import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './styles.css'

// const initialState = [{
//     id: new Date().getTime(),
//     descripcion: 'Aprender React',
//     done: false
// }]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    const [ toDos, dispatch ] = useReducer(todoReducer, [], init);


    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify( toDos ));
        
    }, [toDos])


    const handleDelete = ( todoId ) =>{
        
        dispatch( {
            type: 'delete',
            payload: todoId
        } );

    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'modify',
            payload: todoId
        })
    }


    const handleAddToDo = ( toDo ) => {

        dispatch ({
            type: 'add',
            payload: toDo
        });
        
    }

    return (
      <div>
        <h1>ToDo App ( {toDos.length} )</h1>
        <hr />

        <div className="row">
          <div className="col-7">
            <TodoList
              toDos={toDos}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          </div>

          <div className="col-5">
            <TodoForm handleAddToDo={handleAddToDo} />
          </div>
            </div>
      </div>
    );
}

export default TodoApp
