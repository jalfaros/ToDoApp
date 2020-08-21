import React from 'react'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'
import './custom.css'


const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter();
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];





    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>


            { loading            
            ? 
                (
                    <div className="alert alert-info text-center">
                         Loading...
                    </div>
                )
            :
                (
                    <blockquote className="blockquote text-right"> 
                    <p className="mb-0"> { quote }</p>
                    <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={() => increment(1)}>
                Next Quote!
            </button>



        </>
    )
}

export default MultipleCustomHooks