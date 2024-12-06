import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <>
        <h1>Count is:{count}</h1>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default Counter;