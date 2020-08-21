import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement';

import '../03-examples/custom.css'


const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () =>{
    //     setCounter( counter + 1 )
    // }

    const increment = useCallback( ( num ) => { //ME DEVUELVE EL VALOR DEL COMPONENTE HIJO

            setCounter( c => c + num );
        },
        [setCounter],
    )

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment= { increment }/>

        </div>
    )
}

export default CallbackHook
