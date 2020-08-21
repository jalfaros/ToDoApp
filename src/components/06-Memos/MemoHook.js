import React, { useState, useMemo } from 'react'
import useCounter from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';
import '../03-examples/custom.css'


const MemoHook = () => {

    const { counter, increment } = useCounter(5); //CustomHook

    const [show, setShow] = useState(true); //useState

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);


    return (
        <div>

            <h1>MemoHook <small>useMemo</small></h1>
            <h3>Counter: <small> { counter } </small></h3>
            <hr />

            <p> { memoProcesoPesado } </p>

            <button className="btn btn-primary" onClick={() => increment(1)}> +1 </button>

            <button className="btn btn-outline-primary ml-3" onClick={() => {
                setShow(!show)
            }}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}


export default MemoHook
