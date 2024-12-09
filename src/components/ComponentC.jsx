import React, { useContext } from 'react'
import ComponentD from './ComponentD'
import { UserContext } from './ComponentA'


const ComponentC = () => {

    const user = useContext(UserContext);

    return (
        <div className='box'>
            <h1>Component C</h1>
            <p>{user}</p>
            <ComponentD />
        </div>
    )
}

export default ComponentC
