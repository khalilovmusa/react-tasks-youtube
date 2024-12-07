import { useState } from 'react';

const UpdateObject = () => {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });

    const handleYearChange = (e) => {
        setCar(c => ({...c, year: e.target.value}))
    }

    const handleMakeChange = (e) => {
        setCar(c => ({...c, make: e.target.value}))
    }

    const handleModelChange = (e) => {
        setCar(c => ({...c, model: e.target.value}))
    }

    return (<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={(e) => handleYearChange(e)}/> <br/>
        <input type="text" value={car.make} onChange={(e) => handleMakeChange(e)} /><br/>
        <input type="text" value={car.model} onChange={(e) => handleModelChange(e)} />
    </div>)
}

export default UpdateObject;