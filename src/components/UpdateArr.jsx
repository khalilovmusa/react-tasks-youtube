import { useState } from 'react';

const UpdateArr = () => {
    const [arr, setArr] = useState([]);

    const handleItemAdd = () => {
        const newElement = document.getElementById("listInput").value;
        document.getElementById("listInput").value = "";

        setArr(a => [...a, newElement]);
    }

    const handleItemRemove = (e,index) => {
        console.log(e,index)
    }

    return (<div>
        <ul>
            {arr?.map((item, index) => {
                console.log(index)
                return <><li key={index}>{item}</li><button onClick={(e, index) => {handleItemRemove(e,index)}}>Delete</button></>
            })}
        </ul>
        <input type="text" id='listInput' />
        <button type='submit' onClick={(e) => { handleItemAdd(e) }}>Submit</button>
    </div>)
}

export default UpdateArr;