import React from 'react'
import useForm from '../../hooks/useForm';

const TodoForm = ({handleAddToDo}) => {

    const [formValues, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault(); //Previene el refresh de la página

        const newTodo = {
            id: new Date().getTime(),
            descripcion: formValues.description,
            done: false
        }
        
        handleAddToDo( newTodo );
        reset();

    }







    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr />

            <form onSubmit={handleSubmit}>

                <input type="text"
                    className="form-control"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={formValues.description}
                    onChange={handleInputChange}
                />

                <button className="btn btn-outline-primary btn-block mt-3" type="submit">
                    Agregar
                </button>

            </form>
        </>
    )
}

export default TodoForm
