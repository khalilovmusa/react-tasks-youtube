import { useState } from 'react';

const UpdateObjArr = () => {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = () => {

        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index))
    }

    const handleYearChange = (e) => {
        setCarYear(e.target.value)
    }

    const handleMakeChange = (e) => {
        setCarMake(e.target.value)
    }

    const handleModelChange = (e) => {
        setCarModel(e.target.value)
    }

    return(<div>
                <h2>List of Car Objects</h2>
                <ul>
                    {cars?.map((car, index) => {
                        return <li onClick={() => handleRemoveCar(index)} key={index} >Car: {car.year}, {car.make}, {car.model}</li>
                    })}
                </ul>
                <label htmlFor="year-input">Year: </label>
                <input name="year-input" type="number" value={carYear} onChange={handleYearChange}/>
                <br/>
                <br/>
                <label htmlFor="make-input">Make: </label>
                <input type="text" name="make-input" placeholder="Enter car make" value={carMake} onChange={handleMakeChange} />
                <br/>
                <br/>
                <label htmlFor="model-input" >Model: </label>
                <input type="text" name="model-input" placeholder="Enter car model" value={carModel} onChange={handleModelChange} />
                <br/>
                <br/>
                <button onClick={handleAddCar}>Add Car</button>
           </div>);
}

export default UpdateObjArr;