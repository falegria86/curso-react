import { useState } from "react"

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    return (
        <>
            <h2>{counter.counter1}</h2>
            <h2>{counter.counter2}</h2>
            <h2>{counter.counter3}</h2>
            <button onClick={() => setCounter({
                ...counter,
                counter1: counter.counter1 + 1
            })}>+1</button >
            {/* <button onClick={() => setCounter(counter - 1)}>-1</button> */}
            {/* <button onClick={() => setCounter(0)}>Reset</button> */}
        </>
    )
}