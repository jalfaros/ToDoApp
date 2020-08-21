import React from 'react'
import useCounter from '../../hooks/useCounter'

import './counter.css'

const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } =  useCounter(  );
    

    return (
        <>
          <h1>Counter Custom Hook: { state }</h1>
          <hr />

          <button onClick={ () => increment( 80 ) } className="btn btn-outline-success"> +1 </button>
          <button onClick={ reset } className="btn btn-outline-danger"> Reset </button>
          <button onClick={ () => decrement( 80 ) } className="btn btn-outline-success"> -1 </button>
        </>
    )

}

export default CounterWithCustomHook
