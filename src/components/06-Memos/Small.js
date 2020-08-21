import React from 'react'

const Small = React.memo(( props ) => {

    console.log('Me llamé :D')

    return (
        <small>
             { props.value }
        </small>
    )
});

export default Small
