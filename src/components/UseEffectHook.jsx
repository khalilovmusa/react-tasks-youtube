import { useState, useEffect } from "react";

const UseEffectHook = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count}`;
    },[count]);

    const addCount = () => {
        setCount(c => c + 1);
    }

    const subtractCount = () => {
        setCount(c => c - 1);
    }

    const changeColor = () => {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{backgroundColor: color}}>Count: {count}</p>
            <button onClick={addCount} >Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor} >Change Color</button>
        </>
    )
}

export default UseEffectHook;