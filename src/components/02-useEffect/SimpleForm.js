import React, { useEffect, useState } from 'react';
import './effect.css';
import Message from './Message'

    
const SimpleForm = () => {

    const [formState, seFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => { //Este use solo se dispara la primera vez que se renderiza la aplicación
        //console.log('Use effect principal')
    }, []);
    
    
    useEffect(() => { //Se genera otro para que se dispare cuando un evento o valor sea cambiado, por ejemplo el State
        //console.log('Evento formState disparado')
    }, [formState]);
    
    useEffect(() => { //Se genera otro para que se dispare cuando el email sea cambiado
        //console.log('Email cambiado ')
    }, [email]);

    

    const handleInputChange = ({ target }) =>{
        seFormState({
            ...formState,
            [target.name]: target.value
        });
    }




    return (
        <>
            <h1>useEffect</h1>
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
 
            { (name === '123') && <Message /> }
        </>
    )
}

export default SimpleForm
