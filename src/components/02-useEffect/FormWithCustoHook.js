import React from 'react';
import  useForm  from '../../hooks/useForm'

import './effect.css';



    
const FormWithCustomHook = () => {

    // const [formState, seFormState] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // });

    
    const [formValues, handleInputChange] = useForm({ //Este es mi custom hook centralizado
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues; //Se desestructura de los valores de mi customHook;

    

    const handleSubmit = (e) =>{
        
        e.preventDefault(); //?????

        console.log( formValues );
    }
    



    return (
        <form onSubmit = { handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value = { name }
                    onChange= { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value = { email }
                    onChange= { handleInputChange }
                />
            </div>
            
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                    value = { password }
                    onChange= { handleInputChange }
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
    
        </form>
    )
}

export default FormWithCustomHook
