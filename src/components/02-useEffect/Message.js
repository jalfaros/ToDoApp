import React, { useEffect, useState } from 'react'
import './effect.css'


const Message = () => {

    const [coords, setCoords] = useState({ x:0 , y:0 });
    const { x, y  } = coords;


    useEffect(() => {

        const mouseMove = (e) =>{
            const coordenadas = { x: e.x, y: e.y }
            setCoords( coordenadas )
        }
        
        window.addEventListener('mousemove', mouseMove )

        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log('Componente desmontado');
        }
    }, [])

    return (
        <div>
            <h3>¡Vas a ser un crack siendo frontend developer!</h3>
            <h4>Coordenadas en X: {x}</h4>
            <h4>Coordenadas en Y: {y}</h4>
        </div>
    )
}

export default Message
