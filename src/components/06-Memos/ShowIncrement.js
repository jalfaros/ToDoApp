import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me llamé')

    return (
        <button className="btn btn-outline-primary"
                onClick={() => {
                    increment( 5 );
                }}
        >
            Incrementar
        </button>
    )
});

export default ShowIncrement
