import { useState } from 'react';

const CustomInput = () => {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }

    return<>
       <h1>{name}</h1>
       <input type="text" onChange={(e) => {handleChange(e)}} />
    </>
}

export default CustomInput;