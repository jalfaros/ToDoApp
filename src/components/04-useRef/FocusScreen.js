import React, { useRef } from 'react'
import '../03-examples/custom.css'



const FocusScreen = () => {


    const inputRef = useRef();
    //console.log(ref)


    const handleClick = () =>{
        inputRef.current.select();
    }


    return (
        <div>
            <h1>Focus Screen!</h1>
            <hr />

            <input
                className="form-control"
                ref = { inputRef }
                placeholder="Nombre"
            />

            <button
                className="btn btn-primary mt-5"
                onClick={ handleClick }
            >

                Focus
            </button>


        </div>
    )
}

export default FocusScreen
