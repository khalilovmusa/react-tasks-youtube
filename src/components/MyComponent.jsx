import { useState } from "react";

const MyComponent = () => {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Musa")
    }

    const incAge = () => {
        setAge(age + 1)
    }

    const toggleEmployeeStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incAge}>Set Age</button>

        <p>Is Employeed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployeeStatus}>Set Employee</button>
      </div>
    </>
}

export default MyComponent