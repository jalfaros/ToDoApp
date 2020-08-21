import { useState } from "react"


const useForm = ( initialState = {} ) => {

    const [formValues, setFormValues] = useState( initialState )

   
    const handleInputChange = ({ target }) =>{

        setFormValues({
            ...formValues,
            [target.name]: target.value //Se setet
        })

    }

    const reset = () =>{
        setFormValues( initialState );
    }

    return [ formValues, handleInputChange, reset ];
}

export default useForm
