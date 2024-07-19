import { useState } from "react";

export const Contador = () => {
    const [contador, setContador] = useState({
        contador1: 0,
        contador2: 10,
        contador3: 20,
    });

    // spread operator

    const aumentarContador = () => {
        setContador({
            ...contador,
            contador1: contador.contador1 + 1,
        })
    }

    const restarContador = () => {
        setContador({
            ...contador,
            contador1: contador.contador1 - 1,
        })
    }

    const resetContador = () => {
        setContador({
            ...contador,
            contador1: 0,
        })
    }

    return (
        <>
            <p>{contador.contador1}</p>
            <p>{contador.contador2}</p>
            <p>{contador.contador3}</p>
            <button onClick={aumentarContador}>+1</button>
            <button onClick={restarContador}>-1</button>
            <button onClick={resetContador}>Reset</button>
        </>
    )
}