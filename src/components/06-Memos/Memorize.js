import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import Small from './Small';

import '../03-examples/custom.css'


const Memorize = () => {

    const { counter, increment } = useCounter(10);

    const [show, setShow] = useState(true);
    
    /*
        Este ejercicio se hace para mostrar en qué casos se puede utilizar la propiedad memo de React
        Lo que pasa es que si estamos llamando a un componente y lo estamos pitando puede pasar lo siguiente:
            Si se utiliza el useState dentro del componente padre, al momento de hacer un cambio en el state, 
            entonces React procederá a renderizar el componenete incluyendo al componenete hijo que estamos
            pintado dentro del componente padre, por lo que esto genera consumo de memoria y en algunos casos
            si se está utilizando el Fetch para hacer una petición a una API provocará que se vuelva a hacer 
            y afectará los datos del usuario además de sobrecargar la aplicación inneceseariamente.
        
        Por lo que la solución es dentro del componente hijo ir y aplicar el React.memo para que así solo se 
        repinte en el momento en el que solo el componente que el necesita sea cambiado y así ignorará el 
        useState.


    */

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={ counter } /> </h2>
            <hr />

            <button className="btn btn-primary" onClick={ () => increment(1) }> +1 </button>

            <button className="btn btn-outline-primary ml-3" onClick={() => {
                setShow( !show )
            }}>
                Show/Hide {JSON.stringify( show )}
            </button>

        </div>
    )
}


export default Memorize
